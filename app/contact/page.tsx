import type { Metadata } from "next"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "聯絡我們｜塔普斯 Beer Taps 啤酒機・出酒設備",
  description:
    "聯絡塔普斯 Beer Taps，取得專業啤酒機、出酒設備規劃與安裝諮詢。我們提供免費場地評估與報價服務。",
}

export default function ContactPage() {
  return <ContactContent />
}
