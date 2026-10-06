import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, ShieldCheck, Stethoscope } from 'lucide-react'
import { Reveal } from '../lib/motion'
import { COMPANY } from '@/lib/site'

const PILLARS = [
  {
    icon: Stethoscope,
    title: 'Specialists in OT, ICU & critical care',
    text: 'Our range is built around the operating theatre, intensive care and CSSD — the departments we know best.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality from established manufacturers',
    text: 'We work directly with manufacturers in Asia, Europe and the US, and stand behind every line we carry.'
  },
  {
    icon: GraduationCap,
    title: 'Training and on-site support',
    text: 'Product demonstrations, in-service sessions and CME support for clinical teams, delivered by our own staff.'
  }
]

function AboutUs() {
  return (
    <section className="section border-t border-gray-100 bg-white" aria-labelledby="about-title">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl border border-gray-200">
            <img
              src="/header_3.jpg"
              alt="Clinicians in discussion in a hospital corridor"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]"
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.3)] sm:left-8">
            <p className="text-xs text-gray-500">Serving Malaysian healthcare since</p>
            <p className="text-3xl font-semibold tracking-tight text-gray-900">{COMPANY.since}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">Why Myco Medic</span>
          <h2 id="about-title" className="heading-lg mt-3">
            A partner for clinical teams, not just a supplier
          </h2>
          <p className="lead mt-5">
            For over a decade we have supplied dependable medical devices and surgical consumables to hospitals and clinics across Malaysia —
            with the product knowledge to back them up.
          </p>

          <ul className="mt-10 space-y-7">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link to="/about" className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-700">
            More about our company
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutUs
