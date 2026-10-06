import React, { useState } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Navigation, Phone, Send } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import PageSEO from './components/PageSEO'
import { localBusinessJsonLd } from './utils/seo'
import { COMPANY, mailtoLink, whatsappLink } from './lib/site'

const TOPICS = ['Product enquiry', 'Quotation request', 'Product demonstration / training', 'After-sales support', 'Other']

const EMPTY = { name: '', email: '', phone: '', organisation: '', topic: TOPICS[0], message: '' }

function buildMessage(f) {
  const details = [
    `Name: ${f.name.trim()}`,
    f.organisation.trim() && `Hospital / organisation: ${f.organisation.trim()}`,
    `Email: ${f.email.trim()}`,
    f.phone.trim() && `Phone: ${f.phone.trim()}`
  ].filter(Boolean)
  return `${f.message.trim()}\n\n—\n${details.join('\n')}`
}

function ContactCard({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 text-sm">
        <p className="font-medium text-gray-900">{label}</p>
        <div className="mt-1 space-y-0.5 text-gray-600">{children}</div>
      </div>
    </div>
  )
}

function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(null)

  const update = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) er.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10) er.message = 'Please tell us a little more (at least 10 characters).'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  // There is no server endpoint for this form, so it hands the composed
  // enquiry to the visitor's email app (or WhatsApp). It used to only
  // console.log the fields, so nothing was ever sent.
  const sendEmail = (e) => {
    e.preventDefault()
    if (!validate()) return
    window.location.href = mailtoLink(COMPANY.salesEmail, `${form.topic} — ${form.name.trim()}`, buildMessage(form))
    setSent('email')
  }

  const sendWhatsApp = () => {
    if (!validate()) return
    window.open(whatsappLink(`${form.topic}\n\n${buildMessage(form)}`), '_blank', 'noopener,noreferrer')
    setSent('whatsapp')
  }

  const fieldClass = (name) => `input ${errors[name] ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : ''}`

  return (
    <div className="bg-white">
      <PageSEO
        title="Contact Us"
        description="Contact Myco Medic for medical supply enquiries, product quotes, and support. Email sales@mycomedic.com.my or reach us in Puchong, Selangor."
        path="/contact"
        jsonLd={localBusinessJsonLd()}
      />

      <header className="border-b border-gray-100 bg-gray-50/60">
        <div className="container-page py-12 md:py-16">
          <span className="eyebrow">Contact</span>
          <h1 className="heading-xl mt-3 max-w-2xl">Let’s talk about what you need</h1>
          <p className="lead mt-4 max-w-2xl">
            Product questions, quotations, demonstrations or support — send us a message and the right person on our team will get back to you.
          </p>
        </div>
      </header>

      <div className="container-page grid gap-12 py-12 md:py-16 lg:grid-cols-[1fr,1.4fr] lg:gap-16">
        {/* Details */}
        <aside className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a href={whatsappLink('Hi Myco Medic!')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-start px-5 py-4">
              <FaWhatsapp className="h-5 w-5" />
              <span className="text-left">
                <span className="block">Chat on WhatsApp</span>
                <span className="block text-xs font-normal text-white/80">Fastest response during office hours</span>
              </span>
            </a>
            <a href={COMPANY.phoneHref} className="btn-outline justify-start px-5 py-4">
              <Phone className="h-5 w-5 text-gray-500" />
              <span className="text-left">
                <span className="block">{COMPANY.phone}</span>
                <span className="block text-xs font-normal text-gray-500">Office line</span>
              </span>
            </a>
          </div>

          <div className="space-y-6 rounded-2xl border border-gray-200 bg-gray-50/60 p-6">
            <ContactCard icon={Mail} label="Email">
              <p>
                Sales:{' '}
                <a href={`mailto:${COMPANY.salesEmail}`} className="text-gray-900 hover:text-primary">
                  {COMPANY.salesEmail}
                </a>
              </p>
              <p>
                General:{' '}
                <a href={`mailto:${COMPANY.infoEmail}`} className="text-gray-900 hover:text-primary">
                  {COMPANY.infoEmail}
                </a>
              </p>
            </ContactCard>
            <ContactCard icon={MapPin} label={COMPANY.name}>
              {COMPANY.addressLines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </ContactCard>
            <ContactCard icon={Clock} label="Business hours">
              {COMPANY.hours.map((h) => (
                <p key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span className="text-gray-900">{h.time}</span>
                </p>
              ))}
            </ContactCard>
          </div>
        </aside>

        {/* Form */}
        <section aria-labelledby="form-title">
          {sent ? (
            <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-gray-200 p-8 md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <h2 className="heading-md mt-5">{sent === 'email' ? 'Your email is ready to send' : 'Continue in WhatsApp'}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
                {sent === 'email'
                  ? `We’ve opened your email app with your message addressed to ${COMPANY.salesEmail}. Press send there to reach us.`
                  : 'We’ve opened WhatsApp with your message filled in. Press send there to reach us.'}{' '}
                If nothing opened, you can email us directly at{' '}
                <a href={`mailto:${COMPANY.salesEmail}`} className="font-medium text-gray-900 underline underline-offset-2">
                  {COMPANY.salesEmail}
                </a>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {sent === 'email' ? (
                  <button type="button" onClick={sendWhatsApp} className="btn-whatsapp py-2.5">
                    <FaWhatsapp className="h-4 w-4" /> Send via WhatsApp instead
                  </button>
                ) : (
                  <button type="button" onClick={sendEmail} className="btn-outline py-2.5">
                    <Mail className="h-4 w-4" /> Send by email instead
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setForm(EMPTY)
                    setSent(null)
                  }}
                  className="btn-ghost py-2.5"
                >
                  Write another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={sendEmail} noValidate className="rounded-2xl border border-gray-200 p-6 md:p-8">
              <h2 id="form-title" className="heading-md">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-gray-500">Fields marked * are required.</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="label">
                    Name *
                  </label>
                  <input id="c-name" name="name" value={form.name} onChange={update} autoComplete="name" className={fieldClass('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />
                  {errors.name && (
                    <p id="e-name" className="mt-1.5 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="c-org" className="label">
                    Hospital / organisation
                  </label>
                  <input id="c-org" name="organisation" value={form.organisation} onChange={update} autoComplete="organization" className={fieldClass('organisation')} />
                </div>
                <div>
                  <label htmlFor="c-email" className="label">
                    Email *
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    autoComplete="email"
                    className={fieldClass('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'e-email' : undefined}
                  />
                  {errors.email && (
                    <p id="e-email" className="mt-1.5 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="c-phone" className="label">
                    Phone
                  </label>
                  <input id="c-phone" name="phone" type="tel" inputMode="tel" value={form.phone} onChange={update} autoComplete="tel" className={fieldClass('phone')} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-topic" className="label">
                    Topic
                  </label>
                  <select id="c-topic" name="topic" value={form.topic} onChange={update} className="input cursor-pointer">
                    {TOPICS.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className="label">
                    Message *
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={update}
                    placeholder="Which products are you interested in? Quantities, sizes, delivery timeline…"
                    className={`${fieldClass('message')} resize-y`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'e-message' : undefined}
                  />
                  {errors.message && (
                    <p id="e-message" className="mt-1.5 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="btn-primary flex-1 py-3.5">
                  <Send className="h-4 w-4" /> Send by email
                </button>
                <button type="button" onClick={sendWhatsApp} className="btn-whatsapp flex-1 py-3.5">
                  <FaWhatsapp className="h-4 w-4" /> Send via WhatsApp
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-400">Your message opens in your email app or WhatsApp, ready to send — nothing is stored on this website.</p>
            </form>
          )}
        </section>
      </div>

      {/* Map */}
      <section className="container-page pb-16 md:pb-24" aria-label="Location map">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps?q=2.98605%2C101.62635&z=17&output=embed"
            className="h-[360px] w-full md:h-[440px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Myco Medic Sdn Bhd location on Google Maps"
          />
          <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:max-w-xs">
            <p className="text-sm font-semibold text-gray-900">{COMPANY.name}</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-600">{COMPANY.addressLines.join(', ')}</p>
            <a href={COMPANY.directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-700">
              <Navigation className="h-3.5 w-3.5" /> Get directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
