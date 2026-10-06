import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, ImageOff, Plus } from 'lucide-react'
import { getProductImage, getProductLabel } from '@/lib/catalog'
import { getProductPath } from '@/utils/productUrl'
import { useQuote } from '@/context/QuoteContext'

/**
 * Catalogue tile used by the product listing, search results, category pages
 * and "related products". The quote button sits outside the link so it can
 * be pressed without navigating.
 */
function ProductCard({ product, showLabel = true }) {
  const { add, has } = useQuote()
  const [imgFailed, setImgFailed] = useState(false)
  const inList = has(product.id)
  const label = showLabel ? getProductLabel(product) : ''

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)]">
      <Link to={getProductPath(product)} className="flex flex-1 flex-col focus-visible:ring-inset">
        <div className="relative aspect-square bg-gray-50/70">
          {imgFailed ? (
            <ImageOff className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-gray-300" strokeWidth={1.5} aria-hidden />
          ) : (
            <img
              src={getProductImage(product)}
              alt={product.imageAlt || product.name}
              loading="lazy"
              decoding="async"
              onError={() => setImgFailed(true)}
              className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03]"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col border-t border-gray-100 p-4 pr-14">
          {label && <p className="mb-1 hidden truncate text-[11px] sm:block font-medium uppercase tracking-wider text-gray-400">{label}</p>}
          <h3 className="line-clamp-2 text-sm font-medium leading-snug text-gray-900 group-hover:text-primary">{product.name}</h3>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => add(product)}
        className={`absolute bottom-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
          inList ? 'border-primary bg-primary text-white' : 'border-gray-200 bg-white text-gray-500 hover:border-primary hover:text-primary'
        }`}
        aria-label={inList ? `${product.name} is in your quote list — add another` : `Add ${product.name} to quote list`}
        title={inList ? 'In quote list' : 'Add to quote list'}
      >
        {inList ? <Check className="h-4 w-4" strokeWidth={2.5} /> : <Plus className="h-4 w-4" strokeWidth={2.5} />}
      </button>
    </div>
  )
}

export default ProductCard
