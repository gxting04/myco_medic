import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

function Success() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <div>
      <Header />
      <div className='min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6'>
        <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center'>
          <div className='mb-6'>
            <div className='mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center'>
              <svg 
                className='w-10 h-10 text-green-600' 
                fill='none' 
                stroke='currentColor' 
                viewBox='0 0 24 24'
              >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth={2} 
                  d='M5 13l4 4L19 7' 
                />
              </svg>
            </div>
          </div>

          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            Payment Successful!
          </h1>
          
          <p className='text-gray-600 mb-2'>
            Thank you for your order. Your payment has been processed successfully.
          </p>
          
          {sessionId && (
            <p className='text-sm text-gray-500 mb-6'>
              Session ID: {sessionId.substring(0, 20)}...
            </p>
          )}

          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
            <p className='text-sm text-gray-700'>
              You will receive an order confirmation email shortly with your order details and tracking information.
            </p>
          </div>

          <div className='space-y-3'>
            <button
              onClick={() => navigate('/')}
              className='w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium'
            >
              Continue Shopping
            </button>
            
            <button
              onClick={() => navigate('/products')}
              className='w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium'
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Success

