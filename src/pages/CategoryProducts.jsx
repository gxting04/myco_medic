import React, { useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Data from '../shared/Data'
import PageSEO from '../components/PageSEO'
import ProductCard from '../components/ProductCard'
import { getCatalogProducts, getGroup } from '@/lib/catalog'

const categorySlug = (name) => name.toLowerCase().replace(/\s+/g, '-')

// Old slugs that are still linked from outside after a category was renamed.
const LEGACY_SLUGS = {
  'medical-burshes-and-accesories': 'medical-brushes-and-accessories'
}

function CategoryProducts() {
  const { categoryName = '' } = useParams()
  const category = useMemo(() => Data.productCategories.find((c) => categorySlug(c.name) === categoryName) || null, [categoryName])
  const products = useMemo(
    () => (category ? getCatalogProducts().filter((p) => p.category && p.category.toLowerCase() === category.name.toLowerCase()) : []),
    [category]
  )

  if (LEGACY_SLUGS[categoryName]) {
    return <Navigate to={`/products/category/${LEGACY_SLUGS[categoryName]}`} replace />
  }

  if (!category) {
    return (
      <section className="container-page flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
        <PageSEO title="Category not found" description="The requested category could not be found." path={`/products/category/${categoryName}`} noindex />
        <h1 className="heading-lg">Category not found</h1>
        <p className="lead mt-3">The category you were looking for doesn’t exist or has moved.</p>
        <Link to="/products" className="btn-primary mt-8">
          Browse all products
        </Link>
      </section>
    )
  }

  const group = getGroup(category.groupId)

  return (
    <div className="bg-white">
      <PageSEO
        title={category.name}
        description={category.description || `${category.name} medical products from Myco Medic Malaysia.`}
        path={`/products/category/${categoryName}`}
      />
      <header className="border-b border-gray-100 bg-gray-50/60">
        <div className="container-page py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link to="/products" className="hover:text-gray-900">
              Products
            </Link>
            {group && (
              <>
                <span className="mx-2 text-gray-300">/</span>
                <Link to={`/products?groupId=${group.id}`} className="hover:text-gray-900">
                  {group.name}
                </Link>
              </>
            )}
          </nav>
          <h1 className="heading-lg mt-4">{category.name}</h1>
          {category.description && <p className="lead mt-3 max-w-2xl">{category.description}</p>}
          <p className="mt-4 text-sm text-gray-500">
            {products.length} product{products.length === 1 ? '' : 's'}
          </p>
        </div>
      </header>

      <div className="container-page py-10 md:py-12">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} showLabel={false} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-16 text-center">
            <h2 className="text-base font-semibold text-gray-900">No products in this category yet</h2>
            <p className="mt-1 text-sm text-gray-500">Contact us — we may still be able to source what you need.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/products" className="btn-outline py-2.5">
                Browse all products
              </Link>
              <Link to="/contact" className="btn-dark py-2.5">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryProducts
