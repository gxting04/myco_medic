import React, { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Briefcase, Check, ChevronRight, Clock, FileText, Link2, Mail, MapPin, Share2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import PageSEO from './components/PageSEO'
import RichText from './components/RichText'
import { Reveal } from './lib/motion'
import { CAREERS, mailtoLink, whatsappLink } from './lib/site'

function Career() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [copied, setCopied] = useState(false)
  const detailRef = useRef(null)

  const jobs = [
    {
      id: 1,
      title: 'Admin — Full Time',
      location: 'Puchong, Selangor, Malaysia',
      categories: ['Administration', 'Operations', 'Business Support'],
      employmentType: 'FULL TIME',
      track: 'fullTime',
      icon: FileText,
      description: `We are looking for passionate and hard-working individuals to join our Admin team in a full-time role.

**Job Scopes:**
• Help in filling forms and data
• Inventory management
• Simple accounting
• Handle product registration
• Partially help up sales team

**Requirements:**
• Proficiency in English and Bahasa Malaysia
• Hardworking and positive thinking individuals
• Good document management skills
• Team player and proactive
• Basic skill for Microsoft Office

At Myco Medic, we value our people as a great asset for the company. We truly believe that hard work pays off, and every hard work you put in will deliver results and determine your own career future.`
    },
    {
      id: 2,
      title: 'Admin — Internship',
      location: 'Puchong, Selangor, Malaysia',
      categories: ['Administration', 'Operations', 'Business Support'],
      employmentType: 'INTERNSHIP',
      track: 'internship',
      icon: FileText,
      description: `This internship is designed to provide hands-on administrative experience within a medical device company. Interns work closely with the team and gain practical insight into day-to-day operations, internal processes, and business support in a regulated industry context.

**Our commitment (CSR)**
• Myco Medic is committed to nurturing future talent through structured internship opportunities. Learning objectives are agreed at the outset, tasks are aligned to those objectives, and progress is reviewed to ensure the placement supports meaningful development.
• A structured induction covers documentation standards, reporting lines, and quality expectations. Supervisors provide ongoing guidance as workloads and priorities evolve.
• Training addresses both correct procedure and underlying rationale, in order to develop sound professional judgment within a healthcare supply environment.
• Assignments reflect genuine operational requirements, including data handling, inventory coordination, and administrative support, consistent with the service standards expected of the organisation by hospital and clinical customers.
• Constructive feedback is provided at appropriate intervals to recognise performance and identify areas for improvement, enabling interns to document relevant experience for future applications.
• The workplace maintains professional standards befitting the trust placed in the organisation by healthcare institutions. Investment in interns forms part of the company’s broader commitment to responsible corporate practice.

The organisation values students and early-career professionals. Interns receive supervisory support, substantive assignments, and competencies applicable beyond the conclusion of the placement.

**What you can gain**
• Practical experience with administrative workflows, documentation, and coordination
• Exposure to inventory, basic accounting, and product registration within an operating company
• Greater clarity regarding career pathways in healthcare business support

**Typical learning areas**
• Help in filling forms and data
• Inventory management
• Simple accounting
• Handle product registration
• Support the sales team where appropriate

**What we look for**
• Proficiency in English and Bahasa Malaysia
• Strong motivation to learn, reliability, and a collaborative approach
• Accurate document handling and correspondence
• Proficiency in Microsoft Office applications at a basic level`
    },
    {
      id: 3,
      title: 'Sales — Full Time',
      location: 'Puchong, Selangor, Malaysia',
      categories: ['Sales', 'Business Development', 'Healthcare'],
      employmentType: 'FULL TIME',
      track: 'fullTime',
      icon: Briefcase,
      description: `Join our Sales team full time and explore the medical world with Myco Medic Sdn Bhd. We focus on first-hand experience and field exposure for our people.

**Job Scopes:**
• Possess own transport - company will reimburse petrol, toll, parking for work related matters
• Exposure to daily sales procedures and processes
• Perform sales presentation and product training to doctors and nurses
• Require to work in ICU and OT department in various hospitals

**Requirements:**
• Proficiency in English and Bahasa Malaysia
• Hardworking and positive thinking individuals
• Good document management skills
• Team player and proactive
• Basic skill for Microsoft Office

This is a unique opportunity to be part of a fast-evolving industry and learn from the ground up in a dynamic, supportive environment. Ready to take the next step in your career with us?`
    },
    {
      id: 4,
      title: 'Sales — Internship',
      location: 'Puchong, Selangor, Malaysia',
      categories: ['Sales', 'Business Development', 'Healthcare'],
      employmentType: 'INTERNSHIP',
      track: 'internship',
      icon: Briefcase,
      description: `This internship offers structured exposure to medical device sales and institutional customer engagement. Participants observe how products progress from training environments to clinical deployment and how constructive professional relationships with clinicians are established and maintained.

**Our commitment (CSR)**
• Myco Medic is committed to nurturing future talent through structured internship opportunities: defined learning outcomes, appropriately supervised exposure to customer-facing activities where applicable, and review sessions following site visits or training activities as appropriate.
• Participation follows a phased approach: initial observation, followed by supervised involvement in presentations, in-service support, and designated customer interactions, conducted in accordance with safety requirements and professional standards.
• Coaching emphasises preparation, active listening, and disciplined follow-up as foundational competencies for engagement with clinical stakeholders.
• Senior staff contextualise product knowledge within hospital workflows, including intensive care and operating theatre environments where institutional approval and scheduling permit.
• Structured debriefing following field activities supports continuous improvement and accurate articulation of experience in subsequent recruitment processes.
• Investment in capable graduates supports the continuous improvement of healthcare delivery in Malaysia and the welfare of the communities served by our customers.

Interns receive defined learning aims, documented feedback, and field exposure that complements academic preparation.

**What you can gain**
• Orientation to sales procedures, institutional dialogue, and hospital environments
• Insight into post-sale clinical training and user support provided by the organisation
• Strengthened communication, planning, and follow-up applicable to professional roles

**Scope (under supervision)**
• Where appropriate, accompany and observe sales activities and in-service support
• Learn daily sales procedures and how presentations are delivered
• Understand how product training is conducted for doctors and nurses
• Awareness of work in clinical settings such as ICU and OT (as permitted and scheduled)

**What we look for**
• Proficiency in English and Bahasa Malaysia
• Initiative, professional conduct, and a disciplined approach to learning
• Collaborative style; possession of own transport is advantageous for field assignments
• Proficiency in Microsoft Office applications at a basic level

Interested candidates are invited to submit a curriculum vitae for consideration.`
    }
  ]

  // The selected role lives in the URL (?role=3) so a specific opening can be
  // shared — the old Share button had no handler and did nothing.
  const roleId = Number.parseInt(searchParams.get('role'), 10)
  const selectedIndex = Math.max(0, jobs.findIndex((j) => j.id === roleId))
  const job = jobs[selectedIndex]

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  const selectJob = (id) => {
    setSearchParams({ role: String(id) }, { replace: true, preventScrollReset: true })
    // On phones the details sit below the list; bring them into view.
    if (window.matchMedia('(max-width: 1023px)').matches) {
      requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }

  const share = async () => {
    const url = `${window.location.origin}/career?role=${job.id}`
    if (navigator.share) {
      try {
        await navigator.share({ title: `${job.title} — Myco Medic`, url })
        return
      } catch (err) {
        if (err?.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch {
      window.prompt('Copy this link', url)
    }
  }

  const applyEmail = mailtoLink(
    CAREERS.email,
    `Application: ${job.title}`,
    `Hi ${CAREERS.contactName},\n\nI would like to apply for the ${job.title} position at Myco Medic. Please find my resume attached.\n\nName:\nPhone:\n\nThank you.`
  )
  const applyWhatsApp = whatsappLink(`Hi ${CAREERS.contactName}, I'd like to apply for the ${job.title} position at Myco Medic.`, CAREERS.whatsapp)

  return (
    <div className="bg-white">
      <PageSEO
        title="Careers"
        description="Join Myco Medic — career opportunities in medical supplies and healthcare distribution across Malaysia."
        path="/career"
      />

      <header className="border-b border-gray-100 bg-gray-50/60">
        <div className="container-page grid gap-8 py-12 md:py-16 lg:grid-cols-[1.3fr,1fr] lg:items-end">
          <div>
            <span className="eyebrow">Careers</span>
            <h1 className="heading-xl mt-3">Build your career in healthcare</h1>
            <p className="lead mt-4 max-w-2xl">
              We are looking for passionate, hard-working people to help us grow. At Myco Medic we value our people as our greatest asset — the work
              you put in shapes your own career path.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-600">
            <p className="font-medium text-gray-900">How to apply</p>
            <p className="mt-1">
              Send your resume and the role you are applying for to{' '}
              <a href={mailtoLink(CAREERS.email, 'Job application')} className="font-medium text-primary hover:text-primary-700">
                {CAREERS.email}
              </a>
              , or WhatsApp {CAREERS.contactName} at{' '}
              <a href={whatsappLink('', CAREERS.whatsapp)} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-primary-700">
                {CAREERS.whatsappDisplay}
              </a>
              .
            </p>
            <Link to="/internship" className="mt-3 inline-flex items-center gap-1 font-medium text-gray-900 hover:text-primary">
              About our internship programme <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <section className="container-page grid gap-8 py-12 md:py-16 lg:grid-cols-[22rem,1fr] lg:gap-12" aria-label="Open positions">
        <div>
          <p className="mb-4 text-sm text-gray-500">
            <span className="font-medium text-gray-900">{jobs.length}</span> open position{jobs.length === 1 ? '' : 's'}
          </p>
          <ul className="space-y-3" role="list">
            {jobs.map((j) => {
              const Icon = j.icon
              const active = j.id === job.id
              return (
                <li key={j.id}>
                  <button
                    type="button"
                    onClick={() => selectJob(j.id)}
                    aria-pressed={active}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-colors ${
                      active ? 'border-primary bg-primary-50/60 ring-1 ring-primary' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${active ? 'border-primary/20 bg-white text-primary' : 'border-gray-200 bg-gray-50 text-gray-600'}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-semibold text-gray-900">{j.title}</span>
                      <span className="mt-1 block truncate text-xs text-gray-500">{j.categories.join(' · ')}</span>
                      <span
                        className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-medium ${
                          j.track === 'internship' ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {j.track === 'internship' ? 'Internship' : 'Full time'}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div ref={detailRef} className="scroll-mt-24">
          <Reveal key={job.id} y={12} duration={0.4} className="rounded-2xl border border-gray-200 lg:sticky lg:top-24">
            <div className="border-b border-gray-100 p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <h2 className="heading-md">{job.title}</h2>
                <button type="button" onClick={share} className="btn-ghost shrink-0 px-3 py-2 text-xs" aria-label="Share this position">
                  {copied ? <Check className="h-4 w-4 text-emerald-600" /> : typeof navigator !== 'undefined' && navigator.share ? <Share2 className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
                  {copied ? 'Link copied' : 'Share'}
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-gray-400" /> {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-gray-400" /> {job.track === 'internship' ? 'Internship' : 'Full time'}
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <a href={applyEmail} className="btn-primary">
                  <Mail className="h-4 w-4" /> Apply by email
                </a>
                <a href={applyWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <FaWhatsapp className="h-4 w-4" /> Apply via WhatsApp
                </a>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {job.track === 'internship' && (
                <div className="mb-6 rounded-xl border border-gray-200 bg-gray-50/60 p-4 text-sm leading-relaxed text-gray-600">
                  <p className="font-medium text-gray-900">Corporate responsibility and talent development</p>
                  <p className="mt-1">
                    Myco Medic treats internship placements as a formal investment in professional capability. Selected interns receive structured
                    supervision, clearly defined learning expectations, and access to experienced personnel, in keeping with the organisation’s standards
                    and its responsibilities toward the healthcare sector.
                  </p>
                </div>
              )}
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Job overview</h3>
              <RichText text={job.description} />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default Career
