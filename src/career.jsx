import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Briefcase, FileText, MapPin, Clock, Share2, Mail, Phone } from 'lucide-react'
import PageSEO from './components/PageSEO'

function JobOverviewBody({ text }) {
  return (
    <>
      {text.split('\n').map((line, index) => {
        if (line.startsWith('**') && line.endsWith('**')) {
          return (
            <p key={index} className="font-semibold text-gray-900 mb-2 mt-5 first:mt-0">
              {line.replace(/\*\*/g, '')}
            </p>
          )
        }
        if (line.trim().startsWith('•')) {
          return (
            <div key={index} className="flex items-start gap-2 mb-2">
              <span className="text-teal-600 mt-0.5 shrink-0">•</span>
              <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
            </div>
          )
        }
        if (line.trim()) {
          return (
            <p key={index} className="mb-3 text-gray-700 leading-relaxed last:mb-0">
              {line}
            </p>
          )
        }
        return <br key={index} />
      })}
    </>
  )
}

function Career() {
  const [selectedJob, setSelectedJob] = useState(0)

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

  return (
    <div className="bg-white min-h-screen">
      <PageSEO
        title="Careers"
        description="Join Myco Medic — career opportunities in medical supplies and healthcare distribution across Malaysia."
        path="/career"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Career Opportunity
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto font-light">
              Join us in advancing healthcare standards across Malaysia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Why Join Us?
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
              We are looking for individuals who are passionate and hard-working to be part of us to help us explore and expand our business market. We value our people as a great asset for the company.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              At Myco Medic, we truly believe that hard work pays off, every hard work you put in will deliver results and determine your own career future. Build your career path with us, today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Application Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2 tracking-tight">
              Career Application
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              For direct job application or internship related queries, kindly drop your resume and email us at{' '}
              <span className="text-gray-900 font-medium">bryan@mycomedic.com.my</span>
              {' '}or contact us at{' '}
              <a href="https://wa.me/60123375935" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:underline">
                +60 12-337 5935
              </a>{' '}
              <span className="text-gray-500">(Mr. Bryan)</span> via WhatsApp or phone call.
            </p>
          </motion.div>

          {/* Split View Layout */}
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-6">
            {/* Left Panel - Job Listings */}
            <div className="space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">Position Available</h3>
                <p className="text-sm text-gray-500">
                  There are currently a total of <span className="text-teal-600 font-medium">{jobs.length}</span> position(s) available.
                </p>
              </div>

              {jobs.map((job, index) => {
                const Icon = job.icon
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setSelectedJob(index)}
                    className={`p-5 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedJob === index
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Briefcase className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{job.categories.join(', ')}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              job.track === 'internship'
                                ? 'bg-teal-100 text-teal-800 ring-1 ring-teal-200/80'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {job.employmentType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Right Panel - Job Details */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              {jobs[selectedJob] && (
                <motion.div
                  key={selectedJob}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  {/* Company Banner */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src="/Myco_Medic.png"
                      alt="Myco Medic"
                      className="w-full h-full object-contain object-center opacity-30"
                    />
                  </div>

                  {/* Job Details */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h2 className="text-2xl font-medium text-gray-900 mb-4">
                        {jobs[selectedJob].title}
                      </h2>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-5 h-5 text-gray-400" />
                          <span>{jobs[selectedJob].location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-5 h-5 text-gray-400" />
                          <span>{jobs[selectedJob].employmentType}</span>
                        </div>
                      </div>
                    </div>

                    {jobs[selectedJob].track === 'internship' && (
                      <div className="mb-6 rounded-xl border border-teal-200/80 bg-gradient-to-br from-teal-50 to-white px-4 py-4 text-sm text-gray-800 leading-relaxed shadow-sm">
                        <p className="font-medium text-teal-900 mb-1">Corporate responsibility and talent development</p>
                        <p className="text-gray-700">
                          Myco Medic treats internship placements as a formal investment in professional capability. Selected interns receive structured supervision, clearly defined learning expectations, and access to experienced personnel, in keeping with the organisation’s standards and its responsibilities toward the healthcare sector.
                        </p>
                      </div>
                    )}

                    {/* Apply via email / WhatsApp */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-stretch sm:items-start">
                      <div className="flex-1 rounded-lg border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm text-gray-700 leading-relaxed">
                        <p>
                          To apply, send your resume and mention the role to{' '}
                          <span className="font-semibold text-gray-900">bryan@mycomedic.com.my</span>
                          {' '}or{' '}
                          <a
                            href="https://wa.me/60123375935?text=Hi%2C%20I%27d%20like%20to%20apply%20for%20a%20position%20at%20Myco%20Medic."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-primary hover:underline"
                          >
                            WhatsApp
                          </a>
                          .
                        </p>
                      </div>
                      <button
                        type="button"
                        className="shrink-0 self-start p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        aria-label="Share"
                      >
                        <Share2 className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>

                    {/* Job Overview */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Job Overview</h3>
                      <div className="prose prose-sm max-w-none text-gray-700">
                        <JobOverviewBody text={jobs[selectedJob].description} />
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">How to Apply</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium text-gray-900">bryan@mycomedic.com.my</span>
                        </div>
                        <a
                          href="https://wa.me/60123375935"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                        >
                          <Phone className="w-4 h-4 flex-shrink-0" />
                          <span>+60 12-337 5935 (Mr. Bryan)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone="+60123375935" message="Hi Myco Medic!" />
    </div>
  )
}

export default Career
