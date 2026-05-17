import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const description = `Flat white nylon brush for effective cleaning of surfaces, corners, and hard-to-reach areas.

Durable yet gentle nylon bristles support efficient cleaning while limiting the risk of scratching delicate finishes. The design is lightweight and reusable where your cleaning and infection-control policy allows.

Suitable for medical, laboratory, industrial, and household use.

Contact us for pricing, pack sizes, and availability.`

function WhiteFlatNylonBrushPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default WhiteFlatNylonBrushPage
