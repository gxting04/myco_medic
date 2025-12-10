import React from 'react'
import Data from '@/shared/Data'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import slugify from '@/utils/slugify'

function Category() {
  return (
    <section className="py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Explore Our Products
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Find the essential medical supplies designed for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Data.productGroups.map((group) => {
            const categoriesCount = Data.productCategories.filter(
              category => category.groupId === group.id
            ).length
            
            return (
              <Link
                key={group.id}
                to={`/products/group/${slugify(group.name)}`}
                className="group relative bg-white rounded-[2rem] p-8 h-[400px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1"
              >
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {group.name}
                  </h3>
                  <p className="text-gray-500 font-medium mb-4 text-sm">
                     {categoriesCount} {categoriesCount === 1 ? 'Category' : 'Categories'}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Icon/Image Area */}
                <div className="relative h-32 w-full flex items-end justify-end">
                  <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 ease-in-out" />
                   <img
                    src={group.icon}
                    alt={group.name}
                    className="relative z-10 w-24 h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                {/* Floating Arrow */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Category
