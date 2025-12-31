import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

// Based on the official Myco Medic page:
// http://mycomedic.com.my/memory-lower-limb-pads.html
// This page acts as a small category landing page for:
// - Memory Lower Limb Protector Pads
// - Memory Heel Pads
// - Memory Tunnel Pads

function MemoryLowerLimbPadsPage({ product }) {
  const { protectorProduct, heelProduct, tunnelProduct } = useMemo(() => {
    const protector = Data.initialProducts.find((p) => p.pageId === 'memory-lower-limb-protector-pads') || null
    const heel = Data.initialProducts.find((p) => p.pageId === 'memory-heel-pads') || null
    const tunnel = Data.initialProducts.find((p) => p.pageId === 'memory-tunnel-pads') || null
    return { protectorProduct: protector, heelProduct: heel, tunnelProduct: tunnel }
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

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-20 lg:py-28'>
          <div className='lg:w-3/4'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Memory Foam Positioners
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-4 text-black'>
              Lower Limb Pads
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              A set of memory foam lower-limb positioners and protectors. Choose between lower limb protector pads, heel
              pads, or tunnel pads depending on the area that needs elevation or pressure protection.
            </p>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <Link
            to={protectorProduct ? `/product/${protectorProduct.id}` : '/products'}
            className='group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col'
          >
            <div className='aspect-video bg-gray-50 flex items-center justify-center'>
              <img
                src='http://mycomedic.com.my/uploads/9/7/1/1/9711883/lower-limb-protector-pads-1-removebg-preview_orig.png'
                alt='Memory Lower Limb Protector Pads'
                className='h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6 flex-1 flex flex-col'>
              <h2 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                Memory Lower Limb Protector Pads
              </h2>
              <p className='text-gray-600 text-sm mb-4'>
                Lower limb protector pads designed to help reduce pressure on vulnerable areas during procedures.
              </p>
              <p className='text-primary text-sm font-medium mt-auto'>View product →</p>
            </div>
          </Link>

          <Link
            to={heelProduct ? `/product/${heelProduct.id}` : '/products'}
            className='group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col'
          >
            <div className='aspect-video bg-gray-50 flex items-center justify-center'>
              <img
                src='http://mycomedic.com.my/uploads/9/7/1/1/9711883/heel-pads-1-removebg-preview_orig.png'
                alt='Memory Heel Pads'
                className='h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6 flex-1 flex flex-col'>
              <h2 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                Memory Heel Pads
              </h2>
              <p className='text-gray-600 text-sm mb-4'>
                Heel pads for offloading the calcaneus and reducing pressure injury risk during longer procedures.
              </p>
              <p className='text-primary text-sm font-medium mt-auto'>View product →</p>
            </div>
          </Link>

          <Link
            to={tunnelProduct ? `/product/${tunnelProduct.id}` : '/products'}
            className='group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col'
          >
            <div className='aspect-video bg-gray-50 flex items-center justify-center'>
              <img
                src='https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/4107-tunnel-pad-removebg-preview_orig.png'
                alt='Memory Tunnel Pads'
                className='h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6 flex-1 flex flex-col'>
              <h2 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                Memory Tunnel Pads
              </h2>
              <p className='text-gray-600 text-sm mb-4'>
                Tunnel pads used to support and protect the limb while keeping sensitive areas offloaded from pressure.
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

      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product?.name || 'lower limb pads'}`} />
      <Footer />
    </div>
  )
}

export default MemoryLowerLimbPadsPage


