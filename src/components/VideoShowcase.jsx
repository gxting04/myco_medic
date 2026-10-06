import React, { useState, useEffect, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

function VideoShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  // false until onPlay fires — iOS Low Power Mode blocks autoplay outright, and a
  // Pause icon over a stopped video does the opposite of what it promises
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  // Reveal on intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      // onPlay/onPause keep the icon honest; play() rejects if the browser blocks it
      video.play().catch(() => setIsPlaying(false))
    } else {
      video.pause()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <section ref={sectionRef} className="section bg-gray-950 text-white" aria-labelledby="video-title">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr,1.6fr] lg:gap-16">
        <div
          className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-sky-300">Who we are</span>
          <h2 id="video-title" className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            See Myco Medic in action
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            A closer look at how we deliver trusted medical supplies and equipment to hospitals and clinics across Malaysia.
          </p>
        </div>

        <div
          className={`group relative aspect-[5/8] overflow-hidden rounded-2xl bg-black ring-1 ring-white/10 transition-all delay-150 duration-700 sm:aspect-auto ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <video
            ref={videoRef}
            src="/myco_medic_video.mp4"
            /* The mp4 is a 832x464 landscape file with a portrait clip pillarboxed
               inside it. On phones we crop to the clip instead of showing the bars. */
            className="block h-full w-full object-cover sm:h-auto"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* bottom-left on phones: bottom-right is where the WhatsApp bubble sits */}
          <div className="absolute bottom-4 left-4 flex gap-2 transition-opacity duration-300 sm:left-auto sm:right-4 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
            <button
              type="button"
              onClick={togglePlay}
              className="rounded-full bg-white/90 p-2.5 text-gray-900 shadow-lg transition hover:bg-white"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="rounded-full bg-white/90 p-2.5 text-gray-900 shadow-lg transition hover:bg-white"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
