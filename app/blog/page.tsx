import type { Metadata } from "next"
import { BlogContent } from "./content"
import { JsonLd } from "@/components/json-ld"
import { buildPageMetadata } from "@/lib/metadata"
import { buildBreadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = buildPageMetadata({
  title: "知識專欄",
  description:
    "Beer Taps 分享飲品出酒設備、吧檯設備規劃、維護與商用空間配置的實務觀點。",
  path: "/blog",
  image: "/images/gallery/s-takefive-1.jpg",
})

export default function BlogPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: "首頁", path: "/" },
        { name: "知識專欄", path: "/blog" },
      ])} />
      <BlogContent />
    </>
  )
}
