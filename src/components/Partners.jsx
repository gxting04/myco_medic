import React from 'react'

export const PARTNERS = [
  { name: 'Dansu', logo: '/MPC.png', website: 'https://www.dansu-china.com/' },
  { name: 'Cape Warwick', logo: '/cape.png', website: 'https://www.cape-warwick.co.uk/' },
  { name: 'Maizi', logo: '/maizi.png', website: 'https://maizi.en.alibaba.com/' },
  { name: 'Tappa', logo: '/tappa.png', website: 'https://www.tappamed.com/en/index.aspx' },
  { name: 'Mercury Medical', logo: '/mercury_medical.png', website: 'https://www.mercurymed.com/' },
  { name: 'Baihe', logo: '/baihe.png', website: 'https://www.baihemedical.eu/' },
  { name: 'OKLand Medical', logo: '/okland.png', website: 'https://en.okltj.com/' },
  { name: 'UE Scope', logo: '/uescope.png', website: 'https://uescope.com/' },
  { name: 'Vitaltec', logo: '/vital.png', website: 'https://www.vitaltec-corp.com/en' },
  { name: 'WTK', logo: '/wtk.png', website: 'https://www.wtktechnologies.com.my/index.html' },
  { name: 'Trucorp', logo: '/trucorp.png', website: 'https://trucorp.com/' }
]

/**
 * Manufacturer logo strip. A CSS marquee (pauses on hover/focus) replaces the
 * old setInterval scroller, which ran every 30 ms for as long as the page was
 * open — including while scrolled out of view.
 */
function Partners() {
  const loop = [...PARTNERS, ...PARTNERS]
  return (
    <section className="border-b border-gray-100 bg-white py-12 md:py-14" aria-labelledby="partners-title">
      <div className="container-page">
        <p id="partners-title" className="text-center text-sm text-gray-500">
          Distributing for trusted manufacturers across Asia, Europe and the US
        </p>
      </div>
      <div className="marquee relative mt-8 overflow-hidden focus-within:[&_.marquee-track]:[animation-play-state:paused]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />
        <ul className="marquee-track items-center">
          {loop.map((p, i) => (
            <li key={`${p.name}-${i}`} className="shrink-0 px-6 sm:px-10" aria-hidden={i >= PARTNERS.length || undefined}>
              <a
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={i >= PARTNERS.length ? -1 : undefined}
                className="block opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 focus-visible:grayscale-0"
                title={p.name}
              >
                <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="h-14 w-32 object-contain sm:h-16 sm:w-36" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Partners
