import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `Disposable wash gloves designed for cleansing and care of bedridden or intensive care patients. Skin-friendly, microwaveable, and effective for wound and skin hygiene.

**Key Features**
• Cotton-feeling and skin-friendly material.
• Special surface texture for effective cleaning.
• Microwave heating capable.
• Contains 10 pieces per pack for whole-body cleansing.

**Ingredients & Benefits**
**Ingredients List:** Castor oil, Poloxamer, PhenoXyaethanolum, Chlorhexidine, Glycerol, IPBC, Allantoin, Anhydrous Citric Acid, Aloe Vera.`

const INGREDIENT_ROLES = [
  { name: 'Castor Oil', role: 'Moisturizes, anti-inflammatory, promotes wound healing, prevents fungus.' },
  { name: 'Chlorhexidine', role: 'Disinfectant and antiseptic.' },
  { name: 'Aloe Vera', role: 'Soothing and skin conditioning.' }
]

const ingredientsSection = (
  <dl className="divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-200">
    {INGREDIENT_ROLES.map(({ name, role }) => (
      <div key={name} className="grid gap-1 px-4 py-3 text-sm sm:grid-cols-[12rem,1fr] sm:gap-4">
        <dt className="font-medium text-gray-900">{name}</dt>
        <dd className="text-gray-600">{role}</dd>
      </div>
    ))}
  </dl>
)

function WoundAndSkinWashGlovesPage({ product }) {
  return (
    <ProductDetailDefault
      product={{ ...product, description }}
      sections={[{ id: 'ingredients', title: 'Key ingredient roles', content: ingredientsSection }]}
    />
  )
}

export default WoundAndSkinWashGlovesPage
