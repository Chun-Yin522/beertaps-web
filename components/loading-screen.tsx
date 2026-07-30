"use client"

import { useEffect, useState } from "react"
import { useLoading } from "@/contexts/loading-context"

const logoSrc = "/images/beer-taps-logo-ui.png"
const outlineLogoSrc = "/images/beer-taps-logo-outline.png"

export function LoadingScreen() {
  const { isLoading, finishLoading } = useLoading()
  const [initialLoad, setInitialLoad] = useState(true)
  const [fading, setFading] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (initialLoad) {
      const fadeTimer = setTimeout(() => setFading(true), 1700)
      const hideTimer = setTimeout(() => {
        setVisible(false)
        setInitialLoad(false)
      }, 2000)

      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [initialLoad])

  useEffect(() => {
    if (isLoading && !initialLoad) {
      const resetTimer = setTimeout(() => {
        setVisible(true)
        setFading(false)
      }, 0)

      const fadeTimer = setTimeout(() => setFading(true), 1700)
      const hideTimer = setTimeout(() => {
        setVisible(false)
        finishLoading()
      }, 2000)

      return () => {
        clearTimeout(resetTimer)
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
      <div className="preloader-mark" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={outlineLogoSrc} alt="" className="preloader-logo-outline" />
        <svg
          className="preloader-logo-fill"
          viewBox="0 0 1600 1600"
          role="presentation"
        >
          <defs>
            <clipPath id="preloader-water-clip" clipPathUnits="userSpaceOnUse">
              <path
                className="preloader-water-shape"
                transform="translate(0 1780)"
                d="M -2400 0
                   C -2280 -75 -2120 -75 -2000 0
                   C -1880 75 -1720 75 -1600 0
                   C -1480 -75 -1320 -75 -1200 0
                   C -1080 75 -920 75 -800 0
                   C -680 -75 -520 -75 -400 0
                   C -280 75 -120 75 0 0
                   C 120 -75 280 -75 400 0
                   C 520 75 680 75 800 0
                   C 920 -75 1080 -75 1200 0
                   C 1320 75 1480 75 1600 0
                   C 1720 -75 1880 -75 2000 0
                   C 2120 75 2280 75 2400 0
                   L 2400 3400 L -2400 3400 Z"
              />
            </clipPath>
          </defs>
          <image
            href={logoSrc}
            width="1600"
            height="1600"
            preserveAspectRatio="xMidYMid meet"
            clipPath="url(#preloader-water-clip)"
          />
        </svg>
      </div>
    </div>
  )
}
