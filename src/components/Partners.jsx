import React, { useState, useEffect, useRef } from 'react'

function Partners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const partners = [
    { name: 'Dansu', logo: '/MPC.png', website: 'https://www.dansu-china.com/' },
    { name: 'Cape Warwick', logo: '/cape.png', website: 'https://www.cape-warwick.co.uk/' },
    { name: 'Maizi', logo: '/maizi.png', website: 'https://maizi.en.alibaba.com/' },
    { name: 'Tappa', logo: '/tappa.png', website: 'https://www.tappamed.com/en/index.aspx' },
    { name: 'Mercury Medical', logo: '/mercury_medical.jpeg', website: 'https://www.mercurymed.com/' },
    { name: 'Baihe', logo: '/baihe.png', website: 'https://www.baihemedical.eu/' },
    { name: 'Haichuan', logo: '/haichuan.jpeg', website: 'https://www.haichuan-med.com/' },
    { name: 'OKLand Medical', logo: '/okland.png', website: 'https://en.okltj.com/' },
    { name: 'UE Scope', logo: '/uescope.png', website: 'https://uescope.com/' },
    { name: 'Vitaltec', logo: '/vital.png', website: 'https://www.vitaltec-corp.com/en' },
    { name: 'WTK', logo: '/wtk.png', website: 'https://www.wtktechnologies.com.my/index.html' }
  ]

  // Duplicate partners array for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section ref={sectionRef} className='py-24 bg-white border-t border-gray-100 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6'>
        <p className='text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-12'>
          Trusted by Industry Leaders
        </p>

        <div className='relative overflow-hidden'>
          {/* Gradient overlays for fade effect on edges */}
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none' />
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none' />
          
          {/* Sliding marquee container */}
          <div className='marquee-container'>
            {/* First set of logos */}
            <div className='marquee-track'>
              {duplicatedPartners.map((partner, index) => (
                <a
                  key={`track1-${partner.name}-${index}`}
                  href={partner.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center justify-center flex-shrink-0 px-8 md:px-12 lg:px-16 logo-item'
                  style={{
                    animationDelay: `${(index % partners.length) * 0.3}s`
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className='h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300'
                    onError={(e) => {
                      console.error(`Failed to load logo for ${partner.name}:`, partner.logo);
                      e.target.style.display = 'none';
                    }}
                  />
                </a>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className='marquee-track' aria-hidden='true'>
              {duplicatedPartners.map((partner, index) => (
                <a
                  key={`track2-${partner.name}-${index}`}
                  href={partner.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center justify-center flex-shrink-0 px-8 md:px-12 lg:px-16 logo-item'
                  style={{
                    animationDelay: `${(index % partners.length) * 0.3}s`
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className='h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300'
                    onError={(e) => {
                      console.error(`Failed to load logo for ${partner.name}:`, partner.logo);
                      e.target.style.display = 'none';
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
