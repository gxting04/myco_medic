import React, { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Data from '../shared/Data'
import slugify from '../utils/slugify'
import { ChevronDown, ChevronRight, Search } from 'lucide-react'

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGroupId, setSelectedGroupId] = useState(null)
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [expandedGroups, setExpandedGroups] = useState([])
  const navigate = useNavigate()

  // Get products from localStorage or initial data
  const allProducts = useMemo(() => {
    const saved = localStorage.getItem('myco_products')
    return saved ? JSON.parse(saved) : Data.initialProducts
  }, [])

  // Filter products based on selection
  const filteredProducts = useMemo(() => {
    let products = allProducts

    if (selectedCategoryId) {
      // Find the category name by ID
      const selectedCategory = Data.productCategories.find(c => c.id === selectedCategoryId)
      if (selectedCategory) {
        // Filter products that match the category name (products store category as string name)
        products = products.filter(p => p.category === selectedCategory.name)
      }
    } else if (selectedGroupId) {
      products = products.filter(p => p.groupId === selectedGroupId && (!p.category || p.category === null))
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      products = products.filter(p => {
        const nameMatch = p.name.toLowerCase().includes(term)
        
        // Check category name if category is set
        let categoryMatch = false
        if (p.category && typeof p.category === 'string') {
          // Products store category as string name, so check directly
          if (p.category.toLowerCase().includes(term)) {
            categoryMatch = true
          }
        }
        
        // Check group name
        let groupMatch = false
        if (p.groupId) {
          const group = Data.productGroups.find(g => g.id === p.groupId)
          if (group && group.name.toLowerCase().includes(term)) {
            groupMatch = true
          }
        }
        
        return nameMatch || categoryMatch || groupMatch
      })
    }

    return products
  }, [allProducts, selectedGroupId, selectedCategoryId, searchTerm])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    )
  }

  const handleGroupClick = (groupId) => {
    setSelectedGroupId(groupId)
    setSelectedCategoryId(null)
    // Expand the group if not already expanded
    if (!expandedGroups.includes(groupId)) {
      setExpandedGroups(prev => [...prev, groupId])
    }
  }

  const handleCategoryClick = (categoryId, groupId) => {
    setSelectedCategoryId(categoryId)
    setSelectedGroupId(groupId)
    // Expand the group if not already expanded
    if (!expandedGroups.includes(groupId)) {
      setExpandedGroups(prev => [...prev, groupId])
    }
  }

  const handleShowAll = () => {
    setSelectedGroupId(null)
    setSelectedCategoryId(null)
  }

  // Get categories for each group
  const getCategoriesForGroup = (groupId) => {
    return Data.productCategories.filter(cat => cat.groupId === groupId)
  }

  // Get direct products count for a group (products without category)
  const getDirectProductsCount = (groupId) => {
    return allProducts.filter(p => p.groupId === groupId && (!p.category || p.category === null)).length
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header/>
      
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-light text-gray-900 mb-2">Products</h1>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-gray-500 text-sm">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex gap-2 max-w-md w-full">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Left Sidebar - Product Groups & Categories */}
            <aside className="w-80 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm sticky top-24 overflow-hidden">
                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Categories</h2>
                    {(selectedGroupId || selectedCategoryId) && (
                      <button
                        onClick={handleShowAll}
                        className="text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                <nav className="py-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                  {/* Show All Products Option */}
                  <button
                    onClick={handleShowAll}
                    className={`w-full text-left px-6 py-3 transition-all duration-200 flex items-center gap-3 group ${
                      !selectedGroupId && !selectedCategoryId
                        ? 'bg-gray-900 text-white border-l-4 border-gray-900'
                        : 'text-gray-700 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300 border-l-4 border-transparent'
                    }`}
                  >
                    <span className="font-medium text-sm">All Products</span>
                  </button>

                  {/* Product Groups */}
                  {Data.productGroups
                    .filter(group => group.id !== 5)
                    .map((group) => {
                      const categories = getCategoriesForGroup(group.id)
                      const directProductsCount = getDirectProductsCount(group.id)
                      const isExpanded = expandedGroups.includes(group.id)
                      const isSelected = selectedGroupId === group.id && !selectedCategoryId

                      return (
                        <div key={group.id} className="border-b border-gray-50 last:border-0">
                          {/* Group Header */}
                          <button
                            onClick={() => {
                              if (categories.length > 0) {
                                toggleGroup(group.id)
                              } else {
                                handleGroupClick(group.id)
                              }
                            }}
                            className={`w-full text-left px-6 py-3 transition-all duration-200 flex items-center justify-between group ${
                              isSelected
                                ? 'bg-gray-900 text-white border-l-4 border-gray-900'
                                : 'text-gray-700 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300 border-l-4 border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <span className="font-medium text-sm truncate">{group.name}</span>
                            </div>
                            {categories.length > 0 && (
                              <div className="flex items-center gap-2 flex-shrink-0">
                                {directProductsCount > 0 && (
                                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                    isSelected 
                                      ? 'bg-white/20 text-white' 
                                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                  }`}>
                                    {directProductsCount}
                                  </span>
                                )}
                                <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-0' : '-rotate-90'}`}>
                                  <ChevronDown className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
                                </div>
                              </div>
                            )}
                          </button>

                          {/* Categories under Group */}
                          {isExpanded && categories.length > 0 && (
                            <div className="bg-gray-50/50 border-l-4 border-gray-200 ml-0">
                              {categories.map((category, idx) => {
                                const categoryProducts = allProducts.filter(
                                  p => p.category === category.name
                                )
                                const isCategorySelected = selectedCategoryId === category.id

                                return (
                                  <button
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category.id, group.id)}
                                    className={`w-full text-left px-10 py-2.5 transition-all duration-200 flex items-center justify-between group ${
                                      isCategorySelected
                                        ? 'bg-gray-900 text-white border-l-4 border-gray-900'
                                        : 'text-gray-600 hover:bg-white hover:border-l-4 hover:border-gray-400 border-l-4 border-transparent'
                                    }`}
                                  >
                                    <span className="text-sm font-normal truncate">{category.name}</span>
                                    {categoryProducts.length > 0 && (
                                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ml-2 flex-shrink-0 ${
                                        isCategorySelected 
                                          ? 'bg-white/20 text-white' 
                                          : 'bg-white text-gray-500 group-hover:bg-gray-100'
                                      }`}>
                                        {categoryProducts.length}
                                      </span>
                                    )}
                                  </button>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    })}
                </nav>
              </div>
            </aside>

            {/* Right Side - Products Grid */}
            <main className="flex-1 min-w-0">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => {
                    const group = Data.productGroups.find(g => g.id === product.groupId)
                    const category = Data.productCategories.find(c => c.id === product.category)

                    return (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="group bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all overflow-hidden flex flex-col"
                      >
                        <div className="aspect-square bg-gray-50 p-4 flex items-center justify-center overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors text-sm">
                            {product.name}
                          </h3>
                          
                          {category && (
                            <p className="text-xs text-gray-500 mb-2">{category.name}</p>
                          )}
                          
                          {group && (
                            <p className="text-xs text-primary font-medium mb-3">{group.name}</p>
                          )}
                          
                          <div className="mt-auto">
                            <p className="text-lg font-semibold text-gray-900">
                              RM{product.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No Products Found</h3>
                  <p className="text-gray-500 mb-6">
                    {searchTerm 
                      ? `No products match "${searchTerm}". Try a different search term.`
                      : 'No products available in this category.'}
                  </p>
                  {(selectedGroupId || selectedCategoryId) && (
                    <button
                      onClick={handleShowAll}
                      className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Show All Products
                    </button>
                  )}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
      
      <Footer/>
      <WhatsAppFloat phone='+60196649622' message='Hi Myco Medic!' />
    </div>
  )
}

export default ProductsPage
