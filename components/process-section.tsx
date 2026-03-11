"use client"

import { ClipboardList, Palette, Truck, Settings } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: ClipboardList,
    title: "專業規劃",
    description: "根據您的場地與需求，提供最適合的設備配置與動線規劃。",
  },
  {
    icon: Palette,
    title: "客製設計",
    description: "依照品牌風格與空間條件，量身打造獨一無二的出酒系統。",
  },
  {
    icon: Truck,
    title: "到府安裝",
    description: "專業技術團隊到場安裝，確保設備穩定運作。",
  },
  {
    icon: Settings,
    title: "售後服務",
    description: "完善的維修保養服務，讓您的設備始終保持最佳狀態。",
  },
]

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section ref={ref} className="bg-bg-soft py-24 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <div className="mb-20 text-center">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Our Process
          </p>
          <h2
            className={`font-display text-3xl font-bold text-text-dark md:text-4xl ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            <span className="text-balance">從規劃到完工，一站式服務</span>
          </h2>
        </div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-border lg:block" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`group relative flex flex-col items-center text-center ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible
                    ? `${(index + 2) * 150}ms`
                    : undefined,
                }}
              >
                {/* Circle icon with animated ring */}
                <div className="relative mb-8">
                  {/* Step badge - positioned above with higher z-index */}
                  <span className="absolute -right-1 -top-1 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-bg-light shadow-md">
                    {index + 1}
                  </span>
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-border bg-bg-light transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_0_6px_rgba(217,148,11,0.1)]">
                    <step.icon
                      className="h-8 w-8 text-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Text */}
                <h3 className="mb-3 font-display text-lg font-semibold text-text-dark">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
