import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Data from '@/shared/Data'
import ProductDetailDefault from '../components/ProductDetailDefault'
import { getProductPath } from '@/utils/productUrl'

// Based on the official Myco Medic page:
// https://www.mycomedic.com.my/memory-universal-positioners.html
// This page acts as a small category landing page for:
// - Memory Universal Square Pads
// - Memory Pillow Shaped Pads

const description = `A family of memory foam positioners designed for versatile support and pressure redistribution. This mini-category includes both the memory universal square pads and memory pillow shaped pads, which can be selected based on the support surface and patient positioning needs.`

const RANGE = [
  {
    pageId: 'memory-universal-square-pads',
    name: 'Memory Universal Square Pads',
    image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/universal-square-pads-1-removebg-preview_orig.png',
    text: 'Square, flat memory foam pads that can be placed under multiple body regions to offload pressure and provide general-purpose support.'
  },
  {
    pageId: 'memory-pillow-shaped-pads',
    name: 'Memory Pillow Shaped Pads',
    image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/pillow-shaped-pads-1-removebg-preview_orig.png',
    text: 'Contoured pillow-style memory foam pads for cradling and supporting curved anatomical regions while redistributing pressure.'
  }
]

function MemoryUniversalPositionersPage({ product }) {
  const range = useMemo(
    () =>
      RANGE.map((item) => {
        const linked = Data.initialProducts.find((p) => p.pageId === item.pageId)
        return { ...item, to: linked ? getProductPath(linked) : '/products' }
      }),
    []
  )

  const rangeSection = (
    <div className="grid gap-4 sm:grid-cols-2">
      {range.map((item) => (
        <Link
          key={item.pageId}
          to={item.to}
          className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 transition-colors hover:border-gray-400"
        >
          <div className="flex aspect-video items-center justify-center bg-gray-50 p-4">
            <img src={item.image} alt={item.name} className="h-full w-auto object-contain" loading="lazy" />
          </div>
          <div className="flex flex-1 flex-col p-4">
            <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{item.text}</p>
            <span className="mt-3 text-sm font-medium text-primary">View product →</span>
          </div>
        </Link>
      ))}
    </div>
  )

  return (
    <ProductDetailDefault
      product={{ ...product, description }}
      sections={[{ id: 'range', title: 'In this range', content: rangeSection }]}
    />
  )
}

export default MemoryUniversalPositionersPage
