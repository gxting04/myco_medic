import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function LaryngoscopesPage({ product }) {
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
              Laryngoscopes
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

      {/* Image Section 1 */}
      <section className='max-w-6xl mx-auto px-6 py-8'>
        <img
          src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
          alt='Laryngoscopes'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Image Section 2 */}
      <section className='max-w-6xl mx-auto px-6 py-8'>
        <img
          src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
          alt='Laryngoscopes'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Image Section 3 */}
      <section className='max-w-6xl mx-auto px-6 py-8'>
        <img
          src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
          alt='Laryngoscopes'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Image Section 4 */}
      <section className='max-w-6xl mx-auto px-6 py-8'>
        <img
          src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
          alt='Laryngoscopes'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Image Section 5 */}
      <section className='max-w-6xl mx-auto px-6 py-8'>
        <img
          src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
          alt='Laryngoscopes'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Image Section 6 */}
      <section className='max-w-6xl mx-auto px-6 py-8'>
        <img
          src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
          alt='Laryngoscopes'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Image Section 7 */}
      <section className='max-w-6xl mx-auto px-6 py-8'>
        <img
          src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
          alt='Laryngoscopes'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Image Section 8 */}
      <section className='max-w-6xl mx-auto px-6 py-8'>
        <img
          src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
          alt='Laryngoscopes'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Image Section 9 */}
      <section className='max-w-6xl mx-auto px-6 py-8'>
        <img
          src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
          alt='Laryngoscopes'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Call to Action */}
      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-gray-700'>
              Contact our specialists to discuss how Laryngoscopes can enhance your airway management capabilities.
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

export default LaryngoscopesPage

