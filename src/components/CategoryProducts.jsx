import React, { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import Data from '@/shared/Data'
import Header from './Header'
import Footer from './Footer'

function CategoryProducts() {
  const { categoryName } = useParams()

  const formattedCategory = useMemo(() => 
    categoryName.replace(/-/g, ' ').toLowerCase()
  , [categoryName])

  const saved = localStorage.getItem('myco_products')
  const allProducts = saved ? JSON.parse(saved) : Data.initialProducts

  const filteredProducts = allProducts.filter(
    p => p.category.toLowerCase() === formattedCategory
  )

  return (
    <div>
      <Header />
      <div className='mx-24 my-12'>
        <h2 className='font-bold text-3xl mb-8 capitalize'>
          {formattedCategory} Products
        </h2>

        {filteredProducts.length === 0 ? (
          <p className='text-gray-600'>No products found in this category.</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {filteredProducts.map(p => (
              <Link 
                to={`/product/${p.id}`} 
                key={p.id} 
                className='border rounded-xl overflow-hidden p-3 h-full flex flex-col hover:shadow-md transition-shadow'
              >
                <img src={p.image} className='w-full h-40 object-cover rounded-md'/>
                <div className='mt-3'>
                  <h3 className='font-semibold'>{p.name}</h3>
                  <p className='text-sm text-gray-500'>{p.category}</p>
                  <p className='font-bold mt-1'>${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className='mt-12'>
          <Link 
            to='/products' 
            className='text-primary hover:text-primary/80 font-medium'
          >
            ← Back to All Products
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CategoryProducts
