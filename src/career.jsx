import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Briefcase, FileText, MapPin, Clock, Share2, Mail, Phone } from 'lucide-react'

function Career() {
  const [selectedJob, setSelectedJob] = useState(0)

  const jobs = [
    {
      id: 1,
      title: 'Admin - Full Time, Internship',
      location: 'Puchong, Selangor, Malaysia',
      categories: ['Administration', 'Operations', 'Business Support'],
      employmentType: 'FULL TIME',
      employmentTypeAlt: 'INTERNSHIP',
      icon: FileText,
      description: `We are looking for passionate and hard-working individuals to join our Admin team. This role offers opportunities for both Full Time employment and Internship positions.

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
      title: 'Sales - Full Time, Internship',
      location: 'Puchong, Selangor, Malaysia',
      categories: ['Sales', 'Business Development', 'Healthcare'],
      employmentType: 'FULL TIME',
      employmentTypeAlt: 'INTERNSHIP',
      icon: Briefcase,
      description: `Join our Sales team and explore the medical world with Myco Medic Sdn Bhd! We focus on providing first-hand experience and field exposure to our staff.

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

This is a unique opportunity to be part of a fast-evolving industry and learn from the ground up in a dynamic, supportive environment. Ready to take the first step in your career with us?`
    }
  ]

  return (
    <div className="bg-white min-h-screen">
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
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                            {job.employmentType}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                            {job.employmentTypeAlt}
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
                          <span className="text-gray-400">•</span>
                          <span>{jobs[selectedJob].employmentTypeAlt}</span>
                        </div>
                      </div>
                    </div>

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
                      <div className="prose prose-sm max-w-none">
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {jobs[selectedJob].description}
                        </div>
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
