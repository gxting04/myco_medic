import React, { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import Data from '../shared/Data'
import { useCart } from '../context/CartContext'

function ProductDetailDefault({ product }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  // Get group information if product has no category
  const group = useMemo(() => {
    if (product.groupId && !product.category) {
      return Data.productGroups.find(g => g.id === product.groupId)
    }
    return null
  }, [product.groupId, product.category])

  // Determine if product belongs to a category or group
  const hasCategory = product.category !== null && product.category !== undefined
  const displayName = hasCategory ? product.category : (group?.name || 'Products')
  const backLink = hasCategory 
    ? `/products/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`
    : (group ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}` : '/products')

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    addToCart(product, quantity)
    navigate('/checkout')
  }
  return (
    <div>
      <Header/>
      
      <div className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Breadcrumb */}
          <nav className='mb-8'>
            <div className='flex items-center space-x-2 text-sm text-gray-500'>
              <Link to='/' className='hover:text-primary'>Home</Link>
              <span>›</span>
              <Link to='/products' className='hover:text-primary'>Products</Link>
              {displayName && (
                <>
                  <span>›</span>
                  <Link 
                    to={backLink}
                    className='hover:text-primary'
                  >
                    {displayName}
                  </Link>
                </>
              )}
              <span>›</span>
              <span className='text-gray-900 font-medium'>{product.name}</span>
            </div>
          </nav>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Product Image */}
            <div className='space-y-4'>
              <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className='w-full h-96 lg:h-[500px] object-cover'
                />
                {(hasCategory || group) && (
                  <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1'>
                    <span className='text-sm font-medium text-gray-700'>{displayName}</span>
                  </div>
                )}
              </div>
              
              {/* Additional Images Placeholder */}
              <div className='grid grid-cols-3 gap-4'>
                <div className='aspect-square bg-gray-100 rounded-lg flex items-center justify-center'>
                  <span className='text-gray-400 text-sm'>Image 2</span>
                </div>
                <div className='aspect-square bg-gray-100 rounded-lg flex items-center justify-center'>
                  <span className='text-gray-400 text-sm'>Image 3</span>
                </div>
                <div className='aspect-square bg-gray-100 rounded-lg flex items-center justify-center'>
                  <span className='text-gray-400 text-sm'>Image 4</span>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className='space-y-8'>
              <div>
                <h1 className='text-4xl font-bold text-gray-900 mb-4'>{product.name}</h1>
                {displayName && (
                  <p className='text-xl text-gray-600 mb-6'>{displayName} Equipment</p>
                )}
                <div className='text-4xl font-bold text-primary mb-6'>${product.price}</div>
              </div>

              {/* Quantity Selector */}
              <div className='flex items-center gap-4'>
                <label className='text-gray-700 font-medium'>Quantity:</label>
                <div className='flex items-center border border-gray-300 rounded-lg'>
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className='px-4 py-2 hover:bg-gray-100 transition-colors'
                  >
                    -
                  </button>
                  <input 
                    type='number' 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className='w-16 text-center border-x border-gray-300 py-2'
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className='px-4 py-2 hover:bg-gray-100 transition-colors'
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <button 
                  onClick={handleAddToCart}
                  className={`${addedToCart ? 'bg-green-600' : 'bg-primary'} text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg flex items-center justify-center gap-2`}
                >
                  {addedToCart ? (
                    <>
                      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                      </svg>
                      Added to Cart
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
                <button 
                  onClick={handleBuyNow}
                  className='bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg'
                >
                  Buy Now
                </button>
                <a 
                  href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium text-lg text-center'
                >
                  Contact on WhatsApp
                </a>
              </div>

              {/* Specifications */}
              <div className='bg-gray-50 rounded-2xl p-8'>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>Product Specifications</h3>
                <div className='space-y-4'>
                  {displayName && (
                    <div className='flex justify-between py-3 border-b border-gray-200'>
                      <span className='font-medium text-gray-700'>{hasCategory ? 'Category' : 'Group'}</span>
                      <span className='text-gray-900'>{displayName}</span>
                    </div>
                  )}
                  <div className='flex justify-between py-3 border-b border-gray-200'>
                    <span className='font-medium text-gray-700'>Quality Standard</span>
                    <span className='text-gray-900'>Medical Grade</span>
                  </div>
                  <div className='flex justify-between py-3 border-b border-gray-200'>
                    <span className='font-medium text-gray-700'>Warranty</span>
                    <span className='text-gray-900'>1 Year Manufacturer</span>
                  </div>
                  <div className='flex justify-between py-3 border-b border-gray-200'>
                    <span className='font-medium text-gray-700'>Delivery</span>
                    <span className='text-gray-900'>2-5 Business Days</span>
                  </div>
                  <div className='flex justify-between py-3 border-b border-gray-200'>
                    <span className='font-medium text-gray-700'>Support</span>
                    <span className='text-gray-900'>24/7 Technical Support</span>
                  </div>
                  <div className='flex justify-between py-3'>
                    <span className='font-medium text-gray-700'>Certification</span>
                    <span className='text-gray-900'>ISO 13485 Certified</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>Key Features</h3>
                <ul className='space-y-3'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <span className='text-gray-700'>High-quality materials and construction</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <span className='text-gray-700'>Clinically tested and approved</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <span className='text-gray-700'>Easy to use and maintain</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <span className='text-gray-700'>Comprehensive training provided</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <span className='text-gray-700'>Fast delivery across Malaysia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back Navigation */}
          <div className='mt-12 pt-8 border-t border-gray-200'>
            <Link 
              to={backLink}
              className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors'
            >
              <svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
              Back to {displayName} {hasCategory ? 'Products' : ''}
            </Link>
          </div>
        </div>
      </div>
      
      <Footer/>
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default ProductDetailDefault

