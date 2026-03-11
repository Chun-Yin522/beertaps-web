"use client"

import { useState, useEffect, useCallback } from "react"

interface ImageCarouselProps {
  images: { src: string; alt: string }[]
  autoPlayInterval?: number
}

export function ImageCarousel({
  images,
  autoPlayInterval = 5000,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      let next = index
      if (next >= images.length) next = 0
      if (next < 0) next = images.length - 1
      setCurrent(next)
    },
    [images.length]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1)
    }, autoPlayInterval)
    return () => clearInterval(timer)
  }, [current, autoPlayInterval, goTo])

  if (images.length === 0) return null

  return (
    <div className="relative w-full overflow-hidden rounded-[30px] bg-bg-dark" style={{ paddingBottom: "75%" }}>
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={img.alt}
        />
      ))}

      {/* Prev */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-5 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-bg-light/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-bg-light/90 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] group"
        aria-label="上一張"
      >
        <svg className="h-5 w-5 fill-bg-light transition-colors duration-300 group-hover:fill-text-dark" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-5 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-bg-light/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-bg-light/90 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] group"
        aria-label="下一張"
      >
        <svg className="h-5 w-5 fill-bg-light transition-colors duration-300 group-hover:fill-text-dark" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 z-10 flex items-center justify-center gap-3">
        {images.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "scale-125 bg-bg-light"
                : "bg-bg-light/40 hover:bg-bg-light"
            }`}
            aria-label={`前往第 ${i + 1} 張`}
          />
        ))}
      </div>
    </div>
  )
}
