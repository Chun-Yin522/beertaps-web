"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const advantages = [
  {
    title: "提升出杯效率",
    description: "高效出酒系統搭配專業動線規劃，讓您在尖峰時段也能穩定供應，提升翻桌率與營收。",
    number: "01",
  },
  {
    title: "穩定出酒品質",
    description: "精準溫控與壓力管理系統，確保每一杯都維持最佳口感與溫度，讓顧客回訪率提升。",
    number: "02",
  },
  {
    title: "視覺質感升級",
    description: "精選材質與造型設計，讓出酒設備成為店面視覺焦點，增強品牌識別度。",
    number: "03",
  },
  {
    title: "專業安裝維修",
    description: "經驗豐富的技術團隊負責安裝，並提供完善的保固與維修服務，讓您無後顧之憂。",
    number: "04",
  },
]

export function AdvantagesSection() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section ref={ref} className="relative overflow-hidden bg-bg-dark py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-site px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Why Choose Us
          </p>
          <h2
            className={`font-display text-3xl font-bold text-bg-light md:text-4xl ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            <span className="text-balance">
              選擇 <span className="text-gold">Beer Taps</span> 的理由
            </span>
          </h2>
        </div>

        {/* Advantages Grid - Alternating left/right layout */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent lg:block" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {advantages.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={item.title}
                  className={`flex flex-col items-center gap-8 lg:flex-row ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{
                    animationDelay: isVisible ? `${(index + 2) * 150}ms` : undefined,
                  }}
                >
                  {/* Content side */}
                  <div className={`flex-1 ${isEven ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                    <div className={`inline-flex flex-col ${isEven ? "lg:items-end" : "lg:items-start"}`}>
                      <span className="mb-3 font-display text-5xl font-bold text-gold/20 lg:text-6xl">
                        {item.number}
                      </span>
                      <h3 className="mb-4 font-display text-2xl font-bold text-bg-light">
                        {item.title}
                      </h3>
                      <p className="max-w-md text-base leading-relaxed text-bg-light/60">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex lg:flex-shrink-0">
                    <div className="relative flex h-5 w-5 items-center justify-center">
                      <div className="absolute h-5 w-5 rounded-full bg-gold/20" />
                      <div className="h-3 w-3 rounded-full bg-gold" />
                    </div>
                  </div>

                  {/* Empty side for balance */}
                  <div className="hidden flex-1 lg:block" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom stats */}
        <div
          className={`mt-24 grid grid-cols-2 gap-8 lg:grid-cols-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: isVisible ? "900ms" : undefined }}
        >
          {[
            { number: "500+", label: "成功案例" },
            { number: "15+", label: "年經驗" },
            { number: "98%", label: "客戶滿意度" },
            { number: "24hr", label: "快速響應" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-2 font-display text-3xl font-bold text-gold lg:text-4xl">
                {stat.number}
              </p>
              <p className="text-sm text-bg-light/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
