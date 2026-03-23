import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Preloader({ onDone }: { onDone: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function dismiss() {
      if (prefersReduced || !ref.current) {
        ref.current?.remove()
        onDone()
        return
      }
      gsap.to(ref.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete() {
          ref.current?.remove()
          onDone()
        },
      })
    }

    const timer = setTimeout(dismiss, 700)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className="preloader" ref={ref} aria-hidden="true">
      <div className="preloader-brand">AI-PIP</div>
      <div className="preloader-track">
        <div className="preloader-fill" />
      </div>
    </div>
  )
}
