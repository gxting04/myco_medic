import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function PVCDoubleLumenEndobronchialTubePage({ product }) {
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
            alt='PVC Double Lumen Endobronchial Tube'
            className='w-full h-full object-cover opacity-30'
          />
        </div>
        <div className='relative max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>Airway Management</span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6'>
              PVC Double Lumen Endobronchial Tube (Left side & Right side & Left side with Carina)
            </h1>
            <div className='flex flex-wrap gap-4 mt-8'>
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
        <h2 className='text-3xl font-bold text-black mb-8'>Product Features</h2>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Made of Medical PVC, DEHP free, transparent
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Used for one-lung ventilation
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                High volume low pressure cuff reduces the pressure to trachea
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Accompanied with intubating stylet, suction tube & connectors
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary'></div>
              <p className='text-lg text-black'>
                Package: 1pc/box, 10pcs/carton
              </p>
            </div>
          </div>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image}
              alt='PVC Double Lumen Endobronchial Tube'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <h2 className='text-3xl font-bold text-black mb-8'>Size Reference</h2>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden'>
            <thead>
              <tr className='bg-primary/10'>
                <th className='border border-gray-300 px-6 py-4 text-left font-semibold text-black'>Size</th>
                <th className='border border-gray-300 px-6 py-4 text-left font-semibold text-black'>Reference NO# (Left Side)</th>
                <th className='border border-gray-300 px-6 py-4 text-left font-semibold text-black'>Reference NO# (Right Side)</th>
                <th className='border border-gray-300 px-6 py-4 text-left font-semibold text-black'>Reference NO# (Left Side with Carina)</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-6 py-4 text-black'>26Fr</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0126</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0226</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0326</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-6 py-4 text-black'>28Fr</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0128</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0228</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0328</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-6 py-4 text-black'>32Fr</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0132</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0232</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0332</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-6 py-4 text-black'>35Fr</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0135</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0235</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0335</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-6 py-4 text-black'>37Fr</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0137</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0237</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0337</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-6 py-4 text-black'>39Fr</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0139</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0239</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0339</td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-6 py-4 text-black'>41Fr</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0141</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0241</td>
                <td className='border border-gray-300 px-6 py-4 text-black'>DLT0341</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-black'>
              Contact our specialists to discuss how PVC Double Lumen Endobronchial Tube can enhance your airway management protocols.
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

export default PVCDoubleLumenEndobronchialTubePage

