import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function CentralVenousCatheterPage({ product }) {
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
                e.target.src = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop'
              }}
            />
          </div>
          
          <div>
            <span className='text-primary font-semibold tracking-wide uppercase text-sm'>
              {group ? group.name : 'Medical Equipment'}
            </span>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6'>
              {product.name}
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              Designed for safe and reliable central venous access. Features movable clamps, depth markings, and soft tips to minimize trauma.
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

      {/* Features & Specifications */}
      <section className='py-16 px-6 max-w-7xl mx-auto'>
        <div className='bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100'>
          <h2 className='text-3xl font-bold text-gray-900 mb-10'>Product Details</h2>
          
          <div className='space-y-12'>
            {/* Features */}
            <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-6 border-b pb-2 border-gray-100'>Features & Benefits</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex gap-4'>
                  <div className='w-2 h-2 mt-2 rounded-full bg-primary shrink-0' />
                  <p className='text-gray-600'>Movable clamp allows anchorage at puncture site regardless of depth, minimizing trauma and irritation.</p>
                </div>
                <div className='flex gap-4'>
                  <div className='w-2 h-2 mt-2 rounded-full bg-primary shrink-0' />
                  <p className='text-gray-600'>Depth marking assists in accurate placement from the right or left subclavian or jugular vein.</p>
                </div>
                <div className='flex gap-4'>
                  <div className='w-2 h-2 mt-2 rounded-full bg-primary shrink-0' />
                  <p className='text-gray-600'>Soft tip reduces trauma to vessel, minimizing vessel erosion, hemothorax, and cardiac tamponade.</p>
                </div>
                <div className='flex gap-4'>
                  <div className='w-2 h-2 mt-2 rounded-full bg-primary shrink-0' />
                  <p className='text-gray-600'>Available in Single, Double, Triple, and Quad lumen choices.</p>
                </div>
              </div>
            </div>

            {/* Kit Contents */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              <div className='bg-gray-50 rounded-2xl p-8'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>Standard Kits Include</h3>
                <ul className='space-y-2 text-gray-600 text-sm'>
                  <li>1. Central Venous Catheter</li>
                  <li>2. Guide-wire</li>
                  <li>3. Vessel Dilator</li>
                  <li>4. Clamp</li>
                  <li>5. Fastener: Catheter Clamp</li>
                  <li>6. Introducer Needle</li>
                  <li>7. Introducer Syringe</li>
                  <li>8. Injection Needle</li>
                  <li>9. Injection Cap</li>
                </ul>
              </div>

              <div className='bg-gray-50 rounded-2xl p-8'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>Optional Compound Kits Include</h3>
                <ul className='space-y-2 text-gray-600 text-sm'>
                  <li>1. Standard Kit Accessories</li>
                  <li>2. 5ml Syringe</li>
                  <li>3. Surgical Gloves</li>
                  <li>4. Surgical Pledget</li>
                  <li>5. Surgery Sheet</li>
                  <li>6. Surgery Towel</li>
                  <li>7. Sterile Brush</li>
                  <li>8. Gauze Pad</li>
                  <li>9. Suture of Needle</li>
                  <li>10. Wound Dressing</li>
                  <li>11. Scalpel</li>
                </ul>
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

export default CentralVenousCatheterPage

