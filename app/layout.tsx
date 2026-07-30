import React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { BackToTop } from "@/components/back-to-top"
import { JsonLd } from "@/components/json-ld"
import { LoadingProvider } from "@/contexts/loading-context"
import { SITE } from "@/data/site"

import "./globals.css"

const overpass = localFont({
  src: "../assets/fonts/Overpass-Variable.ttf",
  weight: "100 900",
  variable: "--font-overpass",
  display: "swap",
})

const iansui = localFont({
  src: "../assets/fonts/Iansui-Regular.ttf",
  weight: "400",
  variable: "--font-iansui",
  display: "swap",
})

export const metadata: Metadata = {
  applicationName: SITE.name,
  metadataBase: new URL(SITE.url),
  title: {
    default: "Beer Taps｜專業飲品出酒設備與吧檯設備",
    template: "%s｜Beer Taps",
  },
  description: SITE.description,
  keywords: [
    "Beer Taps",
    "啤酒龍頭",
    "出酒設備",
    "吧檯設備",
    "飲品設備",
    "商用設備",
    "客製化吧檯",
    "餐飲設備",
  ],
  authors: [{ name: "Beer Taps" }],
  creator: "Beer Taps",
  publisher: "Beer Taps",
  icons: {
    icon: "/images/beer-taps-logo-ui.png",
    apple: "/images/beer-taps-logo-ui.png",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: "Beer Taps",
    title: "Beer Taps｜專業飲品出酒設備與吧檯設備",
    description:
      "專為餐飲、酒吧、咖啡與茶飲品牌打造穩定、耐用且具設計感的飲品出酒設備與商用吧檯系統。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beer Taps｜專業飲品出酒設備與吧檯設備",
    description:
      "專為餐飲與飲品品牌打造穩定、耐用且具設計感的商用出酒設備。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    url: SITE.url,
    logo: new URL("/images/beer-taps-logo.png", SITE.url).toString(),
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.blog],
  }

  return (
    <html lang="zh-Hant">
      <body
        className={`${overpass.variable} ${iansui.variable} font-sans antialiased`}
      >
        <JsonLd data={organizationJsonLd} />
        <LoadingProvider>
          {children}
          <BackToTop />
        </LoadingProvider>
      </body>
    </html>
  )
}
