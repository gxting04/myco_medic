import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function DisposableManometerPage({ product }) {
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
      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>Airway Management</span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6 text-black'>
              Disposable Manometer
            </h1>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a 
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
                className='px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Talk to a Specialist
              </a>
              {group && (
                <Link
                  to={backLink}
                  className='px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-primary transition-colors text-black'
                >
                  View More Products
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Three Images Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Mercury Medical Disposable Manometer'
              className='w-full h-auto object-cover'
            />
          </div>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Mercury Medical Disposable Manometer Features'
              className='w-full h-auto object-cover'
            />
          </div>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Mercury Medical Disposable Manometer Details'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='space-y-6 text-lg text-gray-700 leading-relaxed'>
          <p>
            The Mercury Medical Disposable Pressure Manometer is the first disposable manometer to reliably monitor BOTH proper inflation pressure and PEEP pressure during manual ventilation with Mercury's CPR and Hyperinflation Systems. And now the Mercury Medical Disposable Pressure Manometer is available with a colour-coded label for improved visibility of pressure ranges.
          </p>
          <p>
            The Mercury Medical Disposable Colour-Coded Manometer allows for in-line monitoring of BOTH airway pressure and PEEP pressures, when used in conjunction with Mercury's CPR resuscitation bags.
          </p>
          <p>
            The Mercury Medical Disposable Colour-Coded Manometer is ready when you need a manometer so you don't need to search or deal with a broken reusable manometer again!
          </p>
        </div>
      </section>

      {/* Benefits Section with Red Text */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <p className='text-xl font-semibold text-red-600 mb-8'>
          Only the Mercury Medical Colour-Coded Manometer offers all the following:
        </p>
        <ul className='space-y-4 text-gray-700 list-disc list-inside'>
          <li className='leading-relaxed'>
            New colour-coding for improved visibility of pressure ranges.
          </li>
          <li className='leading-relaxed'>
            In-line use attaches directly onto CPR and hyperinflation resuscitation bags reducing the need to look away from the patient while monitoring pressure.*
          </li>
          <li className='leading-relaxed'>
            Monitoring of BOTH airway and PEEP pressures.
          </li>
          <li className='leading-relaxed'>
            Disposable feature to address potential infection control issues and eliminate search for misplaced or broken reusable devices.
          </li>
          <li className='leading-relaxed'>
            Latex-Free
          </li>
          <li className='leading-relaxed'>
            Accuracy of ± 3 cm H2O up to 15 cm H2O
          </li>
          <li className='leading-relaxed'>
            Accuracy of ± 5 cm H2O over 15 cm H2O
          </li>
        </ul>
      </section>

      {/* Two Images Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Mercury Medical Disposable Manometer In-Use'
              className='w-full h-auto object-cover'
            />
          </div>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Mercury Medical Disposable Manometer Specifications'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      {/* Single Image Section */}
      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='rounded-2xl overflow-hidden shadow-xl'>
          <img
            src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
            alt='Mercury Medical Disposable Manometer'
            className='w-full h-auto object-cover'
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-gray-700'>
              Contact our specialists to discuss how the Mercury Medical Disposable Colour-Coded Manometer can enhance your respiratory care monitoring capabilities.
            </p>
          </div>
          <a 
            href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
            className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors'
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

export default DisposableManometerPage

