import ProductDetailDefault from '../components/ProductDetailDefault'

// Shown when the catalogue entry has no image of its own.
const FALLBACK_IMAGE = 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/editor/t4.jpg?1490170765'

const description = `Utility, CSSD, and janitor room furniture including wall racks, bedpan holders, baskets, linen racks, carts, and storage cabinets for sterile workflows.

**Highlights**
• Wall racks, bedpan holders, CSSD racks and baskets.
• Surgical soiled linen racks and laundry carts.
• Paper stands and stainless/ glass storage cabinets.`

function JanitorRoomCSSDFurniturePage({ product }) {
  return <ProductDetailDefault product={{ ...product, image: product.image || FALLBACK_IMAGE, description }} />
}

export default JanitorRoomCSSDFurniturePage
