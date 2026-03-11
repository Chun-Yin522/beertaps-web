"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Lightbox } from "@/components/lightbox"

// Case studies with captions for typewriter effect
const caseStudies = [
  {
    id: "jiuban",
    name: "久辦餐酒館",
    location: "台南東區",
    images: [
      {
        src: "/images/gallery/jiuban-1.jpg",
        alt: "久辦餐酒館 案例照片 1",
        caption: "久辦餐酒館位於台南東區，以溫馨的用餐氛圍聞名。我們為其設計安裝了4孔吧檯出酒系統，搭配黃銅色酒塔，完美融入復古工業風的店內裝潢。",
      },
      {
        src: "/images/gallery/jiuban-2.jpg",
        alt: "久辦餐酒館 案例照片 2",
        caption: "採用專業冷卻設備，確保每杯啤酒都能維持最佳溫度。吧檯設計兼顧美觀與實用，大幅提升出酒效率。",
      },
    ],
  },
  {
    id: "uncanny",
    name: "UNCANNY",
    location: "台北大直",
    images: [
      {
        src: "/images/gallery/uncanny-1.jpg",
        alt: "UNCANNY 案例照片 1",
        caption: "UNCANNY 是台北大直的時尚酒吧，追求極簡現代的設計風格。我們為其打造了鏡面不鏽鋼酒塔，搭配隱藏式管線設計，呈現俐落的視覺效果。",
      },
      {
        src: "/images/gallery/uncanny-2.jpg",
        alt: "UNCANNY 案例照片 2",
        caption: "全套設備採用進口零件，搭配數位溫控系統，確保每杯酒品都達到最佳風味呈現。",
      },
    ],
  },
  {
    id: "qiaoxin",
    name: "喬信串燒",
    location: "金門",
    images: [
      {
        src: "/images/gallery/qiaoxin-1.jpg",
        alt: "喬信串燒 案例照片 1",
        caption: "喬信串燒位於金門，是當地知名的日式串燒店。我們跨海安裝了小型啤酒機系統，在有限空間內打造高效出酒方案。",
      },
      {
        src: "/images/gallery/qiaoxin-2.jpg",
        alt: "喬信串燒 案例照片 2",
        caption: "針對離島特殊環境，我們提供耐鹽害的設備材質選擇，並安排定期維護保養，確保設備長久穩定運作。",
      },
    ],
  },
  {
    id: "jixiang",
    name: "吉祥路交誼廳",
    location: "新北林口",
    images: [
      {
        src: "/images/gallery/jixiang-1.jpg",
        alt: "吉祥路交誼廳 案例照片 1",
        caption: "吉祥路交誼廳是新北林口的社區聚會空間，我們為其設計了壁出式啤酒牆，成為空間中的視覺亮點。",
      },
      {
        src: "/images/gallery/jixiang-2.jpg",
        alt: "吉祥路交誼廳 案例照片 2",
        caption: "壁掛式設計節省地面空間，搭配 LED 背光效果，營造出獨特的社交氛圍，深受社區居民喜愛。",
      },
    ],
  },
  {
    id: "bmw",
    name: "BMW汽車展示中心",
    location: "桃園",
    images: [
      {
        src: "/images/gallery/bmw-1.jpg",
        alt: "BMW汽車展示中心 案例照片 1",
        caption: "桃園 BMW 展示中心的貴賓休息區，我們打造了頂級的客製化出酒系統，與品牌的高端形象完美呼應。",
      },
      {
        src: "/images/gallery/bmw-2.jpg",
        alt: "BMW汽車展示中心 案例照片 2",
        caption: "採用與 BMW 品牌色相呼應的深灰色金屬材質，搭配鏡面拋光處理，為貴賓提供尊榮的用酒體驗。",
      },
    ],
  },
]

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Flatten all images for lightbox navigation
  const allImages = caseStudies.flatMap((cs) => cs.images)

  // Calculate starting index for each case study
  const getStartIndex = (caseIndex: number) => {
    let total = 0
    for (let i = 0; i < caseIndex; i++) {
      total += caseStudies[i].images.length
    }
    return total
  }

  return (
    <section ref={ref} className="bg-bg-soft py-24 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <div className="mb-16 text-center">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Our Work
          </p>
          <h2
            className={`font-display text-3xl font-bold text-text-dark md:text-4xl ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            <span className="text-balance">成功案例</span>
          </h2>
        </div>

        {/* Masonry-like grid layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, caseIndex) => {
            const startIdx = getStartIndex(caseIndex)
            // Alternate between tall and wide layouts
            const isLarge = caseIndex === 0 || caseIndex === 3

            return (
              <div
                key={caseStudy.id}
                className={`group relative overflow-hidden rounded-xl ${
                  isLarge ? "md:col-span-1 lg:row-span-2" : ""
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{
                  animationDelay: isVisible ? `${(caseIndex + 2) * 100}ms` : undefined,
                }}
              >
                <button
                  onClick={() => setLightboxIndex(startIdx)}
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}
