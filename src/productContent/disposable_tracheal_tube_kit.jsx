import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

function DisposableTrachealTubeKitPage({ product }) {
  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src={product.image}
            alt='Disposable Tracheal Tube Kit'
            className='w-full h-full object-cover opacity-30'
          />
        </div>
        <div className='relative max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>Airway Management</span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6'>
              Disposable Tracheal Tube Kit
            </h1>
            <p className='text-lg lg:text-xl text-black mb-8'>
              Including endotracheal tube, suction tube, suction connecting tube, injection syringe, endotracheal tube holder, oropharyngeal airway, laryngoscope, gloves, intubating stylet and blanket.
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
              <Link
                to='/products'
                className='px-6 py-3 border border-white/40 rounded-lg font-medium hover:border-white transition-colors'
              >
                View More Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
          <div className='space-y-6'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Full products for use.
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Different endotracheal tubes for choosing.
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                1set/box, 20boxes/carton.
              </p>
            </div>
          </div>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image}
              alt='Disposable Tracheal Tube Kit'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='text-3xl font-bold text-black mb-8'>Available Types</h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-primary/10'>
                  <th className='border border-gray-300 px-6 py-3 text-left font-semibold text-black'>REF NO</th>
                  <th className='border border-gray-300 px-6 py-3 text-left font-semibold text-black'>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-gray-300 px-6 py-4 text-black'>EB-P</td>
                  <td className='border border-gray-300 px-6 py-4 text-black'>PVC Endotracheal Tube Kit</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-6 py-4 text-black'>EB-S1</td>
                  <td className='border border-gray-300 px-6 py-4 text-black'>Reinforced PVC Endotracheal Tube Kit</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 px-6 py-4 text-black'>EB-S2</td>
                  <td className='border border-gray-300 px-6 py-4 text-black'>Reinforced Silicone Endotracheal Tube Kit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-black'>
              Contact our specialists to discuss how Disposable Tracheal Tube Kit can enhance your airway management protocols.
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

export default DisposableTrachealTubeKitPage

