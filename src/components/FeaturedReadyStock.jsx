import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MessageCircle, PackageCheck, ZoomIn } from 'lucide-react'
import Data from '@/shared/Data'
import { getProductPath } from '@/utils/productUrl'
import { Reveal } from '../lib/motion'

const WHATSAPP_PHONE = '60123822001'

/**
 * The promoted line. `pageId` keys into Data so the name, image and URL stay in
 * sync with the catalogue; only the sales copy lives here.
 *
 * Specs are transcribed as real text rather than shown as a picture of the
 * manufacturer's catalogue sheet — the reference codes are the searchable part,
 * and an image of them is invisible to search engines.
 *
 * Note: the supplier's sheet also lists "steel wire reinforced ... prevent biting
 * & kinking" on this line. That belongs to the wire-reinforced variant (a separate
 * product), so it is deliberately not repeated here.
 */
const FEATURED = {
  pageId: 'pvc-endotracheal-tube',
  // Supplier catalogue sheet. Its size/reference tables are set at roughly 8pt, so
  // it is shown as a click-to-enlarge thumbnail and the key figures are repeated as
  // real text below — a phone cannot read the tables off the image.
  // Falls back to the product's own shot until the file is added to /public.
  catalogueImage: '/pvc_endotracheal_tube_catalogue.png',
  eyebrow: 'Ready stock',
  blurb:
    'Our fastest-moving airway line, held in stock at our Puchong warehouse — cuffed and uncuffed, across the full size range.',
  features: [
    'Medical-grade PVC, latex free',
    'High volume, low pressure cuff reduces tracheal pressure',
    'Radio-opaque line for X-ray visualisation',
    'Murphy eye'
  ],
  specs: [
    { label: 'Cuffed sizes', value: '3.0 – 10.0 mm ID' },
    { label: 'Uncuffed sizes', value: '2.0 – 10.0 mm ID' },
    { label: 'Reference codes', value: '32 in stock' },
    { label: 'Packing', value: '10 pcs/box · 100 pcs/carton' }
  ]
}

function FeaturedReadyStock() {
  // Until the catalogue sheet is added to /public we fall back to the product's own
  // shot, rather than rendering a broken image on the homepage.
  const [sheetMissing, setSheetMissing] = useState(false)
  const product = useMemo(
    () => Data.initialProducts.find((p) => p.pageId === FEATURED.pageId),
    []
  )

  if (!product) return null

  const sheetSrc = sheetMissing ? product.image : FEATURED.catalogueImage
  const sheetAlt = sheetMissing
    ? product.name
    : `${product.name} specification sheet — cuffed sizes 3.0 to 10.0 mm and uncuffed sizes 2.0 to 10.0 mm with reference numbers`

  const productPath = getProductPath(product)
  const enquiry = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hi Myco Medic, I'd like a quote for the ${product.name}.`
  )}`

  return (
    <section className="section bg-white" aria-labelledby="featured-title">
      <div className="container-page">
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Catalogue sheet — click to open full size, since the tables are too fine
              to read inline. Degrades to the product shot if the file is absent. */}
          <div className="order-2 lg:order-1">
            <a
              href={sheetSrc}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the full ${product.name} specification sheet`}
              className="group/sheet relative block overflow-hidden rounded-3xl border border-gray-200 bg-gray-50/60 p-6 transition-colors hover:border-gray-300 sm:p-10"
            >
              <img
                src={sheetSrc}
                alt={sheetAlt}
                loading="lazy"
                decoding="async"
                onError={() => setSheetMissing(true)}
                className="mx-auto h-auto w-full max-w-md object-contain transition-transform duration-500 group-hover/sheet:scale-[1.02]"
              />
              <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
                <ZoomIn className="h-3.5 w-3.5" aria-hidden />
                View full sheet
              </span>
            </a>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <PackageCheck className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
              {FEATURED.eyebrow}
            </span>

            <h2 id="featured-title" className="heading-lg mt-5">
              PVC Endotracheal Tube
              <span className="block text-gray-400">Cuffed &amp; uncuffed</span>
            </h2>

            <p className="lead mt-5">{FEATURED.blurb}</p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {FEATURED.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200">
              {FEATURED.specs.map((spec) => (
                <div key={spec.label} className="bg-white px-4 py-4">
                  <dt className="text-xs text-gray-500">{spec.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-gray-900">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to={productPath} className="btn-primary px-6 py-3.5">
                Sizes &amp; reference codes
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href={enquiry} target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-3.5">
                <MessageCircle className="h-4 w-4" aria-hidden />
                Request a quote
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FeaturedReadyStock
