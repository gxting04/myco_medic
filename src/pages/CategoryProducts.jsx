import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Data from '../shared/Data'

function CategoryProducts() {
  const { categoryName } = useParams()
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(null)

  useEffect(() => {
    // Get saved products from localStorage
    const savedProducts = localStorage.getItem('myco_products')
    const allProducts = savedProducts ? JSON.parse(savedProducts) : Data.initialProducts

    // Find the category
    const foundCategory = Data.productCategories.find(cat => 
      cat.name.toLowerCase().replace(/\s+/g, '-') === categoryName
    )

    if (foundCategory) {
      setCategory(foundCategory)
      // Filter products by category (case-insensitive), only products that have a category
      const categoryProducts = allProducts.filter(product => 
        product.category && product.category.toLowerCase() === foundCategory.name.toLowerCase()
      )
      setProducts(categoryProducts)
    }
  }, [categoryName])

  if (!category) {
    return (
      <div>
        <Header/>
        <div className='py-16 bg-white'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Category Not Found</h1>
            <p className='text-gray-600 mb-8'>The requested category could not be found.</p>
            <Link to='/products' className='text-primary hover:text-primary/80 font-medium'>
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer/>
      </div>
    )
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
              <span>›</span>
              <span className='text-gray-900 font-medium'>{category.name}</span>
            </div>
          </nav>

          {/* Page Header */}
          <div className='text-center mb-12'>
            <div className='w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center'>
              <img 
                src={category.icon} 
                alt={`${category.name} icon`}
                className='w-12 h-12 object-contain'
              />
            </div>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>{category.name} Products</h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Discover our range of {category.name.toLowerCase()} equipment and devices
            </p>
            <div className='w-24 h-1 bg-primary mx-auto mt-4'></div>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className='group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden'
                >
                  <div className='relative overflow-hidden'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  </div>
                  
                  <div className='p-6'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                      {product.name}
                    </h3>
                    <p className='text-sm text-gray-500 mb-3'>{product.category}</p>
                    <p className='text-2xl font-bold text-primary mb-4'>RM{product.price.toFixed(2)}</p>
                    
                    <div className='flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity'>
                      <span className='text-sm font-medium mr-2'>View Details</span>
                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className='text-center py-16'>
              <div className='w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center'>
                <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-4 4m0 0l-4-4m4 4V3' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>No Products Found</h3>
              <p className='text-gray-600 mb-8'>
                We don't have any products in this category yet. Check back soon or contact us for more information.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link 
                  to='/products'
                  className='bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium'
                >
                  Browse All Categories
                </Link>
                <a 
                  href='https://wa.me/60196649622' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium'
                >
                  Contact Us
                </a>
              </div>
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
      
      <Footer/>
      <WhatsAppFloat phone='+60196649622' message='Hi Myco Medic!' />
    </div>
  )
}

export default CategoryProducts
