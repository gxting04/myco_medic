import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, FileText, Users, Target, Award, MapPin, Clock, Share2, Mail, Phone, X, Upload } from 'lucide-react'

function Career() {
  const [selectedJob, setSelectedJob] = useState(0)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    employmentType: '',
    coverLetter: ''
  })
  const [resumeFile, setResumeFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

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
              <a href="mailto:careers@mycomedic.com.my" className="text-gray-900 font-medium hover:underline">
                careers@mycomedic.com.my
              </a>{' '}
              or contact us at{' '}
              <a href="https://wa.me/60123822001" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:underline">
                +6012-382 2001
              </a>{' '}
              <span className="text-gray-500">(Ms. Caylee)</span> via WhatsApp or phone call.
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

                    {/* Action Buttons */}
                    <div className="flex gap-3 mb-6">
                      <button
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            position: jobs[selectedJob].title,
                            employmentType: '' // Reset to allow user to choose
                          }))
                          setShowApplicationForm(true)
                        }}
                        className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors text-center"
                      >
                        Apply
                      </button>
                      <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
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
                        <a
                          href="mailto:careers@mycomedic.com.my"
                          className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span>careers@mycomedic.com.my</span>
                        </a>
                        <a
                          href="https://wa.me/60123822001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span>+6012-382 2001 (Ms. Caylee)</span>
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

      {/* Application Form Modal */}
      <AnimatePresence>
        {showApplicationForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => !isSubmitting && setShowApplicationForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-medium text-gray-900">Job Application</h2>
                <button
                  onClick={() => !isSubmitting && setShowApplicationForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  disabled={isSubmitting}
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <form
                onSubmit={handleApplicationSubmit}
                className="p-6 space-y-6"
              >
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.includes('success') 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      disabled={isSubmitting}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      disabled={isSubmitting}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      disabled={isSubmitting}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
                      placeholder="+6012-345 6789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleFormChange}
                      required
                      disabled={isSubmitting}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100 bg-gray-50"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employment Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleFormChange}
                    required
                    disabled={isSubmitting}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100 bg-white"
                  >
                    <option value="">Select employment type</option>
                    <option value="FULL TIME">Full Time</option>
                    <option value="INTERNSHIP">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex items-center gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required={!resumeFile}
                        disabled={isSubmitting}
                        className="hidden"
                      />
                      <div className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-teal-500 transition-colors">
                        <Upload className="w-5 h-5 text-gray-400" />
                        <div className="flex-1">
                          <p className="text-sm text-gray-600">
                            {resumeFile ? resumeFile.name : 'Click to upload resume (PDF, DOC, DOCX)'}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">Max file size: 5MB</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleFormChange}
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    disabled={isSubmitting}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppFloat phone="+60123822001" message="Hi Myco Medic!" />
    </div>
  )

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleFileChange(e) {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setSubmitMessage('File size must be less than 5MB')
        return
      }
      setResumeFile(file)
      setSubmitMessage('')
    }
  }

  async function handleApplicationSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.position || !formData.employmentType) {
      setSubmitMessage('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    if (!resumeFile) {
      setSubmitMessage('Please upload your resume/CV.')
      setIsSubmitting(false)
      return
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('position', formData.position)
      formDataToSend.append('employmentType', formData.employmentType)
      formDataToSend.append('coverLetter', formData.coverLetter || '')
      if (resumeFile) {
        formDataToSend.append('resume', resumeFile)
      }

      const response = await fetch(`${API_URL}/api/career-application`, {
        method: 'POST',
        body: formDataToSend
      })

      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        let errorMessage = 'Failed to submit application. Please try again.'
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch (parseError) {
          // If response is not JSON, use status text
          errorMessage = `Server error: ${response.status} ${response.statusText}`
        }
        setSubmitMessage(errorMessage)
        setIsSubmitting(false)
        return
      }

      const result = await response.json()

      if (result.success || response.ok) {
        setSubmitMessage('Application submitted successfully! We will contact you soon.')
        setTimeout(() => {
          setShowApplicationForm(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            position: '',
            employmentType: '',
            coverLetter: ''
          })
          setResumeFile(null)
          setSubmitMessage('')
        }, 2000)
      } else {
        setSubmitMessage(result.error || 'Failed to submit application. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      // Provide more specific error messages
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setSubmitMessage('Unable to connect to server. Please check your internet connection and try again.')
      } else {
        setSubmitMessage(`Error: ${error.message || 'An error occurred. Please try again later.'}`)
      }
    } finally {
      setIsSubmitting(false)
    }
  }
}

export default Career
