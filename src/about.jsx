import React from 'react'
import Header from './components/Header'
import WhatsAppFloat from './components/WhatsAppFloat'
import { motion } from 'framer-motion'
import { Activity, ShieldCheck, Users, Stethoscope, HeartPulse, Globe2, Star, Target } from 'lucide-react'

function About() {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-28 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Advancing <span className="text-primary">Healthcare Standards</span> in Malaysia
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>Myco Medic Sdn. Bhd.</strong> has been a trusted name in Malaysia’s healthcare industry since 2010,
              delivering reliable, high-quality medical solutions that empower hospitals and healthcare professionals nationwide.
            </p>
            <div className="h-1 w-24 bg-primary rounded"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/about_us_medical_team.jpg"
              alt="Myco Medic Team"
              className="rounded-lg shadow-md w-full h-[420px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission & Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by integrity and innovation, we strive to bring the most advanced medical technologies and
            dependable service to Malaysia’s healthcare ecosystem.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: 'Integrity',
              desc: 'Building long-term trust through honest and transparent practices.',
              icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            },
            {
              title: 'Innovation',
              desc: 'Bringing cutting-edge medical solutions that redefine patient care.',
              icon: <Activity className="w-8 h-8 text-primary" />,
            },
            {
              title: 'Commitment',
              desc: 'Dedicated support for hospitals and healthcare professionals.',
              icon: <Target className="w-8 h-8 text-primary" />,
            },
            {
              title: 'Excellence',
              desc: 'Maintaining the highest standards in products and customer service.',
              icon: <Star className="w-8 h-8 text-primary" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">Our Areas of Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Neurosurgery',
              'Orthopedics',
              'Urology',
              'Operating Theatre',
              'Critical Care',
              'Intensive Care',
              'CSSD Departments',
              'Medical Innovations',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="flex items-center justify-center p-5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-white transition-all"
              >
                <Stethoscope className="w-5 h-5 text-primary mr-3" />
                <span className="font-medium text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose Myco Medic?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over a decade of experience and nationwide partnerships, Myco Medic stands for reliability, precision, and compassion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Users className="w-10 h-10 text-primary mx-auto mb-3" />, label: 'Trusted Hospitals', value: '50+' },
            { icon: <Globe2 className="w-10 h-10 text-primary mx-auto mb-3" />, label: 'Nationwide Presence', value: 'Malaysia' },
            { icon: <HeartPulse className="w-10 h-10 text-primary mx-auto mb-3" />, label: 'Patient-Centric', value: '#1 Priority' },
            { icon: <Star className="w-10 h-10 text-primary mx-auto mb-3" />, label: 'Years of Excellence', value: '13+' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              {item.icon}
              <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
              <div className="text-gray-700 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optional: Leadership Section for extra trust */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Behind every milestone is a team of dedicated professionals committed to advancing healthcare excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { name: 'Dr. Jason Lim', role: 'Managing Director', img: '/leader1.jpg' },
            { name: 'Ms. Aisha Rahman', role: 'Operations Director', img: '/leader2.jpg' },
            { name: 'Mr. Daniel Lee', role: 'Technical Head', img: '/leader3.jpg' },
          ].map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition p-6"
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">{leader.name}</h3>
              <p className="text-primary text-sm font-medium">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <WhatsAppFloat phone="+60196649622" message="Hi Myco Medic!" />
    </div>
  )
}

export default About
