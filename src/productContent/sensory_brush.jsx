import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function SensoryBrushPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Different types of occupational therapy are very important for children with disabilities such as autism, sensory integration/processing disorder and ADHD. Brushing the child is one of them.

**Product Description:**

**Material:** Soft bristles + Soft sponge body

**Color:** May be different depending on availability

**Size:** L8cm x W5cm x H4cm (Small in size and fully portable)

**Features:**
• Latex free`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default SensoryBrushPage

