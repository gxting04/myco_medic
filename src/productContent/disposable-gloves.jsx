import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ProductDetailDefault from '@/components/ProductDetailDefault'
import slugify from '@/utils/slugify'

function DisposableGlovesPage({ product }) {
  const categorySlug = slugify(product.category)

  return (
    <div className='bg-white text-gray-900'>
      <Header />

      <main className='py-16 bg-gradient-to-b from-orange-50 via-white to-white'>
        <section className='max-w-7xl mx-auto px-6'>
          <Breadcrumb product={product} categorySlug={categorySlug} />

          <div className='grid lg:grid-cols-[2fr,1fr] gap-12'>
            <article className='space-y-12'>
              <Hero product={product} />
              <UseCases />
              <QualityChecklist />
              <VideoDemo />
            </article>

            <aside>
              <QuickFacts product={product} />
              <ContactCard product={product} />
            </aside>
          </div>
        </section>

        <section className='max-w-7xl mx-auto px-6 mt-24'>
          <h2 className='text-2xl font-semibold mb-6'>Need a standard product layout?</h2>
          <p className='text-gray-600 mb-8'>
            You can still show the familiar default layout for quick reference. Feel free to mix
            and match bespoke sections with the reusable template.
          </p>
          <div className='border rounded-3xl overflow-hidden shadow-lg'>
            <ProductDetailDefault product={product} />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

function Breadcrumb({ product, categorySlug }) {
  return (
    <nav className='mb-8 text-sm text-gray-500'>
      <Link to='/' className='hover:text-primary'>Home</Link>
      <span className='mx-2'>{'›'}</span>
      <Link to='/products' className='hover:text-primary'>Products</Link>
      <span className='mx-2'>{'›'}</span>
      <Link to={`/products/category/${categorySlug}`} className='hover:text-primary'>
        {product.category}
      </Link>
      <span className='mx-2'>{'›'}</span>
      <span className='text-gray-900 font-medium'>{product.name}</span>
    </nav>
  )
}

function Hero({ product }) {
  return (
    <div className='bg-white rounded-3xl shadow-xl overflow-hidden'>
      <div className='grid lg:grid-cols-2 gap-0'>
        <div className='p-10 flex flex-col justify-center'>
          <h1 className='text-4xl font-bold mb-4'>{product.name}</h1>
          <p className='text-lg text-gray-600 mb-6'>
            Powder-free nitrile gloves designed to protect clinicians and patients in sensitive
            procedures. Available in four sizes with enhanced tactile feedback for delicate work.
          </p>
          <ul className='space-y-3 text-gray-700'>
            <li>• ASTM D6319 compliant medical grade</li>
            <li>• Textured fingertips for superior grip</li>
            <li>• Latex-free hypoallergenic formulation</li>
            <li>• 200 gloves per dispenser box</li>
          </ul>
        </div>
        <div className='relative bg-gradient-to-br from-orange-100 via-white to-orange-50 flex items-center justify-center p-10'>
          <img
            src={product.image}
            alt={product.name}
            className='w-full max-w-md rounded-2xl shadow-2xl'
          />
          <div className='absolute bottom-6 right-6 bg-white shadow-lg rounded-xl px-4 py-2 text-sm font-medium text-primary'>
            {product.category}
          </div>
        </div>
      </div>
    </div>
  )
}

function UseCases() {
  const scenarios = [
    { title: 'Surgical Prep', description: 'Sterile handling of instruments and patient draping.' },
    { title: 'Laboratory Analysis', description: 'Chemical-resistant protection for sample processing.' },
    { title: 'Dental Procedures', description: 'High dexterity for fine motor control during treatments.' },
    { title: 'Emergency Response', description: 'Reliable barrier in high-pressure, high-turnover settings.' }
  ]

  return (
    <div className='bg-white rounded-3xl shadow-md p-10'>
      <h2 className='text-2xl font-semibold mb-6'>Where teams rely on these gloves</h2>
      <div className='grid sm:grid-cols-2 gap-6'>
        {scenarios.map((scenario) => (
          <div key={scenario.title} className='border border-gray-100 rounded-2xl p-6 hover:border-primary/30 transition-colors'>
            <h3 className='font-semibold text-lg mb-2'>{scenario.title}</h3>
            <p className='text-gray-600 text-sm'>{scenario.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function QualityChecklist() {
  const checklist = [
    'Meets EN455 & ISO 13485 quality benchmarks',
    '7 mil finger thickness for puncture resistance',
    'Chemical splash tested against common disinfectants',
    'Textured surface maintains grip when wet',
    'Shelf life: 5 years from manufacturing date'
  ]

  return (
    <div className='bg-orange-500/10 border border-orange-200 rounded-3xl p-10'>
      <h2 className='text-2xl font-semibold text-orange-700 mb-6'>Quality assurance checklist</h2>
      <ul className='space-y-3 text-gray-700'>
        {checklist.map(item => (
          <li key={item} className='flex items-start gap-3'>
            <span className='mt-1 w-2 h-2 rounded-full bg-orange-500'></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function VideoDemo() {
  return (
    <div className='bg-white rounded-3xl shadow-lg p-10'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-2xl font-semibold'>Product handling demonstration</h2>
        <span className='text-sm text-gray-500'>2 min watch</span>
      </div>
      <div className='relative pt-[56.25%] rounded-2xl overflow-hidden shadow-lg'>
        <iframe
          title='Disposable Gloves Demo'
          src='https://www.youtube.com/embed/WIib1GJgPfY'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='absolute inset-0 w-full h-full'
        />
      </div>
    </div>
  )
}

function QuickFacts({ product }) {
  return (
    <div className='bg-white rounded-3xl shadow-md p-8 mb-8'>
      <h3 className='text-xl font-semibold mb-4'>Quick facts</h3>
      <ul className='space-y-3 text-gray-700'>
        <li><strong>Price:</strong> ${product.price}</li>
        <li><strong>Sizes:</strong> XS, S, M, L</li>
        <li><strong>Color:</strong> Cobalt Blue</li>
        <li><strong>Material:</strong> Synthetic nitrile</li>
      </ul>
    </div>
  )
}

function ContactCard({ product }) {
  return (
    <div className='bg-orange-500 text-white rounded-3xl p-8 shadow-lg'>
      <h3 className='text-xl font-semibold mb-3'>Need tailored glove programs?</h3>
      <p className='text-orange-50 mb-6 text-sm'>
        We support hospitals with monthly replenishment schedules, bulk pricing, and compliance documentation.
      </p>
      <a
        href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-white/90 transition-colors w-full'
      >
        Coordinate with Supply Team
      </a>
    </div>
  )
}

export default DisposableGlovesPage

