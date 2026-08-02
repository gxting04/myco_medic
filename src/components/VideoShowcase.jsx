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
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Subtle background shapes */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/5 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Who We Are
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            See Myco Medic <span className="text-primary">in Action</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A closer look at how we deliver trusted medical supplies and equipment to
            hospitals and clinics across Malaysia.
          </p>
        </div>

        {/* Video */}
        <div
          className={`group relative aspect-[5/8] sm:aspect-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <video
            ref={videoRef}
            src="/myco_medic_video.mp4"
            /* The mp4 is a 832x464 landscape file with a portrait clip pillarboxed
               inside it. On phones we crop to the clip instead of showing the bars. */
            className="w-full h-full sm:h-auto object-cover block bg-black rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Controls overlay */}
          {/* bottom-left on phones: bottom-right is where the WhatsApp bubble sits */}
          <div className="absolute bottom-4 left-4 sm:left-auto sm:right-4 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={togglePlay}
              className="bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-gray-800" />
              ) : (
                <Play className="w-5 h-5 text-gray-800" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-gray-800" />
              ) : (
                <Volume2 className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
