"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import {
  Check,
  Facebook,
  Instagram,
  Link as LinkIcon,
  MessageCircle,
  Share2,
  Smartphone,
  X,
  type LucideIcon,
} from "lucide-react"

interface ArticleShareProps {
  title: string
}

const sharePlatforms = [
  {
    name: "Facebook",
    icon: Facebook,
    getUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "LINE",
    icon: MessageCircle,
    getUrl: (url: string) =>
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,
  },
] satisfies Array<{
  name: string
  icon: LucideIcon
  getUrl: (url: string) => string
}>

export function ArticleShare({ title }: ArticleShareProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [instagramCopied, setInstagramCopied] = useState(false)
  const [canUseDeviceShare, setCanUseDeviceShare] = useState(false)
  const [canUsePortal, setCanUsePortal] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setCanUseDeviceShare("share" in navigator)
      setCanUsePortal(true)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target
      if (
        containerRef.current?.contains(target as Node) ||
        (target instanceof Element && target.closest("[data-article-share-menu]"))
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

  const getShareData = () => ({
    title: `${title}｜BEER TAPS`,
    text: title,
    url: window.location.href,
  })

  const openPlatform = (getUrl: (url: string) => string) => {
    window.open(getUrl(window.location.href), "_blank", "noopener,noreferrer,width=720,height=640")
    setIsOpen(false)
  }

  const shareFromDevice = async () => {
    if (!navigator.share) return
    try {
      await navigator.share(getShareData())
      setIsOpen(false)
    } catch {
      // Closing the operating-system share sheet does not require an error state.
    }
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const shareToInstagram = async () => {
    if (canUseDeviceShare) {
      await shareFromDevice()
      return
    }

    await navigator.clipboard.writeText(window.location.href)
    setInstagramCopied(true)
    window.setTimeout(() => setInstagramCopied(false), 2200)
  }

  const renderPlatformButton = (
    name: string,
    Icon: LucideIcon,
    onClick: () => void,
    label = name,
  ) => (
    <button
      key={name}
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
      data-article-share-menu
      role="menu"
      aria-label="分享文章"
      className={className}
    >
      <div className="border-b border-border px-3 pb-2 pt-1">
        <p className="font-display text-xs uppercase tracking-[0.18em] text-gold">Share article</p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">選擇分享方式</p>
      </div>

      <div className="py-1">
        {canUseDeviceShare && (
          <button
            type="button"
            role="menuitem"
            onClick={shareFromDevice}
            className="group flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-text-dark transition-colors duration-200 hover:bg-bg-soft"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-gold group-hover:text-gold">
              <Smartphone className="h-4 w-4" aria-hidden="true" />
            </span>
            使用裝置分享
          </button>
        )}

        {renderPlatformButton(
          sharePlatforms[0].name,
          sharePlatforms[0].icon,
          () => openPlatform(sharePlatforms[0].getUrl),
        )}
        {renderPlatformButton(
          "Instagram",
          Instagram,
          shareToInstagram,
          instagramCopied ? "連結已複製，請貼到 Instagram" : "Instagram",
        )}
        {renderPlatformButton(
          sharePlatforms[1].name,
          sharePlatforms[1].icon,
          () => openPlatform(sharePlatforms[1].getUrl),
        )}

        <button
          type="button"
          role="menuitem"
          onClick={copyLink}
          className="group flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-text-dark transition-colors duration-200 hover:bg-bg-soft"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-gold group-hover:text-gold">
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <LinkIcon className="h-4 w-4" aria-hidden="true" />}
          </span>
          {copied ? "連結已複製" : "複製文章連結"}
        </button>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="group inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span>分享文章</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-200 group-hover:border-gold group-hover:bg-gold group-hover:text-bg-dark">
          {isOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Share2 className="h-4 w-4" aria-hidden="true" />}
        </span>
      </button>

      {isOpen &&
        renderShareMenu(
          "absolute right-0 top-[calc(100%+1rem)] z-30 hidden w-[19rem] border border-border bg-bg-light p-2 shadow-[0_20px_60px_rgba(20,20,16,0.14)] sm:block",
        )}
      {isOpen &&
        canUsePortal &&
        createPortal(
          renderShareMenu(
            "fixed bottom-4 left-4 right-4 z-[80] max-h-[calc(100svh-2rem)] overflow-y-auto border border-border bg-bg-light p-2 shadow-[0_20px_60px_rgba(20,20,16,0.14)] sm:hidden",
          ),
          document.body,
        )}
    </div>
  )
}
