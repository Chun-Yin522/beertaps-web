"use client"

import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-bg-dark pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-beer-taps.jpg"
          alt="專業商用啤酒出酒設備"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/90 via-bg-dark/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-site px-6 py-24">
        <div className="max-w-3xl">
          <p
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Premium Beer Equipment
          </p>
          <h1
            className={`mb-6 font-display font-bold text-bg-light whitespace-nowrap ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.75rem)", lineHeight: 1.2 }}
          >
            BEER TAPS <span className="text-gold">出酒設備</span>專家
          </h1>
          <p
            className={`mb-10 max-w-lg text-lg leading-relaxed text-bg-light/80 ${
              isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
            }`}
          >
            穩定出酒，讓每一杯都值得等待。
            從專業規劃到售後服務，為您的酒吧、餐廳打造完整的啤酒機與飲品設備解決方案。
          </p>

          <div
            className={`flex flex-wrap gap-4 ${
              isVisible ? "animate-fade-in-up delay-500" : "opacity-0"
            }`}
          >
            <Link
              href="/products"
              className="rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-bg-light transition-colors duration-300 hover:bg-gold-dark"
            >
              查看產品
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-bg-light/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-bg-light transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              聯絡我們
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator removed as per request */}
    </section>
  )
}
