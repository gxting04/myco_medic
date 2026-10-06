import ProductDetailDefault from '../components/ProductDetailDefault'

// Shown when the catalogue entry has no image of its own.
const FALLBACK_IMAGE = 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/editor/screenshot-969.png?1724999947'

const description = `Curve curtain tracking system for hospital cubicles, available in light, heavy, and extra-heavy duty options with compatible cubicle curtain fabric.

**Highlights**
• Light, heavy, and extra-heavy duty track options.
• Compatible cubicle curtain fabrics available.
• Supports curved layouts for flexible ward partitions.`

function HospitalCurveCurtainTrackingSystemPage({ product }) {
  return <ProductDetailDefault product={{ ...product, image: product.image || FALLBACK_IMAGE, description }} />
}

export default HospitalCurveCurtainTrackingSystemPage
