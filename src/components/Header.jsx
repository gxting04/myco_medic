import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, ClipboardList, Mail, Menu, Phone, Search, X } from 'lucide-react'
import { getCatalogProducts, getNavGroups, productInGroup } from '@/lib/catalog'
import { getProductPath } from '@/utils/productUrl'
import { useQuote } from '@/context/QuoteContext'
import { useUI } from '@/context/UIContext'
import { COMPANY } from '@/lib/site'
import { useEscapeKey, useLockBodyScroll } from '@/lib/hooks'

const NAV = [
  { name: 'Products', path: '/products', mega: true },
  { name: 'About', path: '/about' },
  { name: 'Careers', path: '/career' },
  { name: 'Contact', path: '/contact' }
]

const MEGA_LIMIT = 18

function QuoteButton({ className = '' }) {
  const { count, open } = useQuote()
  return (
    <button
      type="button"
      onClick={open}
      className={`relative rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 ${className}`}
      aria-label={`Open quote list${count ? ` (${count} item${count === 1 ? '' : 's'})` : ''}`}
    >
      <ClipboardList className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-white">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  )
}

function MegaMenu({ groups, products, onNavigate }) {
  const [activeGroup, setActiveGroup] = useState(null)
  const shown = useMemo(() => {
    const list = activeGroup ? products.filter((p) => productInGroup(p, activeGroup.id)) : products
    return list.slice(0, MEGA_LIMIT)
  }, [products, activeGroup])
  const totalInGroup = activeGroup ? products.filter((p) => productInGroup(p, activeGroup.id)).length : products.length

  return (
    <div className="container-page grid grid-cols-[17rem,1fr] gap-8 py-6">
      <ul className="border-r border-gray-100 pr-4">
        <li>
          <Link
            to="/products"
            onClick={onNavigate}
            onMouseEnter={() => setActiveGroup(null)}
            onFocus={() => setActiveGroup(null)}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              activeGroup === null ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            All products
            <span className="text-xs font-normal text-gray-400">{products.length}</span>
          </Link>
        </li>
        {groups.map((g) => (
          <li key={g.id}>
            <Link
              to={`/products?groupId=${g.id}`}
              onClick={onNavigate}
              onMouseEnter={() => setActiveGroup(g)}
              onFocus={() => setActiveGroup(g)}
              className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                activeGroup?.id === g.id ? 'bg-gray-100 font-medium text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="truncate">{g.name}</span>
              <ArrowRight className={`h-3.5 w-3.5 shrink-0 transition-opacity ${activeGroup?.id === g.id ? 'opacity-60' : 'opacity-0'}`} />
            </Link>
          </li>
        ))}
      </ul>

      <div className="min-w-0">
        <div className="mb-3 flex items-baseline justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">{activeGroup ? activeGroup.name : 'Featured across the catalogue'}</p>
          <Link
            to={activeGroup ? `/products?groupId=${activeGroup.id}` : '/products'}
            onClick={onNavigate}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-700"
          >
            View all {totalInGroup}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        {shown.length ? (
          <ul className="grid grid-cols-3 gap-x-6">
            {shown.map((p) => (
              <li key={p.id}>
                <Link to={getProductPath(p)} onClick={onNavigate} className="block truncate py-1.5 text-sm text-gray-600 transition-colors hover:text-primary">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-4 text-sm text-gray-400">No products in this group yet.</p>
        )}
      </div>
    </div>
  )
}

function Header() {
  const location = useLocation()
  const { openSearch } = useUI()
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const closeTimer = useRef(null)
  const hoverOpenedAt = useRef(0)
  const headerRef = useRef(null)

  const groups = useMemo(() => getNavGroups(), [])
  const megaProducts = useMemo(() => getCatalogProducts().filter((p) => groups.some((g) => productInGroup(p, g.id))), [groups])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close every overlay on navigation.
  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [location.pathname, location.search])

  useLockBodyScroll(mobileOpen)
  useEscapeKey(megaOpen || mobileOpen, () => {
    setMegaOpen(false)
    setMobileOpen(false)
  })

  // Small hover-intent delay so the panel does not flicker shut while the
  // pointer crosses the gap between the trigger and the panel.
  const openMega = () => {
    clearTimeout(closeTimer.current)
    setMegaOpen((open) => {
      if (!open) hoverOpenedAt.current = Date.now()
      return true
    })
  }
  // A click that lands right after hover opened the panel must not close it again.
  const toggleMega = () => setMegaOpen((open) => (Date.now() - hoverOpenedAt.current < 500 ? true : !open))

  // Tap/click outside closes the panel (touch tablets never fire mouseleave).
  useEffect(() => {
    if (!megaOpen) return
    const onDown = (e) => {
      if (!headerRef.current?.contains(e.target)) setMegaOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [megaOpen])
  const closeMegaSoon = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  const isActive = (path) => (path === '/products' ? location.pathname.startsWith('/product') : location.pathname === path)

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-[100] w-full border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-200 supports-[backdrop-filter]:bg-white/80 ${
        scrolled || megaOpen ? 'border-gray-200 shadow-[0_1px_0_rgba(15,23,42,0.02)]' : 'border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Myco Medic — home">
          <img src="/Myco_Medic.png" alt="Myco Medic" width="662" height="377" className="h-10 w-auto lg:h-12" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((item) =>
            item.mega ? (
              <div key={item.name} onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
                <button
                  type="button"
                  onClick={toggleMega}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path) || megaOpen ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive: active }) =>
                  `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`
                }
              >
                {({ isActive: active }) => (
                  <>
                    {item.name}
                    {active && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-primary lg:-bottom-[17px]" />}
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => openSearch()}
            className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-gray-50/80 py-1.5 pl-3 pr-1.5 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:bg-white lg:flex"
          >
            <Search className="h-4 w-4" />
            <span className="w-28 text-left">Search…</span>
            <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-sans text-[10px] font-medium text-gray-400">⌘K</kbd>
          </button>
          <button
            type="button"
            onClick={() => openSearch()}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 lg:hidden"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </button>
          <QuoteButton />
          <Link to="/contact" className="btn-primary ml-1 hidden px-4 py-2 md:inline-flex">
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            className="absolute inset-x-0 top-full hidden border-b border-gray-200 bg-white shadow-[0_12px_32px_-12px_rgba(15,23,42,0.12)] md:block"
            onMouseEnter={openMega}
            onMouseLeave={closeMegaSoon}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            <MegaMenu groups={groups} products={megaProducts} onNavigate={() => setMegaOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer — portalled to <body>: the header's backdrop-filter makes it
          the containing block for fixed descendants, which would clip the drawer. */}
      {typeof document !== 'undefined' && createPortal(
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="fixed inset-0 z-[110] h-[100dvh] md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-gray-900/40" onClick={() => setMobileOpen(false)} aria-hidden />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col bg-white shadow-2xl"
              style={{ paddingTop: 'env(safe-area-inset-top)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-gray-100 px-4">
                <img src="/Myco_Medic.png" alt="Myco Medic" className="h-9 w-auto" />
                <button type="button" onClick={() => setMobileOpen(false)} className="rounded-lg p-2 text-gray-600 hover:bg-gray-100" aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="px-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    openSearch()
                  }}
                  className="flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-left text-sm text-gray-500"
                >
                  <Search className="h-4 w-4" />
                  Search products
                </button>
              </div>

              <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3" aria-label="Mobile">
                <Link to="/" className="block border-b border-gray-100 py-3.5 text-base font-medium text-gray-900">
                  Home
                </Link>
                <div className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen((o) => !o)}
                    aria-expanded={mobileProductsOpen}
                    className="flex w-full items-center justify-between py-3.5 text-base font-medium text-gray-900"
                  >
                    Products
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileProductsOpen && (
                    <ul className="-mt-1 space-y-0.5 pb-3">
                      <li>
                        <Link to="/products" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
                          All products
                        </Link>
                      </li>
                      {groups.map((g) => (
                        <li key={g.id}>
                          <Link to={`/products?groupId=${g.id}`} className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                            {g.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {NAV.filter((n) => !n.mega).map((item) => (
                  <Link key={item.name} to={item.path} className="block border-b border-gray-100 py-3.5 text-base font-medium text-gray-900">
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="space-y-2 border-t border-gray-100 p-4" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
                <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-gray-400" /> {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.salesEmail}`} className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 text-gray-400" /> {COMPANY.salesEmail}
                </a>
                <Link to="/contact" className="btn-primary mt-2 w-full">
                  Get in touch
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </header>
  )
}

export default Header
