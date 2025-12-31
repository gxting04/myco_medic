import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function CPEApronGownPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `CPE apron gown with thumb loops for secure coverage. 40gsm chlorinated polyethylene, blue, one size; water-repellent, anti-dust, lightweight and comfortable.

**Key Details:**
• Material: 40gsm chlorinated polyethylene (CPE)
• Design: Long sleeves with thumb loops to secure coverage
• Features: Water repellent, anti-dust, lightweight, comfortable
• Applications: hospitals, labs, patient care, hygiene, food handling, cleaning`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default CPEApronGownPage
