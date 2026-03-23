import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useScrollAnimations(ready: boolean) {
  useEffect(() => {
    if (!ready || prefersReduced) return

    // Hero entrance
    const tl = gsap.timeline({ delay: 0.15 })
    tl.to('.hero-label', { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 0)
      .to('.hero-heading', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.1)
      .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 0.3)
      .to('.hero-desc', { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 0.45)
      .to('.cta-wrap', { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 0.6)
      .to('.hero-scroll', { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.75)

    // Title glow pulse
    gsap.to('.hero-glow', {
      textShadow: '0 0 80px rgba(0,212,255,0.25), 0 0 160px rgba(0,212,255,0.08)',
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })

    // Section reveals with stagger
    const grids = document.querySelectorAll('.arch-grid,.arch-grid-sub,.sec-grid,.cost-grid,.iac-stats')
    grids.forEach((grid) => {
      const cards = grid.querySelectorAll('.reveal')
      if (cards.length) {
        ScrollTrigger.create({
          trigger: grid,
          start: 'top 88%',
          once: true,
          onEnter() {
            gsap.to(cards, {
              opacity: 1, y: 0, duration: 0.6,
              stagger: 0.1, ease: 'power2.out',
            })
          },
        })
      }
    })

    // Remaining solo reveals
    document.querySelectorAll('.reveal').forEach((el) => {
      if (!el.closest('.arch-grid,.arch-grid-sub,.sec-grid,.cost-grid,.iac-stats')) {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          opacity: 1, y: 0,
          duration: 0.6, ease: 'power2.out',
        })
      }
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [ready])
}
