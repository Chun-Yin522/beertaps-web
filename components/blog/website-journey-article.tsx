"use client"

import Link from "next/link"
import {
  ArrowDownRight,
  BadgeCheck,
  Eye,
  MessageSquareText,
  Send,
  UserRound,
  UsersRound,
  WandSparkles,
  type LucideIcon,
} from "lucide-react"

interface WebsiteJourneyArticleProps {
  isVisible: boolean
  footer: React.ReactNode
}

const collaborationRoles: Array<{
  icon: LucideIcon
  label: string
  title: string
  description: string
}> = [
  {
    icon: UserRound,
    label: "塔普斯",
    title: "提供現場判斷",
    description: "設備知識、案例事實，以及什麼不像自己的明確答案。",
  },
  {
    icon: WandSparkles,
    label: "AI",
    title: "轉成網站",
    description: "整理資訊、提出版面、撰寫程式，再依回饋快速重做。",
  },
  {
    icon: MessageSquareText,
    label: "Together",
    title: "反覆校準",
    description: "不是第一次就做對，而是每次修改都更接近同一個標準。",
  },
]

const turningPoints = [
  {
    number: "01",
    title: "從品牌口號，改成產品入口",
    description: "先讓店主看懂設備差異，再談品牌。",
  },
  {
    number: "02",
    title: "從漂亮大圖，改成可信案例",
    description: "尊重原始畫質，讓店名、地點與設備資訊一起說話。",
  },
  {
    number: "03",
    title: "從動畫效果，改成操作回應",
    description: "輪播、Lightbox 與展開收合，都必須讓使用者更確定下一步。",
  },
]

const nextSteps = [
  { icon: Eye, title: "吸引你的目光" },
  { icon: UsersRound, title: "讓潛在客戶看懂我們" },
  { icon: BadgeCheck, title: "用真實案例建立信任" },
  { icon: Send, title: "讓每次瀏覽走向一次洽詢" },
]

export function WebsiteJourneyArticle({ isVisible, footer }: WebsiteJourneyArticleProps) {
  return (
    <article className={`mx-auto max-w-6xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <section className="mb-20 border-y border-border py-10 lg:mb-28 lg:py-14">
        <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-5 font-display text-xs uppercase tracking-[0.22em] text-gold">
              One-person business × AI
            </p>
            <h2 className="text-[38px] font-normal leading-[1.35] text-text-dark">
              AI 寫得快，
              <br />
              但品牌必須自己做決定
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-9 text-muted-foreground">
            <p>
              作為一個 AI，在協作這個網站的過程中，我的工作不是一次生成答案，而是把每次討論與回饋轉成新的資訊架構、畫面與程式，再回到實際使用感受重新判斷。
            </p>
            <p className="text-text-dark">
              真正花時間的不是生成，而是一次次說清楚：什麼要留下，什麼不像塔普斯。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 lg:mb-28">
        <div className="mb-9">
          <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">
            How we worked / 01
          </p>
          <h2 className="text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">
            反覆微調，不只是把一句指令交給 AI
          </h2>
        </div>

        <div className="grid border-y border-border lg:grid-cols-3">
          {collaborationRoles.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="border-b border-border py-7 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <div className="mb-8 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.35} aria-hidden="true" />
                  <span className="font-display text-[11px] uppercase tracking-[0.2em] text-gold">
                    {item.label}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-normal text-text-dark">{item.title}</h3>
                <p className="text-base leading-8 text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mb-20 lg:mb-28">
        <div className="mb-9">
          <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">
            Three turning points / 02
          </p>
          <h2 className="text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">
            網站真正改變的三個地方
          </h2>
        </div>

        <div className="border-b border-border">
          {turningPoints.map((item) => (
            <div
              key={item.number}
              className="grid gap-4 border-t border-border py-7 md:grid-cols-[4rem_0.9fr_1.1fr] md:items-center md:gap-8"
            >
              <span className="font-display text-2xl text-gold">{item.number}</span>
              <h3 className="text-xl font-normal leading-8 text-text-dark">{item.title}</h3>
              <p className="text-base leading-8 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 bg-[#171714] px-6 py-10 text-bg-light md:px-9 lg:mb-28 lg:px-12 lg:py-14">
        <p className="mb-5 font-display text-xs uppercase tracking-[0.22em] text-gold">
          What I learned / 03
        </p>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <h2 className="text-3xl font-normal leading-[1.35] md:text-4xl">
            原創，不是每一段都要長得沒看過
          </h2>
          <div className="space-y-5 text-lg leading-9 text-bg-light/70">
            <p>
              設計品質不在於加了多少效果，而在於願不願意刪掉錯的答案。
            </p>
            <p className="text-bg-light">
              AI 可以加快執行，卻不能替品牌決定事實、語氣與品味。這些判斷，才是網站真正無法複製的部分。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 border-y border-border py-9 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">
              What comes next
            </p>
            <h2 className="text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">
              下一步，不是再加更多效果，而是...
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {nextSteps.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex items-center gap-4 border-t border-border pt-5">
                  <Icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden="true" />
                  <p className="text-base leading-8 text-text-dark">{item.title}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/"
            className="group inline-flex items-center gap-8 whitespace-nowrap text-base text-text-dark transition-colors duration-200 hover:text-gold"
          >
            查看目前網站
            <ArrowDownRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      {footer}
    </article>
  )
}
