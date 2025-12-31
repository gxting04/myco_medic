import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { useCart } from '../context/CartContext'

function Cart() {
  const navigate = useNavigate()
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div>
        <Header />
        <div className='py-16 bg-white min-h-screen'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <svg className='w-24 h-24 mx-auto mb-6 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
            </svg>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Your Cart is Empty</h1>
            <p className='text-gray-600 mb-8'>Add some products to your cart to get started.</p>
            <Link 
              to='/products'
              className='inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg active:scale-[0.98]'
            >
              Browse Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className='py-16 bg-white min-h-screen'>
        <div className='max-w-6xl mx-auto px-6'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Shopping Cart</h1>
          
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Cart Items */}
            <div className='lg:col-span-2 space-y-4'>
              {cartItems.map(item => (
                <div key={item.id} className='bg-white border border-gray-200 rounded-lg p-6 flex gap-6'>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className='w-32 h-32 object-cover rounded-lg'
                  />
                  <div className='flex-1'>
                    <Link 
                      to={`/product/${item.id}`}
                      className='text-xl font-semibold text-gray-900 hover:text-primary transition-colors'
                    >
                      {item.name}
                    </Link>
                    {item.category && (
                      <p className='text-sm text-gray-500 mt-1'>{item.category}</p>
                    )}
                    <p className='text-2xl font-bold text-primary mt-2'>${item.price}</p>
                    
                    <div className='flex items-center gap-4 mt-4'>
                      <div className='flex items-center border-2 border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className='px-4 py-2 hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 text-gray-700 font-medium'
                        >
                          -
                        </button>
                        <span className='px-4 py-2 border-x-2 border-gray-300 font-medium'>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className='px-4 py-2 hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 text-gray-700 font-medium'
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className='text-red-600 hover:text-red-800 font-medium transition-all duration-200 hover:bg-red-50 px-3 py-1.5 rounded-md active:scale-95'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className='text-right'>
                    <p className='text-2xl font-bold text-gray-900'>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              
              <button
                onClick={clearCart}
                className='text-gray-600 hover:text-red-600 font-medium transition-all duration-200 hover:bg-red-50 px-4 py-2 rounded-md mt-4 active:scale-95'
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className='lg:col-span-1'>
              <div className='bg-gray-50 rounded-lg p-6 sticky top-24'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Order Summary</h2>
                
                <div className='space-y-4 mb-6'>
                  <div className='flex justify-between text-gray-700'>
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-gray-700'>
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className='border-t border-gray-300 pt-4 flex justify-between text-xl font-bold text-gray-900'>
                    <span>Total</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => navigate('/checkout')}
                  className='w-full bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-lg mb-4 shadow-md hover:shadow-lg active:scale-[0.98]'
                >
                  Proceed to Checkout
                </button>
                
                <Link
                  to='/products'
                  className='block text-center text-primary hover:text-primary/80 font-medium transition-colors'
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat phone='+60196649622' message='Hi, I want to inquire about my cart items' />
    </div>
  )
}

export default Cart

