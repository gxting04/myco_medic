import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function WoundAndSkinWashGlovesPage({ product }) {
  const group = Data.productGroups.find(g => g.id === 4)
  const backLink = group 
    ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-[#f5f5f7] min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='pt-32 pb-16 px-6'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='relative rounded-3xl overflow-hidden shadow-lg aspect-square lg:aspect-auto lg:h-[500px] bg-white p-8 flex items-center justify-center'>
             <img
              src={product.image}
              alt={product.name}
              className='w-full h-full object-contain'
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?q=80&w=2070&auto=format&fit=crop'
              }}
            />
          </div>
          
          <div>
            <span className='text-primary font-semibold tracking-wide uppercase text-sm'>
              {group ? group.name : 'Medical Consumables'}
            </span>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6'>
              {product.name}
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              Disposable wash gloves designed for cleansing and care of bedridden or intensive care patients. Skin-friendly, microwaveable, and effective for wound and skin hygiene.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4'>
              <a 
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
                className='inline-flex justify-center items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30'
                target='_blank'
                rel='noopener noreferrer'
              >
                Enquire Now
              </a>
              <Link
                to={backLink}
                className='inline-flex justify-center items-center px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all'
              >
                View More Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Ingredients */}
      <section className='py-16 px-6 max-w-7xl mx-auto'>
        <div className='bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100'>
          <h2 className='text-3xl font-bold text-gray-900 mb-10'>Product Details</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            
            {/* Features */}
            <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-6 border-b pb-2 border-gray-100'>Key Features</h3>
              <ul className='space-y-4 text-gray-600'>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 rounded-full bg-primary shrink-0' />
                  <span>Cotton-feeling and skin-friendly material.</span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 rounded-full bg-primary shrink-0' />
                  <span>Special surface texture for effective cleaning.</span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 rounded-full bg-primary shrink-0' />
                  <span>Microwave heating capable.</span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 rounded-full bg-primary shrink-0' />
                  <span>Contains 10 pieces per pack for whole-body cleansing.</span>
                </li>
              </ul>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-6 border-b pb-2 border-gray-100'>Ingredients & Benefits</h3>
              <div className='space-y-4 text-gray-600 text-sm'>
                <p><strong>Ingredients List:</strong> Castor oil, Poloxamer, PhenoXyaethanolum, Chlorhexidine, Glycerol, IPBC, Allantoin, Anhydrous Citric Acid, Aloe Vera.</p>
                
                <div className='bg-gray-50 rounded-xl p-4 space-y-2'>
                  <p className='font-medium text-gray-900 mb-2'>Key Ingredient Roles:</p>
                  <div className='grid grid-cols-[1fr,2fr] gap-2'>
                    <span className='font-medium'>Castor Oil</span>
                    <span>Moisturizes, anti-inflammatory, promotes wound healing, prevents fungus.</span>
                    
                    <span className='font-medium'>Chlorhexidine</span>
                    <span>Disinfectant and antiseptic.</span>
                    
                    <span className='font-medium'>Aloe Vera</span>
                    <span>Soothing and skin conditioning.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default WoundAndSkinWashGlovesPage

