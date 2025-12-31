import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function ChestHipbonePadsPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Pads designed to protect the chest and hipbone in prone and re-supine procedures, helping maintain respiratory and circulatory function and reduce pressure sore risk.

**Clinical use:**
• Protect chest and hipbone, facilitating respiratory and circulatory functioning and helping avoid pressure sores in prostrate surgery
• Used to support the shoulder in re-supine surgery and to relax the whole chest in cardiac surgery

**Models & sizing:**
Available in different models and sizes, as per the Chest-Hipbone Pads series.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default ChestHipbonePadsPage
