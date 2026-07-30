"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PRODUCTS } from "@/data/products"

export function ProductCategoriesSection() {
  const { ref, isVisible } = useScrollAnimation(0.08)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCategory = PRODUCTS[activeIndex]

  return (
    <section id="product-categories" ref={ref} className="overflow-hidden bg-bg-light py-24 lg:py-36">
      <div className="mx-auto max-w-site px-6">
        <div className="mb-14 lg:mb-20">
          <p className="mb-5 font-display text-xs uppercase tracking-[0.24em] text-gold">Product range / 01</p>
          <h2 className="mb-7 text-4xl font-normal leading-[1.3] text-text-dark md:text-5xl lg:whitespace-nowrap lg:text-6xl">
            找到符合營業節奏的出酒設備
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground lg:whitespace-nowrap">
            不從固定規格開始，而是先理解空間、品項與供應量。選擇設備類型，查看每種配置適合解決的現場需求。
          </p>
        </div>

        <div className={`grid overflow-hidden border border-border bg-bg-soft lg:min-h-[620px] lg:grid-cols-[0.82fr_1.18fr] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex flex-col justify-between px-6 py-4 sm:px-10 lg:px-12 lg:py-10">
            <div>
              {PRODUCTS.map((category, index) => {
                const isActive = index === activeIndex
                return (
                  <button
                    key={category.href}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group grid w-full grid-cols-[36px_1fr_auto] items-center gap-3 border-b border-border py-6 text-left transition-colors ${isActive ? "text-gold" : "text-text-dark hover:text-gold"}`}
                    aria-pressed={isActive}
                  >
                    <span className="font-display text-xs text-muted-foreground">0{index + 1}</span>
                    <span className="text-xl font-normal md:text-2xl">{category.name}</span>
                    <ArrowUpRight className={`h-5 w-5 transition-all duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} aria-hidden="true" />
                  </button>
                )
              })}
            </div>

            <div className="hidden pt-10 lg:block" aria-live="polite">
              <p className="mb-3 font-display text-base uppercase leading-7 tracking-[0.2em] text-gold">{activeCategory.note}</p>
              <p className="mb-6 max-w-md text-base leading-7 text-muted-foreground">{activeCategory.description}</p>
              <Link href={activeCategory.href} className="inline-flex items-center gap-3 text-base text-text-dark transition-colors hover:text-gold">
                深入了解此設備 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <Link href={activeCategory.href} className="group relative min-h-[420px] overflow-hidden border-t border-border lg:min-h-full lg:border-l lg:border-t-0" aria-label={`查看${activeCategory.name}`}>
            {PRODUCTS.map((category, index) => (
              <Image
                key={category.image}
                src={category.image}
                alt={category.name}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className={`object-cover transition-all duration-700 ease-out ${index === activeIndex ? "scale-100 opacity-100" : "pointer-events-none scale-[1.04] opacity-0"}`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-dark/75 to-transparent px-7 pb-7 pt-28 text-bg-light lg:hidden">
              <p className="mb-2 font-display text-base uppercase leading-7 tracking-[0.2em] text-gold">{activeCategory.note}</p>
              <p className="text-base leading-7 text-bg-light/80">{activeCategory.description}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
