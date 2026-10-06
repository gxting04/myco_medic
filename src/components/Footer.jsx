import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { getNavGroups } from '@/lib/catalog'
import { COMPANY, whatsappLink } from '@/lib/site'

const COMPANY_LINKS = [
  { name: 'About us', href: '/about' },
  { name: 'Careers', href: '/career' },
  { name: 'Internship programme', href: '/internship' },
  { name: 'Contact', href: '/contact' }
]

function Footer() {
  const year = new Date().getFullYear()
  const groups = getNavGroups()

  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-600">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" aria-label="Myco Medic — home" className="inline-block">
            <img src="/Myco_Medic.png" alt="Myco Medic" className="h-12 w-auto" loading="lazy" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Malaysian distributor of airway management, positioning, PPE and hospital consumables — supplying operating theatres, ICUs and
            clinics since {COMPANY.since}.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={whatsappLink('Hi Myco Medic!')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${COMPANY.salesEmail}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:border-primary hover:text-primary"
              aria-label="Email sales"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a href={COMPANY.shopeeUrl} target="_blank" rel="noopener noreferrer" className="ml-1 opacity-80 transition-opacity hover:opacity-100">
              <img src="/shopee_logo.png" alt="Shop Myco Medic on Shopee" className="h-7 w-auto" loading="lazy" />
            </a>
          </div>
        </div>

        <nav className="lg:col-span-3" aria-label="Product categories">
          <h3 className="text-sm font-semibold text-gray-900">Products</h3>
          <ul className="mt-4 space-y-2.5">
            {groups.map((g) => (
              <li key={g.id}>
                <Link to={`/products?groupId=${g.id}`} className="text-sm transition-colors hover:text-gray-900">
                  {g.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-2" aria-label="Company">
          <h3 className="text-sm font-semibold text-gray-900">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-sm transition-colors hover:text-gray-900">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={COMPANY.phoneHref} className="flex items-start gap-2.5 transition-colors hover:text-gray-900">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.salesEmail}`} className="flex items-start gap-2.5 transition-colors hover:text-gray-900">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                {COMPANY.salesEmail}
              </a>
            </li>
            <li>
              <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 transition-colors hover:text-gray-900">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                <span>
                  {COMPANY.addressLines.slice(0, 2).join(', ')},
                  <br />
                  {COMPANY.addressLines.slice(2).join(', ')}
                </span>
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-gray-500">
            {COMPANY.hours[0].days}: {COMPANY.hours[0].time}
            <br />
            {COMPANY.hours[1].days}: {COMPANY.hours[1].time}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>Medical devices supplied to healthcare professionals and institutions.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
