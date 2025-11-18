'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import Preloader from '@/components/Preloader/Preloader'
import Landing from '@/components/Landing/Landing'
import Project from '@/components/Project/Project'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Project />
      </>
  )
}
