import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import PageSEO from '../components/PageSEO'
import ProductCard from '../components/ProductCard'
import { getNavGroups, searchProducts } from '@/lib/catalog'
import { COMPANY, whatsappLink } from '@/lib/site'

function SearchResults() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('q') || ''
  const [term, setTerm] = useState(query)

  // Keep the box in sync when the query changes via header search or back/forward.
  useEffect(() => setTerm(query), [query])

  const results = useMemo(() => searchProducts(query), [query])
  const groups = useMemo(() => getNavGroups(), [])

  const submit = (e) => {
    e.preventDefault()
    const q = term.trim()
    // In-app navigation; this used to set window.location and reload the whole site.
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <div className="bg-white">
      <PageSEO title={query ? `Search: ${query}` : 'Search'} description="Search the Myco Medic product catalogue." path="/search" noindex />

      <header className="border-b border-gray-100 bg-gray-50/60">
        <div className="container-page py-10 md:py-14">
          <h1 className="heading-lg">{query ? 'Search results' : 'Search the catalogue'}</h1>
          <form onSubmit={submit} className="mt-6 flex max-w-2xl gap-2" role="search">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Product name, type or category"
                className="input py-3.5 pl-12 text-base [&::-webkit-search-cancel-button]:hidden"
                aria-label="Search products"
                autoFocus={!query}
              />
              {term && (
                <button
                  type="button"
                  onClick={() => setTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 hover:text-gray-700"
                  aria-label="Clear"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <button type="submit" className="btn-primary px-6">
              Search
            </button>
          </form>
          {query && (
            <p className="mt-4 text-sm text-gray-500" aria-live="polite">
              {results.length} result{results.length === 1 ? '' : 's'} for <span className="font-medium text-gray-900">“{query}”</span>
            </p>
          )}
        </div>
      </header>

      <div className="container-page py-10 md:py-12">
        {query && results.length > 0 && (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-14 text-center">
            <h2 className="text-base font-semibold text-gray-900">No products match “{query}”</h2>
            <p className="mx-auto mt-1 max-w-md text-sm text-gray-500">
              Check the spelling, try a more general term, or ask us — we may be able to source it for you.
            </p>
            <a
              href={whatsappLink(`Hi Myco Medic, do you supply "${query}"?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6"
            >
              Ask on WhatsApp
            </a>
            <p className="mt-3 text-xs text-gray-400">or call {COMPANY.phone}</p>
          </div>
        )}

        {(!query || results.length === 0) && (
          <div className={query ? 'mt-12' : ''}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Browse by category</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {groups.map((g) => (
                <Link
                  key={g.id}
                  to={`/products?groupId=${g.id}`}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                >
                  {g.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResults
