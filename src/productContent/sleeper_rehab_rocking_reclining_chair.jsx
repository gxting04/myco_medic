import ProductDetailDefault from '../components/ProductDetailDefault'

// Shown when the catalogue entry has no image of its own.
const FALLBACK_IMAGE = 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/screenshot-989_2_orig.png'

const description = `Collection of chairs and stools for clinical and patient use: recliners, sleeper/company chairs, rotating/ENT/surgeon stools, blood-taking chairs, patient link chairs, geriatric chairs, and visitor seating.

**Highlights**
• Reclining/rocking chairs (CHR series) for patient and attendant comfort.
• Sleeper/company chairs and patient link chairs for wards and waiting.
• Doctor/ENT/surgeon stools (CHS series) with foot or pneumatic control.
• Blood-taking chairs (CHBT series) and visitor chairs for outpatient areas.`

function SleeperRehabRockingRecliningChairPage({ product }) {
  return <ProductDetailDefault product={{ ...product, image: product.image || FALLBACK_IMAGE, description }} />
}

export default SleeperRehabRockingRecliningChairPage
