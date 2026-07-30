"use client"

import { useEffect } from "react"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { GallerySection } from "@/components/gallery-section"
import { HeroSection } from "@/components/hero-section"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { ProcessSection } from "@/components/process-section"
import { ProductCategoriesSection } from "@/components/product-categories-section"

export function HomeContent() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [])

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <ProductCategoriesSection />
        <ProcessSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
