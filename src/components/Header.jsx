import React, { useState, useEffect, useMemo } from 'react'
// Cart functionality hidden
// import { useCart } from '../context/CartContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingBag, Menu, X, Search, ChevronRight } from 'lucide-react'
import Data from '../shared/Data'

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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-24 md:h-28 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 z-50">
          <img
            src="/Myco_Medic.png"
            alt="Myco Medic"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
          />
        </Link>

        {/* Right Side - Navigation + Actions */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8 z-50">
          {/* Desktop Navigation */}
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
                                    to={`/product/${product.id}`}
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

          {/* Cart icon hidden */}
          {/* <Link
            to="/cart"
            className="relative p-2.5 text-gray-500 hover:text-black transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="w-6 h-6" />
            {getCartCount() > 0 && (
              <span className="absolute top-1 right-0 bg-primary text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link> */}
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2.5 text-gray-500 hover:text-black transition-all duration-200 rounded-lg hover:bg-gray-100 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
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

      {/* Mobile Menu - Slides from left */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Side menu */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white z-50 flex flex-col pt-20 px-6 gap-6 transition-transform duration-300 md:hidden shadow-xl ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-primary text-white rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Navigation Links */}
            {navLinks.map((link) => (
              link.name === 'Products' ? (
                <div key={link.name} className="space-y-2">
                  <Link
                    to="/products"
                    className="text-xl font-medium text-gray-900 hover:text-primary transition-colors py-2 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <div className="pl-4 space-y-1 border-l-2 border-gray-200">
                    <Link
                      to="/products"
                      className="block text-base text-gray-600 hover:text-primary py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      All Products
                    </Link>
                    {dropdownGroups.map((group) => (
                      <Link
                        key={group.id}
                        to={`/products?groupId=${group.id}`}
                        className="block text-base text-gray-600 hover:text-primary py-1"
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
                  className="text-xl font-medium text-gray-900 hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </>
      )}
    </header>
  )
}

export default Header
