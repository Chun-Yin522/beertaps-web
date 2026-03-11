"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLoading } from "@/contexts/loading-context"

const productSubLinks = [
  { label: "小型啤酒機", href: "/products/small" },
  { label: "大型出酒系統", href: "/products/large" },
  { label: "壁出式啤酒牆", href: "/products/wall" },
  { label: "特殊造型設計", href: "/products/custom" },
]

export function Navbar() {
  const router = useRouter()
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

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    triggerLoading()
    setTimeout(() => {
      router.push("/")
    }, 100)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-light/90 backdrop-blur-md shadow-sm"
          : "bg-bg-light"
      }`}
    >
      <nav className="mx-auto flex max-w-site items-center justify-between px-6 py-4">
        {/* Logo + Company Name */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3"
          aria-label="Beer Taps 首頁"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github.com/Chun-Yin522/beertaps/blob/main/website/BEER%20TAPS1.png?raw=true"
            alt="Beer Taps Logo"
            width={58}
            height={58}
            className="h-12 w-auto"
            style={{ transform: "scale(1.2)", transformOrigin: "left center" }}
          />
          <span className="font-display text-lg font-bold tracking-wide">
            <span className="text-text-dark">BEER</span>{" "}
            <span className="text-logo-red">TAPS</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="group relative py-2 text-sm font-medium tracking-wide text-text-dark transition-colors hover:text-gold"
              >
                首頁
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
            {/* Products with dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <Link
                href="/products"
                className="group relative flex items-center gap-1 py-2 text-sm font-medium tracking-wide text-text-dark transition-colors hover:text-gold"
              >
                產品介紹
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productDropdownOpen ? "rotate-180" : ""}`} />
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                  productDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="min-w-[160px] rounded-lg border border-border bg-bg-light py-2 shadow-lg">
                  {productSubLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-text-dark transition-colors hover:bg-bg-soft hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {/* Blog link */}
            <li>
              <Link
                href="/blog"
                className="group relative py-2 text-sm font-medium tracking-wide text-text-dark transition-colors hover:text-gold"
              >
                知識專欄
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
          </ul>
          <Link
            href="/contact"
            className="rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-bg-light transition-colors duration-300 hover:bg-gold-dark"
          >
            聯絡我們
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center md:hidden text-text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 bg-bg-light px-6 pb-6">
          <li>
            <button
              onClick={(e) => {
                setMobileOpen(false)
                handleLogoClick(e)
              }}
              className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-text-dark transition-colors hover:bg-bg-soft hover:text-gold"
            >
              首頁
            </button>
          </li>
          <li>
            <Link
              href="/products"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-text-dark transition-colors hover:bg-bg-soft hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              產品介紹
            </Link>
          </li>
          {productSubLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg px-8 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-bg-soft hover:text-gold"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
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
