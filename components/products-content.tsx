"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowDownRight,
  Gauge,
  LayoutGrid,
  Ruler,
  Sparkles,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PRODUCTS } from "@/data/products"

const categoryIcons = {
  gauge: Gauge,
  grid: LayoutGrid,
  ruler: Ruler,
  sparkles: Sparkles,
}

function ProductRouteCard({
  category,
  index,
}: {
  category: (typeof PRODUCTS)[number]
  index: number
}) {
  const Icon = categoryIcons[category.icon]

  return (
    <Link
      href={category.href}
      className="group grid min-h-[25rem] grid-rows-[auto_1fr_auto] border border-border bg-bg-light transition-colors hover:border-gold"
    >
      <span className="relative block aspect-[4/3] overflow-hidden border-b border-border bg-bg-soft">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-5 top-5 font-display text-xs text-bg-light drop-shadow">0{index + 1}</span>
        <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-bg-light/35 bg-bg-dark/20 text-bg-light backdrop-blur-sm transition-colors group-hover:border-gold group-hover:text-gold">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      </span>

      <span className="block px-6 pt-6 md:px-7">
        <span className="mb-3 block whitespace-nowrap font-display text-xs uppercase tracking-[0.2em] text-gold">
          {category.eyebrow}
        </span>
        <span className="mb-5 block text-2xl leading-9 text-text-dark md:text-3xl">
          {category.name}
        </span>
        <span className="block text-sm leading-7 text-muted-foreground">
          {category.routeTagline}
        </span>
      </span>

      <span className="flex items-end justify-between gap-6 px-6 pb-6 pt-8 md:px-7 md:pb-7">
        <span>
          <span className="mb-3 block text-sm text-text-dark">{category.routeNote}</span>
          <span className="flex flex-wrap gap-x-3 gap-y-2">
            {category.fit.map((item) => (
              <span key={item} className="text-xs leading-5 text-muted-foreground">
                {item}
              </span>
            ))}
          </span>
        </span>
        <ArrowDownRight className="h-5 w-5 shrink-0 text-text-dark transition-transform group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-gold" aria-hidden="true" />
      </span>
    </Link>
  )
}

export function ProductsContent() {
  const { ref, isVisible } = useScrollAnimation(0.08)

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section ref={ref} className="overflow-hidden bg-bg-light py-14 lg:py-20">
          <div className="mx-auto max-w-site px-6">
            <div className="mb-10 lg:mb-12">
              <p className="mb-5 font-display text-xs uppercase tracking-[0.24em] text-gold">
                Products route
              </p>
              <h1 className="mb-7 text-4xl font-normal leading-[1.3] text-text-dark md:text-5xl lg:whitespace-nowrap lg:text-6xl">
                依照現場條件選擇設備方向
              </h1>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground lg:whitespace-nowrap">
                先確認空間、品項、出杯量與品牌需求，再選擇適合的設備形式，降低設備與營業現場不一致的風險。
              </p>
            </div>

            <div
              className={`grid gap-4 md:grid-cols-2 lg:grid-cols-4 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {PRODUCTS.map((category, index) => (
                <ProductRouteCard
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg-soft py-14 lg:py-16">
          <div className="mx-auto grid max-w-site gap-8 px-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">Need a route</p>
              <h2 className="mb-5 text-3xl leading-[1.3] text-text-dark md:text-4xl lg:whitespace-nowrap">
                不確定適合哪一種設備？
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:whitespace-nowrap">
                提供場地照片、吧檯尺寸、飲品品項與預估出杯量，我們可以協助整理初步設備方向。
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-between gap-8 border-l border-border pl-6 text-sm text-text-dark transition-colors hover:text-gold"
            >
              <span>
                <span className="mb-2 block whitespace-nowrap font-display text-xs uppercase tracking-[0.22em]">
                  Start planning
                </span>
                <span className="whitespace-nowrap">聯絡洽詢</span>
              </span>
              <ArrowDownRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
