import ProductDetailDefault from '../components/ProductDetailDefault'

const SPECIFICATIONS = {
  Filtration: '≥98% BFE',
  Compliance: 'ASTM F2100 Level 2 · EN 14683 Type IIR',
  'Pack size': '50 pcs per box',
  Layers: 'Spunbond + Melt-blown + Spunbond',
  'Fluid resistance': '120 mmHg',
  Color: 'Medical blue'
}

function buildDescription(name) {
  return `Triple-layer filtration meets breathable comfort. Designed to safeguard care teams and patients through extended shifts without compromising protection.

Crafted with melt-blown filtration and hypoallergenic inner layers, the ${name} delivers dependable protection even in high-aerosol environments. The contoured nose bridge ensures a snug, customizable fit, while the ultralight ear loops minimize fatigue during long procedures.

**Key highlights**
• **Breathable + Secure** – Optimized airflow keeps staff cool while reinforced seams maintain structural integrity.
• **Extended Wear** – Soft-touch ear loops with stretch memory eliminate pressure marks, even after 8+ hour use.
• **Universal Fit** – Adaptive nose bridge and pleated design accommodate varied face shapes and facial hair.
• **Sustainable Disposal** – Compatible with waste-to-energy PPE recycling partners across Malaysia.

**Implementation playbook**
• Deploy color-coded batches to differentiate sterilized inventory.
• Pair with fit-testing protocols for high-risk procedures.
• Integrate with PPE vending systems for automated accountability.
• Provide QR-linked instructions for rapid onboarding of temp staff.

**Need a PPE bundle?**
Combine masks with disposable gowns, visors, and sanitizers in a single procurement contract.

**Supporting documents**
Available on request:
• Product data sheet (PDF)
• Lab testing summary
• Compliance certificates`
}

function SurgicalMaskPage({ product }) {
  return (
    <ProductDetailDefault
      product={{
        ...product,
        specifications: { ...SPECIFICATIONS, ...product.specifications },
        description: buildDescription(product.name)
      }}
    />
  )
}

export default SurgicalMaskPage
