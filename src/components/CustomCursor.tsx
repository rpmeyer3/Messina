import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, dx = 0, dy = 0, rx = 0, ry = 0
    let raf: number

    function onMove(e: MouseEvent) {
      mx = e.clientX
      my = e.clientY
    }

    function loop() {
      dx += (mx - dx) * 0.15
      dy += (my - dy) * 0.15
      rx += (mx - rx) * 0.08
      ry += (my - ry) * 0.08
      dot!.style.transform = `translate(${dx - 3}px,${dy - 3}px)`
      ring!.style.transform = `translate(${rx - 18}px,${ry - 18}px)`
      raf = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}
