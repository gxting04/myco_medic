import ProductDetailDefault from '../components/ProductDetailDefault'

const YOUTUBE_URL = 'https://www.youtube.com/embed/WIib1GJgPfY'

const description = `Powder-free nitrile gloves designed to protect clinicians and patients in sensitive procedures. Available in four sizes with enhanced tactile feedback for delicate work.

• ASTM D6319 compliant medical grade
• Textured fingertips for superior grip
• Latex-free hypoallergenic formulation
• 200 gloves per dispenser box

**Where teams rely on these gloves**
• **Surgical Prep** – Sterile handling of instruments and patient draping.
• **Laboratory Analysis** – Chemical-resistant protection for sample processing.
• **Dental Procedures** – High dexterity for fine motor control during treatments.
• **Emergency Response** – Reliable barrier in high-pressure, high-turnover settings.

**Quality assurance checklist**
• Meets EN455 & ISO 13485 quality benchmarks
• 7 mil finger thickness for puncture resistance
• Chemical splash tested against common disinfectants
• Textured surface maintains grip when wet
• Shelf life: 5 years from manufacturing date

**Need tailored glove programs?**
We support hospitals with monthly replenishment schedules, bulk pricing, and compliance documentation.`

const QUICK_FACTS = {
  Sizes: 'XS, S, M, L',
  Color: 'Cobalt Blue',
  Material: 'Synthetic nitrile'
}

function DisposableGlovesPage({ product }) {
  return (
    <ProductDetailDefault
      product={{
        ...product,
        specifications: { ...QUICK_FACTS, ...product.specifications },
        videos: product.videos || [{ youtubeUrl: YOUTUBE_URL, title: 'Product handling demonstration' }],
        description
      }}
    />
  )
}

export default DisposableGlovesPage
