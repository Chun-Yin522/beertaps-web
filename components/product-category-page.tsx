"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ImageCarousel } from "@/components/image-carousel"
import { Lightbox } from "@/components/lightbox"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface CaseStudy {
  id: string
  name: string
  location: string
  images: { src: string; alt: string; caption?: string }[]
}

export interface CategoryData {
  name: string
  subtitle: string
  description: string
  carouselImages: { src: string; alt: string }[]
  galleryImages: { src: string; alt: string; caption?: string }[]
  caseStudies?: CaseStudy[]
  details?: { title: string; content: string }[]
}

export function ProductCategoryPage({ data }: { data: CategoryData }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [caseLightboxIndex, setCaseLightboxIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.1)
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.1)
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation(0.1)

  const visibleImages = showAll
    ? data.galleryImages
    : data.galleryImages.slice(0, 8)

  // Flatten all case study images for lightbox
  const allCaseImages = data.caseStudies?.flatMap((cs) => cs.images) || []

  const getCaseStartIndex = (caseIndex: number) => {
    if (!data.caseStudies) return 0
    let total = 0
    for (let i = 0; i < caseIndex; i++) {
      total += data.caseStudies[i].images.length
    }
    return total
  }

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Page Header - Smaller */}
        <section className="bg-bg-dark py-12 lg:py-16">
          <div className="mx-auto max-w-site px-6 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Products
            </p>
            <h1 className="mb-3 font-display text-3xl font-bold text-bg-light md:text-4xl">
              <span className="text-balance">{data.name}</span>
            </h1>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-bg-light/60">
              {data.subtitle}
            </p>
          </div>
        </section>

        {/* Carousel */}
        {data.carouselImages.length > 0 && (
          <section className="bg-bg-light py-12 lg:py-16">
            <div className="mx-auto max-w-4xl px-6">
              <ImageCarousel images={data.carouselImages} />
            </div>
          </section>
        )}

        {/* Description & Details */}
        <section ref={introRef} className="bg-bg-soft py-12 lg:py-20">
          <div className="mx-auto max-w-site px-6">
            <div
              className={`mx-auto max-w-2xl text-center mb-10 ${
                introVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <p className="text-base leading-relaxed text-muted-foreground">
                {data.description}
              </p>
            </div>

            {/* Collapsible detail sections */}
            {data.details && data.details.length > 0 && (
              <div className="mx-auto max-w-2xl flex flex-col gap-3">
                {data.details.map((detail, index) => (
                  <DetailAccordion
                    key={detail.title}
                    title={detail.title}
                    content={detail.content}
                    index={index}
                    isVisible={introVisible}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Case Studies Gallery (if provided) */}
        {data.caseStudies && data.caseStudies.length > 0 && (
          <section ref={casesRef} className="bg-bg-light py-12 lg:py-20">
            <div className="mx-auto max-w-site px-6">
              <div
                className={`mb-10 text-center ${
                  casesVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Case Studies
                </p>
                <h2 className="font-display text-2xl font-bold text-text-dark">
                  成功案例
                </h2>
              </div>

              {/* Case studies grid - same style as homepage gallery */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.caseStudies.map((caseStudy, caseIndex) => {
                  const startIdx = getCaseStartIndex(caseIndex)
                  const isLarge = caseIndex === 0 || caseIndex === 3

                  return (
                    <div
                      key={caseStudy.id}
                      className={`group relative overflow-hidden rounded-xl ${
                        isLarge ? "md:col-span-1 lg:row-span-2" : ""
                      } ${casesVisible ? "animate-fade-in-up" : "opacity-0"}`}
                      style={{
                        animationDelay: casesVisible ? `${(caseIndex + 2) * 100}ms` : undefined,
                      }}
                    >
                      <button
                        onClick={() => setCaseLightboxIndex(startIdx)}
                        className={`relative block w-full overflow-hidden bg-bg-dark ${
                          isLarge ? "aspect-[3/4]" : "aspect-[4/3]"
                        }`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={caseStudy.images[0].src}
                          alt={caseStudy.images[0].alt}
                          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/600x${isLarge ? 800 : 450}/1a1a1a/d9940b?text=${encodeURIComponent(caseStudy.name)}`
                          }}
                        />
                        {/* Overlay with name */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent p-6">
                          <h3 className="font-display text-lg font-bold text-bg-light">
                            {caseStudy.name}
                          </h3>
                          <p className="text-sm text-gold">{caseStudy.location}</p>
                        </div>
                        {/* View count badge */}
                        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-bg-dark/60 px-3 py-1.5 text-xs font-medium text-bg-light backdrop-blur-sm">
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {caseStudy.images.length}
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Gallery Grid */}
        {data.galleryImages.length > 0 && (
          <section ref={galleryRef} className="bg-bg-soft py-12 lg:py-20">
            <div className="mx-auto max-w-site px-6">
              <div
                className={`mb-10 text-center ${
                  galleryVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Gallery
                </p>
                <h2 className="font-display text-2xl font-bold text-text-dark">
                  產品照片
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {visibleImages.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => setLightboxIndex(i)}
                    className={`group overflow-hidden rounded-lg aspect-[4/3] ${
                      galleryVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: galleryVisible
                        ? `${(i % 4) * 80}ms`
                        : undefined,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>

              {!showAll && data.galleryImages.length > 8 && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setShowAll(true)}
                    className="rounded-lg border border-text-dark/20 px-8 py-3 text-sm font-semibold text-text-dark transition-colors duration-300 hover:border-gold hover:text-gold"
                  >
                    顯示更多照片
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Back to products link - arrow moves left on hover */}
        <section className="bg-bg-light py-10">
          <div className="mx-auto max-w-site px-6 text-center">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-gold"
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
              返回產品介紹
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox for gallery */}
      {lightboxIndex !== null && (
        <Lightbox
          images={data.galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      {/* Lightbox for case studies */}
      {caseLightboxIndex !== null && (
        <Lightbox
          images={allCaseImages}
          currentIndex={caseLightboxIndex}
          onClose={() => setCaseLightboxIndex(null)}
          onNavigate={setCaseLightboxIndex}
        />
      )}
    </>
  )
}

function DetailAccordion({
  title,
  content,
  index,
  isVisible,
}: {
  title: string
  content: string
  index: number
  isVisible: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`overflow-hidden rounded-lg border border-border bg-bg-light ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${(index + 2) * 100}ms` : undefined,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-sm font-semibold text-text-dark">{title}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
          {content}
        </p>
      </div>
    </div>
  )
}
