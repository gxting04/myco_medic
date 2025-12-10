import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function PvcNasalEndotrachealTubePage({ product }) {
  const category = product.category 
    ? Data.productCategories.find(c => c.name === product.category)
    : null
  
  const backLink = category 
    ? `/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src={product.image}
            alt='PVC Nasal Endotracheal Tube'
            className='w-full h-full object-cover opacity-30'
          />
        </div>
        <div className='relative max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>Airway Management</span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6'>
              PVC Nasal Endotracheal Tube (Cuffed & Uncuffed)
            </h1>
            <p className='text-lg lg:text-xl text-black mb-8'>
              Medical PVC, DEHP free, transparent.
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
              {category && (
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
        <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
          <div className='space-y-6'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Nasal preformed to reduce tube kinking during nasal intubation.
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Used for oral surgery, maxillofacial surgery.
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                High volume low pressure cuff reduces the pressure to trachea.
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Radio opaque line for x-ray visualization.
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Murphy eye.
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Package: 10pcs/box, 100pcs/carton.
              </p>
            </div>
          </div>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image}
              alt='PVC Nasal Endotracheal Tube'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>

        <div className='mt-16'>
          <h2 className='text-3xl font-bold text-black mb-8'>Cuffed</h2>
          <div className='grid md:grid-cols-2 gap-12 items-start mb-16'>
            <div className='rounded-2xl overflow-hidden shadow-xl'>
              <img
                src={product.image}
                alt='PVC Nasal Endotracheal Tube - Cuffed'
                className='w-full h-auto object-cover'
              />
            </div>
            <div className='overflow-x-auto'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='bg-primary/10'>
                    <th className='border border-gray-300 px-6 py-3 text-left font-semibold text-black'>Size</th>
                    <th className='border border-gray-300 px-6 py-3 text-left font-semibold text-black'>Reference NO#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>4.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT4013C</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='border border-gray-300 px-6 py-4 text-black'>4.5</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT4513C</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>5.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT5013C</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='border border-gray-300 px-6 py-4 text-black'>5.5</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT5513C</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>6.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT6013C</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='border border-gray-300 px-6 py-4 text-black'>6.5</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT6513C</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>7.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT7013C</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='border border-gray-300 px-6 py-4 text-black'>7.5</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT7513C</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>8.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT8013C</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='border border-gray-300 px-6 py-4 text-black'>8.5</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT8513C</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>9.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT9013C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <h2 className='text-3xl font-bold text-black mb-8'>Uncuffed</h2>
          <div className='grid md:grid-cols-2 gap-12 items-start'>
            <div className='rounded-2xl overflow-hidden shadow-xl'>
              <img
                src={product.image}
                alt='PVC Nasal Endotracheal Tube - Uncuffed'
                className='w-full h-auto object-cover'
              />
            </div>
            <div className='overflow-x-auto'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='bg-primary/10'>
                    <th className='border border-gray-300 px-6 py-3 text-left font-semibold text-black'>Size</th>
                    <th className='border border-gray-300 px-6 py-3 text-left font-semibold text-black'>Reference NO#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>3.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT3013</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='border border-gray-300 px-6 py-4 text-black'>3.5</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT3513</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>4.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT4013</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='border border-gray-300 px-6 py-4 text-black'>4.5</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT4513</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>5.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT5013</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='border border-gray-300 px-6 py-4 text-black'>5.5</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT5513</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>6.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT6013</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='border border-gray-300 px-6 py-4 text-black'>6.5</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT6513</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-6 py-4 text-black'>7.0</td>
                    <td className='border border-gray-300 px-6 py-4 text-black'>ETT7013</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-black'>
              Contact our specialists to discuss how PVC Nasal Endotracheal Tube can enhance your airway management protocols.
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

export default PvcNasalEndotrachealTubePage

