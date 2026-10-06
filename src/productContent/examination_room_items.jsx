import ProductDetailDefault from '../components/ProductDetailDefault'

// Shown when the catalogue entry has no image of its own.
const FALLBACK_IMAGE = 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/screenshot-996.png?1643274044'

const description = `Examination couches and tables (standard, luxury, gynae) for clinical rooms, offering patient comfort and clinician access.

**Highlights**
• Examination couch E3001 and standard tables E1002.
• Luxury examination table E2003 for premium rooms.
• Gynae-focused tables E5000 and E5002.`

function ExaminationRoomItemsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, image: product.image || FALLBACK_IMAGE, description }} />
}

export default ExaminationRoomItemsPage
