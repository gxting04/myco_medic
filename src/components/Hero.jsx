import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, PackageCheck, Search } from 'lucide-react'
import { useUI } from '@/context/UIContext'
import { getCatalogProducts } from '@/lib/catalog'
import { COMPANY } from '@/lib/site'
import { EASE } from '@/lib/motion'

const QUICK_SEARCHES = ['Endotracheal tube', 'Laryngoscope', 'Head pads', 'CPAP']

/**
 * Homepage hero. The old hero was a carousel of banner PNGs with the headline
 * baked into the pixels — unreadable to search engines and screen readers and
 * cropped badly on phones. The message is now real text.
 */
function Hero() {
  const { openSearch } = useUI()
  const reduce = useReducedMotion()
  const productCount = useMemo(() => Math.floor(getCatalogProducts().length / 10) * 10, [])
  const years = new Date().getFullYear() - COMPANY.since

  const fade = (delay = 0) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay } }
      : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: EASE } }

  const stats = [
    { value: `${years}+`, label: 'Years serving hospitals' },
    { value: `${productCount}+`, label: 'Products in catalogue' },
    { value: '11', label: 'Manufacturer partners' }
  ]

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white">
      {/* faint grid, fades out toward the bottom */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
        aria-hidden
      />
      <div className="container-page relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr,1fr] lg:gap-16 lg:py-24">
        <div>
          <motion.p {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Medical device distributor · Malaysia
          </motion.p>

          <motion.h1 {...fade(0.05)} className="heading-xl mt-6 lg:text-[3.5rem]">
            Medical supplies that <br className="hidden sm:block" />
            hospitals{' '}
            <span className="whitespace-nowrap">
              <span className="text-primary">rely on</span>.
            </span>
          </motion.h1>

          <motion.p {...fade(0.1)} className="lead mt-6 max-w-lg">
            Airway management, patient positioning, PPE and clinical consumables for operating theatres, ICUs and clinics across Malaysia —
            sourced from trusted manufacturers and supported by our own team.
          </motion.p>

          <motion.div {...fade(0.15)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="btn-primary px-6 py-3.5 text-[15px]">
              Browse the catalogue
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-outline px-6 py-3.5 text-[15px]">
              Request a quotation
            </Link>
          </motion.div>

          <motion.div {...fade(0.2)} className="mt-8">
            <button
              type="button"
              onClick={() => openSearch()}
              className="flex w-full max-w-md items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-sm text-gray-400 shadow-sm transition-colors hover:border-gray-300"
            >
              <Search className="h-4 w-4 text-gray-400" />
              <span className="flex-1">Search {productCount}+ products…</span>
              <kbd className="hidden rounded border border-gray-200 px-1.5 py-0.5 font-sans text-[10px] font-medium text-gray-400 sm:inline">/</kbd>
            </button>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span>Popular:</span>
              {QUICK_SEARCHES.map((q) => (
                <button key={q} type="button" onClick={() => openSearch(q)} className="rounded-full px-2 py-0.5 text-gray-600 underline-offset-2 hover:text-primary hover:underline">
                  {q}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div {...fade(0.1)} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">
            <img
              src="/hero_operating_room.jpg"
              alt="A modern operating theatre with surgical lights and monitoring equipment"
              width="1600"
              height="900"
              fetchpriority="high"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]"
            />
          </div>
          {/* Floating highlight card */}
          <Link
            to="/product/pvc-endotracheal-tube"
            className="group absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.35)] backdrop-blur transition-transform hover:-translate-y-0.5 sm:left-auto sm:right-6 sm:w-80"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-50">
              <img src="/pvc_endotracheal_tube.png" alt="" className="h-12 w-12 object-contain" />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
                <PackageCheck className="h-3.5 w-3.5" /> Ready stock
              </span>
              <span className="mt-0.5 block truncate text-sm font-semibold text-gray-900">PVC Endotracheal Tube</span>
              <span className="block text-xs text-gray-500">Cuffed &amp; uncuffed · 2.0–10.0 mm</span>
            </span>
            <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-primary" />
          </Link>
        </motion.div>
      </div>

      <div className="container-page relative pb-14 pt-6 md:pb-16">
        <dl className="grid grid-cols-3 divide-x divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col px-4 py-5 text-center sm:px-6 sm:py-6 sm:text-left">
              <dt className="order-2 mt-1 text-xs text-gray-500 sm:text-sm">{s.label}</dt>
              <dd className="order-1 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
