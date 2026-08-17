"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { useLoading } from "@/contexts/loading-context"
import { PRODUCTS } from "@/data/products"

export function Navbar() {
  const { triggerLoading } = useLoading()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen && !productDropdownOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false)
        setProductDropdownOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [mobileOpen, productDropdownOpen])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    triggerLoading()
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      window.location.assign("/")
    }, 120)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg-light/90 shadow-sm backdrop-blur-md" : "bg-bg-light"
      }`}
    >
      <nav className="mx-auto flex max-w-site items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3"
          aria-label="回到塔普斯首頁"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/beer-taps-logo-ui.png"
            alt="塔普斯 Beer Taps Logo"
            width={58}
            height={58}
            className="h-10 w-auto"
            style={{ transform: "scale(1.1)", transformOrigin: "left center" }}
          />
          <span className="font-display text-lg font-bold tracking-wide">
            <span className="text-text-dark">BEER</span>{" "}
            <span className="text-logo-red">TAPS</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                onClick={handleLogoClick}
                className="group relative py-2 text-sm font-medium tracking-wide text-text-dark transition-colors hover:text-gold"
              >
                首頁
                <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="group relative py-2 text-sm font-medium tracking-wide text-text-dark transition-colors hover:text-gold"
              >
                知識專欄
                <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
              onFocusCapture={() => setProductDropdownOpen(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setProductDropdownOpen(false)
                }
              }}
            >
              <Link
                href="/products"
                aria-haspopup="true"
                aria-expanded={productDropdownOpen}
                aria-controls="desktop-product-menu"
                className="group relative flex items-center gap-1 py-2 text-sm font-medium tracking-wide text-text-dark transition-colors hover:text-gold"
              >
                產品頁面
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    productDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
              <div
                id="desktop-product-menu"
                className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                  productDropdownOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="min-w-[168px] rounded-lg border border-border bg-bg-light py-2 shadow-lg">
                  {PRODUCTS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-text-dark transition-colors hover:bg-bg-soft hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <Link
            href="/contact"
            className="rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-bg-light transition-colors duration-300 hover:bg-gold-dark"
          >
            聯絡我們
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center text-text-dark md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 bg-bg-light px-6 pb-6">
          <li>
            <Link
              href="/"
              onClick={(e) => {
                setMobileOpen(false)
                handleLogoClick(e)
              }}
              className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-text-dark transition-colors hover:bg-bg-soft hover:text-gold"
            >
              首頁
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-text-dark transition-colors hover:bg-bg-soft hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              知識專欄
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-text-dark transition-colors hover:bg-bg-soft hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              產品頁面
            </Link>
          </li>
          {PRODUCTS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg px-8 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-bg-soft hover:text-gold"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="mt-2 block rounded-lg bg-gold px-4 py-3 text-center text-sm font-semibold text-bg-light transition-colors duration-300 hover:bg-gold-dark"
              onClick={() => setMobileOpen(false)}
            >
              聯絡我們
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
