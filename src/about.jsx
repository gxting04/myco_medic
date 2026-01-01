import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { motion, useInView } from 'framer-motion'
import { 
  ShieldCheck, 
  Users, 
  Stethoscope, 
  Globe2, 
  Star, 
  Target,
  Award,
  TrendingUp,
  ArrowRight
} from 'lucide-react'

function About() {
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' })

  // Animated counter for stats
  const useCountUp = (end, duration = 2000, inView) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (!inView) return
      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, [inView, end, duration])
    
    return count
  }

  const trustedHospitals = useCountUp(50, 2000, isStatsInView)
  const yearsExperience = useCountUp(13, 2000, isStatsInView)

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero Section - Minimalist */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Since 2010</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-6 tracking-tight">
                Advancing Healthcare Standards in Malaysia
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                <strong className="font-medium text-gray-900">Myco Medic Sdn. Bhd.</strong> has been a trusted name in Malaysia's healthcare industry, delivering reliable, high-quality medical solutions that empower hospitals and healthcare professionals nationwide.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <img
                  src="/Header.png"
                  alt="Myco Medic"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Floating Badge - Minimalist */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-medium text-gray-900">{yearsExperience}+</div>
                      <div className="text-xs text-gray-500">Years Experience</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimalist List */}
      <section ref={statsRef} className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-3 tracking-wide">Our Impact</h2>
            <p className="text-gray-500 font-light">Numbers that reflect our commitment to excellence</p>
          </motion.div>

          <div className="space-y-8">
            {[
              { icon: Users, value: `${trustedHospitals}+`, label: 'Trusted Hospitals' },
              { icon: Globe2, value: 'Nationwide', label: 'Presence' },
              { icon: Star, value: '#1', label: 'Patient Priority' },
              { icon: Award, value: `${yearsExperience}+`, label: 'Years Excellence' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-8 py-6 border-b border-gray-200 last:border-0"
              >
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-light text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values - Minimalist List */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1.5 bg-gray-100 rounded-full mb-4">
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Mission & Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light mb-12">
              Guided by integrity and innovation, we strive to bring the most advanced medical technologies and dependable service to Malaysia's healthcare ecosystem.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: 'Integrity',
                desc: 'Building long-term trust through honest and transparent practices.',
                icon: ShieldCheck,
                delay: 0.1
              },
              {
                title: 'Innovation',
                desc: 'Bringing cutting-edge medical solutions that redefine patient care.',
                icon: Target,
                delay: 0.2
              },
              {
                title: 'Commitment',
                desc: 'Dedicated support for hospitals and healthcare professionals.',
                icon: Star,
                delay: 0.3
              },
              {
                title: 'Excellence',
                desc: 'Maintaining the highest standards in products and customer service.',
                icon: Award,
                delay: 0.4
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="flex items-start gap-6"
              >
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise - Minimalist Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-500 font-light">Serving diverse medical specialties across Malaysia</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -2 }}
                className="bg-white rounded-lg p-5 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-800 text-sm">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Minimalist */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Why Choose Myco Medic?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              With over a decade of experience and nationwide partnerships, Myco Medic stands for reliability, precision, and compassion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Proven Track Record',
                desc: '13+ years of consistent excellence in medical device distribution across Malaysia.'
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
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist */}
      <section className="py-24 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Ready to Transform Your Healthcare Solutions?
            </h2>
            <p className="text-lg text-gray-400 mb-8 font-light">
              Partner with Myco Medic and experience the difference that quality and expertise make.
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone="+60196649622" message="Hi Myco Medic!" />
    </div>
  )
}

export default About
