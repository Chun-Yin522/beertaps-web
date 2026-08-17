import type { Metadata } from "next"
import { ContactContent } from "@/components/contact-content"
import { buildPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "聯絡我們",
  description:
    "聯絡塔普斯討論啤酒龍頭、飲品出酒設備、吧檯設備與客製化商用設備需求。",
  path: "/contact",
})

export default function ContactPage() {
  return <ContactContent />
}
