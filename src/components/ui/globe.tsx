"use client"

import createGlobe from "cobe"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)
  let phi = 0
  let width = 0

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth
    }
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [0.9, 0.86, 0.83],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [0.7, 0.65, 0.6],
      markers: [
        { location: [41.0082, 28.9784], size: 0.1 },  // Istanbul
        { location: [40.7128, -74.006], size: 0.06 },  // New York
        { location: [51.5074, -0.1278], size: 0.05 },  // London
        { location: [48.8566, 2.3522], size: 0.05 },   // Paris
        { location: [1.3521, 103.8198], size: 0.05 },  // Singapore
        { location: [25.2048, 55.2708], size: 0.06 },  // Dubai
      ],
    })

    let animPhi = 0
    let raf: number
    const animate = () => {
      if (pointerInteracting.current === null) animPhi += 0.005
      globe.update({
        phi: animPhi + r,
      })
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    })

    return () => {
      globe.destroy()
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [r])

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-square w-full", className)}>
      <canvas
        ref={canvasRef}
        style={{ opacity: 0, transition: "opacity 0.5s ease" }}
        className="size-full [contain:layout_paint_size]"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
          if (canvasRef.current) canvasRef.current.style.cursor = "grab"
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            setR(delta / 200)
          }
        }}
        onTouchMove={(e) => {
          if (e.touches[0] && pointerInteracting.current !== null) {
            const delta = e.touches[0].clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            setR(delta / 200)
          }
        }}
      />
    </div>
  )
}
