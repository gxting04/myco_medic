import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'KD150B', value: 'KD150B' },
  { name: 'KD200B', value: 'KD200B' },
  { name: 'KD250B', value: 'KD250B' },
  { name: 'KD300B', value: 'KD300B' },
  { name: 'VB12B', value: 'VB12B' }
]

function KidneyDishesVomitBowlsPage({ product }) {
  const enhancedProduct = {
      ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `High-quality medical kidney dishes and vomit bowls designed for clinical and surgical use. Durable plastic containers perfect for collecting fluids, waste materials, and vomit during medical procedures.

**Product Features:**
• Durable plastic construction for medical use
• Available in multiple sizes for various clinical applications
• Designed for collecting fluids, waste materials, and vomit
• Kidney-shaped design for easy handling
• Sterilizable and reusable design
• Easy to clean and maintain

**Available Models:**

KD150B
• Type: Kidney Dish

KD200B
• Type: Kidney Dish

KD250B
• Type: Kidney Dish

KD300B
• Type: Kidney Dish

VB12B
• Type: Vomit Bowl`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default KidneyDishesVomitBowlsPage
