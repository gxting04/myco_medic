import React, { useState, useEffect, useRef } from 'react'

function Partners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const partners = [
    { name: 'Dansu', logo: '/MPC.png', website: 'https://www.dansu-china.com/' },
    { name: 'Cape Warwick', logo: '/cape.png', website: 'https://www.cape-warwick.co.uk/' },
    { name: 'Maizi', logo: '/maizi.png', website: 'https://maizi.en.alibaba.com/' },
    { name: 'Tappa', logo: '/tappa.png', website: 'https://www.tappamed.com/en/index.aspx' },
    { name: 'IOB Medical', logo: '/iob.png', website: 'https://www.iobmedical.com/' },
    { name: 'OKLand Medical', logo: '/okland.png', website: 'https://en.okltj.com/' },
    { name: 'Sklar', logo: '/sklar.png', website: 'https://www.sklarcorp.com/' },
    { name: 'UE Scope', logo: '/uescope.png', website: 'https://uescope.com/' },
    { name: 'Vitaltec', logo: '/vital.png', website: 'https://www.vitaltec-corp.com/en' },
    { name: 'WTK', logo: '/wtk.png', website: 'https://www.wtktechnologies.com.my/index.html' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className='py-24 bg-white border-t border-gray-100'>
      <div className='max-w-7xl mx-auto px-6'>
        <p className='text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-12'>
          Trusted by Industry Leaders
        </p>

        <div className='flex flex-wrap justify-center items-center gap-x-12 gap-y-12 opacity-80'>
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.website}
              target='_blank'
              rel='noopener noreferrer'
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className='h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300'
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
