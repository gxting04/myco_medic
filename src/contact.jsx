import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Building2 } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Header/>
      
      {/* Hero Section - Minimalist */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
              We're here to help. Reach out to us for any inquiries about our products or services.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
        {/* Locate Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">Locate Us</h2>
          
          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <div className="w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=Myco+Medic+Sdn+Bhd,+No.+2A-G,+Jalan+Sierra+10/3,+Bandar+16+Sierra,+47120+Puchong,+Selangor,+Malaysia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Myco Medic Sdn Bhd Location"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.section>

        {/* Office & Contacts Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-12 tracking-wide">Office & Contacts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Headquarters Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Headquarters</h3>
              </div>
              <div className="space-y-2 text-gray-600 leading-relaxed">
                <p className="font-medium text-gray-900">Myco Medic Sdn Bhd</p>
                <p>No. 2A-G, Floor, Jalan Sierra 10/3,</p>
                <p>Bandar 16 Sierra, 47120 Puchong,</p>
                <p>Selangor Darul Ehsan, Malaysia.</p>
              </div>
            </motion.div>
            
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Get in Touch</h3>
              </div>
              
              <div className="space-y-4">
                <a
                  href="tel:+60389570599"
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Phone</p>
                    <p className="text-base font-medium text-gray-900 mt-1">+603-8957 0599</p>
                  </div>
                </a>

                <a
                  href="mailto:sales@mycomedic.com.my"
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-base font-medium text-gray-900 mt-1">sales@mycomedic.com.my</p>
                  </div>
                </a>

                <a
                  href="mailto:info@mycomedic.com.my"
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-base font-medium text-gray-900 mt-1">info@mycomedic.com.my</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form Section - Minimalist */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200">
            <div className="mb-10">
              <h2 className="text-2xl font-light text-gray-900 mb-2 tracking-wide">Send a Message</h2>
              <p className="text-sm text-gray-500 font-light">Fill out the form below and we'll get back to you soon.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="How can we help you?"
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all resize-none text-gray-900 placeholder-gray-400"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-900 text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>

            {/* Business Hours */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-3 text-gray-600">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Business Hours</p>
                  <p className="text-sm text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-500">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
      <Footer/>
      <WhatsAppFloat phone='+60196649622' message='Hi Myco Medic!' />
    </div>
  );
}

export default Contact;
