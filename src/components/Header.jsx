import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'

function Header() {
  const { getCartCount } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

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
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <img
            src="/Myco_Medic.png"
            alt="Myco Medic"
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            Myco Medic
          </span>
        </Link>

        {/* Right Side - Navigation + Actions */}
        <div className="flex items-center gap-4 md:gap-8 z-50">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-black'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Button - Desktop */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="hidden md:flex p-2 text-gray-500 hover:text-black transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart + Mobile Menu */}
          <Link
            to="/cart"
            className="relative p-2 text-gray-500 hover:text-black transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {getCartCount() > 0 && (
              <span className="absolute top-1 right-0 bg-primary text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-500 hover:text-black transition-all duration-200 rounded-lg hover:bg-gray-100 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Search Bar - Desktop Dropdown */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
          <div className="max-w-7xl mx-auto px-6 py-4">
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 gap-6 transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>

        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-2xl font-medium text-gray-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
