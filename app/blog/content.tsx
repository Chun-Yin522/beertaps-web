"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { BLOG_POSTS } from "@/data/blog-posts"
import { getGalleryThumbnail } from "@/lib/gallery-images"

export function BlogContent() {
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1)

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Blog Grid - Header merged into content section */}
        <section ref={gridRef} className="bg-bg-soft py-16 lg:py-24">
          <div className="mx-auto max-w-site px-6">
            {/* Page Header inside the section */}
            <div className={`mb-16 max-w-5xl lg:mb-20 ${gridVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <p className="mb-5 font-display text-xs uppercase tracking-[0.24em] text-gold">
                Knowledge Column
              </p>
              <h1 className="text-4xl font-normal leading-[1.3] text-text-dark md:text-5xl">
                知識專欄
              </h1>
              <p className="mt-6 max-w-4xl text-lg leading-9 text-muted-foreground lg:whitespace-nowrap">
                分享飲品設備規劃、吧檯配置、出杯品質與維護保養的實務觀點。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post, index) => (
                <article
                  key={post.slug}
                  className={`group overflow-hidden rounded-xl border border-border bg-bg-light transition-all hover:border-gold/30 hover:shadow-lg ${
                    gridVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: gridVisible ? `${(index % 3) * 100 + 200}ms` : undefined,
                  }}
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Image */}
                    <div className={`aspect-[16/10] overflow-hidden ${post.image === "/images/beer-taps-logo-ui.png" ? "bg-[#F3E6C5]" : ""}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getGalleryThumbnail(post.image)}
                        alt={post.title}
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                          post.image === "/images/beer-taps-logo-ui.png" ? "object-contain p-7" : "object-cover"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="mb-3 font-display text-lg font-bold text-text-dark transition-colors group-hover:text-gold">
                        {post.title}
                      </h2>
                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-end">
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-gold">
                          閱讀更多
                          <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

            {/* View more button - links to external blog */}
            <div className="mt-12 text-center">
              <a
                href="https://sunnylee0218.pixnet.net/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border border-text-dark/20 px-8 py-3 text-sm font-semibold text-text-dark transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                查看更多文章
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
