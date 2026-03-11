"use client"

import { useEffect, useCallback, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

interface LightboxProps {
  images: LightboxImage[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

function TypewriterText({ text, key }: { text: string; key: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setDisplayText("")
    setCurrentIndex(0)
  }, [key])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 30)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text])

  return (
    <span className="inline-block">
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-gold">|</span>
      )}
    </span>
  )
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft")
        onNavigate(currentIndex <= 0 ? images.length - 1 : currentIndex - 1)
      if (e.key === "ArrowRight")
        onNavigate(currentIndex >= images.length - 1 ? 0 : currentIndex + 1)
    },
    [currentIndex, images.length, onClose, onNavigate]
  )

  useEffect(() => {
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  const image = images[currentIndex]
  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-dark/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="圖片瀏覽"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-bg-light/10 text-bg-light transition-colors duration-300 hover:bg-bg-light/20"
        aria-label="關閉"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNavigate(currentIndex <= 0 ? images.length - 1 : currentIndex - 1)
        }}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bg-light/10 text-bg-light transition-colors duration-300 hover:bg-bg-light/20"
        aria-label="上一張"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Image + Caption container */}
      <div
        className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          className="max-h-[75vh] max-w-[90vw] rounded-lg object-contain"
        />

        {/* Caption area with typewriter effect */}
        {image.caption && (
          <div className="mt-6 max-w-2xl px-4 text-center">
            <p className="text-sm leading-relaxed text-bg-light/80">
              <TypewriterText
                text={image.caption}
                key={`${currentIndex}-${image.src}`}
              />
            </p>
          </div>
        )}
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNavigate(currentIndex >= images.length - 1 ? 0 : currentIndex + 1)
        }}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bg-light/10 text-bg-light transition-colors duration-300 hover:bg-bg-light/20"
        aria-label="下一張"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-bg-light/60">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
