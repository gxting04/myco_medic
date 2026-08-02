import React, { useState, useRef, useEffect } from 'react'

function Partners() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const pressX = useRef(0)
  const scrollLeft = useRef(0)
  const hasDragged = useRef(false)
  const autoScrollRef = useRef(null)

  // Auto-slide when not dragging
  useEffect(() => {
    if (isDragging || !scrollRef.current) return
    const scroll = () => {
      if (!scrollRef.current || isDragging) return
      scrollRef.current.scrollLeft += 1
      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
        scrollRef.current.scrollLeft = 0
      }
    }
    autoScrollRef.current = setInterval(scroll, 30)
    return () => clearInterval(autoScrollRef.current)
  }, [isDragging])

  const handlePointerDown = (e) => {
    if (!scrollRef.current) return
    e.preventDefault() // Prevent link drag and text selection - enables immediate drag on press
    setIsDragging(true)
    hasDragged.current = false
    startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    pressX.current = startX.current
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const handlePointerMove = (e) => {
    if (!isDragging || !scrollRef.current) return
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    const walk = (x - startX.current) * 1.5
    // measured from the press point, not this frame's delta — a slow finger swipe
    // used to accumulate small deltas and still register as a click
    if (Math.abs(x - pressX.current) > 8) hasDragged.current = true
    e.preventDefault()
    scrollRef.current.scrollLeft = scrollLeft.current - walk
    startX.current = x
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const handlePointerUp = () => setIsDragging(false)

  // Listen to document-level events so dragging continues when cursor leaves the container
  const handlersRef = useRef({ handlePointerMove, handlePointerUp })
  handlersRef.current = { handlePointerMove, handlePointerUp }

  useEffect(() => {
    if (!isDragging) return
    const handleMove = (e) => handlersRef.current.handlePointerMove(e)
    const handleUp = () => handlersRef.current.handlePointerUp()
    document.addEventListener('pointermove', handleMove)
    document.addEventListener('pointerup', handleUp)
    document.addEventListener('pointercancel', handleUp)
    document.body.style.cursor = 'grabbing'
    document.body.style.userSelect = 'none'
    return () => {
      document.removeEventListener('pointermove', handleMove)
      document.removeEventListener('pointerup', handleUp)
      document.removeEventListener('pointercancel', handleUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
  }, [isDragging])

  const handleLinkClick = (e) => {
    if (hasDragged.current) e.preventDefault()
  }

  const partners = [
    { name: 'Dansu', logo: '/MPC.png', website: 'https://www.dansu-china.com/' },
    { name: 'Cape Warwick', logo: '/cape.png', website: 'https://www.cape-warwick.co.uk/' },
    { name: 'Maizi', logo: '/maizi.png', website: 'https://maizi.en.alibaba.com/' },
    { name: 'Tappa', logo: '/tappa.png', website: 'https://www.tappamed.com/en/index.aspx' },
    { name: 'Mercury Medical', logo: '/mercury_medical.png', website: 'https://www.mercurymed.com/' },
    { name: 'Baihe', logo: '/baihe.png', website: 'https://www.baihemedical.eu/' },
    { name: 'OKLand Medical', logo: '/okland.png', website: 'https://en.okltj.com/' },
    { name: 'UE Scope', logo: '/uescope.png', website: 'https://uescope.com/' },
    { name: 'Vitaltec', logo: '/vital.png', website: 'https://www.vitaltec-corp.com/en' },
    { name: 'WTK', logo: '/wtk.png', website: 'https://www.wtktechnologies.com.my/index.html' }
  ]

  // Duplicate partners array for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className='py-14 md:py-16 bg-white border-t border-gray-100 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-10'>
          <p className='text-sm font-semibold text-primary uppercase tracking-wider'>
            Our Partners
          </p>
          <h2 className='mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900'>
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className='relative'>
          {/* Gradient overlays for fade effect on edges */}
          <div className='absolute left-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none' />
          <div className='absolute right-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none' />
          
          {/* Scrollable logos - drag to scroll */}
          <div
            ref={scrollRef}
            className='flex overflow-x-auto overflow-y-hidden gap-0 cursor-grab active:cursor-grabbing select-none scrollbar-hide'
            /* pan-y, not none: 'none' also swallowed vertical swipes, so the page
               could not be scrolled with a finger resting on the logo strip */
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-y' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {duplicatedPartners.map((partner, index) => (
                <a
                  key={`${partner.name}-${index}`}
                  href={partner.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={handleLinkClick}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className='group flex items-center justify-center flex-shrink-0 px-4 sm:px-8 md:px-12 lg:px-16'
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    /* full colour on touch — the grayscale reveal is hover-gated and
                       hover never fires on a phone. sm: keeps desktop identical. */
                    className='h-24 w-24 sm:h-16 sm:w-auto md:h-20 lg:h-24 max-w-full object-contain grayscale-0 opacity-100 sm:grayscale sm:opacity-70 sm:group-hover:grayscale-0 sm:group-hover:opacity-100 group-hover:scale-105 transition-all duration-300'
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
    </section>
  )
}

export default Partners
