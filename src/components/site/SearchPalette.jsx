import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CornerDownLeft, Search, X } from 'lucide-react'
import { useUI } from '@/context/UIContext'
import { getCatalogProducts, getNavGroups, getProductImage, getProductLabel, searchProducts } from '@/lib/catalog'
import { getProductPath } from '@/utils/productUrl'
import { useEscapeKey, useLockBodyScroll } from '@/lib/hooks'

const SUGGESTIONS = ['Endotracheal tube', 'Laryngoscope', 'Head pads', 'CPAP', 'Tracheostomy', 'Cleaning brush']

/**
 * Site-wide instant search. Opens from the header, from ⌘K / Ctrl+K, or by
 * pressing "/" anywhere outside a text field. Results update as you type and
 * can be walked with the arrow keys.
 */
function SearchPalette() {
  const { searchOpen, searchSeed, openSearch, closeSearch } = useUI()
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)

  const products = useMemo(() => getCatalogProducts(), [])
  const groups = useMemo(() => getNavGroups(), [])
  const results = useMemo(() => searchProducts(query, products, 8), [query, products])
  const total = useMemo(() => (query.trim() ? searchProducts(query, products).length : 0), [query, products])

  useLockBodyScroll(searchOpen)
  useEscapeKey(searchOpen, closeSearch)

  // Global shortcuts
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target?.tagName || '').toLowerCase()
      const typing = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target?.isContentEditable
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        searchOpen ? closeSearch() : openSearch()
      } else if (e.key === '/' && !typing && !searchOpen) {
        e.preventDefault()
        openSearch()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [searchOpen, openSearch, closeSearch])

  useEffect(() => {
    if (searchOpen) {
      setQuery(searchSeed || '')
      setActive(0)
      // after the enter animation has mounted the input
      const t = setTimeout(() => inputRef.current?.focus(), 20)
      return () => clearTimeout(t)
    }
  }, [searchOpen, searchSeed])

  useEffect(() => setActive(0), [query])

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${active}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [active])

  const go = (path) => {
    closeSearch()
    navigate(path)
  }

  const seeAll = () => {
    const q = query.trim()
    if (q) go(`/search?q=${encodeURIComponent(q)}`)
  }

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[active]) go(getProductPath(results[active]))
      else seeAll()
    }
  }

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center px-3 pt-[8vh] sm:px-6 sm:pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px]" onClick={closeSearch} aria-hidden />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search products"
            className="relative flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 border-b border-gray-100 px-4 sm:px-5">
              <Search className="h-5 w-5 shrink-0 text-gray-400" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                type="search"
                inputMode="search"
                enterKeyHint="search"
                placeholder="Search products, e.g. endotracheal tube"
                aria-label="Search products"
                aria-controls="search-results"
                aria-activedescendant={results[active] ? `search-opt-${results[active].id}` : undefined}
                className="h-14 w-full bg-transparent text-base text-gray-900 placeholder-gray-400 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    inputRef.current?.focus()
                  }}
                  className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <button
                type="button"
                onClick={closeSearch}
                className="hidden rounded-md border border-gray-200 px-1.5 py-0.5 text-[11px] font-medium text-gray-500 hover:bg-gray-50 sm:block"
              >
                Esc
              </button>
              <button type="button" onClick={closeSearch} className="p-1 text-gray-500 sm:hidden" aria-label="Close search">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              {!query.trim() ? (
                <div className="space-y-6 p-4 sm:p-5">
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Popular searches</p>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTIONS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => {
                            setQuery(s)
                            inputRef.current?.focus()
                          }}
                          className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-primary/40 hover:bg-primary-50 hover:text-primary"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Browse categories</p>
                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                      {groups.map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => go(`/products?groupId=${g.id}`)}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          <span className="truncate">{g.name}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-gray-300" aria-hidden />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="px-6 py-14 text-center">
                  <p className="text-sm font-medium text-gray-900">No products match “{query}”</p>
                  <p className="mt-1 text-sm text-gray-500">Try a shorter or more general term, or ask us directly.</p>
                </div>
              ) : (
                <ul id="search-results" ref={listRef} role="listbox" className="p-2">
                  {results.map((p, i) => (
                    <li key={p.id} role="option" id={`search-opt-${p.id}`} aria-selected={i === active} data-index={i}>
                      <button
                        type="button"
                        onMouseMove={() => setActive(i)}
                        onClick={() => go(getProductPath(p))}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                          i === active ? 'bg-gray-100' : ''
                        }`}
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white">
                          <img src={getProductImage(p)} alt="" loading="lazy" className="h-full w-full object-contain p-1" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-gray-900">{p.name}</span>
                          <span className="block truncate text-xs text-gray-500">{getProductLabel(p)}</span>
                        </span>
                        {i === active && <CornerDownLeft className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {query.trim() && total > 0 && (
              <button
                type="button"
                onClick={seeAll}
                className="flex items-center justify-between border-t border-gray-100 bg-gray-50/70 px-5 py-3 text-sm font-medium text-primary hover:bg-gray-50"
              >
                <span>
                  See all {total} result{total === 1 ? '' : 's'} for “{query.trim()}”
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SearchPalette
