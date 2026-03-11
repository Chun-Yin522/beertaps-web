import React from "react"
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { BackToTop } from '@/components/back-to-top'
import { LoadingProvider } from '@/contexts/loading-context'

import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '塔普斯 Beer Taps｜啤酒機・出酒設備・商用啤酒系統專家',
  description:
    '塔普斯 Beer Taps 提供專業啤酒機、出酒設備、酒吧設備安裝與商用啤酒系統，從專業規劃、客製設計、到府安裝到售後服務，為酒吧、餐廳、飲料店打造穩定出酒的完整解決方案。',
  keywords: '啤酒機, 飲品設備, 出酒設備, 酒吧設備安裝, 商用啤酒系統, Beer Taps, 塔普斯',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <LoadingProvider>
          {children}
          <BackToTop />
        </LoadingProvider>
      </body>
    </html>
  )
}
