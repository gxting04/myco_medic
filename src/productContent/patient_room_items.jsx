import ProductDetailDefault from '../components/ProductDetailDefault'

// Shown when the catalogue entry has no image of its own.
const FALLBACK_IMAGE = 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/10_2.png?1490164204'

const description = `Patient room essentials: ABS lockers, over-bed tables, mattresses, IV stands, ward screens, bins, pans, and lighting to outfit wards efficiently.

**Highlights**
• ABS lockers, bedside racks, over-bed tables (standard & fingertip adjustable).
• Mattresses: Chemsafe, air/ripple, and Transcell options.
• IV stands (standard and electric), ward screens, and surgical bins.
• Lighting, injection trays, sack holders, and surgical stand bowls.`

function PatientRoomItemsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, image: product.image || FALLBACK_IMAGE, description }} />
}

export default PatientRoomItemsPage
