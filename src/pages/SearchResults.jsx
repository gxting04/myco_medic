import React, { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Data from '../shared/Data'
import { isPurchasableProduct } from '@/utils/purchasableProducts'

function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchTerm, setSearchTerm] = useState(query)

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return []

    const saved = localStorage.getItem('myco_products')
    const allProducts = saved ? JSON.parse(saved) : Data.initialProducts
    
    const lowerQuery = query.toLowerCase().trim()
    
    return allProducts.filter(product => {
      // Exclude Medical Furniture products (groupId: 7)
      if (product.groupId === 7) return false
      
      // Search in product name
      const nameMatch = product.name?.toLowerCase().includes(lowerQuery)
      
      // Search in category
      const categoryMatch = product.category?.toLowerCase().includes(lowerQuery)
      
      // Search in group name
      const group = Data.productGroups.find(g => g.id === product.groupId)
      const groupMatch = group?.name.toLowerCase().includes(lowerQuery)
      
      // Search in description (if available)
      const descMatch = product.description?.toLowerCase().includes(lowerQuery)
      
      return nameMatch || categoryMatch || groupMatch || descMatch
    })
  }, [query])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm.trim())}`
    }
  }

  return (
    <div>
      <Header />
      
      <div className='pt-24 md:pt-32 pb-8 md:pb-16 bg-white min-h-screen'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          {/* Search Header */}
          <div className='mb-8 md:mb-12'>
            <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 md:mb-6'>Search Results</h1>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className='max-w-2xl'>
              <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
                <input
                  type='text'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder='Search for products...'
                  className='flex-1 px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary text-base sm:text-lg'
                />
                <button
                  type='submit'
                  className='px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                  </svg>
                  Search
                </button>
              </div>
            </form>

            {query && (
              <p className='mt-4 text-gray-600'>
                {filteredProducts.length > 0 ? (
                  <>Found <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'} for "<strong>{query}</strong>"</>
                ) : (
                  <>No products found for "<strong>{query}</strong>"</>
                )}
              </p>
            )}
          </div>

          {/* Search Results */}
          {query ? (
            filteredProducts.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
                {filteredProducts.map((product) => {
                  const group = Data.productGroups.find(g => g.id === product.groupId)
                  return (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className='group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden flex flex-col'
                    >
                      <div className='relative overflow-hidden bg-gray-50 p-6'>
                        <img
                          src={product.image}
                          alt={product.name}
                          className='w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
                      </div>
                      
                      <div className='p-6 flex flex-col flex-1'>
                        <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2'>
                          {product.name}
                        </h3>
                        <div className='mt-auto space-y-2'>
                          {product.category && (
                            <p className='text-sm text-gray-500'>{product.category}</p>
                          )}
                          {group && (
                            <p className='text-xs text-primary font-medium'>{group.name}</p>
                          )}
                          {isPurchasableProduct(product) ? (
                            <p className='text-2xl font-bold text-primary'>RM{product.price.toFixed(2)}</p>
                          ) : (
                            <p className='text-sm text-gray-500'>Contact us for pricing</p>
                          )}
                        </div>
                        
                        <div className='mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity'>
                          <span className='text-sm font-medium mr-2'>View Details</span>
                          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className='text-center py-16 bg-gray-50 rounded-2xl'>
                <div className='w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center'>
                  <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>No Products Found</h3>
                <p className='text-gray-600 mb-8 max-w-md mx-auto'>
                  We couldn't find any products matching "<strong>{query}</strong>". Try different keywords or browse our product categories.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link 
                    to='/products'
                    className='bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium'
                  >
                    Browse All Products
                  </Link>
                  <a 
                    href='https://wa.me/60123822001' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium'
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            )
          ) : (
            <div className='text-center py-16'>
              <div className='w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center'>
                <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Start Your Search</h3>
              <p className='text-gray-600 mb-8'>
                Enter a product name, category, or keyword above to find what you're looking for.
              </p>
            </div>
          )}

          {/* Back to Products */}
          <div className='mt-12 text-center'>
            <Link 
              to='/products'
              className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors'
            >
              <svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
              Back to All Products
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppFloat phone='+60123822001' message='Hi Myco Medic!' />
    </div>
  )
}

export default SearchResults

