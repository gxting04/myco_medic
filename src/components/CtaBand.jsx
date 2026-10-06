import React from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY, whatsappLink } from '@/lib/site'

function CtaBand() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-white sm:px-12 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_85%_20%,white_0,transparent_45%)]"
            aria-hidden
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr,1fr]">
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Need a quotation or product advice?</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Tell us what your department needs. Our team will help you choose the right specification and get back to you with pricing.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={whatsappLink('Hi Myco Medic, I would like a quotation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white px-6 py-3.5 text-gray-900 hover:bg-gray-100"
              >
                <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn border border-white/30 px-6 py-3.5 text-white hover:bg-white/10">
                <Phone className="h-4 w-4" />
                Contact sales
              </Link>
            </div>
          </div>
          <p className="relative mt-8 text-sm text-white/70">
            Or call {COMPANY.phone} · {COMPANY.hours[0].days}, {COMPANY.hours[0].time}
          </p>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
