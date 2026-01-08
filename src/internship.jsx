import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, FileText, Users, CheckCircle, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function Internship() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Internship
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto font-light">
              Explore the medical world with Myco Medic Sdn Bhd! Here, we focus on providing first hand experience and field exposure to our staff.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Scopes Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 tracking-tight text-center">
              Job Scopes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Admin Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">Admin</h3>
              </div>
              <ul className="space-y-3 text-gray-600 leading-relaxed font-light">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Help in Filling Forms and Data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Inventory Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Simple Accounting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Handle Product Registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Partially Help Up Sales Team</span>
                </li>
              </ul>
            </motion.div>

            {/* Sales Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">Sales</h3>
              </div>
              <ul className="space-y-3 text-gray-600 leading-relaxed font-light">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Possess own transport - company will reimburse petrol, toll, parking for work related matters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Exposure to daily sales procedures and processes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Perform sales presentation and product training to doctors and nurses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Require to work in ICU and OT department in various hospitals.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-tight text-center">
              Requirements
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-xl p-8 border border-gray-200"
          >
            <ul className="space-y-4">
              {[
                'Proficiency in English and Bahasa Malaysia',
                'Hardworking and positive thinking individuals',
                'Good document management skills',
                'Team player and proactive',
                'Basic skill for Microsoft Office'
              ].map((requirement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-light">{requirement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Application
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8">
              Interested in joining our team?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 border border-gray-200 text-center"
          >
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              Send us your résumé to{' '}
              <a href="mailto:careers@mycomedic.com.my" className="text-gray-900 font-medium hover:underline">
                careers@mycomedic.com.my
              </a>{' '}
              or contact{' '}
              <a href="https://wa.me/60123822001" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:underline">
                012-382 2001
              </a>{' '}
              <span className="text-gray-500">(Ms. Caylee)</span> via WhatsApp or phone call.
            </p>
            <p className="text-base text-gray-500 font-light italic mt-6">
              Hope to see you in our team! For more information, contact us at{' '}
              <a href="https://wa.me/60123822001" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:underline">
                +6012-382 2001
              </a>.
            </p>
          </motion.div>

          {/* Back to Career Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-center"
          >
            <Link
              to="/career"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Career
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone="+60196649622" message="Hi Myco Medic!" />
    </div>
  )
}

export default Internship

