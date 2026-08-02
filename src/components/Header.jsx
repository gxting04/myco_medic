import React, { useState, useEffect, useMemo } from 'react'
// Cart functionality hidden
// import { useCart } from '../context/CartContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingBag, Menu, X, Search, ChevronRight } from 'lucide-react'
import Data from '../shared/Data'
import { getProductPath } from '@/utils/productUrl'

function Header() {
  // Cart functionality hidden
  // const { getCartCount } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [hoveredGroupId, setHoveredGroupId] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  // Product groups for dropdown (exclude Medical Furniture, Medical Equipment, Procedure Packs)
  const dropdownGroups = useMemo(() => 
    Data.productGroups.filter(g => g.id !== 2 && g.id !== 5 && g.id !== 7),
    []
  )

  // All products for dropdown (exclude same groups)
  const allDropdownProducts = useMemo(() => {
    const saved = localStorage.getItem('myco_products')
    const products = saved ? JSON.parse(saved) : Data.initialProducts
    return products.filter(p => p.groupId !== 2 && p.groupId !== 5 && p.groupId !== 7)
  }, [])

  // Products to display - filtered by hovered group, or all when none hovered
  const displayedProducts = useMemo(() => {
    if (hoveredGroupId === null) return allDropdownProducts
    return allDropdownProducts.filter(p => p.groupId === hoveredGroupId)
  }, [allDropdownProducts, hoveredGroupId])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchOpen && !e.target.closest('header')) {
        setSearchOpen(false)
      }
    }
    if (searchOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [searchOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
      setSearchTerm('')
      setSearchOpen(false)
    }
  }

  useEffect(() => {
    if (!mobileMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 ${
        mobileMenuOpen ? 'z-[110]' : 'z-50'
      } ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50'
          : 'bg-white'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-24 md:h-28 flex items-center justify-between">
        <button
          type="button"
          className="md:hidden relative z-[60] flex-shrink-0 p-2.5 text-gray-500 hover:text-black transition-all duration-200 rounded-lg hover:bg-gray-100 active:scale-95"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        <Link
          to="/"
          className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 sm:gap-3 md:static md:left-auto md:top-auto md:translate-x-0 md:translate-y-0"
        >
          <img
            src="/Myco_Medic.png"
            alt="Myco Medic"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-8 z-50">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.name === 'Products' ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    setProductsDropdownOpen(true)
                    setHoveredGroupId(null)
                  }}
                  onMouseLeave={() => {
                    setProductsDropdownOpen(false)
                    setHoveredGroupId(null)
                  }}
                >
                  <Link
                    to={link.path}
                    className={`text-sm md:text-base font-medium tracking-wide transition-colors duration-200 flex items-center gap-1 ${
                      location.pathname === link.path || location.pathname.startsWith('/products')
                        ? 'text-black'
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {link.name}
                    <ChevronRight className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-90' : ''}`} />
                  </Link>

                  {/* Products Dropdown */}
                  {productsDropdownOpen && (
                    <div className="fixed left-0 right-0 top-24 md:top-28 z-50">
                      <div className="bg-white shadow-2xl border-y border-gray-200 overflow-hidden w-full px-4 sm:px-6 lg:px-8 max-h-[50vh] overflow-y-auto">
                        <div className="flex">
                          {/* Left - Categories */}
                          <div className="w-56 border-r border-gray-100 bg-gray-50/50 p-4">
                            <Link
                              to="/products"
                              className={`flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-white hover:shadow-sm transition-all font-medium group ${
                                hoveredGroupId === null ? 'bg-white shadow-sm text-primary' : 'text-gray-900'
                              }`}
                              onClick={() => setProductsDropdownOpen(false)}
                              onMouseEnter={() => setHoveredGroupId(null)}
                            >
                              All Products
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                            </Link>
                            {dropdownGroups.map((group) => (
                              <Link
                                key={group.id}
                                to={`/products?groupId=${group.id}`}
                                className={`flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-white hover:shadow-sm transition-all group ${
                                  hoveredGroupId === group.id ? 'bg-white shadow-sm text-primary' : 'text-gray-700 hover:text-primary'
                                }`}
                                onClick={() => setProductsDropdownOpen(false)}
                                onMouseEnter={() => setHoveredGroupId(group.id)}
                              >
                                <span className="text-sm truncate">{group.name}</span>
                                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-primary" />
                              </Link>
                            ))}
                          </div>

                          {/* Right - Products in columns (filtered by hovered group) */}
                          <div className="flex-1 p-6">
                            <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                              {displayedProducts.length > 0 ? (
                                displayedProducts.map((product) => (
                                  <Link
                                    key={product.id}
                                    to={getProductPath(product)}
                                    className="text-sm text-gray-600 hover:text-primary py-1.5 truncate transition-colors flex items-center gap-1 group"
                                    onClick={() => setProductsDropdownOpen(false)}
                                  >
                                    <span className="truncate">{product.name}</span>
                                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </Link>
                                ))
                              ) : (
                                <p className="col-span-3 text-sm text-gray-400 py-4">No products in this group</p>
                              )}
                            </div>
                            <Link
                              to={hoveredGroupId ? `/products?groupId=${hoveredGroupId}` : '/products'}
                              className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:text-primary/80"
                              onClick={() => setProductsDropdownOpen(false)}
                            >
                              {hoveredGroupId ? 'View All in Group' : 'View All Products'}
                              <ChevronRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm md:text-base font-medium tracking-wide transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-black'
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Search Button - Desktop */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="hidden md:flex p-2.5 text-gray-500 hover:text-black transition-colors"
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>

          <div className="md:hidden w-11 flex-shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Search Bar - Desktop Dropdown */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <form onSubmit={handleSearch} className="flex gap-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products..."
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false)
                  setSearchTerm('')
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu — fixed layer above page + WhatsApp (z-50).
          Height is set explicitly instead of with bottom-0: the header's backdrop-blur
          makes it the containing block for fixed children, so bottom-0 would resolve
          against the 6rem header and collapse this layer to 0px. */}
      {mobileMenuOpen && (
        <div className="fixed left-0 right-0 top-24 h-[calc(100dvh-6rem)] z-[100] md:hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-black/50 pointer-events-auto"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <aside
            className="absolute left-0 top-0 bottom-0 w-[min(20rem,88vw)] max-w-full bg-white shadow-2xl flex flex-col pointer-events-auto border-r border-gray-100"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex h-14 shrink-0 items-center justify-between gap-2 px-4 border-b border-gray-100 bg-white">
              <span className="text-sm font-semibold text-gray-900">Menu</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="shrink-0 p-4 border-b border-gray-100 bg-white">
              <form onSubmit={handleSearch}>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="flex-1 min-w-0 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm bg-white text-gray-900"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-3 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>

            <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-4 pb-8 bg-white">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.name === 'Products' ? (
                    <div key={link.name} className="space-y-2 pb-4">
                      <Link
                        to="/products"
                        className="text-lg font-semibold text-gray-900 hover:text-primary py-2 block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Products
                      </Link>
                      <div className="pl-3 space-y-1 border-l-2 border-gray-200">
                        <Link
                          to="/products"
                          className="block text-sm text-gray-700 hover:text-primary py-1.5"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          All Products
                        </Link>
                        {dropdownGroups.map((group) => (
                          <Link
                            key={group.id}
                            to={`/products?groupId=${group.id}`}
                            className="block text-sm text-gray-700 hover:text-primary py-1.5 leading-snug"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {group.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-lg font-semibold text-gray-900 hover:text-primary py-3 border-b border-gray-100 last:border-0"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}

export default Header
