import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function DisposableAirCushionFaceMaskPage({ product }) {
  const group = product.groupId && !product.category 
    ? Data.productGroups.find(g => g.id === product.groupId)
    : null
  
  const backLink = group 
    ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src={product.image}
            alt='Disposable Air Cushion Face Mask'
            className='w-full h-full object-cover opacity-30'
          />
        </div>
        <div className='relative max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>Airway Management</span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6'>
              Disposable Air Cushion Face Mask
            </h1>
            <p className='text-lg lg:text-xl text-black mb-8'>
              Surgical Disposable Anesthesia Breathing Mask
            </p>
            <div className='flex flex-wrap gap-4'>
              <a 
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
                className='px-6 py-3 bg-primary text-black rounded-lg font-medium hover:bg-primary/90 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Talk to a Specialist
              </a>
              {group && (
                <Link
                  to={backLink}
                  className='px-6 py-3 border border-white/40 rounded-lg font-medium hover:border-white transition-colors'
                >
                  View More Products
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <h2 className='text-3xl font-bold text-black mb-8'>Product Features</h2>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Surgical Disposable Anesthesia Breathing Mask
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                The transparent mask shell helps the medical care personnel to see complicating disease like vomit as soon as possible
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Soft air cushion can keep mask sealed; Use only once, avoid cross-infection
              </p>
            </div>
          </div>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image}
              alt='Disposable Air Cushion Face Mask'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-black'>
              Contact our specialists to discuss how Disposable Air Cushion Face Mask can enhance your respiratory care protocols.
            </p>
          </div>
          <a 
            href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
            className='px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default DisposableAirCushionFaceMaskPage

