import ProductDetailDefault from '../components/ProductDetailDefault'

// Based on the official Myco Medic page:
// https://www.mycomedic.com.my/memory-lower-limb-protector-pads.html
const SIZE_OPTIONS = [
  { code: 'OKL-L02', sizeText: '500 mm x 220 mm x 70 mm' },
  { code: 'OKL-L04', sizeText: '180 mm x 180 mm x 60 mm' },
  { code: 'OKL-L05', sizeText: '480 mm x 200 mm x 150 mm' }
]

const description = `Memory foam lower limb protector pads designed to offer protection and support to the lower part of the legs in prostrate surgery. Available as models OKL-L02, OKL-L04 and OKL-L05.

**Clinical use**
These pads help protect and support the lower legs during positioning, reducing pressure on vulnerable areas and improving stability during prostrate procedures.`

const sizingSection = (
  <div className="overflow-x-auto rounded-xl border border-gray-200">
    <table className="w-full min-w-[20rem] text-left text-sm">
      <thead className="bg-gray-50">
        <tr className="border-b border-gray-200">
          <th scope="col" className="px-4 py-3 font-medium text-gray-900">
            Model
          </th>
          <th scope="col" className="px-4 py-3 font-medium text-gray-900">
            Size
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {SIZE_OPTIONS.map((row) => (
          <tr key={row.code}>
            <th scope="row" className="px-4 py-2.5 font-medium text-gray-900">
              {row.code}
            </th>
            <td className="px-4 py-2.5 text-gray-600">{row.sizeText}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

function MemoryLowerLimbProtectorPadsPage({ product }) {
  const variants = product.variants?.sizes
    ? product.variants
    : { ...product.variants, sizes: SIZE_OPTIONS.map((o) => ({ name: `${o.code} – ${o.sizeText}`, value: o.code })) }
  return (
    <ProductDetailDefault
      product={{ ...product, variants, description }}
      sections={[{ id: 'sizing', title: 'Models & sizing', content: sizingSection }]}
    />
  )
}

export default MemoryLowerLimbProtectorPadsPage
