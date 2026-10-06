import ProductDetailDefault from '../components/ProductDetailDefault'

// Shown when the catalogue entry has no image of its own.
const FALLBACK_IMAGE = 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/screenshot-970.png?1724999909'

const description = `Range of hospital trolleys and stands (T-series, LTS/DTS carts, phlebotomy carts, Mayo stands, ECG stands, sponge trolleys) built for durable, flexible clinical workflows.

**Highlights**
• Medical instrument and lab dressing tables (T2001/T2002/T2003/T300x/T320x).
• COW laptop/desktop carts for mobile computing (LTS01/DTS01).
• Specialty carts: phlebotomy (PBS01), oxygen/nebulizer drawer (CBO2N1), ECG stand (C6000).
• Mayo stand and sponging trolley options for OR and wards.`

function HospitalTrolleysPage({ product }) {
  return <ProductDetailDefault product={{ ...product, image: product.image || FALLBACK_IMAGE, description }} />
}

export default HospitalTrolleysPage
