import ProductDetailDefault from '../components/ProductDetailDefault'

// Size and reference numbers, transcribed row by row from the supplier's
// catalogue sheet (public/pvc_endotracheal_tube_catalogue.png). Written out
// literally rather than generated from a pattern so each code can be checked
// against the sheet. Cuffed starts at 3.0 mm; 2.0 and 2.5 are uncuffed only.
//
// These 32 codes previously existed only as pixels inside the catalogue image,
// so a buyer searching a reference number found nothing. Rendered as real
// table text they become indexable and copyable.
const sizeChart = [
  { size: '2.0', uncuffed: 'ETT2011' },
  { size: '2.5', uncuffed: 'ETT2511' },
  { size: '3.0', cuffed: 'ETT3011C', uncuffed: 'ETT3011' },
  { size: '3.5', cuffed: 'ETT3511C', uncuffed: 'ETT3511' },
  { size: '4.0', cuffed: 'ETT4011C', uncuffed: 'ETT4011' },
  { size: '4.5', cuffed: 'ETT4511C', uncuffed: 'ETT4511' },
  { size: '5.0', cuffed: 'ETT5011C', uncuffed: 'ETT5011' },
  { size: '5.5', cuffed: 'ETT5511C', uncuffed: 'ETT5511' },
  { size: '6.0', cuffed: 'ETT6011C', uncuffed: 'ETT6011' },
  { size: '6.5', cuffed: 'ETT6511C', uncuffed: 'ETT6511' },
  { size: '7.0', cuffed: 'ETT7011C', uncuffed: 'ETT7011' },
  { size: '7.5', cuffed: 'ETT7511C', uncuffed: 'ETT7511' },
  { size: '8.0', cuffed: 'ETT8011C', uncuffed: 'ETT8011' },
  { size: '8.5', cuffed: 'ETT8511C', uncuffed: 'ETT8511' },
  { size: '9.0', cuffed: 'ETT9011C', uncuffed: 'ETT9011' },
  { size: '9.5', cuffed: 'ETT9511C', uncuffed: 'ETT9511' },
  { size: '10.0', cuffed: 'ETT10011C', uncuffed: 'ETT10011' }
]

const description = `The PVC Endotracheal Tube is a versatile airway management device suitable for both oral and nasal intubation procedures. This flexible, durable tube provides secure airway access for mechanical ventilation and airway protection across diverse clinical scenarios.

**Key Features:**
• Flexible PVC construction – accommodates both orotracheal and nasotracheal routes
• Cuffed and uncuffed options – accommodates various clinical requirements and patient populations
• Soft, rounded tip – reduces risk of airway trauma during insertion
• Radiopaque line – visible on X-ray for accurate positioning verification
• Standard connector – universal 15mm connector compatible with all breathing circuits
• Multiple sizes available – accommodates neonatal through adult patients
• High-volume, low-pressure cuff – reduces risk of tracheal trauma

**Clinical Applications:**
• General anesthesia for surgical procedures
• Intensive care unit mechanical ventilation
• Emergency airway management
• Cardiopulmonary resuscitation
• Long-term respiratory support
• Both oral and nasal intubation routes

**Clinical Benefits:**
• Versatile design – suitable for multiple intubation routes
• Secure airway protection – cuffed tubes prevent aspiration
• Reliable ventilation – ensures effective gas exchange
• Cost-effective solution – widely available and affordable

**Technical Specifications:**
• Flexible PVC construction
• Cuffed and uncuffed variants
• Universal 15mm connector
• Radiopaque material for X-ray visibility
• Available in sizes from neonatal to large adult

The PVC Endotracheal Tube provides healthcare professionals with a versatile, reliable solution for secure airway access and mechanical ventilation support across diverse clinical applications.`

// Always rendered as real text (never behind a collapse) so the reference
// codes stay visible to crawlers and copyable by buyers.
const sizeChartSection = (
  <div>
    <p className="text-sm text-gray-600">
      Cuffed 3.0 – 10.0 mm ID · Uncuffed 2.0 – 10.0 mm ID · 32 reference codes · Packed 10 pcs/box, 100 pcs/carton
    </p>
    <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[22rem] text-left text-sm">
        <caption className="sr-only">PVC Endotracheal Tube sizes in mm internal diameter with cuffed and uncuffed reference numbers</caption>
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-200">
            <th scope="col" className="px-4 py-3 font-medium text-gray-900">
              Size (mm ID)
            </th>
            <th scope="col" className="px-4 py-3 font-medium text-gray-900">
              Cuffed Ref. No.
            </th>
            <th scope="col" className="px-4 py-3 font-medium text-gray-900">
              Uncuffed Ref. No.
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {sizeChart.map((row) => (
            <tr key={row.size}>
              <th scope="row" className="px-4 py-2.5 font-medium text-gray-900">
                {row.size}
              </th>
              <td className="px-4 py-2.5 font-mono text-gray-600">{row.cuffed || <span className="text-gray-400">—</span>}</td>
              <td className="px-4 py-2.5 font-mono text-gray-600">{row.uncuffed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="mt-3 text-xs text-gray-500">Sizes 2.0 and 2.5 mm are available uncuffed only. Quote the reference number when ordering.</p>
  </div>
)

function PvcEndotrachealTubePage({ product }) {
  return (
    <ProductDetailDefault
      product={{ ...product, description }}
      sections={[{ id: 'sizes', title: 'Sizes & reference numbers', content: sizeChartSection }]}
    />
  )
}

export default PvcEndotrachealTubePage
