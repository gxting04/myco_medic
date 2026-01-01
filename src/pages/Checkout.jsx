import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

function Checkout() {
  const navigate = useNavigate()
  const { cartItems, getCartTotal, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    state: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    try {
      // Create Stripe Checkout Session
      const response = await fetch('http://localhost:3001/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems,
          customerInfo: formData,
          total: getCartTotal()
        }),
      })

      const session = await response.json()

      if (session.error) {
        setError(session.error)
        setLoading(false)
        return
      }

      if (session.url) {
        window.location.href = session.url
      } else {
        setError('Failed to create checkout session')
        setLoading(false)
      }
    } catch (err) {
      console.error('Error:', err)
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  const handleDemoPayment = () => {
    setLoading(true)
    setTimeout(() => {
      alert('Payment simulation successful! In production, this will integrate with Stripe for GrabPay and other payment methods.')
      clearCart()
      navigate('/')
      setLoading(false)
    }, 2000)
  }

  if (cartItems.length === 0) {
    navigate('/cart')
    return null
  }

  return (
    <div>
      <Header />
      <div className='py-16 bg-gray-50 min-h-screen'>
        <div className='max-w-6xl mx-auto px-6'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Checkout</h1>
          
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Checkout Form */}
            <div className='lg:col-span-2'>
              <div className='bg-white rounded-lg p-8 shadow-sm'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Customer Information</h2>
                
                {error && (
                  <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6'>
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label className='block text-gray-700 font-medium mb-2'>
                      Full Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent'
                      required
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>
                        Email <span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent'
                        required
                      />
                    </div>

                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>
                        Phone <span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent'
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-gray-700 font-medium mb-2'>
                      Address <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      name='address'
                      value={formData.address}
                      onChange={handleInputChange}
                      className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent'
                      required
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>City</label>
                      <input
                        type='text'
                        name='city'
                        value={formData.city}
                        onChange={handleInputChange}
                        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent'
                      />
                    </div>

                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>Postcode</label>
                      <input
                        type='text'
                        name='postcode'
                        value={formData.postcode}
                        onChange={handleInputChange}
                        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent'
                      />
                    </div>

                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>State</label>
                      <input
                        type='text'
                        name='state'
                        value={formData.state}
                        onChange={handleInputChange}
                        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent'
                      />
                    </div>
                  </div>

                  <div className='border-t border-gray-200 pt-6 mt-6'>
                    <h3 className='text-xl font-bold text-gray-900 mb-4'>Payment Method</h3>
                    <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4'>
                      <div className='flex items-center gap-3'>
                        <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' />
                        </svg>
                        <div>
                          <p className='font-semibold text-gray-900'>GrabPay & Multiple Payment Options</p>
                          <p className='text-sm text-gray-600'>Pay securely with GrabPay, Credit Card, or Online Banking via Stripe</p>
                        </div>
                      </div>
                    </div>
                    <p className='text-sm text-gray-600 mb-4'>
                      Supported: GrabPay, Credit Cards, Debit Cards, FPX Online Banking
                    </p>
                  </div>

                  <div className='space-y-4'>
                    {/* For demo - remove this button in production */}
                    <button
                      type='button'
                      onClick={handleDemoPayment}
                      disabled={loading}
                      className='w-full bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-all duration-200 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-[0.98] disabled:active:scale-100'
                    >
                      {loading ? (
                        <span className='flex items-center justify-center gap-2'>
                          <svg className='animate-spin w-5 h-5' fill='none' viewBox='0 0 24 24'>
                            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                            <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Demo Payment (For Testing)'
                      )}
                    </button>

                    <button
                      type='submit'
                      disabled={loading}
                      className='w-full bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-[0.98] disabled:active:scale-100'
                    >
                      {loading ? (
                        <span className='flex items-center justify-center gap-2'>
                          <svg className='animate-spin w-5 h-5' fill='none' viewBox='0 0 24 24'>
                            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                            <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Pay with Stripe (GrabPay / Card / FPX)'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className='lg:col-span-1'>
              <div className='bg-white rounded-lg p-6 shadow-sm sticky top-24'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Order Summary</h2>
                
                <div className='space-y-4 mb-6 max-h-96 overflow-y-auto'>
                  {cartItems.map(item => (
                    <div key={item.id} className='flex gap-3'>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className='w-16 h-16 object-cover rounded-lg'
                      />
                      <div className='flex-1'>
                        <p className='font-semibold text-gray-900 text-sm'>{item.name}</p>
                        <p className='text-sm text-gray-600'>Qty: {item.quantity}</p>
                        <p className='text-sm font-bold text-primary'>RM{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className='border-t border-gray-200 pt-4 space-y-3'>
                  <div className='flex justify-between text-gray-700'>
                    <span>Subtotal</span>
                    <span>RM{getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-gray-700'>
                    <span>Shipping</span>
                    <span>TBD</span>
                  </div>
                  <div className='border-t border-gray-200 pt-3 flex justify-between text-xl font-bold text-gray-900'>
                    <span>Total</span>
                    <span>RM{getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout

