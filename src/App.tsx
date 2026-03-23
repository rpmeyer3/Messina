import { useState, useCallback } from 'react'
import './index.css'
import Preloader from './components/Preloader'
import GrainOverlay from './components/GrainOverlay'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import Hero from './components/Hero'
import Architecture from './components/Architecture'
import Security from './components/Security'
import Infrastructure from './components/Infrastructure'
import Cost from './components/Cost'
import Footer from './components/Footer'
import { useScrollAnimations } from './hooks/useScrollAnimations'

export default function App() {
  const [ready, setReady] = useState(false)
  const onPreloaderDone = useCallback(() => setReady(true), [])

  useScrollAnimations(ready)

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Preloader onDone={onPreloaderDone} />
      <GrainOverlay />
      <CustomCursor />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Architecture />
        <Security />
        <Infrastructure />
        <Cost />
      </main>
      <Footer />
    </>
  )
}
