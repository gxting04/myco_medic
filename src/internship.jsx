import { Link } from 'react-router-dom'
import { ArrowLeft, Briefcase, CheckCircle2, FileText, Mail, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import PageSEO from './components/PageSEO'
import { Reveal } from './lib/motion'
import { COMPANY, mailtoLink, whatsappLink } from './lib/site'

// Internship applications go to a different inbox and contact person than
// the general careers page (CAREERS in lib/site). The WhatsApp/phone number
// is the company line, so it comes from COMPANY.
const INTERNSHIP_CONTACT = {
  name: 'Ms. Caylee',
  email: 'careers@mycomedic.com.my'
}

const JOB_SCOPES = [
  {
    icon: FileText,
    title: 'Admin',
    items: [
      'Help in Filling Forms and Data',
      'Inventory Management',
      'Simple Accounting',
      'Handle Product Registration',
      'Partially Help Up Sales Team'
    ]
  },
  {
    icon: Briefcase,
    title: 'Sales',
    items: [
      'Possess own transport - company will reimburse petrol, toll, parking for work related matters.',
      'Exposure to daily sales procedures and processes.',
      'Perform sales presentation and product training to doctors and nurses.',
      'Require to work in ICU and OT department in various hospitals.'
    ]
  }
]

const REQUIREMENTS = [
  'Proficiency in English and Bahasa Malaysia',
  'Hardworking and positive thinking individuals',
  'Good document management skills',
  'Team player and proactive',
  'Basic skill for Microsoft Office'
]

const phoneHref = `tel:+${COMPANY.whatsapp}`

function Internship() {
  const waHref = whatsappLink("Hi, I'd like to apply for an internship at Myco Medic.")
  const emailHref = mailtoLink(INTERNSHIP_CONTACT.email, 'Internship application')

  return (
    <div className="bg-white">
      <PageSEO
        title="Internship"
        description="Myco Medic internship programme for students interested in medical supplies, sales, and healthcare business in Malaysia."
        path="/internship"
      />

      {/* Page header */}
      <header className="border-b border-gray-100 bg-gray-50/60">
        <div className="container-page py-12 md:py-16">
          <Link
            to="/career"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Career
          </Link>
          <span className="eyebrow mt-6 block">Careers</span>
          <h1 className="heading-xl mt-3 max-w-2xl">Internship</h1>
          <p className="lead mt-4 max-w-2xl">
            Explore the medical world with Myco Medic Sdn Bhd! Here, we focus on providing first hand experience and field exposure to our staff.
          </p>
        </div>
      </header>

      {/* Job scopes */}
      <section className="section bg-white" aria-labelledby="scopes-title">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What you will do</span>
            <h2 id="scopes-title" className="heading-lg mt-3">
              Job Scopes
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {JOB_SCOPES.map(({ icon: Icon, title, items }, i) => (
              <Reveal key={title} delay={i * 0.05} className="card p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="heading-md">{title}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden="true" />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section border-t border-gray-100 bg-gray-50/60" aria-labelledby="requirements-title">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Who we are looking for</span>
            <h2 id="requirements-title" className="heading-lg mt-3">
              Requirements
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <ul className="card divide-y divide-gray-100">
              {REQUIREMENTS.map((requirement) => (
                <li key={requirement} className="flex items-start gap-3 px-5 py-4 sm:px-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                  <span className="min-w-0 text-[15px] text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Application */}
      <section className="section border-t border-gray-100 bg-white" aria-labelledby="apply-title">
        <div className="container-page">
          <Reveal className="rounded-3xl border border-gray-200 bg-gray-50/60 px-6 py-10 sm:px-10 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center lg:gap-16">
              <div>
                <span className="eyebrow">Application</span>
                <h2 id="apply-title" className="heading-lg mt-3">
                  Interested in joining our team?
                </h2>
                <p className="lead mt-4">
                  Send us your résumé to{' '}
                  <a href={emailHref} className="font-medium text-gray-900 underline-offset-4 hover:text-primary hover:underline">
                    {INTERNSHIP_CONTACT.email}
                  </a>{' '}
                  or contact{' '}
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap font-medium text-gray-900 underline-offset-4 hover:text-primary hover:underline"
                  >
                    {COMPANY.whatsappDisplay}
                  </a>{' '}
                  ({INTERNSHIP_CONTACT.name}) via WhatsApp or phone call.
                </p>
                <p className="mt-4 text-sm text-gray-500">Hope to see you in our team!</p>
              </div>

              <div className="flex flex-col gap-3">
                <a href={emailHref} className="btn-primary justify-start px-5 py-4">
                  <Mail className="h-5 w-5" />
                  <span className="min-w-0 text-left">
                    <span className="block">Email your résumé</span>
                    <span className="block break-all text-xs font-normal text-white/80">{INTERNSHIP_CONTACT.email}</span>
                  </span>
                </a>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-start px-5 py-4">
                  <FaWhatsapp className="h-5 w-5" />
                  <span className="text-left">
                    <span className="block">WhatsApp {INTERNSHIP_CONTACT.name}</span>
                    <span className="block text-xs font-normal text-white/80">{COMPANY.whatsappDisplay}</span>
                  </span>
                </a>
                <a href={phoneHref} className="btn-outline justify-start px-5 py-4">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span className="text-left">
                    <span className="block">Call {COMPANY.whatsappDisplay}</span>
                    <span className="block text-xs font-normal text-gray-500">{INTERNSHIP_CONTACT.name}</span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default Internship
