import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getProductPath } from '@/utils/productUrl'
import { getProductImage } from '@/lib/catalog'

/**
 * Quote list — the site does not sell most lines online, so instead of a cart
 * visitors collect products and send one enquiry (WhatsApp or email) for all
 * of them. Persisted per browser so the list survives navigation and reloads.
 */
const STORAGE_KEY = 'myco_quote_list'
const QuoteContext = createContext(null)

function readStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((i) => i && i.id != null && i.name) : []
  } catch {
    return []
  }
}

export function QuoteProvider({ children }) {
  const [items, setItems] = useState(readStored)
  const [isOpen, setIsOpen] = useState(false)
  // Brief confirmation shown after an add, so a click never feels like it did nothing.
  const [lastAdded, setLastAdded] = useState(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* private mode / storage full — the list still works for this visit */
    }
  }, [items])

  // Keep tabs in sync when the list changes in another window.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) setItems(readStored())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  useEffect(() => {
    if (!lastAdded) return
    const t = setTimeout(() => setLastAdded(null), 2600)
    return () => clearTimeout(t)
  }, [lastAdded])

  const add = useCallback((product, qty = 1) => {
    if (!product) return
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: Math.min(9999, i.qty + qty) } : i))
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          path: getProductPath(product),
          image: getProductImage(product),
          qty
        }
      ]
    })
    setLastAdded({ id: product.id, name: product.name, at: Date.now() })
  }, [])

  const remove = useCallback((id) => setItems((prev) => prev.filter((i) => i.id !== id)), [])

  const setQty = useCallback((id, qty) => {
    const n = Math.max(1, Math.min(9999, Number.parseInt(qty, 10) || 1))
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: n } : i)))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(
    () => ({
      items,
      count: items.length,
      has: (id) => items.some((i) => i.id === id),
      add,
      remove,
      setQty,
      clear,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      lastAdded,
      dismissToast: () => setLastAdded(null)
    }),
    [items, add, remove, setQty, clear, isOpen, lastAdded]
  )

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error('useQuote must be used inside <QuoteProvider>')
  return ctx
}

/** Plain-text enquiry body shared by the WhatsApp and email actions. */
export function buildQuoteMessage(items, details = {}) {
  const lines = ['Hi Myco Medic, I would like a quotation for:', '']
  items.forEach((item, i) => {
    lines.push(`${i + 1}. ${item.name} — Qty: ${item.qty}`)
  })
  const extra = [
    details.name && `Name: ${details.name}`,
    details.organisation && `Hospital / organisation: ${details.organisation}`,
    details.phone && `Phone: ${details.phone}`,
    details.notes && `Notes: ${details.notes}`
  ].filter(Boolean)
  if (extra.length) lines.push('', ...extra)
  lines.push('', 'Thank you.')
  return lines.join('\n')
}
