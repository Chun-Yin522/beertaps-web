"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="relative min-h-[520px] overflow-hidden bg-bg-dark text-bg-light lg:min-h-[62svh]">
      <Image src="/images/gallery/c-lowfun-7.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-bg-dark/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/85 via-bg-dark/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[520px] max-w-site flex-col justify-between px-6 py-12 lg:min-h-[62svh] lg:py-14">
        <div className="flex items-center gap-4 font-display text-xs uppercase tracking-[0.22em] text-gold">
          <span className="h-px w-10 bg-gold" />
          Start a project
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className={`mb-5 max-w-4xl text-4xl font-normal leading-[1.22] md:text-5xl lg:text-6xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <span className="block lg:whitespace-nowrap">下一個穩定運作的吧檯，</span>
              <span className="block lg:whitespace-nowrap">從理解你的現場開始</span>
            </h2>
            <p className={`text-lg leading-8 text-bg-light/70 lg:whitespace-nowrap ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
              提供飲品品項、預估出杯量、空間條件與開業時程，我們將協助整理適合的設備與配置方向。
            </p>
          </div>

          <Link href="/contact" className={`group flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full bg-gold text-center text-base text-bg-dark transition-transform duration-500 hover:scale-105 md:h-36 md:w-36 ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
            <ArrowUpRight className="mb-4 h-7 w-7 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            預約需求評估
          </Link>
        </div>
      </div>
    </section>
  )
}
