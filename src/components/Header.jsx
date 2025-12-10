import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'

function Header() {
  const { getCartCount } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

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

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
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

        {/* Right Actions */}
        <div className="flex items-center gap-4 z-50">
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
            className="md:hidden p-2 text-gray-500 hover:text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 gap-6 transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
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
