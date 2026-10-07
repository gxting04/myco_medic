import React, { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Data from '@/shared/Data'
import ProductDetailDefault from './ProductDetailDefault'
import productContentRegistry from '@/productContent'
import slugify from '@/utils/slugify'
import PageSEO from './PageSEO'
import { breadcrumbJsonLd, categoryPath, productJsonLd } from '@/utils/seo'
import { getStoredProducts } from '@/lib/catalog'
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
    const list = getStoredProducts()
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
        <section className="container-page flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
          <h1 className="heading-lg">Product not found</h1>
          <p className="lead mt-3 max-w-md">This product may have been renamed or discontinued. Try searching the catalogue, or ask us directly.</p>
          <Link to="/products" className="btn-primary mt-8">
            Browse all products
          </Link>
        </section>
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

  // Home → Products → [Category] → this product. Emitted alongside the Product
  // node as a top-level JSON-LD array so the search result shows a readable
  // trail instead of a bare URL.
  const breadcrumbTrail = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    product.category && {
      name: product.category,
      path: categoryPath(product.category)
    },
    { name: product.name, path: canonicalPath }
  ].filter(Boolean)

  const jsonLd = [
    productJsonLd(product, productDescription),
    breadcrumbJsonLd(breadcrumbTrail)
  ].filter(Boolean)

  const seo = (
    <PageSEO
      title={getProductSeoTitle(product)}
      description={productDescription}
      path={canonicalPath}
      image={seoImage}
      type="product"
      jsonLd={jsonLd}
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
