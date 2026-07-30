"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowDownRight,
  ArrowLeft,
  BadgeCheck,
  Beer,
  Building2,
  ChevronLeft,
  ChevronRight,
  CupSoda,
  Gauge,
  LayoutGrid,
  Martini,
  PackageCheck,
  Palette,
  PanelsTopLeft,
  Plus,
  Ruler,
  Search,
  Sparkles,
  Truck,
  Utensils,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Lightbox } from "@/components/lightbox"
import { Navbar } from "@/components/navbar"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useHeroCarousel } from "@/hooks/use-hero-carousel"
import { buildLightboxImages } from "@/lib/equipment-cases"
import { getGalleryThumbnail } from "@/lib/gallery-images"
import type {
  EquipmentCategoryPageData,
  EquipmentCase,
  EquipmentFeature,
  IntegrationPathStep,
} from "@/types/equipment"

export type { EquipmentCategoryPageData } from "@/types/equipment"

const categoryIcons: Record<string, LucideIcon> = {
  酒吧: Beer,
  茶飲: CupSoda,
  啤酒車: Truck,
  餐廳: Utensils,
  招待所: Building2,
  餐酒館: Martini,
}

const featureIcons: Record<EquipmentFeature["icon"], LucideIcon> = {
  beer: Beer,
  cup: CupSoda,
  gauge: Gauge,
  grid: LayoutGrid,
  package: PackageCheck,
  ruler: Ruler,
  sparkles: Sparkles,
  truck: Truck,
}

const integrationPathIcons: Record<IntegrationPathStep["icon"], LucideIcon> = {
  site: PanelsTopLeft,
  brand: Palette,
  equipment: Wrench,
  operation: BadgeCheck,
}

export function EquipmentCategoryPage({ data }: { data: EquipmentCategoryPageData }) {
  const [openInfo, setOpenInfo] = useState<number | null>(null)
  const [activeCase, setActiveCase] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const { ref: fitRef, isVisible: fitVisible } = useScrollAnimation(0.1)
  const { ref: configRef, isVisible: configVisible } = useScrollAnimation(0.1)
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation(0.1)

  const featuredCases = data.featuredCaseIds
    .map((id) => data.cases.find((item) => item.id === id))
    .filter((item): item is EquipmentCase => Boolean(item))

  const heroCases = featuredCases.length > 0 ? featuredCases : data.cases.slice(0, 5)
  const {
    activeIndex: activeHero,
    goToIndex: goToHero,
    loadedIndexes: loadedHeroIndexes,
    interactionProps: heroInteractionProps,
  } = useHeroCarousel(heroCases.length, lightboxIndex !== null)
  const heroCase = heroCases[activeHero] ?? heroCases[0]
  const selectedCase = data.cases[activeCase] ?? data.cases[0]
  const SelectedCategoryIcon = categoryIcons[selectedCase?.category] ?? Building2

  const allImages = useMemo(
    () => buildLightboxImages(data.cases, data.title),
    [data.cases, data.title]
  )

  const getCaseStartIndex = (caseIndex: number) => {
    let total = 0
    for (let i = 0; i < caseIndex; i++) {
      total += data.cases[i].images.length
    }
    return total
  }

  const getCaseStartIndexById = (caseId: string) => {
    const caseIndex = data.cases.findIndex((item) => item.id === caseId)
    return getCaseStartIndex(Math.max(caseIndex, 0))
  }

  if (!heroCase || !selectedCase) return null

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section {...heroInteractionProps} className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-bg-dark text-bg-light">
          {heroCases.map((item, index) => loadedHeroIndexes.has(index) ? (
            <Image
              key={item.id}
              src={item.images[0].src}
              alt={item.images[0].alt}
              fill
              sizes="100vw"
              className={`object-cover transition-all duration-1000 ease-out ${
                index === activeHero ? "opacity-100" : "opacity-0"
              }`}
              style={{
                objectPosition: item.heroPosition ?? "center center",
                transform: `${item.heroFlip ? "scaleX(-1)" : "scaleX(1)"} ${
                  item.heroFlipY ? "scaleY(-1)" : "scaleY(1)"
                } ${
                  index === activeHero ? "scale(1)" : "scale(1.03)"
                }`,
              }}
              priority={index === 0}
              quality={90}
            />
          ) : null)}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/62 via-bg-dark/18 to-bg-dark/10" />
          <div className="absolute inset-0 bg-gradient-to-l from-bg-dark/82 via-bg-dark/58 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/76 via-transparent to-bg-dark/8" />
          <button
            type="button"
            onClick={() => setLightboxIndex(getCaseStartIndexById(heroCase.id))}
            className="absolute inset-0 z-[1] cursor-pointer"
            aria-label={`查看 ${heroCase.name} 案例照片`}
          />

          <div className="pointer-events-none relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-site flex-col justify-end px-6 pb-8 pt-16 lg:pb-12">
            <div className="ml-auto grid w-full max-w-[32rem] gap-8 pr-2 text-right lg:mr-0 lg:pr-0">
              <div>
                <p className="mb-5 font-display text-xs uppercase tracking-[0.24em] text-gold drop-shadow-[0_2px_12px_rgba(0,0,0,1)] [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">
                  {data.eyebrow}
                </p>
                <h1 className="mb-6 text-5xl leading-[1.12] drop-shadow-[0_2px_18px_rgba(0,0,0,0.8)] md:text-6xl">
                  {data.title}
                </h1>
                <p className="max-w-xl text-base leading-8 text-bg-light/82 drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
                  {data.description}
                </p>
              </div>

              <div className="border-r border-bg-light/28 pr-6 drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
                <p className="mb-2 text-2xl leading-9">{heroCase.name}</p>
                <p className="text-sm leading-7 text-bg-light/68">{heroCase.location}</p>
              </div>
            </div>
          </div>

          {heroCases.length > 1 && (
            <div className="pointer-events-auto absolute bottom-8 left-6 z-20 flex items-center gap-4 lg:left-12">
              <button
                type="button"
                onClick={() => goToHero(activeHero - 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bg-light/55 bg-bg-light/18 text-bg-light shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors hover:border-bg-light/80 hover:bg-bg-light/28 hover:text-gold"
                aria-label="上一張圖片"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="flex items-center gap-2" aria-label={`第 ${activeHero + 1} 張圖片，共 ${heroCases.length} 張`}>
                {heroCases.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToHero(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      activeHero === index ? "bg-gold" : "bg-bg-light/45 hover:bg-bg-light"
                    }`}
                    aria-label={`切換到第 ${index + 1} 張圖片`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => goToHero(activeHero + 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bg-light/55 bg-bg-light/18 text-bg-light shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors hover:border-bg-light/80 hover:bg-bg-light/28 hover:text-gold"
                aria-label="下一張圖片"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </section>

        <section ref={fitRef} className="bg-bg-light py-14 lg:py-20">
          <div className="mx-auto max-w-site px-6">
            <div className="mb-10">
              <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">
                Equipment fit
              </p>
              <h2 className="mb-5 text-3xl leading-[1.3] text-text-dark md:text-4xl lg:whitespace-nowrap">
                {data.fitTitle}
              </h2>
              <p className="max-w-3xl text-lg leading-9 text-muted-foreground lg:whitespace-nowrap">
                {data.fitDescription}
              </p>
            </div>

            <div className={`${fitVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="grid gap-5 bg-bg-light py-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                {data.features.map((item) => {
                  const Icon = featureIcons[item.icon]

                  return (
                    <div
                      key={item.label}
                      className="grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-4"
                    >
                      <span className="flex h-11 w-11 items-center justify-center bg-bg-soft text-gold">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="mb-2 block whitespace-nowrap text-xl leading-8 text-text-dark">
                          {item.label}
                        </span>
                        <span className="block text-base leading-8 text-muted-foreground">
                          {item.note}
                        </span>
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 border-t border-border">
                {data.infoRows.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setOpenInfo(openInfo === index ? null : index)}
                    className="grid w-full grid-cols-[minmax(0,1fr)_2rem] items-start gap-5 border-b border-border py-7 text-left"
                    aria-expanded={openInfo === index}
                  >
                    <span>
                      <span className="block text-xl leading-8 text-text-dark">
                        {item.title}
                      </span>
                      <span
                        className={`block max-w-3xl overflow-hidden text-base leading-8 text-muted-foreground transition-all duration-300 ${
                          openInfo === index ? "mt-5 max-h-32 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.content}
                      </span>
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center text-text-dark transition-colors">
                      <Plus
                        className={`h-5 w-5 transition-transform duration-300 ${
                          openInfo === index ? "rotate-45 text-gold" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {data.integrationPath ? (
          <section ref={configRef} className="overflow-hidden bg-bg-soft py-24 text-text-dark lg:py-36">
            <div className="mx-auto max-w-site px-6">
              <div className="mb-16 lg:mb-24">
                <p className="mb-5 font-display text-xs uppercase tracking-[0.24em] text-gold">
                  {data.integrationPath.eyebrow}
                </p>
                <h2 className="mb-7 text-4xl font-normal leading-[1.3] md:text-6xl lg:whitespace-nowrap">
                  {data.integrationPath.title}
                </h2>
                <p className="text-lg leading-8 text-muted-foreground lg:whitespace-nowrap">
                  {data.integrationPath.description}
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-0 right-0 top-10 hidden h-px bg-border lg:block">
                  <span
                    className={`block h-px bg-gold transition-[width] duration-[1400ms] ease-out ${
                      configVisible ? "w-full" : "w-0"
                    }`}
                  />
                </div>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                  {data.integrationPath.steps.map((step, index) => {
                    const Icon = integrationPathIcons[step.icon]

                    return (
                      <article
                        key={step.label}
                        className={`group relative border-t border-border pt-7 lg:border-0 lg:pt-0 ${
                          configVisible ? "animate-fade-in-up" : "opacity-0"
                        }`}
                        style={{ animationDelay: configVisible ? `${index * 160}ms` : undefined }}
                      >
                        <div className="relative mb-10 hidden h-20 w-20 items-center justify-center rounded-full border border-border bg-bg-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold group-hover:bg-gold lg:flex">
                          <Icon
                            className="h-8 w-8 text-gold transition-colors duration-500 group-hover:text-bg-dark"
                            strokeWidth={1.35}
                            aria-hidden="true"
                          />
                          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold font-display text-[10px] text-bg-dark transition-colors group-hover:bg-bg-light">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="mb-6 flex items-center gap-4 lg:hidden">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60">
                            <Icon className="h-5 w-5 text-gold" strokeWidth={1.4} aria-hidden="true" />
                          </span>
                          <span className="font-display text-xs tracking-[0.2em] text-gold">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="mb-5 text-2xl font-normal transition-colors duration-300 group-hover:text-gold">
                          {step.label}
                        </h3>
                        <p className="text-base leading-7 text-muted-foreground">
                          {step.note}
                        </p>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        ) : (
        <section ref={configRef} className="bg-bg-soft py-14 lg:py-20">
          <div className="mx-auto max-w-site px-6">
            <div className="mb-10">
              <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">
                Counter layout
              </p>
              <h2 className="mb-5 text-3xl leading-[1.3] text-text-dark md:text-4xl lg:whitespace-nowrap">
                {data.constructionTitle ?? "兩種常見的小型啤酒機施工方式"}
              </h2>
              <p className="max-w-3xl text-lg leading-9 text-muted-foreground lg:whitespace-nowrap">
                {data.constructionDescription ?? "依照桶槽位置、冷藏條件與吧檯動線，選擇最適合現場的管線配置。"}
              </p>
            </div>

            <div
              className={`grid gap-6 ${
                data.constructionMethods?.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"
              } ${configVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              {data.constructionMethods?.map((method) => (
                <article
                  key={method.label}
                  className={`group bg-bg-light transition-colors ${
                    data.constructionMethods?.length === 1 ? "grid overflow-hidden lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch" : ""
                  }`}
                >
                  <div className={`px-6 pb-5 pt-6 md:px-7 md:pt-7 ${
                    data.constructionMethods?.length === 1 ? "flex flex-col justify-center lg:order-2 lg:px-10 lg:py-10" : ""
                  }`}>
                    <div className="mb-5 flex items-center gap-4">
                      <span className="font-display text-xs uppercase tracking-[0.22em] text-gold">
                        {method.label}
                      </span>
                      <span className="h-px flex-1 bg-border transition-colors group-hover:bg-gold/45" />
                    </div>
                    <h3 className="mb-4 text-2xl leading-[1.25] text-text-dark md:text-3xl">
                      {method.title}
                    </h3>
                    <div className="max-w-xl space-y-1">
                      <p className="text-base leading-7 text-muted-foreground">
                        {method.note}
                      </p>
                      <p className="text-base leading-7 text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </div>

                  <div className={`px-4 pb-4 md:px-5 md:pb-5 ${
                    data.constructionMethods?.length === 1 ? "lg:order-1 lg:px-6 lg:py-6" : ""
                  }`}>
                    <div className={`relative overflow-hidden bg-bg-light ${
                      data.constructionMethods?.length === 1 ? "aspect-[5/4] lg:h-full lg:min-h-[28rem]" : "aspect-[4/3]"
                    }`}>
                      <Image
                        src={method.image}
                        alt={method.alt}
                        fill
                        sizes={data.constructionMethods?.length === 1 ? "(min-width: 1024px) 620px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
                        className={`object-contain transition-transform duration-700 group-hover:scale-[1.025] ${
                          data.constructionMethods?.length === 1 ? "p-5 md:p-7" : "p-4"
                        }`}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        )}

        <section ref={casesRef} className="bg-bg-light py-14 lg:py-20">
          <div className="mx-auto max-w-site px-6">
            <div className="mb-10">
              <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">
                {data.caseEyebrow}
              </p>
              <h2 className="mb-5 text-3xl leading-[1.3] text-text-dark md:text-4xl lg:whitespace-nowrap">
                {data.caseTitle}
              </h2>
            </div>

            <div
              className={`grid border border-border bg-bg-soft lg:grid-cols-[22rem_minmax(0,1fr)] ${
                casesVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <div className="max-h-[42rem] overflow-y-auto border-b border-border lg:border-b-0 lg:border-r">
                {data.cases.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveCase(index)}
                    onFocus={() => setActiveCase(index)}
                    onClick={() => setActiveCase(index)}
                    className={`block w-full border-b border-border px-6 py-5 text-left transition-colors last:border-b-0 ${
                      activeCase === index ? "text-gold" : "text-text-dark hover:text-gold"
                    }`}
                  >
                    <span>
                      <span className="block text-xl leading-8">{item.name}</span>
                      <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                        {item.location}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(getCaseStartIndex(activeCase))}
                className="group relative min-h-[30rem] overflow-hidden bg-bg-dark lg:min-h-[42rem]"
                aria-label={`查看 ${selectedCase.name} 案例照片`}
              >
                <Image
                  src={getGalleryThumbnail(selectedCase.images[0].src)}
                  alt={selectedCase.images[0].alt}
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-bg-light/35 bg-bg-dark/35 text-bg-light backdrop-blur-sm transition-colors group-hover:border-gold group-hover:text-gold">
                  <Search className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
                </span>
                <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-dark/80 to-transparent px-6 pb-6 pt-28 text-left text-bg-light md:px-8 md:pb-8">
                  <span className="grid grid-cols-[3rem_1fr] items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center border border-bg-light/30 text-gold backdrop-blur-sm">
                      <SelectedCategoryIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-3xl leading-[1.25]">{selectedCase.name}</span>
                      <span className="mt-3 block text-base leading-7 text-bg-light/78">
                        {selectedCase.location}
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg-soft py-10">
          <div className="mx-auto flex max-w-site flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/products"
              className="group inline-flex items-center gap-4 text-base text-muted-foreground transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              回到產品頁面
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-5 text-base text-muted-foreground transition-colors hover:text-gold"
            >
              {data.contactLabel}
              <ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  )
}
