import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ClipboardList, Mail, Minus, Plus, Trash2, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { buildQuoteMessage, useQuote } from '@/context/QuoteContext'
import { COMPANY, mailtoLink, whatsappLink } from '@/lib/site'
import { useEscapeKey, useLockBodyScroll } from '@/lib/hooks'

export function QuoteToast() {
  const { lastAdded, open, dismissToast } = useQuote()
  return (
    <div className="pointer-events-none fixed inset-x-0 top-20 z-[150] flex justify-center px-4" aria-live="polite">
      <AnimatePresence>
        {lastAdded && (
          <motion.div
            key={lastAdded.at}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto flex max-w-md items-center gap-3 rounded-xl border border-gray-200 bg-white py-2.5 pl-3 pr-2 text-sm shadow-lg"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            <span className="min-w-0 truncate text-gray-700">
              <span className="font-medium text-gray-900">{lastAdded.name}</span> added to quote list
            </span>
            <button
              type="button"
              onClick={() => {
                dismissToast()
                open()
              }}
              className="shrink-0 rounded-lg px-2.5 py-1 font-semibold text-primary hover:bg-primary-50"
            >
              View
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function QuoteDrawer() {
  const { items, isOpen, close, remove, setQty, clear } = useQuote()
  const [details, setDetails] = useState({ name: '', organisation: '', phone: '', notes: '' })
  const [confirmClear, setConfirmClear] = useState(false)

  useLockBodyScroll(isOpen)
  useEscapeKey(isOpen, close)

  const message = buildQuoteMessage(items, details)
  const update = (e) => setDetails((d) => ({ ...d, [e.target.name]: e.target.value }))

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[180]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-gray-900/40" onClick={close} aria-hidden />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div>
                <h2 id="quote-title" className="text-base font-semibold text-gray-900">
                  Quote list
                </h2>
                <p className="text-xs text-gray-500">
                  {items.length} product{items.length === 1 ? '' : 's'} · one enquiry for everything
                </p>
              </div>
              <button type="button" onClick={close} className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900" aria-label="Close quote list">
                <X className="h-5 w-5" />
              </button>
            </header>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <ClipboardList className="h-6 w-6" />
                </span>
                <p className="font-medium text-gray-900">Your quote list is empty</p>
                <p className="mt-1 text-sm text-gray-500">
                  Add products from the catalogue, then send us one enquiry for everything you need.
                </p>
                <Link to="/products" onClick={close} className="btn-primary mt-6">
                  Browse products
                </Link>
              </div>
            ) : (
              <>
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                  <ul className="divide-y divide-gray-100 px-5">
                    {items.map((item) => (
                      <li key={item.id} className="flex gap-3 py-4">
                        <Link
                          to={item.path}
                          onClick={close}
                          className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white"
                        >
                          <img src={item.image} alt="" className="h-full w-full object-contain p-1" />
                        </Link>
                        <div className="min-w-0 flex-1">
                          <Link to={item.path} onClick={close} className="line-clamp-2 text-sm font-medium text-gray-900 hover:text-primary">
                            {item.name}
                          </Link>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center rounded-lg border border-gray-200">
                              <button
                                type="button"
                                onClick={() => setQty(item.id, item.qty - 1)}
                                disabled={item.qty <= 1}
                                className="p-1.5 text-gray-500 hover:text-gray-900 disabled:opacity-30"
                                aria-label={`Decrease quantity of ${item.name}`}
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <input
                                type="number"
                                min="1"
                                inputMode="numeric"
                                value={item.qty}
                                onChange={(e) => setQty(item.id, e.target.value)}
                                className="w-12 border-x border-gray-200 bg-transparent py-1 text-center text-sm font-medium text-gray-900 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
                                aria-label={`Quantity of ${item.name}`}
                              />
                              <button
                                type="button"
                                onClick={() => setQty(item.id, item.qty + 1)}
                                className="p-1.5 text-gray-500 hover:text-gray-900"
                                aria-label={`Increase quantity of ${item.name}`}
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => remove(item.id)}
                              className="rounded-md p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-600"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 border-t border-gray-100 bg-gray-50/60 px-5 py-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Your details (optional)</p>
                    <div className="grid grid-cols-2 gap-3">
                      <input name="name" value={details.name} onChange={update} placeholder="Name" className="input py-2.5" autoComplete="name" />
                      <input name="phone" value={details.phone} onChange={update} placeholder="Phone" className="input py-2.5" autoComplete="tel" inputMode="tel" />
                    </div>
                    <input
                      name="organisation"
                      value={details.organisation}
                      onChange={update}
                      placeholder="Hospital / clinic / organisation"
                      className="input py-2.5"
                      autoComplete="organization"
                    />
                    <textarea name="notes" value={details.notes} onChange={update} rows={2} placeholder="Notes — sizes, delivery date…" className="input resize-none py-2.5" />
                    <div className="flex justify-end">
                      {confirmClear ? (
                        <span className="flex items-center gap-2 text-xs">
                          <span className="text-gray-500">Remove all items?</span>
                          <button
                            type="button"
                            onClick={() => {
                              clear()
                              setConfirmClear(false)
                            }}
                            className="font-semibold text-red-600 hover:underline"
                          >
                            Clear
                          </button>
                          <button type="button" onClick={() => setConfirmClear(false)} className="text-gray-500 hover:underline">
                            Cancel
                          </button>
                        </span>
                      ) : (
                        <button type="button" onClick={() => setConfirmClear(true)} className="text-xs text-gray-500 hover:text-red-600 hover:underline">
                          Clear list
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <footer className="space-y-2 border-t border-gray-100 p-5" style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
                  <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full py-3.5">
                    <FaWhatsapp className="h-4 w-4" />
                    Send enquiry via WhatsApp
                  </a>
                  <a href={mailtoLink(COMPANY.salesEmail, `Quotation request — ${items.length} product${items.length === 1 ? '' : 's'}`, message)} className="btn-outline w-full py-3.5">
                    <Mail className="h-4 w-4" />
                    Send via email
                  </a>
                </footer>
              </>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default QuoteDrawer
