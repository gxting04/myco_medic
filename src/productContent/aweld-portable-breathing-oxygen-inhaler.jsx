import ProductDetailDefault from '../components/ProductDetailDefault'

// Based on the official Myco Medic page:
// https://www.mycomedic.com.my/portable-breathing-oxygen-inhaler.html

const EXTRA_IMAGES = [
  // Product image
  'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/u4kvox2b1621523622-1000x1000_orig.jpeg',
  // Product with mask
  'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/qb5rsksc1624450919-750x1000.jpg?1643958536'
]

const YOUTUBE_URL = 'https://www.youtube.com/embed/wjmqdV_LtuQ'

const description = `600 ml portable oxygen inhaler with ≥99.5% oxygen purity. Perfect for emergency use, traveling, hiking, and temporary oxygen needs.

**Product Details**
AWELD Portable Oxygen Inhaler (600 ml)
• **600 ml**
• Oxygen purity **more than 99.5%**
• Easy to carry
• Easy to use
• Suitable for traveling
• Suitable for mountain hiking
• Can be stored for **2 years**`

const FAQS = [
  {
    q: 'Why is the can feels empty while my mosquito spray also have 600ml but feels heavier?',
    a: 'The can consists of ≥ 99.5% Oxygen as its content. Oxygen is extremely light, in the form of 600ml, it has net weight of 0.8574g only. But in other aerosol can like mosquito spray, it consists of chemicals and liquid which is way more heavier than oxygen.'
  },
  {
    q: 'Can i keep this as emergency use?',
    a: 'Yes! It is intended to use when you need oxygen temporarily, like Covid, hiking, exercising, heavy lifting etc.'
  },
  {
    q: 'Can Sabah/Sarawak customer place order?',
    a: 'Yes!'
  }
]

const faqSection = (
  <dl className="divide-y divide-gray-200 border-y border-gray-200">
    {FAQS.map(({ q, a }) => (
      <div key={q} className="py-4">
        <dt className="text-sm font-medium text-gray-900">{q}</dt>
        <dd className="mt-1.5 text-sm leading-relaxed text-gray-600">{a}</dd>
      </div>
    ))}
  </dl>
)

function AWELDPortableBreathingOxygenInhalerPage({ product }) {
  const baseImages = Array.isArray(product.images) && product.images.length > 0 ? product.images : product.image ? [product.image] : []
  return (
    <ProductDetailDefault
      product={{
        ...product,
        images: [...baseImages, ...EXTRA_IMAGES],
        youtubeUrl: product.youtubeUrl || YOUTUBE_URL,
        description
      }}
      sections={[{ id: 'faq', title: 'Frequently asked questions', content: faqSection }]}
    />
  )
}

export default AWELDPortableBreathingOxygenInhalerPage
