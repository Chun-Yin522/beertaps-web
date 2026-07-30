"use client"

import { useCallback, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { PRODUCTS } from "@/data/products"

interface LightboxImage {
  src: string
  alt: string
  caption?: string
  equipmentType?: string
  shopName?: string
  description?: string
}

interface LightboxProps {
  images: LightboxImage[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

const equipmentTypes = PRODUCTS.map(({ name }) => name)

function formatLightboxText(image: LightboxImage) {
  const caption = image.caption ?? ""
  const equipmentType = equipmentTypes.find((type) => image.alt.includes(type)) ?? ""
  const captionShop = caption.split("／")[0]
  const altShop = equipmentType
    ? image.alt
        .replace(equipmentType, "")
        .replace(/主視覺|另一角度|第二角度|第三角度|第四角度|第五角度|第六角度|第七角度|第八角度/g, "")
        .trim()
    : ""
  const shopName = altShop || captionShop || image.alt
  const captionWithoutShop = caption.startsWith(`${shopName}／`)
    ? caption.slice(`${shopName}／`.length)
    : caption.replace(/^[^／]+／/, "")
  const description = captionWithoutShop.replace(/^第\s*\d+\s*個角度，/, "")

  return {
    equipmentType: image.equipmentType ?? equipmentType,
    shopName: image.shopName ?? shopName,
    description: image.description ?? description,
  }
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  const goToPrevious = useCallback(() => {
    onNavigate(currentIndex <= 0 ? images.length - 1 : currentIndex - 1)
  }, [currentIndex, images.length, onNavigate])

  const goToNext = useCallback(() => {
    onNavigate(currentIndex >= images.length - 1 ? 0 : currentIndex + 1)
  }, [currentIndex, images.length, onNavigate])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        )
        if (!focusable?.length) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [goToNext, goToPrevious, onClose],
  )

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
      previousFocusRef.current?.focus()
    }
  }, [handleKeyDown])

  const image = images[currentIndex]
  if (!image) return null

  const lightboxText = formatLightboxText(image)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return

    const touch = e.changedTouches[0]
    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current

    touchStartX.current = null
    touchStartY.current = null

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return

    if (deltaX > 0) {
      goToPrevious()
    } else {
      goToNext()
    }
  }

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-dark/95 px-4 py-5 backdrop-blur-sm md:px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="案例照片瀏覽"
    >
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-bg-light/20 bg-bg-light/10 text-bg-light backdrop-blur-md transition-colors duration-300 hover:bg-bg-light/20 md:right-6 md:top-6"
        aria-label="關閉"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goToPrevious()
        }}
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bg-light/20 bg-bg-light/10 text-bg-light backdrop-blur-md transition-colors duration-300 hover:bg-bg-light/20 lg:flex"
        aria-label="上一張"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div
        className="grid max-h-[92svh] w-full max-w-[1180px] overflow-y-auto border border-bg-light/15 bg-bg-dark shadow-2xl md:h-[84svh] md:max-h-[760px] md:grid-cols-[minmax(0,1fr)_18rem] md:overflow-hidden lg:grid-cols-[minmax(0,1fr)_22rem]"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative flex min-h-[48svh] items-center justify-center bg-black md:min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[48svh] w-full object-contain md:max-h-full"
            draggable={false}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bg-light/25 bg-bg-dark/35 text-bg-light backdrop-blur-md transition-colors duration-300 hover:bg-bg-light/20 md:flex lg:hidden"
            aria-label="上一張"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bg-light/25 bg-bg-dark/35 text-bg-light backdrop-blur-md transition-colors duration-300 hover:bg-bg-light/20 md:flex lg:hidden"
            aria-label="下一張"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <aside className="flex min-h-0 flex-col justify-between border-t border-bg-light/15 bg-[#141411] p-5 text-bg-light md:overflow-y-auto md:border-l md:border-t-0 lg:p-7">
          <div>
            {lightboxText.equipmentType && (
              <p className="mb-4 text-base leading-7 text-gold">
                {lightboxText.equipmentType}
              </p>
            )}
            <h2 className="mb-5 text-2xl font-normal leading-[1.25] text-bg-light">
              {lightboxText.shopName}
            </h2>
            {lightboxText.description && (
              <p className="text-base leading-8 text-bg-light/72">
                {lightboxText.description}
              </p>
            )}
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-bg-light/15 pt-5">
            <span className="font-display text-sm tracking-[0.18em] text-bg-light/60">
              {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bg-light/20 text-bg-light"
                aria-label="上一張"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bg-light/20 text-bg-light"
                aria-label="下一張"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goToNext()
        }}
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bg-light/20 bg-bg-light/10 text-bg-light backdrop-blur-md transition-colors duration-300 hover:bg-bg-light/20 lg:flex"
        aria-label="下一張"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
