"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const imageLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = ref.current
    const imageLayer = imageLayerRef.current
    if (!section || !imageLayer) return

    let frameId = 0
    const updateParallax = () => {
      frameId = 0
      const rect = section.getBoundingClientRect()
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1)
      const progress = Math.min(Math.max(-rect.top / distance, 0), 1)
      imageLayer.style.transform = `translate3d(0, ${progress * 3}%, 0)`
    }
    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [ref])

  return (
    <section ref={ref} className="relative h-[150svh] bg-bg-dark">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div ref={imageLayerRef} className="absolute -inset-y-[8%] inset-x-0 transition-transform duration-150 ease-out will-change-transform">
          <Image
            src="/images/gallery/w-marbles-1.jpg"
            alt="Beer Taps 專業飲品出酒設備"
            fill
            className="hero-image-motion object-cover object-center"
            priority
          />
          <video
            className="hero-video-motion absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/90 via-bg-dark/62 to-bg-dark/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/64 via-transparent to-bg-dark/20" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1480px] items-center px-6 pt-20">
          <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-end">
            <div className="max-w-4xl">
              <p className={`mb-6 font-display text-base uppercase tracking-[0.28em] text-gold ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>BEER TAPS beverage systems</p>
              <h1 className={`mb-8 max-w-4xl text-[2.75rem] font-normal leading-[1.18] text-bg-light sm:text-5xl md:text-6xl lg:text-[4.25rem] ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
                <span className="text-gold">塔普斯</span>專業飲品設備<span className="block text-bg-light">從規劃到穩定營運</span>
              </h1>
              <p className={`mb-10 max-w-2xl text-base leading-8 text-bg-light/75 md:text-lg lg:max-w-4xl lg:whitespace-nowrap ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
                整合啤酒龍頭、飲品管線、冷卻系統與吧檯配置，讓設備符合操作動線，<span className="whitespace-nowrap">也能融入品牌空間。</span>
              </p>
              <div className={`flex flex-wrap gap-4 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
                <Link href="/products" className="inline-flex min-h-12 items-center gap-3 rounded-md bg-gold px-7 text-sm text-bg-light transition-colors duration-300 hover:bg-gold-dark">查看設備<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
                <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 rounded-md border border-bg-light/35 px-7 text-sm text-bg-light transition-colors duration-300 hover:border-gold hover:text-gold">預約需求評估<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </div>

            <a href="#product-categories" className={`group hidden border-l border-bg-light/25 pl-6 text-bg-light/75 transition-colors duration-200 hover:text-gold lg:block lg:w-[240px] lg:justify-self-end ${isVisible ? "animate-fade-in-up [animation-delay:700ms]" : "opacity-0"}`}>
              <span className="mb-2 block font-display text-xs uppercase tracking-[0.22em]">Explore systems</span>
              <span className="flex items-center justify-between text-sm">選擇適合的設備類型<ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" /></span>
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-bg-light/20"><span className="hero-progress block h-px bg-gold" /></div>
      </div>
    </section>
  )
}
