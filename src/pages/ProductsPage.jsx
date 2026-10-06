import React, { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, SlidersHorizontal, Search, X } from 'lucide-react'
import Data from '../shared/Data'
import PageSEO from '../components/PageSEO'
import ProductCard from '../components/ProductCard'
import { getCatalogProducts, getNavGroups, productInGroup, searchProducts } from '@/lib/catalog'
import { useEscapeKey, useLockBodyScroll } from '@/lib/hooks'

const SORTS = [
  { value: 'default', label: 'Featured' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' }
]

function FilterNav({ groups, products, groupId, categoryId, onSelect }) {
  const [expanded, setExpanded] = useState(() => (groupId ? [groupId] : []))

  useEffect(() => {
    if (groupId) setExpanded((prev) => (prev.includes(groupId) ? prev : [...prev, groupId]))
  }, [groupId])

  const toggle = (id) => setExpanded((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const itemClass = (active) =>
    `flex w-full min-w-0 items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
      active ? 'bg-gray-900 font-medium text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`

  return (
    <nav aria-label="Product categories" className="space-y-0.5">
      <button type="button" onClick={() => onSelect(null, null)} className={itemClass(!groupId && !categoryId)}>
        All products
        <span className={`text-xs ${!groupId && !categoryId ? 'text-white/70' : 'text-gray-400'}`}>{products.length}</span>
      </button>
      {groups.map((group) => {
        const categories = Data.productCategories
          .filter((c) => c.groupId === group.id)
          .map((c) => ({ ...c, count: products.filter((p) => p.category === c.name).length }))
          .filter((c) => c.count > 0)
          .sort((a, b) => a.name.localeCompare(b.name))
        const count = products.filter((p) => productInGroup(p, group.id)).length
        const isOpen = expanded.includes(group.id)
        const active = groupId === group.id && !categoryId
        return (
          <div key={group.id}>
            <div className="flex items-center gap-1">
              <button type="button" onClick={() => onSelect(group.id, null)} className={itemClass(active)} aria-current={active || undefined}>
                <span className="leading-snug">{group.name}</span>
                <span className={`text-xs ${active ? 'text-white/70' : 'text-gray-400'}`}>{count}</span>
              </button>
              {categories.length > 0 && (
                <button
                  type="button"
                  onClick={() => toggle(group.id)}
                  className="shrink-0 rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                  aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${group.name}`}
                  aria-expanded={isOpen}
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
            {isOpen && categories.length > 0 && (
              <div className="my-1 ml-3 space-y-0.5 border-l border-gray-200 pl-2">
                {categories.map((c) => {
                  const catActive = categoryId === c.id
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => onSelect(group.id, c.id)}
                      className={itemClass(catActive)}
                      aria-current={catActive || undefined}
                    >
                      <span className="leading-snug">{c.name}</span>
                      <span className={`text-xs ${catActive ? 'text-white/70' : 'text-gray-400'}`}>{c.count}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Filter state lives in the URL, so header/footer links, the back button and
  // shared links all land on the right view. It used to be copied into local
  // state on mount only, which ignored any later navigation to /products?….
  const groupId = Number.parseInt(searchParams.get('groupId'), 10) || null
  const categoryId = Number.parseInt(searchParams.get('categoryId'), 10) || null
  const query = searchParams.get('q') || ''
  const sortBy = searchParams.get('sort') || 'default'
  const [draft, setDraft] = useState(query)

  useEffect(() => setDraft(query), [query])

  // Debounce typing into the URL so history is not flooded.
  useEffect(() => {
    if (draft === query) return
    const t = setTimeout(() => updateParams({ q: draft.trim() || null }), 200)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft])

  useLockBodyScroll(filtersOpen)
  useEscapeKey(filtersOpen, () => setFiltersOpen(false))

  const updateParams = (changes) => {
    const next = new URLSearchParams(searchParams)
    Object.entries(changes).forEach(([k, v]) => {
      if (v === null || v === undefined || v === '' || (k === 'sort' && v === 'default')) next.delete(k)
      else next.set(k, String(v))
    })
    setSearchParams(next, { replace: true, preventScrollReset: true })
  }

  const selectFilter = (gid, cid) => {
    updateParams({ groupId: gid, categoryId: cid })
    setFiltersOpen(false)
  }

  const allProducts = useMemo(() => getCatalogProducts(), [])
  const groups = useMemo(() => getNavGroups(), [])
  const selectedGroup = Data.productGroups.find((g) => g.id === groupId) || null
  const selectedCategory = Data.productCategories.find((c) => c.id === categoryId) || null

  const filteredProducts = useMemo(() => {
    let products = allProducts
    if (selectedCategory) products = products.filter((p) => p.category === selectedCategory.name)
    else if (groupId) products = products.filter((p) => productInGroup(p, groupId))

    if (query.trim()) products = searchProducts(query, products)

    const sorted = [...products]
    if (sortBy === 'name-asc') sorted.sort((a, b) => a.name.localeCompare(b.name))
    if (sortBy === 'name-desc') sorted.sort((a, b) => b.name.localeCompare(a.name))
    return sorted
  }, [allProducts, selectedCategory, groupId, query, sortBy])

  const seoMeta = useMemo(() => {
    if (selectedCategory) {
      return {
        title: selectedCategory.name,
        description:
          selectedCategory.description || `Browse ${selectedCategory.name} products from Myco Medic — medical supplies and equipment in Malaysia.`,
        path: `/products?groupId=${selectedCategory.groupId}&categoryId=${selectedCategory.id}`
      }
    }
    if (selectedGroup) {
      return {
        title: selectedGroup.name,
        description: selectedGroup.description || `Browse ${selectedGroup.name} from Myco Medic — medical supplies and equipment in Malaysia.`,
        path: `/products?groupId=${selectedGroup.id}`
      }
    }
    return {
      title: 'Products',
      description: 'Browse Myco Medic medical supplies — airway management, patient hygiene, PPE, procedure packs, positioning devices, and more.',
      path: '/products'
    }
  }, [selectedGroup, selectedCategory])

  const title = selectedCategory?.name || selectedGroup?.name || 'All products'
  const subtitle =
    selectedCategory?.description ||
    selectedGroup?.description ||
    'Medical devices and consumables for operating theatres, ICUs, wards and clinics.'

  const activeChips = [
    selectedGroup && !selectedCategory && { key: 'group', label: selectedGroup.name, clear: () => updateParams({ groupId: null, categoryId: null }) },
    selectedCategory && { key: 'cat', label: selectedCategory.name, clear: () => updateParams({ categoryId: null }) },
    query && { key: 'q', label: `“${query}”`, clear: () => updateParams({ q: null }) }
  ].filter(Boolean)

  const filterNav = <FilterNav groups={groups} products={allProducts} groupId={groupId} categoryId={categoryId} onSelect={selectFilter} />

  return (
    <div className="bg-white">
      <PageSEO {...seoMeta} />

      <header className="border-b border-gray-100 bg-gray-50/60">
        <div className="container-page py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            {selectedGroup || selectedCategory ? (
              <Link to="/products" className="hover:text-gray-900">
                Products
              </Link>
            ) : (
              <span className="text-gray-900">Products</span>
            )}
          </nav>
          <h1 className="heading-lg mt-4">{title}</h1>
          <p className="lead mt-3 max-w-2xl">{subtitle}</p>
        </div>
      </header>

      <div className="container-page grid gap-8 py-8 md:py-10 lg:grid-cols-[17rem,1fr] lg:gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto overflow-x-hidden pb-6 pr-1">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Categories</p>
            {filterNav}
          </div>
        </aside>

        <div className="min-w-0">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={`Search within ${selectedCategory || selectedGroup ? title : 'all products'}…`}
                className="input pl-10 [&::-webkit-search-cancel-button]:hidden"
                aria-label="Filter products"
              />
              {draft && (
                <button
                  type="button"
                  onClick={() => setDraft('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setFiltersOpen(true)} className="btn-outline flex-1 py-2.5 lg:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                Categories
              </button>
              <label className="relative flex-1 sm:flex-none">
                <span className="sr-only">Sort products</span>
                <select
                  value={sortBy}
                  onChange={(e) => updateParams({ sort: e.target.value })}
                  className="input w-full cursor-pointer appearance-none py-2.5 pr-9 sm:w-auto"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </label>
            </div>
          </div>

          <div className="mt-4 flex min-h-[28px] flex-wrap items-center gap-2 text-sm text-gray-500">
            <span aria-live="polite">
              {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'}
            </span>
            {activeChips.map((chip) => (
              <button
                key={chip.key}
                type="button"
                onClick={chip.clear}
                className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white py-0.5 pl-2.5 pr-1.5 text-xs text-gray-700 hover:border-gray-300"
              >
                {chip.label}
                <X className="h-3 w-3 text-gray-400" aria-label="Remove filter" />
              </button>
            ))}
            {activeChips.length > 1 && (
              <button type="button" onClick={() => setSearchParams({}, { replace: true })} className="text-xs font-medium text-gray-500 underline-offset-2 hover:text-gray-900 hover:underline">
                Clear all
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} showLabel={!selectedCategory} />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-gray-300 px-6 py-16 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <h2 className="text-base font-semibold text-gray-900">No products found</h2>
              <p className="mx-auto mt-1 max-w-sm text-sm text-gray-500">
                {query ? `Nothing matches “${query}” here. Try a broader term or search all categories.` : 'There are no products in this category yet.'}
              </p>
              <div className="mt-6 flex justify-center gap-3">
                {(groupId || categoryId) && query && (
                  <button type="button" onClick={() => updateParams({ groupId: null, categoryId: null })} className="btn-outline py-2.5">
                    Search all categories
                  </button>
                )}
                <button type="button" onClick={() => setSearchParams({}, { replace: true })} className="btn-dark py-2.5">
                  Show all products
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter sheet */}
      <AnimatePresence>
        {filtersOpen && (
          <motion.div className="fixed inset-0 z-[150] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-gray-900/40" onClick={() => setFiltersOpen(false)} aria-hidden />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Product categories"
              className="absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col rounded-t-2xl bg-white"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <h2 className="text-base font-semibold text-gray-900">Categories</h2>
                <button type="button" onClick={() => setFiltersOpen(false)} className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100" aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="overflow-y-auto overscroll-contain p-3" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
                {filterNav}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductsPage
