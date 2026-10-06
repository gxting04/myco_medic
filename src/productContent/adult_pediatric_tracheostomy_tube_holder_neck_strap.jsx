import ProductDetailDefault from '../components/ProductDetailDefault'

const SHOPEE_URL = 'https://shopee.com.my/product/66003822/4162701896/'

const description = `The Adult & Pediatric Tracheostomy Tube Holder / Neck Strap is an adjustable, comfortable device designed to secure tracheostomy tubes and prevent accidental dislodgement. This essential accessory provides secure tube fixation while allowing for easy access during routine care.

**Key Features:**
• Adjustable design – accommodates various neck sizes for secure, comfortable fit
• Soft, breathable material – reduces risk of skin irritation and pressure sores
• Secure fastening mechanism – prevents accidental tube dislodgement
• Easy to use – simple application and adjustment for healthcare providers
• Washable and reusable – designed for multiple uses with proper care
• Pediatric and adult sizes – accommodates various patient populations

**Clinical Applications:**
• Long-term tracheostomy care
• Home care tracheostomy management
• Intensive care unit airway maintenance
• Post-surgical tracheostomy care
• Pediatric and adult tracheostomy patients

**Clinical Benefits:**
• Prevents accidental dislodgement – secure fixation reduces emergency situations
• Patient comfort – soft materials minimize skin irritation
• Easy care access – allows for routine cleaning and maintenance
• Cost-effective – reusable design provides long-term value

**Technical Specifications:**
• Adjustable length for various neck sizes
• Soft, hypoallergenic materials
• Secure fastening system
• Available in pediatric and adult sizes
• Washable and reusable design

The Adult & Pediatric Tracheostomy Tube Holder provides healthcare professionals and patients with a reliable, comfortable solution for securing tracheostomy tubes, ensuring patient safety and tube stability during long-term airway management.`

function AdultPediatricTracheostomyTubeHolderNeckStrapPage({ product }) {
  return <ProductDetailDefault product={{ ...product, shopeeUrl: product.shopeeUrl || SHOPEE_URL, description }} />
}

export default AdultPediatricTracheostomyTubeHolderNeckStrapPage
