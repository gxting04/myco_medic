import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

// Based on the official Myco Medic page:
// https://www.mycomedic.com.my/memory-universal-positioners.html
// This page acts as a small category landing page for:
// - Memory Universal Square Pads
// - Memory Pillow Shaped Pads

function MemoryUniversalPositionersPage({ product }) {
  const { squarePadsProduct, pillowPadsProduct } = useMemo(() => {
    const square = Data.initialProducts.find((p) => p.pageId === 'memory-universal-square-pads') || null
    const pillow = Data.initialProducts.find((p) => p.pageId === 'memory-pillow-shaped-pads') || null
    return { squarePadsProduct: square, pillowPadsProduct: pillow }
  }, [])

  const group =
    product?.groupId != null
      ? Data.productGroups.find((g) => g.id === product.groupId)
      : null

  const backLink = group
    ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      {/* Hero / intro */}
      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-20 lg:py-28'>
          <div className='lg:w-3/4'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Memory Foam Positioners
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-4 text-black'>
              Universal Square Pads
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              A family of memory foam positioners designed for versatile support and pressure redistribution. This
              mini-category includes both the memory universal square pads and memory pillow shaped pads, which can be
              selected based on the support surface and patient positioning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Two-product grid */}
      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Memory Universal Square Pads */}
          <Link
            to={squarePadsProduct ? `/product/${squarePadsProduct.id}` : '/products'}
            className='group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col'
          >
            <div className='aspect-video bg-gray-50 flex items-center justify-center'>
              <img
                src='https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/universal-square-pads-1-removebg-preview_orig.png'
                alt='Memory Universal Square Pads'
                className='h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6 flex-1 flex flex-col'>
              <h2 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                Memory Universal Square Pads
              </h2>
              <p className='text-gray-600 text-sm mb-4'>
                Square, flat memory foam pads that can be placed under multiple body regions to offload pressure and
                provide general-purpose support.
              </p>
              <p className='text-primary text-sm font-medium mt-auto'>View product →</p>
            </div>
          </Link>

          {/* Memory Pillow Shaped Pads */}
          <Link
            to={pillowPadsProduct ? `/product/${pillowPadsProduct.id}` : '/products'}
            className='group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col'
          >
            <div className='aspect-video bg-gray-50 flex items-center justify-center'>
              <img
                src='https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/pillow-shaped-pads-1-removebg-preview_orig.png'
                alt='Memory Pillow Shaped Pads'
                className='h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6 flex-1 flex flex-col'>
              <h2 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                Memory Pillow Shaped Pads
              </h2>
              <p className='text-gray-600 text-sm mb-4'>
                Contoured pillow-style memory foam pads for cradling and supporting curved anatomical regions while
                redistributing pressure.
              </p>
              <p className='text-primary text-sm font-medium mt-auto'>View product →</p>
            </div>
          </Link>
        </div>

        {/* Back navigation */}
        <div className='mt-12 pt-8 border-t border-gray-200'>
          <Link
            to={backLink}
            className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors'
          >
            <svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
            Back to {group?.name ?? 'Products'}
          </Link>
        </div>
      </section>

      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product?.name || 'universal square pads'}`} />
      <Footer />
    </div>
  )
}

export default MemoryUniversalPositionersPage


