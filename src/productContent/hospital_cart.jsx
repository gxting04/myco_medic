import ProductDetailDefault from '../components/ProductDetailDefault'

// Shown when the catalogue entry has no image of its own.
const FALLBACK_IMAGE = 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/editor/screenshot-963.png?1490147176'

const description = `Medication, emergency, and injection carts (C3512/C3300/C3100/C3000/C3600/C3500) with mixed polymer, aluminum, and steel construction for durability and mobility.

**Highlights**
• Medication cart with 12 large bins.
• Emergency cart options in polymer or mixed materials.
• Injection cart configuration for versatile clinical use.
• Polymer/aluminum/steel construction for strength and weight balance.`

function HospitalCartPage({ product }) {
  return <ProductDetailDefault product={{ ...product, image: product.image || FALLBACK_IMAGE, description }} />
}

export default HospitalCartPage
