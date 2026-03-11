import type { Metadata } from "next"
import { BlogContent } from "./content"

export const metadata: Metadata = {
  title: "知識專欄｜塔普斯 Beer Taps",
  description:
    "啤酒機、出酒設備相關知識文章，包含設備選購指南、維護保養技巧、行業趨勢分析等專業內容，幫助您做出最佳的設備決策。",
}

export default function BlogPage() {
  return <BlogContent />
}
