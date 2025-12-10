import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function Contact() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen">
      <Header/>
      
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We're here to help. Reach out to us for any inquiries about our products or services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* 1️⃣ Contact Form Section */}
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-medium px-6 py-4 rounded-full hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* 2️⃣ Info & Map Section */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Office & Contacts</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-2">Headquarters</h3>
                  <p>Myco Medic Sdn Bhd</p>
                  <p>No. 2A-G, Floor, Jalan Sierra 10/3,</p>
                  <p>Bandar 16 Sierra, 47120 Puchong,</p>
                  <p>Selangor Darul Ehsan, Malaysia.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-2">Get in Touch</h3>
                   <p className="flex items-center gap-3 mb-2">
                    <span className="font-medium w-16">Phone:</span>
                    <span>+603-8957 0599</span>
                  </p>
                  <p className="flex flex-wrap items-center gap-3">
                    <span className="font-medium w-16">Email:</span>
                    <div className="flex flex-col sm:flex-row gap-1">
                      <a href="mailto:sales@mycomedic.com.my" className="text-primary hover:underline">sales@mycomedic.com.my</a>
                      <span className="hidden sm:inline text-gray-300">|</span>
                      <a href="mailto:info@mycomedic.com.my" className="text-primary hover:underline">info@mycomedic.com.my</a>
                    </div>
                  </p>
                </div>
              </div>
            </section>

            {/* 3️⃣ Locate Us Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Locate Us</h2>
              <div className="w-full h-[300px] rounded-3xl overflow-hidden shadow-md border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.015543903123!2d101.643!3d2.985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb4b4b4b4b4b%3A0x1234567890abcdef!2sMyco%20Medic%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1691234567890"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer/>
      <WhatsAppFloat phone='+60196649622' message='Hi Myco Medic!' />
    </div>
  );
}

export default Contact;
