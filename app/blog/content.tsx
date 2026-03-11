"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Sample blog posts - can be replaced with CMS data later
const blogPosts = [
  {
    slug: "choosing-beer-tap-system",
    title: "如何選擇適合您店面的啤酒出酒系統？",
    excerpt:
      "從空間大小、出杯量需求到預算考量，完整解析選購啤酒機的關鍵要點，幫助您做出最佳決策。",
    category: "選購指南",
    date: "2026-03-01",
    readTime: "5 分鐘",
    image: "/images/product-draft-system.jpg",
  },
  {
    slug: "beer-tap-maintenance",
    title: "啤酒機日常維護保養指南",
    excerpt:
      "正確的清潔與保養能延長設備壽命、維持出酒品質。本文詳細介紹每日、每週、每月的保養重點。",
    category: "維護保養",
    date: "2026-02-20",
    readTime: "8 分鐘",
    image: "/images/product-tower-system.jpg",
  },
  {
    slug: "draft-beer-temperature",
    title: "生啤酒的最佳飲用溫度是多少？",
    excerpt:
      "不同類型的啤酒有不同的最佳飲用溫度，了解溫度對風味的影響，為顧客提供最佳的啤酒體驗。",
    category: "啤酒知識",
    date: "2026-02-15",
    readTime: "4 分鐘",
    image: "/images/product-cooling-system.jpg",
  },
  {
    slug: "bar-equipment-trends-2026",
    title: "2026年酒吧設備趨勢：智慧化與永續發展",
    excerpt:
      "從數位溫控到環保材質，探討酒吧設備的最新發展趨勢，以及如何為未來做好準備。",
    category: "行業趨勢",
    date: "2026-02-01",
    readTime: "6 分鐘",
    image: "/images/product-complete-setup.jpg",
  },
  {
    slug: "beer-foam-science",
    title: "啤酒泡沫的科學：如何倒出完美的一杯",
    excerpt:
      "泡沫是啤酒風味的重要組成部分，了解泡沫形成的原理與技巧，提升出酒品質。",
    category: "啤酒知識",
    date: "2026-01-25",
    readTime: "5 分鐘",
    image: "/images/hero-beer-taps.jpg",
  },
  {
    slug: "small-space-beer-solutions",
    title: "小空間也能有完美出酒：緊湊型設備方案",
    excerpt:
      "空間有限不代表要妥協品質，介紹多種適合小型店面的啤酒機設計與安裝方案。",
    category: "選購指南",
    date: "2026-01-15",
    readTime: "7 分鐘",
    image: "/images/product-draft-system.jpg",
  },
]

const categories = ["全部", "選購指南", "維護保養", "啤酒知識", "行業趨勢"]

export function BlogContent() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1)
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1)

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Page Header */}
        <section className="bg-bg-dark py-16 lg:py-20">
          <div
            ref={headerRef}
            className="mx-auto max-w-site px-6 text-center"
          >
            <p
              className={`mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold ${
                headerVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Knowledge
            </p>
            <h1
              className={`mb-4 font-display text-3xl font-bold text-bg-light md:text-4xl ${
                headerVisible ? "animate-fade-in-up delay-100" : "opacity-0"
              }`}
            >
              <span className="text-balance">知識專欄</span>
            </h1>
            <p
              className={`mx-auto max-w-lg text-base leading-relaxed text-bg-light/60 ${
                headerVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            >
              分享啤酒機選購、維護保養、行業趨勢等專業知識，幫助您做出最佳的設備決策。
            </p>
          </div>
        </section>

        {/* Category filter */}
        <section className="border-b border-border bg-bg-light">
          <div className="mx-auto max-w-site px-6">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              {categories.map((cat, index) => (
                <button
                  key={cat}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-gold text-bg-light"
                      : "bg-bg-soft text-text-dark hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section ref={gridRef} className="bg-bg-soft py-16 lg:py-24">
          <div className="mx-auto max-w-site px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`group overflow-hidden rounded-xl border border-border bg-bg-light transition-all hover:border-gold/30 hover:shadow-lg ${
                    gridVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: gridVisible ? `${(index % 3) * 100}ms` : undefined,
                  }}
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/800x500/1a1a1a/d9940b?text=${encodeURIComponent(post.category)}`
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="mb-3 font-display text-lg font-bold text-text-dark transition-colors group-hover:text-gold">
                        {post.title}
                      </h2>
                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <time className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString("zh-TW", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                          閱讀更多
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Load more button */}
            <div className="mt-12 text-center">
              <button className="rounded-lg border border-text-dark/20 px-8 py-3 text-sm font-semibold text-text-dark transition-colors duration-300 hover:border-gold hover:text-gold">
                載入更多文章
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-bg-light py-16">
          <div className="mx-auto max-w-site px-6 text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-text-dark">
              想了解更多？
            </h2>
            <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              我們的專業團隊隨時為您解答設備相關問題
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
