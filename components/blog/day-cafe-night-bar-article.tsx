"use client"

import Image from "next/image"
import { Coffee, Moon, Sun } from "lucide-react"

interface DayCafeNightBarArticleProps {
  isVisible: boolean
  footer: React.ReactNode
}

const dayRhythm = [
  {
    time: "08:00",
    title: "安靜開始",
    description: "咖啡香、自然光與較慢的節奏，讓空間成為上班前停留或開始工作的地方。",
  },
  {
    time: "14:00",
    title: "午後交會",
    description: "甜點、茶飲與咖啡延續白天的使用方式，也容納會面、閱讀與短暫休息。",
  },
  {
    time: "19:00",
    title: "夜晚轉場",
    description: "燈光轉暗、音樂出現，酒飲與談話接手白天的節奏，空間進入另一種狀態。",
  },
]

const perspectiveNotes = [
  {
    number: "01",
    title: "不是把營業時間拉長而已",
    description: "日咖夜酒的吸引力，不只來自早上賣咖啡、晚上賣酒，而是同一個地方在不同時間提供不同的停留理由。",
  },
  {
    number: "02",
    title: "轉換感比徹底變裝更重要",
    description: "光線、音樂、杯具、菜單與服務節奏的小幅改變，就足以讓熟悉的空間產生新的感受。",
  },
  {
    number: "03",
    title: "白天與夜晚仍要有共同個性",
    description: "兩個時段可以有不同氣氛，但品牌語氣、空間材質與待客方式需要保留連續性，才不會像兩間互不相關的店。",
  },
]

export function DayCafeNightBarArticle({ isVisible, footer }: DayCafeNightBarArticleProps) {
  return (
    <article className={`mx-auto max-w-6xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <section className="mb-20 grid gap-10 border-y border-border py-10 lg:mb-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-14">
        <div>
          <p className="mb-5 font-display text-xs uppercase tracking-[0.22em] text-gold">Coffee by day, drinks by night</p>
          <h2 className="text-4xl font-normal leading-[1.3] text-text-dark md:text-5xl">一間店，<br />兩種生活時區</h2>
        </div>
        <div className="max-w-3xl space-y-6 text-lg leading-9 text-muted-foreground">
          <p>「日咖夜酒」也常被稱為「早 C 晚 A」：早上的 C 是 Coffee，晚上的 A 是 Alcohol。白天是咖啡館，入夜後轉成可以喝酒、聊天與放鬆的地方。</p>
          <p>這類混種咖啡館打破了咖啡只屬於白天、酒吧只在夜晚出現的界線。它不是簡單地把兩張菜單放進同一個店面，而是讓一個空間跟著城市生活的時間改變用途。</p>
        </div>
      </section>

      <section className="mb-20 lg:mb-28">
        <div className="mb-10 flex items-end justify-between gap-8 border-b border-border pb-7">
          <div>
            <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">A day in one space / 01</p>
            <h2 className="text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">從第一杯咖啡，到夜晚的第一杯酒</h2>
          </div>
          <Sun className="hidden h-7 w-7 text-gold md:block" strokeWidth={1.3} aria-hidden="true" />
        </div>

        <figure>
          <div className="relative aspect-[3/1] overflow-hidden bg-bg-soft">
            <Image
              src="/images/blog/day-cafe-night-bar-rhythm.png"
              alt="以咖啡、工作、花朵與酒飲呈現日咖夜酒一天節奏的水彩插畫"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 text-sm leading-7 text-muted-foreground">從白天的工作與會面，到夜晚的酒飲與放鬆。</figcaption>
        </figure>

        <div className="mt-8 grid border-y border-border md:grid-cols-3">
          {dayRhythm.map((item) => (
            <div key={item.time} className="border-b border-border py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <span className="font-display text-sm text-gold">{item.time}</span>
              <h3 className="mb-3 mt-5 text-xl font-normal text-text-dark">{item.title}</h3>
              <p className="text-base leading-8 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 overflow-hidden bg-bg-dark text-bg-light lg:mb-28">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <div className="order-2 px-6 py-10 lg:order-1 lg:px-10 lg:py-14">
            <Moon className="mb-10 h-7 w-7 text-gold" strokeWidth={1.3} aria-hidden="true" />
            <p className="mb-5 font-display text-xs uppercase tracking-[0.22em] text-gold">After dark / 02</p>
            <h2 className="text-3xl font-normal leading-[1.35] md:text-4xl">魅力來自空間的轉場</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-bg-light/65">
              <p>白天，自然光和咖啡香讓人願意坐下來工作；夜晚，燈光、音樂與酒飲讓談話放慢，空間開始適合聚會。</p>
              <p>真正有吸引力的日咖夜酒，不必在傍晚徹底換一套裝潢。細節的改變就能建立清楚的時段感，也讓熟客在同一個地方獲得不同體驗。</p>
            </div>
          </div>
          <div className="relative order-1 min-h-[360px] lg:order-2 lg:min-h-[540px]">
            <Image
              src="/images/blog/day-cafe-night-bar-nighttime.png"
              alt="以深色燈光、吧檯與酒杯呈現日咖夜酒夜間氛圍的插畫"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-20 lg:mb-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">More than a trend / 03</p>
            <h2 className="text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">日咖夜酒為什麼讓人著迷？</h2>
          </div>
          <div className="border-b border-border">
            {perspectiveNotes.map((item) => (
              <div key={item.number} className="grid gap-4 border-t border-border py-7 md:grid-cols-[3.5rem_0.8fr_1.2fr] md:gap-7">
                <span className="font-display text-sm text-gold">{item.number}</span>
                <h3 className="text-xl font-normal leading-8 text-text-dark">{item.title}</h3>
                <p className="text-base leading-8 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16 border-y border-border py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div className="relative aspect-[2/1] overflow-hidden bg-bg-soft">
            <Image
              src="/images/blog/day-cafe-night-bar-hero.png"
              alt="左側咖啡與右側酒飲呈現日咖夜酒雙時段概念"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Coffee className="mb-8 h-7 w-7 text-gold" strokeWidth={1.3} aria-hidden="true" />
            <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">A way of living</p>
            <h2 className="text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">白天專注，夜晚鬆開</h2>
            <p className="mt-6 text-lg leading-9 text-muted-foreground">早上喝咖啡、晚上喝一杯酒，不只是飲品選擇，也反映人們希望在工作與休息之間自由切換。日咖夜酒因此成為一種空間形式，也成為一種新的城市生活想像。</p>
          </div>
        </div>
      </section>

      {footer}
    </article>
  )
}
