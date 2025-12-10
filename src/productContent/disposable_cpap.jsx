import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function DisposableCPAPPage({ product }) {
  // Get group information if product has no category
  const group = product.groupId && !product.category 
    ? Data.productGroups.find(g => g.id === product.groupId)
    : null
  
  const backLink = group 
    ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src={product.image || '/public/cpap.png'}
            alt='Flow-Safe II Disposable CPAP'
            className='w-full h-full object-cover opacity-30'
          />
        </div>
        <div className='relative max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>Airway Management</span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6'>
              Flow-Safe II Disposable CPAP
            </h1>
            <p className='text-lg lg:text-xl text-black mb-8'>
              A totally disposable CPAP system, uses standard flowmeters and includes a manometer for verifying pressure.
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

      {/* Video Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='bg-white/5 rounded-3xl p-8 lg:p-12 backdrop-blur'>
          <h2 className='text-3xl font-bold text-black mb-6 text-center'>Product Overview</h2>
          <div className='relative pt-[56.25%] rounded-2xl overflow-hidden shadow-xl'>
            <iframe
              title='Flow-Safe II Disposable CPAP Demo'
              src='https://www.youtube.com/embed/H8z80e3YPO0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='absolute inset-0 w-full h-full'
            />
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className='max-w-6xl mx-auto px-6 pb-8'>
        <div className='rounded-2xl overflow-hidden shadow-xl'>
          <img
            src={product.image || '/public/cpap.png'}
            alt='Flow-Safe II Disposable CPAP'
            className='w-full h-auto object-cover'
          />
        </div>
      </section>

      {/* Advantages Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <h2 className='text-3xl font-bold text-black mb-8'>Advantages</h2>
        <div className='rounded-2xl overflow-hidden shadow-xl mb-8'>
          <img
            src={product.image || '/public/cpap.png'}
            alt='Advantages of Flow-Safe II Disposable CPAP'
            className='w-full h-auto object-cover'
          />
        </div>
      </section>

      {/* Four Different Mask Styles */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <h2 className='text-3xl font-bold text-black mb-8'>Four Different Mask Styles</h2>
        <p className='text-black text-lg mb-6'>
          All of the Masks below have the following features:
        </p>
        <ul className='space-y-3 text-black mb-12 list-disc list-inside'>
          <li>Built in Manometer</li>
          <li>Build-in Pressure Relief Valve</li>
          <li>Titratable CPAP Pressure</li>
          <li>Highly Portable, Easy Set-up</li>
          <li>Latex-Free</li>
        </ul>

        {/* Separator */}
        <div className='h-px bg-white/20 my-12'></div>

        {/* Deluxe Mask with Straight Rotating Port */}
        <div className='mb-12'>
          <h3 className='text-2xl font-semibold text-black mb-4'>Deluxe Mask with Straight Rotating Port</h3>
          <p className='text-black mb-4'>Ideal for EMS.</p>
          <ul className='space-y-2 text-black list-disc list-inside'>
            <li>Netted headgear is easily stretch when placing on patients.</li>
            <li>Accept standard nebulizer in-line with the port.</li>
            <li>Easy access for delivering nitroglycerin or other medication.</li>
            <li>Available with or without oxygen ports.</li>
          </ul>
        </div>

        {/* Separator */}
        <div className='h-px bg-white/20 my-12'></div>

        {/* Deluxe Mask with 90° Swivel Port and Anti-Asphyxia Valve */}
        <div className='mb-12'>
          <h3 className='text-2xl font-semibold text-black mb-4'>Deluxe Mask with 90° Swivel Port and Anti-Asphyxia Valve</h3>
          <ul className='space-y-2 text-black list-disc list-inside'>
            <li>Anti-asphyxia valve with open system for CPAP patients.</li>
            <li>Netted headgear is easily stretch when placing on patients.</li>
            <li>Accept standard nebulizer in-line with the port.</li>
            <li>Easy access for delivering nitroglycerin or other medication.</li>
            <li>Available with or without oxygen ports.</li>
          </ul>
        </div>

        {/* Separator */}
        <div className='h-px bg-white/20 my-12'></div>

        {/* Intermediate Cushion Mask with Fabric Headstrap */}
        <div className='mb-12'>
          <h3 className='text-2xl font-semibold text-black mb-4'>Intermediate Cushion Mask with Fabric Headstrap</h3>
          <ul className='space-y-2 text-black list-disc list-inside'>
            <li>Include an inflation valve.</li>
            <li>Comfortable non-stretchy fabric material for headstrap.</li>
            <li>Easy access for administering medication.</li>
          </ul>
        </div>

        {/* Separator */}
        <div className='h-px bg-white/20 my-12'></div>

        {/* Cushion Mask with Blue Neoprene Headstrap */}
        <div className='mb-12'>
          <h3 className='text-2xl font-semibold text-black mb-4'>Cushion Mask with Blue Neoprene Headstrap</h3>
          <ul className='space-y-2 text-black list-disc list-inside'>
            <li>Accept standard nebulizer in-line with the port.</li>
            <li>Cushion mask contain color-coded hook ring for attaching the blue neoprene headstrap.</li>
            <li>Easy access for administering medication.</li>
          </ul>
        </div>
      </section>

      {/* Final Image Section */}
      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='rounded-2xl overflow-hidden shadow-xl'>
          <img
            src={product.image || '/public/cpap.png'}
            alt='Flow-Safe II Disposable CPAP'
            className='w-full h-auto object-cover'
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-black'>
              Contact our specialists to discuss how Flow-Safe II Disposable CPAP can enhance your respiratory care protocols.
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

export default DisposableCPAPPage
