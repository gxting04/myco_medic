import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import slugify from '@/utils/slugify'

function SurgicalMaskPage({ product }) {
  const categorySlug = slugify(product.category)

  return (
    <div className='bg-sky-50 min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        <section className='bg-white shadow-sm border-b border-sky-100'>
          <div className='max-w-6xl mx-auto px-6 py-12 lg:py-16 grid lg:grid-cols-2 gap-10 items-center'>
            <div>
              <span className='uppercase text-xs tracking-[0.3em] text-sky-500 font-semibold'>Protective Wear</span>
              <h1 className='text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6'>{product.name}</h1>
              <p className='text-lg text-slate-600 leading-relaxed'>
                Triple-layer filtration meets breathable comfort. Designed to safeguard care teams and patients
                through extended shifts without compromising protection.
              </p>
              <div className='mt-8 flex flex-wrap gap-4'>
                <a
                  href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-5 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors'
                >
                  Book a consultation
                </a>
                <Link
                  to={`/products/category/${categorySlug}`}
                  className='px-5 py-3 border border-slate-300 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors'
                >
                  View category
                </Link>
              </div>
            </div>
            <div className='relative'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full rounded-3xl shadow-2xl border border-white'
              />
              <div className='absolute -bottom-6 left-6 bg-white rounded-2xl shadow-lg px-5 py-4 text-sm text-slate-600'>
                <p><strong>Filtration:</strong> ≥98% BFE</p>
                <p><strong>Compliance:</strong> ASTM F2100 Level 2</p>
              </div>
            </div>
          </div>
        </section>

        <section className='max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1.7fr,1fr] gap-12'>
          <article className='space-y-10'>
            <div className='bg-white rounded-3xl p-10 shadow-md border border-sky-100'>
              <h2 className='text-2xl font-semibold text-slate-900 mb-4'>Product narrative</h2>
              <p className='text-slate-600 leading-relaxed'>
                Crafted with melt-blown filtration and hypoallergenic inner layers, the {product.name} delivers
                dependable protection even in high-aerosol environments. The contoured nose bridge ensures a snug,
                customizable fit, while the ultralight ear loops minimize fatigue during long procedures.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              {keyHighlights.map((item) => (
                <div key={item.title} className='bg-white rounded-3xl p-8 shadow-inner border border-sky-100'>
                  <h3 className='text-lg font-semibold text-slate-900 mb-3'>{item.title}</h3>
                  <p className='text-sm text-slate-600 leading-relaxed'>{item.description}</p>
                </div>
              ))}
            </div>

            <div className='bg-white rounded-3xl p-10 shadow-md border border-sky-100'>
              <h2 className='text-2xl font-semibold text-slate-900 mb-4'>Implementation playbook</h2>
              <ul className='space-y-3 text-slate-600 leading-relaxed'>
                <li>• Deploy color-coded batches to differentiate sterilized inventory.</li>
                <li>• Pair with fit-testing protocols for high-risk procedures.</li>
                <li>• Integrate with PPE vending systems for automated accountability.</li>
                <li>• Provide QR-linked instructions for rapid onboarding of temp staff.</li>
              </ul>
            </div>
          </article>

          <aside className='space-y-8'>
            <div className='bg-white rounded-3xl p-8 shadow-md border border-sky-100'>
              <h3 className='text-xl font-semibold text-slate-900 mb-4'>Specifications</h3>
              <ul className='space-y-3 text-slate-600'>
                <li>Price per box (50 pcs): ${product.price}</li>
                <li>Layers: Spunbond + Melt-blown + Spunbond</li>
                <li>Compliance: EN 14683 Type IIR</li>
                <li>Fluid resistance: 120 mmHg</li>
                <li>Color: Medical blue</li>
              </ul>
            </div>

            <div className='bg-primary text-white rounded-3xl p-8 shadow-lg'>
              <h3 className='text-xl font-semibold mb-3'>Need a PPE bundle?</h3>
              <p className='text-sm text-primary-foreground/80 mb-6'>
                Combine masks with disposable gowns, visors, and sanitizers in a single procurement contract.
              </p>
              <a
                href='mailto:sales@mycomedic.com?subject=PPE%20Bundle%20Inquiry'
                className='inline-flex items-center justify-center px-5 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors w-full'
              >
                Email our team
              </a>
            </div>

            <div className='bg-white rounded-3xl p-8 shadow-md border border-sky-100'>
              <h3 className='text-lg font-semibold text-slate-900 mb-3'>Supporting documents</h3>
              <ul className='space-y-2 text-sm text-primary'>
                <li>
                  <a href='#' className='hover:underline'>• Product data sheet (PDF)</a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>• Lab testing summary</a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>• Compliance certificates</a>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

const keyHighlights = [
  {
    title: 'Breathable + Secure',
    description: 'Optimized airflow keeps staff cool while reinforced seams maintain structural integrity.'
  },
  {
    title: 'Extended Wear',
    description: 'Soft-touch ear loops with stretch memory eliminate pressure marks, even after 8+ hour use.'
  },
  {
    title: 'Universal Fit',
    description: 'Adaptive nose bridge and pleated design accommodate varied face shapes and facial hair.'
  },
  {
    title: 'Sustainable Disposal',
    description: 'Compatible with waste-to-energy PPE recycling partners across Malaysia.'
  }
]

export default SurgicalMaskPage

