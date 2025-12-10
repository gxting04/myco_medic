import React, { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Data from '../shared/Data'
import slugify from '../utils/slugify'

function GroupCategories() {
  const { groupName } = useParams()

  const { group, categories, directProducts } = useMemo(() => {
    // More robust slug matching:
    // 1. Try exact match with the simple replace logic used elsewhere
    // 2. Try match with the reusable slugify utility
    const foundGroup = Data.productGroups.find(g => {
      const simpleSlug = g.name.toLowerCase().replace(/\s+/g, '-')
      const robustSlug = slugify(g.name)
      
      // Normalize the incoming groupName to handle potential double hyphens or encoding issues
      const normalizedInput = groupName.toLowerCase()
      
      return simpleSlug === normalizedInput || robustSlug === normalizedInput
    })

    const cats = foundGroup
      ? Data.productCategories.filter(c => c.groupId === foundGroup.id)
      : []
    
    // Get products that belong directly to this group (have groupId but no category)
    const saved = localStorage.getItem('myco_products')
    const allProducts = saved ? JSON.parse(saved) : Data.initialProducts
    const directProds = foundGroup
      ? allProducts.filter(p => p.groupId === foundGroup.id && (!p.category || p.category === null))
      : []
    
    return { group: foundGroup || null, categories: cats, directProducts: directProds }
  }, [groupName])

  if (!group) {
    return (
      <div>
        <Header/>
        <div className='py-16 bg-white'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Group Not Found</h1>
            <p className='text-gray-600 mb-8'>The requested group "{groupName}" could not be found.</p>
            <Link to='/products' className='text-primary hover:text-primary/80 font-medium'>
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  return (
    <div>
      <Header/>
      
      <div className='py-16 bg-[#f5f5f7] min-h-screen'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Breadcrumbs */}
          <div className='flex items-center gap-2 text-sm text-gray-500 mb-8'>
            <Link to='/' className='hover:text-primary'>Home</Link>
            <span>/</span>
            <Link to='/products' className='hover:text-primary'>Products</Link>
            <span>/</span>
            <span className='text-gray-900 font-medium'>{group.name}</span>
          </div>

          {/* Group Header */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>{group.name}</h1>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              {group.description}
            </p>
          </div>

          {/* Categories Grid (if any) */}
          {categories.length > 0 && (
            <div className='mb-16'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-8'>Categories</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/products/category/${slugify(category.name)}`}
                    className='group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100'
                  >
                    <div className='aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-100'>
                      <img
                        src={category.images[0]}
                        alt={category.name}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                      {category.name}
                    </h3>
                    <p className='text-gray-500 text-sm line-clamp-2'>
                      {category.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Direct Products Grid (if any) */}
          {directProducts.length > 0 && (
            <div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-8'>Products</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {directProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className='group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col'
                  >
                    <div className='aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-50 p-4 flex items-center justify-center'>
                      <img
                        src={product.image}
                        alt={product.name}
                        className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500'
                      />
                    </div>
                    <div className='mt-auto'>
                      <h3 className='font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-primary transition-colors'>
                        {product.name}
                      </h3>
                      <p className='text-gray-500 text-sm'>${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {categories.length === 0 && directProducts.length === 0 && (
            <div className='text-center py-12 bg-white rounded-3xl border border-gray-100'>
              <p className='text-gray-500 text-lg'>No products found in this group yet.</p>
            </div>
          )}
        </div>
      </div>

      <Footer/>
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in products from ${group.name}`} />
    </div>
  )
}

export default GroupCategories
