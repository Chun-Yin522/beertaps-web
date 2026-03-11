"use client"

import { useEffect, useState } from "react"
import { useLoading } from "@/contexts/loading-context"

export function LoadingScreen() {
  const { isLoading, finishLoading } = useLoading()
  const [initialLoad, setInitialLoad] = useState(true)
  const [fading, setFading] = useState(false)
  const [visible, setVisible] = useState(true)

  // Initial page load animation
  useEffect(() => {
    if (initialLoad) {
      const fadeTimer = setTimeout(() => setFading(true), 2500)
      const hideTimer = setTimeout(() => {
        setVisible(false)
        setInitialLoad(false)
      }, 3000)

      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [initialLoad])

  // Triggered loading (from logo click)
  useEffect(() => {
    if (isLoading && !initialLoad) {
      setVisible(true)
      setFading(false)

      const fadeTimer = setTimeout(() => setFading(true), 2500)
      const hideTimer = setTimeout(() => {
        setVisible(false)
        finishLoading()
      }, 3000)

      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [isLoading, initialLoad, finishLoading])

  if (!visible) return null

  return (
    <div
      id="site-preloader"
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-bg-light transition-opacity duration-300 ${
        fading ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/Chun-Yin522/beertaps/blob/main/website/BEER%20TAPS1.png?raw=true"
        alt="Loading"
        className="preloader-logo w-[180px]"
      />

      <style jsx>{`
        .preloader-logo {
          animation: 
            wipe-in 1s cubic-bezier(0.25, 1, 0.5, 1) forwards,
            scale-exit 1s ease-in-out 1.5s forwards;
          clip-path: inset(100% 0 0 0);
        }

        @keyframes wipe-in {
          0% { clip-path: inset(100% 0 0 0); opacity: 0; }
          100% { clip-path: inset(0 0 0 0); opacity: 1; }
        }

        @keyframes scale-exit {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
