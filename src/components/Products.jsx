import React, { useEffect, useState } from 'react'
import Data from '@/shared/Data'
import ProductForm from './ProductForm'
import { Link } from 'react-router-dom'

function Products() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('myco_products')
    return saved ? JSON.parse(saved) : Data.initialProducts
  })

  useEffect(() => {
    localStorage.setItem('myco_products', JSON.stringify(products))
  }, [products])

  function handleAdd(product) {
    setProducts(prev => [product, ...prev])
  }

  return (
    <div className='mx-24 my-12'>
      <div className='flex items-start gap-6'>
        <div className='w-full'>
          <h2 className='font-bold text-3xl mb-6'>Products</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products.map(p => (
              <Link to={`/product/${p.id}`} key={p.id} className='border rounded-xl overflow-hidden p-3 h-full flex flex-col hover:shadow-md transition-shadow'>
                <img src={p.image} className='w-full h-40 object-cover rounded-md'/>
                <div className='mt-3'>
                  <h3 className='font-semibold'>{p.name}</h3>
                  {p.category && <p className='text-sm text-gray-500'>{p.category}</p>}
                  <p className='font-bold mt-1'>${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='min-w-[300px]'>
          <ProductForm onAdd={handleAdd} />
        </div>
      </div>
    </div>
  )
}

export default Products


