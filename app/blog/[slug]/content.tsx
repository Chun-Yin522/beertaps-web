"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Sample content - in production, this would come from a CMS or database
const blogPostsData: Record<string, {
  title: string
  content: string[]
  category: string
  date: string
  readTime: string
  image: string
}> = {
  "choosing-beer-tap-system": {
    title: "如何選擇適合您店面的啤酒出酒系統？",
    content: [
      "選擇適合的啤酒出酒系統是每位餐飲業主都會面臨的重要決策。一套好的出酒系統不僅能提升出酒效率，還能確保每一杯啤酒都維持最佳品質，為顧客提供絕佳的飲用體驗。",
      "### 評估您的空間需求",
      "首先，您需要評估店面的可用空間。小型店面可能適合使用風冷式小型啤酒機，這類設備體積緊湊，無需額外的冷卻系統空間。而較大的營業場所則可考慮大型出酒系統，支援多路同時出酒。",
      "### 預估出杯量",
      "每日預估出杯量是選擇設備的關鍵因素。若您的店面翻桌率高、顧客群以啤酒消費為主，則需要考慮多酒頭的大型系統。一般小型餐酒館或茶飲複合店，2-4 孔的小型設備通常已能滿足需求。",
      "### 考量維護成本",
      "設備的後續維護成本也是重要考量。風冷式設備維護相對簡單，無需定期補充冷卻水。水冷式系統雖然冷卻效率更高，但需要更多的維護工作。我們建議根據您的營運模式選擇最適合的方案。",
      "### 預算規劃",
      "最後，根據您的預算進行合理規劃。初期投入較高的優質設備，往往能帶來更低的長期維護成本和更穩定的出酒品質。我們提供多種價位的產品選擇，歡迎聯繫我們獲取專業報價。",
    ],
    category: "選購指南",
    date: "2026-03-01",
    readTime: "5 分鐘",
    image: "/images/product-draft-system.jpg",
  },
  // Add more posts as needed
}

const defaultPost = {
  title: "文章內容載入中",
  content: ["此文章正在撰寫中，敬請期待。您可以先瀏覽其他文章，或聯繫我們了解更多啤酒機相關資訊。"],
  category: "知識專欄",
  date: "2026-01-01",
  readTime: "3 分鐘",
  image: "/images/hero-beer-taps.jpg",
}

export function BlogPostContent({ slug }: { slug: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const post = blogPostsData[slug] || defaultPost

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero Image */}
        <section className="relative h-[40vh] min-h-[300px] overflow-hidden bg-bg-dark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover opacity-40"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1600x600/1a1a1a/d9940b?text=Beer+Taps"
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <span className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-medium text-gold">
                {post.category}
              </span>
              <h1 className="font-display text-3xl font-bold text-bg-light md:text-4xl lg:text-5xl">
                <span className="text-balance">{post.title}</span>
              </h1>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-bg-light/60">
                <time>
                  {new Date(post.date).toLocaleDateString("zh-TW", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}閱讀</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section ref={ref} className="bg-bg-light py-16 lg:py-24">
          <article
            className={`mx-auto max-w-3xl px-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="mb-4 mt-10 font-display text-xl font-bold text-text-dark"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                }
                return (
                  <p
                    key={index}
                    className="mb-6 leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                )
              })}
            </div>

            {/* Share & Back */}
            <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
              >
                <svg
                  className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                返回知識專欄
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">分享：</span>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-soft text-text-dark transition-colors hover:bg-gold hover:text-bg-light">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-soft text-text-dark transition-colors hover:bg-gold hover:text-bg-light">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-soft text-text-dark transition-colors hover:bg-gold hover:text-bg-light">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </section>

        {/* Related Articles CTA */}
        <section className="bg-bg-soft py-16">
          <div className="mx-auto max-w-site px-6 text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-text-dark">
              想了解更多？
            </h2>
            <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              瀏覽更多專業文章，或聯繫我們的專業團隊
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/blog"
                className="rounded-lg border border-text-dark/20 px-6 py-3 text-sm font-semibold text-text-dark transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                更多文章
              </Link>
              <Link
                href="/contact"
                className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-bg-light transition-colors duration-300 hover:bg-gold-dark"
              >
                免費諮詢
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
