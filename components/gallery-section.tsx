"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "Sunny 哥，我還沒想好要出什麼飲料...",
    answer:
      "任何冷飲都適合用我們的系統設備，不只是啤酒，調酒、紅酒、洋酒、茶飲、康普茶、氮氣茶、咖啡、氮氣咖啡、氣泡水都可以找我們。",
  },
  {
    question: "Sunny 哥，我已經選好啤酒品牌了！",
    answer:
      "不同啤酒品牌搭配的分配器不一樣。台灣品牌如台啤、柏克金，或美式啤酒如海尼根、百威，通常使用 D 型分配器；日本品牌如 Asahi、麒麟，多半使用 S 型分配器；歐洲品牌則較常見 A 型分配器。實際規格仍建議先向供應商確認，會更保險。",
  },
  {
    question: "Sunny 哥，我想要出氣泡水！",
    answer:
      "氣泡水可以使用與啤酒相同的食品級二氧化碳氣瓶，將飲用水打入氣體。若預算較高，也可以選擇市售氣泡水機，整體品質與穩定度會更好。",
  },
  {
    question: "Sunny 哥，我想要賣茶飲！",
    answer:
      "沒問題。茶飲需要讓茶湯保持低溫的冷藏設備，出茶所需氣體可使用一般空氣或氮氣，透過壓力將茶水從茶桶送到出茶龍頭。如果想做氮氣茶，也可以透過氣體壓力調整出細緻氣泡感。",
  },
]

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation(0.08)
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((items) =>
      items.includes(index) ? items.filter((item) => item !== index) : [...items, index],
    )
  }

  return (
    <section id="decision-guide" ref={ref} className="scroll-mt-24 overflow-hidden bg-bg-soft py-16 lg:py-20">
      <div className="mx-auto max-w-site px-6">
        <div className="mb-10">
          <p className="mb-4 font-display text-xs uppercase tracking-[0.24em] text-gold">
            FAQ / 03
          </p>
          <h2 className="mb-4 text-4xl font-normal leading-[1.22] text-text-dark md:text-5xl lg:whitespace-nowrap">
            常見問題集
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground lg:whitespace-nowrap">
            先看看這些問題能不能解決你的痛點，還有問題就找 Sunny 哥！
          </p>
        </div>

        <div
          className={`border-t border-border transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index)

            return (
              <button
                key={item.question}
                type="button"
                onClick={() => toggleItem(index)}
                className="grid w-full grid-cols-[minmax(0,1fr)_2.5rem] items-start gap-6 border-b border-border py-7 text-left transition-colors hover:bg-bg-light/55 md:grid-cols-[6rem_minmax(0,1fr)_2.5rem] md:py-8"
                aria-expanded={isOpen}
              >
                <span className="hidden font-display text-sm uppercase tracking-[0.2em] text-gold md:block">
                  0{index + 1}
                </span>
                <span>
                  <span className="block text-xl leading-8 text-text-dark md:text-2xl">
                    {item.question}
                  </span>
                  <span
                    className={`block max-w-4xl overflow-hidden text-base leading-8 text-muted-foreground transition-all duration-300 md:text-lg md:leading-9 ${
                      isOpen ? "mt-5 max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.answer}
                  </span>
                </span>
                <span className="flex h-10 w-10 items-center justify-center text-text-dark">
                  <Plus
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-gold" : ""
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
