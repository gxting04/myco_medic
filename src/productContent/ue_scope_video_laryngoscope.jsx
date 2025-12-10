import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function UEScopeVideoLaryngoscopePage({ product }) {
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
              UE Scope© Video Laryngoscope (VL300 Series)
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

      {/* Benefits Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
          <div className='lg:col-span-1'>
            <h2 className='text-3xl font-bold text-black mb-6'>Benefits</h2>
            <ul className='space-y-3 text-gray-700 list-disc list-inside'>
              <li className='leading-relaxed'>Portable, lightweight (only 180g), and cordless.</li>
              <li className='leading-relaxed'>Ergonomic handle for solid hand grip.</li>
              <li className='leading-relaxed'>Highly efficient anti-fogging function.</li>
              <li className='leading-relaxed'>Easy to operate - require no special training.</li>
              <li className='leading-relaxed'>The display can be rotated in a large angle.</li>
              <li className='leading-relaxed'>Clear view for fast and safe intubation.</li>
              <li className='leading-relaxed'>Can be used for clinical teaching</li>
            </ul>
          </div>
          <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='UE Scope Video Laryngoscope Benefits'
              className='w-full h-auto object-cover'
            />
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='UE Scope Video Laryngoscope Benefits'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      {/* Monitor Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
          <div className='lg:col-span-1'>
            <h2 className='text-3xl font-bold text-black mb-6'>Monitor</h2>
            <ul className='space-y-3 text-gray-700 list-disc list-inside'>
              <li className='leading-relaxed'>6.3 cm colour display.</li>
              <li className='leading-relaxed'>130⁰ back and forth, 270⁰ rotatable.</li>
              <li className='leading-relaxed'>Image and video recording.</li>
              <li className='leading-relaxed'>USB port for charging and data transfer.</li>
              <li className='leading-relaxed'>Built-in rechargeable Li-ion battery.</li>
              <li className='leading-relaxed'>Duration of use: &gt;90 min (max: 4 hours).</li>
            </ul>
          </div>
          <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='UE Scope Video Laryngoscope Monitor'
              className='w-full h-auto object-cover'
            />
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='UE Scope Video Laryngoscope Monitor'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      {/* Blades Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
          <div className='lg:col-span-1'>
            <h2 className='text-3xl font-bold text-black mb-6'>Blades</h2>
            <ul className='space-y-3 text-gray-700 list-disc list-inside'>
              <li className='leading-relaxed'>Reusable</li>
              <li className='leading-relaxed'>5 blade sizes (Fit: Newborn to Adults).</li>
              <li className='leading-relaxed'>It comes with</li>
              <li className='leading-relaxed ml-6'>Macintosh Blades: Size 4, 3, 2, 1</li>
              <li className='leading-relaxed ml-6'>Miller Blade: Size 0.</li>
              <li className='leading-relaxed'>Designed for difficult intubation.</li>
              <li className='leading-relaxed'>Based on the principle of anatomy with various angles and thickness.</li>
              <li className='leading-relaxed'>Good stability.</li>
              <li className='leading-relaxed'>High hardness.</li>
              <li className='leading-relaxed'>Friction factor: only 0.06</li>
              <li className='leading-relaxed'>Load capability can be up to 400N (~30kg).</li>
              <li className='leading-relaxed'>Safe for clinical application.</li>
            </ul>
          </div>
          <div className='lg:col-span-2'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='UE Scope Video Laryngoscope Blades'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      {/* Camera Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
          <div className='lg:col-span-1'>
            <h2 className='text-3xl font-bold text-black mb-6'>Camera</h2>
            <ul className='space-y-3 text-gray-700 list-disc list-inside'>
              <li className='leading-relaxed'>High quality</li>
              <li className='leading-relaxed'>No blind spots</li>
              <li className='leading-relaxed'>LED light source create perfect lighting</li>
              <li className='leading-relaxed'>Anti-fogging lamination for safe examination</li>
              <li className='leading-relaxed'>Angle of visual field 70⁰</li>
              <li className='leading-relaxed'>Straight and curved reusable lenses</li>
            </ul>
          </div>
          <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='UE Scope Video Laryngoscope Camera'
              className='w-full h-auto object-cover'
            />
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='UE Scope Video Laryngoscope Camera'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <h2 className='text-3xl font-bold text-black mb-8'>Types of Video Laryngoscope</h2>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
          {/* Neonatal Type */}
          <div className='space-y-4'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Neonatal Type Video Laryngoscope VL300SS'
              className='w-full h-auto object-cover'
            />
            <div>
              <h3 className='text-lg font-semibold text-black mb-2'>Neonatal Type Video Laryngoscope VL300SS</h3>
              <ul className='space-y-1 text-gray-700 text-sm list-disc list-inside'>
                <li>Miller blade size 0</li>
                <li>Suitable for neonatal airway</li>
              </ul>
            </div>
          </div>

          {/* Infantile Type */}
          <div className='space-y-4'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Infantile Type Video Laryngoscope VL300S'
              className='w-full h-auto object-cover'
            />
            <div>
              <h3 className='text-lg font-semibold text-black mb-2'>Infantile Type Video Laryngoscope VL300S</h3>
              <ul className='space-y-1 text-gray-700 text-sm list-disc list-inside'>
                <li>Macintosh blade size 1</li>
                <li>Suitable for infantile aged 0 -2 years old</li>
              </ul>
            </div>
          </div>

          {/* Childhood Type */}
          <div className='space-y-4'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Childhood Type Video Laryngoscope VL300SM'
              className='w-full h-auto object-cover'
            />
            <div>
              <h3 className='text-lg font-semibold text-black mb-2'>Childhood Type Video Laryngoscope VL300SM</h3>
              <ul className='space-y-1 text-gray-700 text-sm list-disc list-inside'>
                <li>Macintosh blade size 2</li>
                <li>Suitable for children of 2 years to 6 years old</li>
              </ul>
            </div>
          </div>

          {/* Med. Adult Type */}
          <div className='space-y-4'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Med. Adult type Video Laryngoscope VL300M'
              className='w-full h-auto object-cover'
            />
            <div>
              <h3 className='text-lg font-semibold text-black mb-2'>Med. Adult type Video Laryngoscope VL300M</h3>
              <ul className='space-y-1 text-gray-700 text-sm list-disc list-inside'>
                <li>Macintosh blade size 3</li>
              </ul>
            </div>
          </div>

          {/* Adult Type */}
          <div className='space-y-4'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Adult type Video Laryngoscope VL300L'
              className='w-full h-auto object-cover'
            />
            <div>
              <h3 className='text-lg font-semibold text-black mb-2'>Adult type Video Laryngoscope VL300L</h3>
              <ul className='space-y-1 text-gray-700 text-sm list-disc list-inside'>
                <li>Macintosh blade size 4</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Image Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <img
          src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
          alt='UE Scope Video Laryngoscope'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Call to Action */}
      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-gray-700'>
              Contact our specialists to discuss how the UE Scope© Video Laryngoscope (VL300 Series) can enhance your airway management capabilities.
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

export default UEScopeVideoLaryngoscopePage

