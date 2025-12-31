import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'
import { useCart } from '@/context/CartContext'

// Based on the official Myco Medic page:
// https://www.mycomedic.com.my/memory-chest-hipbone-pads.html
const SIZE_OPTIONS = [
  {
    code: 'OKL-X01',
    label: 'OKL-X01 – 480 mm x 250 mm x 100 mm',
    sizeText: '480 mm x 250 mm x 100 mm'
  },
  {
    code: 'OKL-X02',
    label: 'OKL-X02 – 330 mm x 300 mm x 80 mm',
    sizeText: '330 mm x 300 mm x 80 mm'
  },
  {
    code: 'OKL-X03',
    label: 'OKL-X03 – 400 mm x 150 mm x 120 mm',
    sizeText: '400 mm x 150 mm x 120 mm'
  },
  {
    code: 'OKL-Y03',
    label: 'OKL-Y03 – 470 mm x 210 mm x 100 mm',
    sizeText: '470 mm x 210 mm x 100 mm'
  }
]

function MemoryChestHipbonePadsPage({ product }) {
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const [selectedSize, setSelectedSize] = useState(SIZE_OPTIONS[0])
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const category = product?.category
    ? Data.productCategories.find((c) => c.name === product.category)
    : null

  const backLink = category
    ? `/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  const buildCartProduct = () => {
    const variantLabel = `${selectedSize.code} (${selectedSize.sizeText})`

    return {
      ...product,
      // Each size becomes its own cart line item
      id: `${product.id}-${selectedSize.code}`,
      name: `${product.name} - ${variantLabel}`,
      selectedSize: selectedSize.sizeText,
      modelCode: selectedSize.code
    }
  }

  const handleAddToCart = () => {
    const cartProduct = buildCartProduct()
    addToCart(cartProduct, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    const cartProduct = buildCartProduct()
    addToCart(cartProduct, quantity)
    navigate('/checkout')
  }

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-20 lg:py-28'>
          <div className='lg:w-3/4'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Memory Foam Positioners / Memory Chest and Body Pads
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-4 text-black'>
              Memory Chest-Hipbone Pads (OKL-X01 / OKL-X02 / OKL-X03 / OKL-Y03)
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Memory foam chest-hipbone pads that provide protection and reduce pressure for the chest, create free
              space for the abdomen, and help maintain good respiratory and circulatory function in cervical and lumbar
              spinal surgeries.
            </p>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Image */}
          <div>
            <img
              src={product?.image}
              alt='Memory Chest-Hipbone Pads'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

          {/* Info + size selector + actions */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-3xl font-bold text-black mb-4'>Key benefits</h2>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start gap-3'>
                  <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Provide protection and reduce pressure for the chest during prone procedures.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Provide free space for the patient's abdomen to avoid compression.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <span>
                    Help maintain good respiratory and circulatory functioning in cervical and lumbar spinal surgeries.
                  </span>
                </li>
              </ul>
            </div>

            {/* Size selector */}
            <div className='space-y-3'>
              <h3 className='text-xl font-semibold text-black'>Choose size / model</h3>
              <div className='grid gap-2'>
                {SIZE_OPTIONS.map((option) => (
                  <button
                    key={option.code}
                    type='button'
                    onClick={() => setSelectedSize(option)}
                    className={`flex items-center justify-between border rounded-lg px-4 py-3 text-left transition-colors ${
                      selectedSize.code === option.code
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-300 hover:border-primary'
                    }`}
                  >
                    <div>
                      <div className='font-medium text-gray-900'>{option.label}</div>
                    </div>
                    {selectedSize.code === option.code && (
                      <svg className='w-5 h-5 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className='flex items-center gap-4'>
              <label className='text-gray-700 font-medium'>Quantity:</label>
              <div className='flex items-center border border-gray-300 rounded-lg'>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='px-4 py-2 hover:bg-gray-100 transition-colors'
                >
                  -
                </button>
                <input
                  type='number'
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className='w-16 text-center border-x border-gray-300 py-2'
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className='px-4 py-2 hover:bg-gray-100 transition-colors'
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={handleAddToCart}
                className={`${
                  addedToCart ? 'bg-green-600' : 'bg-primary'
                } text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg flex items-center justify-center gap-2`}
              >
                {addedToCart ? (
                  <>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                    Added to Cart
                  </>
                ) : (
                  'Add to Cart'
                )}
              </button>

              <button
                onClick={handleBuyNow}
                className='bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg'
              >
                Buy Now
              </button>

              <a
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${
                  product?.name
                } (${selectedSize.code} - ${selectedSize.sizeText})`}
                target='_blank'
                rel='noopener noreferrer'
                className='border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium text-lg text-center'
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Sizing table */}
        <div className='mt-12'>
          <h2 className='text-3xl font-bold mb-6 text-black'>Models &amp; sizing</h2>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-primary text-white'>
                  <tr>
                    <th className='px-6 py-4 text-left font-semibold'>Model</th>
                    <th className='px-6 py-4 text-left font-semibold'>Size</th>
                    <th className='px-6 py-4 text-left font-semibold'>Typical use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-gray-50'>
                    <td className='px-6 py-4 font-medium text-gray-900'>OKL-X01</td>
                    <td className='px-6 py-4 text-gray-700'>480 mm x 250 mm x 100 mm</td>
                    <td className='px-6 py-4 text-gray-700'>
                      Larger pad for broad chest support and pressure reduction in prone cervical or lumbar surgeries.
                    </td>
                  </tr>
                  <tr className='bg-white'>
                    <td className='px-6 py-4 font-medium text-gray-900'>OKL-X02</td>
                    <td className='px-6 py-4 text-gray-700'>330 mm x 300 mm x 80 mm</td>
                    <td className='px-6 py-4 text-gray-700'>
                      Medium footprint pad creating a relief channel under the abdomen while supporting the chest.
                    </td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='px-6 py-4 font-medium text-gray-900'>OKL-X03</td>
                    <td className='px-6 py-4 text-gray-700'>400 mm x 150 mm x 120 mm</td>
                    <td className='px-6 py-4 text-gray-700'>
                      More compact pad suited for focused chest or hipbone protection.
                    </td>
                  </tr>
                  <tr className='bg-white'>
                    <td className='px-6 py-4 font-medium text-gray-900'>OKL-Y03</td>
                    <td className='px-6 py-4 text-gray-700'>470 mm x 210 mm x 100 mm</td>
                    <td className='px-6 py-4 text-gray-700'>
                      Elongated pad providing extended contact area along the chest and hip region.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Back navigation */}
        <div className='mt-12 pt-8 border-t border-gray-200'>
          <Link
            to={backLink}
            className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors'
          >
            <svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
            Back to Memory Chest and Body Pads
          </Link>
        </div>
      </section>

      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product?.name}`} />
      <Footer />
    </div>
  )
}

export default MemoryChestHipbonePadsPage


