"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import {
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Link as LinkIcon,
  MessageCircle,
  Share2,
  X,
  type LucideIcon,
} from "lucide-react"
import { SITE } from "@/data/site"

interface SiteShareButtonProps {
  variant: "contact" | "footer"
}

const websiteShareData = {
  title: "塔普斯 Beer Taps",
  text: "商用飲品設備、啤酒機與出酒系統規劃。",
  url: SITE.url,
}

export function SiteShareButton({ variant }: SiteShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [instagramCopied, setInstagramCopied] = useState(false)
  const [canUsePortal, setCanUsePortal] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setCanUsePortal(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target
      if (
        containerRef.current?.contains(target as Node) ||
        (target instanceof Element && target.closest("[data-site-share-menu]"))
      ) {
        return
      }
      setIsOpen(false)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setIsOpen(false)
      buttonRef.current?.focus()
    }

    document.addEventListener("pointerdown", handlePointerDown)
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const openPlatform = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer,width=720,height=640")
    setIsOpen(false)
  }

  const copyWebsiteLink = async () => {
    await navigator.clipboard.writeText(websiteShareData.url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const shareToInstagram = async () => {
    const deviceShare = (
      navigator as Navigator & {
        share?: (shareData: ShareData) => Promise<void>
      }
    ).share

    if (typeof deviceShare === "function") {
      try {
        await deviceShare.call(navigator, websiteShareData)
        setIsOpen(false)
        return
      } catch {
        return
      }
    }

    await navigator.clipboard.writeText(websiteShareData.url)
    setInstagramCopied(true)
    window.setTimeout(() => setInstagramCopied(false), 2200)
  }

  const renderMenuItem = (
    label: string,
    Icon: LucideIcon,
    onClick: () => void,
  ) => (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className="group flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-text-dark transition-colors duration-200 hover:bg-bg-soft"
    >
      <span className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-gold group-hover:text-gold">
        <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
      </span>
      {label}
    </button>
  )

  const renderShareMenu = (className: string) => (
    <div
      data-site-share-menu
      role="menu"
      aria-label="分享塔普斯官網"
      className={className}
    >
      <div className="border-b border-border px-3 pb-2 pt-1">
        <p className="font-display text-xs uppercase tracking-[0.18em] text-gold">
          Share website
        </p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">選擇分享方式</p>
      </div>
      <div className="py-1">
        {renderMenuItem("Facebook", Facebook, () =>
          openPlatform(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteShareData.url)}`,
          ),
        )}
        {renderMenuItem(
          instagramCopied ? "連結已複製，請貼到 Instagram" : "Instagram",
          Instagram,
          shareToInstagram,
        )}
        {renderMenuItem("LINE", MessageCircle, () =>
          openPlatform(
            `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(websiteShareData.url)}`,
          ),
        )}
        {renderMenuItem(
          copied ? "官網連結已複製" : "複製官網連結",
          copied ? Check : LinkIcon,
          copyWebsiteLink,
        )}
      </div>
    </div>
  )

  if (variant === "footer") {
    return (
      <div ref={containerRef} className="relative">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#333] text-bg-light transition-colors duration-300 hover:bg-gold"
          aria-label="分享塔普斯官網"
          aria-expanded={isOpen}
          aria-haspopup="menu"
          title="分享官網"
        >
          {isOpen ? (
            <X className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          ) : (
            <Share2 className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          )}
        </button>
        {isOpen &&
          renderShareMenu(
            "absolute bottom-[calc(100%+0.75rem)] right-0 z-30 hidden w-[18rem] border border-border bg-bg-light p-2 text-text-dark shadow-[0_20px_60px_rgba(20,20,16,0.18)] lg:block",
          )}
        {isOpen &&
          canUsePortal &&
          createPortal(
            renderShareMenu(
              "fixed bottom-4 left-4 right-4 z-[80] max-h-[calc(100svh-2rem)] overflow-y-auto border border-border bg-bg-light p-2 text-text-dark shadow-[0_20px_60px_rgba(20,20,16,0.18)] sm:left-auto sm:right-6 sm:w-[20rem] lg:hidden",
            ),
            document.body,
          )}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-[86px] border-b border-border sm:px-4 sm:even:pr-0 lg:px-0"
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="group grid min-h-[86px] w-full min-w-0 grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-4 text-left text-text-dark"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/45 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-bg-dark">
          {isOpen ? (
            <X className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Share2 className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
          )}
        </span>
        <span className="min-w-0">
          <span className="mb-1 block font-display text-sm text-text-dark">Share website</span>
          <span className="block truncate font-display text-sm">分享塔普斯官網</span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-gold ${
            isOpen ? "rotate-180 text-gold" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen &&
        renderShareMenu(
          "absolute right-0 top-[calc(100%+0.75rem)] z-30 hidden w-[18rem] border border-border bg-bg-light p-2 shadow-[0_20px_60px_rgba(20,20,16,0.14)] lg:block",
        )}
      {isOpen &&
        canUsePortal &&
        createPortal(
          renderShareMenu(
            "fixed bottom-4 left-4 right-4 z-[80] max-h-[calc(100svh-2rem)] overflow-y-auto border border-border bg-bg-light p-2 shadow-[0_20px_60px_rgba(20,20,16,0.14)] sm:left-auto sm:right-6 sm:w-[20rem] lg:hidden",
          ),
          document.body,
        )}
    </div>
  )
}
