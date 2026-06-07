import React, { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Data from '@/shared/Data'
import ProductDetailDefault from './ProductDetailDefault'
import productContentRegistry from '@/productContent'
import slugify from '@/utils/slugify'
import Header from './Header'
import Footer from './Footer'
import PageSEO from './PageSEO'
import { productJsonLd } from '@/utils/seo'
import {
  findProductByRouteParam,
  getProductPath,
  getProductSeoDescription,
  getProductSeoTitle,
  getProductSlug
} from '@/utils/productUrl'

function ProductDetail() {
  const { id } = useParams()

  const product = useMemo(() => {
    const fromInitial = findProductByRouteParam(id, Data.initialProducts)
    const saved = localStorage.getItem('myco_products')
    const list = saved ? JSON.parse(saved) : []
    const fromStorage = findProductByRouteParam(id, list)
    if (!fromInitial && !fromStorage) return null
    if (!fromInitial) return fromStorage
    if (!fromStorage) return fromInitial
    return { ...fromInitial, ...fromStorage }
  }, [id])

  if (!product) {
    return (
      <div>
        <PageSEO title="Product Not Found" description="The requested product could not be found." path={`/product/${id}`} noindex />
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

  const canonicalSlug = getProductSlug(product)
  const canonicalPath = getProductPath(product)

  if (String(id) !== canonicalSlug) {
    return <Navigate to={canonicalPath} replace />
  }

  const pageId = product.pageId || slugify(product.name)
  const CustomPage = productContentRegistry[pageId]
  const productDescription = getProductSeoDescription(product)
  const seoImage = product.images?.[0] || product.image

  const seo = (
    <PageSEO
      title={getProductSeoTitle(product)}
      description={productDescription}
      path={canonicalPath}
      image={seoImage}
      type="product"
      jsonLd={productJsonLd(product, productDescription)}
    />
  )

  if (CustomPage) {
    return (
      <>
        {seo}
        <CustomPage product={product} />
      </>
    )
  }

  return (
    <>
      {seo}
      <ProductDetailDefault product={product} />
    </>
  )
}

export default ProductDetail
