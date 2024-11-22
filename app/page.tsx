'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { VinylRecord } from './components/VinylRecord'
import { PomodoroTimer } from './components/PomodoroTimer'
import { InspirationQuote } from './components/InspirationQuote'

export default function StillMind() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLIFrameElement>(null)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    if (audioRef.current && audioRef.current.contentWindow) {
      audioRef.current.contentWindow.postMessage(
        '{"event":"command","func":"' + (isPlaying ? 'pauseVideo' : 'playVideo') + '","args":""}',
        '*'
      )
    }
  }

  const playNotificationSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play().catch(error => console.error('Error playing notification sound:', error));
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'videoEnded') {
        setIsPlaying(false)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-light text-white/70 mb-12 z-10"
      >
        StillMind
      </motion.h1>

      <VinylRecord isPlaying={isPlaying} togglePlay={togglePlay} />

      <PomodoroTimer onTimerEnd={playNotificationSound} />

      <InspirationQuote />

      <iframe
        ref={audioRef}
        src="https://www.youtube.com/embed/jfKfPfyJRdk?enablejsapi=1&autoplay=0&controls=0&modestbranding=1&loop=1&playlist=jfKfPfyJRdk"
        allow="autoplay"
        className="hidden"
      ></iframe>
    </div>
  )
}

