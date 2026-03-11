"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const categories = [
  {
    id: "small",
    name: "小型啤酒機",
    tagline: "適合空間有限或初創店家，靈活高效。",
    image: "/images/product-draft-system.jpg",
    imageAlt: "小型啤酒機設備",
    href: "/products/small",
  },
  {
    id: "large",
    name: "大型出酒系統",
    tagline: "多路供應，滿足高出杯量需求。",
    image: "/images/product-tower-system.jpg",
    imageAlt: "大型出酒系統設備",
    href: "/products/large",
  },
  {
    id: "wall",
    name: "壁出式啤酒牆",
    tagline: "空間美學與功能的完美結合。",
    image: "/images/product-cooling-system.jpg",
    imageAlt: "壁出式啤酒牆設備",
    href: "/products/wall",
  },
  {
    id: "custom",
    name: "特殊造型設計",
    tagline: "品牌識別度的極致展現。",
    image: "/images/product-complete-setup.jpg",
    imageAlt: "特殊造型設計出酒設備",
    href: "/products/custom",
  },
]

function ProductCard({
  category,
  index,
}: {
  category: (typeof categories)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <Link
      ref={ref}
      href={category.href}
      className={`group block overflow-hidden rounded-lg bg-bg-light p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${(index + 1) * 150}ms` : undefined,
      }}
    >
      {/* Image with scale on hover */}
      <div className="overflow-hidden rounded-lg mb-4">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.imageAlt}
          width={600}
          height={400}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="text-2xl font-semibold text-text-dark mb-2 transition-colors duration-300 group-hover:text-gold">
        {category.name}
      </h2>
      <p className="text-muted-foreground mb-4">
        {category.tagline}
      </p>
      <span className="font-semibold text-gold flex items-center">
        查看案例
        <svg
          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  )
}

export function ProductsContent() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Page Header - Smaller dark area */}
        <section className="bg-bg-dark py-12 lg:py-16">
          <div className="mx-auto max-w-site px-6 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Products
            </p>
            <h1 className="mb-3 font-display text-3xl font-bold text-bg-light md:text-4xl">
              <span className="text-balance">產品介紹</span>
            </h1>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-bg-light/60">
              從小型啤酒機到特殊造型設計，為您的店面提供最合適的商用啤酒設備方案。
            </p>
          </div>
        </section>

        {/* Product Grid - 2x2, more padding on sides */}
        <section className="bg-bg-soft py-16 lg:py-24">
          <div className="mx-auto max-w-site px-10 md:px-16 lg:px-24">
            <div className="grid gap-8 md:grid-cols-2">
              {categories.map((category, index) => (
                <ProductCard
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA - white background */}
        <section className="bg-bg-light py-16">
          <div className="mx-auto max-w-site px-6 text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-text-dark">
              <span className="text-balance">找不到適合的產品？</span>
            </h2>
            <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              我們提供客製化服務，歡迎聯絡我們討論您的需求。
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-bg-light transition-colors duration-300 hover:bg-gold-dark"
            >
              免費諮詢
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
