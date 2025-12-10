import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Data from '../shared/Data'
import slugify from '../utils/slugify'

function ProductsPage() {
  return (
    <div>
      <Header/>
      
      <div className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Page Header */}
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>Our Products</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Explore our comprehensive range of medical devices and equipment organized by groups and categories
            </p>
            <div className='w-24 h-1 bg-primary mx-auto mt-6'></div>
          </div>

          {/* Groups Grid */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
            {Data.productGroups.map((group) => (
              <Link
                key={group.id}
                to={`/products/group/${slugify(group.name)}`}
                className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-primary/20'
              >
                <div className='text-center'>
                  <div className='w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <img src={group.icon} alt={`${group.name} icon`} className='w-12 h-12 object-contain' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                    {group.name}
                  </h3>
                  <p className='text-sm text-gray-500'>
                    {group.description}
                  </p>
                  <div className='mt-4 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity'>
                    <span className='text-sm font-medium mr-2'>View Categories</span>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Optional: show all categories below */}
          <div className='mt-20'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>All Categories</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
              {Data.productCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products/category/${slugify(category.name)}`}
                  className='group bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all border border-gray-100 hover:border-primary/20'
                >
                  <div className='text-center'>
                    <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center'>
                      <img src={category.icon} alt={`${category.name} icon`} className='w-10 h-10 object-contain' />
                    </div>
                    <h3 className='text-base font-semibold text-gray-900'>
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className='mt-16 text-center'>
            <div className='bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Need Help Finding the Right Product?</h3>
              <p className='text-gray-600 mb-6'>
                Our medical device specialists are here to help you find the perfect equipment for your needs.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a 
                  href='https://wa.me/60196649622' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium'
                >
                  Contact Us on WhatsApp
                </a>
                <Link 
                  to='/contact'
                  className='border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium'
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
      <WhatsAppFloat phone='+60196649622' message='Hi Myco Medic!' />
    </div>
  )
}

export default ProductsPage
