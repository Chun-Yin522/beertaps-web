"use client"

import { ClipboardList, Palette, Settings, Truck } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  { icon: ClipboardList, title: "需求確認", description: "整理營業型態、飲品品項、預估出杯量、空間條件與時程。" },
  { icon: Palette, title: "系統配置", description: "依操作動線規劃龍頭、冷卻、管線與設備位置，確認可執行規格。" },
  { icon: Truck, title: "製作安裝", description: "整合設備與現場施工，控制細節、穩定性及空間完成度。" },
  { icon: Settings, title: "測試交付", description: "完成流速與壓力測試，說明操作方式並提供後續維護建議。" },
]

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="overflow-hidden bg-bg-dark py-24 text-bg-light lg:py-36">
      <div className="mx-auto max-w-site px-6">
        <div className="mb-16 lg:mb-24">
          <p className="mb-5 font-display text-xs uppercase tracking-[0.24em] text-gold">Working process / 02</p>
          <h2 className="mb-7 text-4xl font-normal leading-[1.3] md:text-6xl lg:whitespace-nowrap">讓每個決定，都能落實在營業現場</h2>
          <p className="text-lg leading-8 text-bg-light/60 lg:whitespace-nowrap">從第一輪需求到安裝後測試，每個階段都有清楚的確認重點，降低設備與現場條件不一致的風險。</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-bg-light/20 lg:block">
            <span className={`block h-px bg-gold transition-[width] duration-[1400ms] ease-out ${isVisible ? "w-full" : "w-0"}`} />
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={`group relative border-t border-bg-light/20 pt-7 lg:border-0 lg:pt-0 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: isVisible ? `${index * 160}ms` : undefined }}
              >
                <div className="relative mb-10 hidden h-20 w-20 items-center justify-center rounded-full border border-bg-light/25 bg-bg-dark transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold group-hover:bg-gold lg:flex">
                  <step.icon className="h-8 w-8 text-gold transition-colors duration-500 group-hover:text-bg-dark" strokeWidth={1.35} aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold font-display text-[10px] text-bg-dark transition-colors group-hover:bg-bg-light">0{index + 1}</span>
                </div>
                <div className="mb-6 flex items-center gap-4 lg:hidden">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60"><step.icon className="h-5 w-5 text-gold" strokeWidth={1.4} aria-hidden="true" /></span>
                  <span className="font-display text-xs tracking-[0.2em] text-gold">0{index + 1}</span>
                </div>
                <h3 className="mb-5 text-2xl font-normal transition-colors duration-300 group-hover:text-gold">{step.title}</h3>
                <p className="text-base leading-7 text-bg-light/60">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
