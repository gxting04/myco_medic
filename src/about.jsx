import { Link } from 'react-router-dom'
import { ArrowRight, Award, Globe2, ShieldCheck, Star, Stethoscope, Target, TrendingUp, Users } from 'lucide-react'
import PageSEO from './components/PageSEO'
import { Reveal } from './lib/motion'
import { COMPANY } from './lib/site'

const VALUES = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'Building long-term trust through honest and transparent practices.' },
  { icon: Target, title: 'Innovation', desc: 'Bringing cutting-edge medical solutions that redefine patient care.' },
  { icon: Star, title: 'Commitment', desc: 'Dedicated support for hospitals and healthcare professionals.' },
  { icon: Award, title: 'Excellence', desc: 'Maintaining the highest standards in products and customer service.' }
]

const EXPERTISE = [
  'Neurosurgery',
  'Orthopedics',
  'Urology',
  'Operating Theatre',
  'Critical Care',
  'Intensive Care',
  'CSSD Departments',
  'Medical Innovations'
]

function IconTile({ icon: Icon }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700">
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  )
}

function About() {
  const yearsExperience = new Date().getFullYear() - COMPANY.since

  const stats = [
    { icon: Users, value: '50+', label: 'Trusted Hospitals' },
    { icon: Globe2, value: 'Nationwide', label: 'Presence' },
    { icon: Star, value: '#1', label: 'Patient Priority' },
    { icon: Award, value: `${yearsExperience}+`, label: 'Years Excellence' }
  ]

  const reasons = [
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      desc: `${yearsExperience}+ years of consistent excellence in medical device distribution across Malaysia.`
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assured',
      desc: 'All products meet international standards with comprehensive quality assurance protocols.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      desc: 'Dedicated team of healthcare professionals providing ongoing support and training.'
    }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageSEO
        title="About Us"
        description="Learn about Myco Medic — trusted medical supplies and equipment partner serving hospitals, clinics, and healthcare providers in Malaysia."
        path="/about"
      />

      {/* Page header */}
      <header className="border-b border-gray-100 bg-gray-50/60">
        <div className="container-page grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">About us · Since {COMPANY.since}</span>
            <h1 className="heading-xl mt-3 max-w-2xl">Advancing Healthcare Standards in Malaysia</h1>
            <p className="lead mt-4 max-w-2xl">
              <strong className="font-semibold text-gray-900">Myco Medic Sdn. Bhd.</strong> has been a trusted name in Malaysia’s healthcare
              industry, delivering reliable, high-quality medical solutions that empower hospitals and healthcare professionals nationwide.
            </p>
          </div>

          <div className="relative">
            <img
              src="/header_4.jpg"
              alt="Surgical team at work in an operating theatre"
              width="1600"
              height="896"
              className="aspect-[16/10] w-full rounded-3xl border border-gray-200 object-cover"
            />
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.3)] sm:left-8 sm:px-5 sm:py-4">
              <IconTile icon={Award} />
              <div>
                <p className="text-2xl font-semibold tracking-tight text-gray-900">{yearsExperience}+</p>
                <p className="text-xs text-gray-500">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Our impact */}
      <section className="section bg-white" aria-labelledby="impact-title">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Our Impact</span>
            <h2 id="impact-title" className="heading-lg mt-3">
              Numbers that reflect our commitment to excellence
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <dl className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 lg:grid-cols-4">
              {stats.map(({ icon, value, label }, i) => (
                <div
                  key={label}
                  className={`flex flex-col gap-4 p-5 sm:p-6 ${i % 2 === 1 ? 'border-l border-gray-200' : ''} ${
                    i >= 2 ? 'border-t border-gray-200 lg:border-t-0' : ''
                  } ${i === 2 ? 'lg:border-l' : ''}`}
                >
                  <IconTile icon={icon} />
                  <div className="flex min-w-0 flex-col-reverse">
                    <dt className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">{label}</dt>
                    <dd className="text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Mission & values */}
      <section className="section border-t border-gray-100 bg-gray-50/60" aria-labelledby="values-title">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr,1.3fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Our Foundation</span>
            <h2 id="values-title" className="heading-lg mt-3">
              Mission & Core Values
            </h2>
            <p className="lead mt-5">
              Guided by integrity and innovation, we strive to bring the most advanced medical technologies and dependable service to
              Malaysia’s healthcare ecosystem.
            </p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {VALUES.map(({ icon, title, desc }, i) => (
              <Reveal as="li" key={title} delay={i * 0.05} className="card p-6">
                <IconTile icon={icon} />
                <h3 className="mt-5 text-base font-semibold text-gray-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="section border-t border-gray-100 bg-white" aria-labelledby="expertise-title">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Specialties</span>
            <h2 id="expertise-title" className="heading-lg mt-3">
              Areas of Expertise
            </h2>
            <p className="lead mt-4">Serving diverse medical specialties across Malaysia</p>
          </Reveal>

          <Reveal delay={0.05}>
            <ul className="mt-10 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-4">
              {EXPERTISE.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition-colors hover:border-gray-300"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700">
                    <Stethoscope className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 text-sm font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section border-t border-gray-100 bg-gray-50/60" aria-labelledby="why-title">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Why Myco Medic</span>
            <h2 id="why-title" className="heading-lg mt-3">
              Why Choose Myco Medic?
            </h2>
            <p className="lead mt-4">
              With over a decade of experience and nationwide partnerships, Myco Medic stands for reliability, precision, and compassion.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reasons.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.05} className="card p-6 sm:p-8">
                <IconTile icon={icon} />
                <h3 className="mt-5 text-base font-semibold text-gray-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section border-t border-gray-100 bg-white">
        <div className="container-page">
          <Reveal className="rounded-3xl border border-gray-200 bg-gray-50/60 px-6 py-12 text-center sm:px-12 md:py-16">
            <h2 className="heading-lg mx-auto max-w-2xl">Ready to Transform Your Healthcare Solutions?</h2>
            <p className="lead mx-auto mt-4 max-w-xl">
              Partner with Myco Medic and experience the difference that quality and expertise make.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="btn-outline">
                Explore our products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default About
