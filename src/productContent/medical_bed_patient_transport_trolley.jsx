import ProductDetailDefault from '../components/ProductDetailDefault'

// Shown when the catalogue entry has no image of its own.
const FALLBACK_IMAGE = 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/editor/screenshot-946.png?1490087435'

const description = `Range of medical beds and transport trolleys (AVUNN care, B6001/B5001/B5002, B4001/B3001, LDR30/LDR20, PS series, BCC/NEBC cots) designed for patient safety, mobility, and clinical flexibility.

**Highlights**
• Electric, hydraulic, and manual bed options for ICU, CCU, A&E, and wards.
• Delivery beds (electric and hydraulic) for LDR suites.
• Patient transport trolleys with A&E configurations.
• Child and baby cots for pediatric and neonatal care.
• Lateral tilt and ultra-low bed options to enhance patient safety.`

function MedicalBedPatientTransportTrolleyPage({ product }) {
  return <ProductDetailDefault product={{ ...product, image: product.image || FALLBACK_IMAGE, description }} />
}

export default MedicalBedPatientTransportTrolleyPage
