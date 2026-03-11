"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section ref={ref} className="bg-bg-light py-24 lg:py-32">
      <div className="mx-auto max-w-site px-6 text-center">
        <h2
          className={`mb-4 font-display text-3xl font-bold text-text-dark md:text-4xl ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-balance">準備好升級您的出酒設備了嗎？</span>
        </h2>
        <p
          className={`mx-auto mb-10 max-w-lg text-base leading-relaxed text-muted-foreground ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          無論是新店開幕或設備升級，我們的專業團隊隨時為您提供最佳方案。
        </p>
        <div
          className={`flex justify-center ${
            isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <Link
            href="/contact"
            className="rounded-lg bg-gold px-10 py-4 text-sm font-semibold tracking-wide text-bg-light transition-colors duration-300 hover:bg-gold-dark"
          >
            免費諮詢
          </Link>
        </div>
      </div>
    </section>
  )
}
