import React, { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import Data from '@/shared/Data'
import ProductDetailDefault from './ProductDetailDefault'
import productContentRegistry from '@/productContent'
import slugify from '@/utils/slugify'
import Header from './Header'
import Footer from './Footer'

function ProductDetail() {
  const { id } = useParams()
  // Support IDs that may include variant codes from cart items, e.g. "121-OKT-T01"
  const productId = useMemo(() => {
    if (!id) return NaN
    const base = String(id).split('-')[0]
    return Number(base)
  }, [id])

  const product = useMemo(() => {
    const saved = localStorage.getItem('myco_products')
    const list = saved ? JSON.parse(saved) : Data.initialProducts
    // First try to find in saved products, then fall back to initial products
    return list.find(p => Number(p.id) === productId) || Data.initialProducts.find(p => Number(p.id) === productId)
  }, [productId])

  if (!product) {
    return (
      <div>
        <Header/>
        <div className='py-16 bg-white'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Product Not Found</h1>
            <p className='text-gray-600 mb-8'>The requested product could not be found.</p>
            <Link to='/products' className='text-primary hover:text-primary/80 font-medium'>
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const pageId = product.pageId || slugify(product.name)
  const CustomPage = productContentRegistry[pageId]

  if (CustomPage) {
    return <CustomPage product={product} />
  }

  return <ProductDetailDefault product={product} />
}

export default ProductDetail