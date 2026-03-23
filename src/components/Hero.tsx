import { useEffect, useRef, useCallback } from 'react'

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  // Canvas particle network
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w: number, h: number
    let particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[]
    let raf: number

    function resize() {
      w = canvas!.width = canvas!.offsetWidth
      h = canvas!.height = canvas!.offsetHeight
    }

    function spawn() {
      const count = Math.min(Math.floor((w * h) / 18000), 70)
      particles = []
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.5 + 0.5,
          a: Math.random() * 0.4 + 0.1,
        })
      }
    }

    function drawGrid() {
      ctx!.strokeStyle = 'rgba(0,212,255,0.025)'
      ctx!.lineWidth = 0.5
      const g = 64
      for (let x = 0; x < w; x += g) {
        ctx!.beginPath(); ctx!.moveTo(x, 0); ctx!.lineTo(x, h); ctx!.stroke()
      }
      for (let y = 0; y < h; y += g) {
        ctx!.beginPath(); ctx!.moveTo(0, y); ctx!.lineTo(w, y); ctx!.stroke()
      }
    }

    function frame() {
      ctx!.clearRect(0, 0, w, h)
      drawGrid()
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx!.strokeStyle = `rgba(0,212,255,${0.055 * (1 - dist / 130)})`
            ctx!.lineWidth = 0.5
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.stroke()
          }
        }
      }
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx!.fillStyle = `rgba(0,212,255,${p.a})`
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      raf = requestAnimationFrame(frame)
    }

    resize()
    spawn()

    if (!prefersReduced) {
      frame()
    } else {
      drawGrid()
    }

    let resizeTimer: ReturnType<typeof setTimeout>
    function onResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        resize()
        spawn()
        if (prefersReduced) {
          ctx!.clearRect(0, 0, w, h)
          drawGrid()
        }
      }, 200)
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Magnetic CTA
  useEffect(() => {
    if (prefersReduced) return
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return
    const btn = ctaRef.current
    if (!btn) return

    function onMove(e: MouseEvent) {
      const r = btn!.getBoundingClientRect()
      const x = e.clientX - r.left - r.width / 2
      const y = e.clientY - r.top - r.height / 2
      btn!.style.transform = `translate(${x * 0.12}px,${y * 0.12}px)`
    }

    function onLeave() {
      btn!.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)'
      btn!.style.transform = 'translate(0,0)'
      setTimeout(() => { btn!.style.transition = '' }, 400)
    }

    btn.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
    return () => {
      btn.removeEventListener('mousemove', onMove)
      btn.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector('#architecture')
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <section className="hero" id="hero" aria-labelledby="heroTitle">
      <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-label">Introducing</span>
        <h1 id="heroTitle" className="hero-heading">
          <span className="hero-glow">AI-PIP</span>
        </h1>
        <p className="hero-tagline">Serverless AI Inference Pipeline on Azure</p>
        <p className="hero-desc">
          Enterprise-grade infrastructure with zero-key authentication, managed identity RBAC,
          and modular Terraform. Built for production. Secured by design.
        </p>
        <div className="cta-wrap">
          <a href="#architecture" className="cta-button" ref={ctaRef} onClick={handleClick}>
            <span>View Architecture</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17l9.2-5L7 7z" /></svg>
          </a>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>SCROLL</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
