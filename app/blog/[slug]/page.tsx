import type { Metadata } from "next"
import { BlogPostContent } from "./content"

export const metadata: Metadata = {
  title: "文章標題｜知識專欄｜塔普斯 Beer Taps",
  description: "啤酒機、出酒設備相關知識文章。",
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <BlogPostContent slug={slug} />
}
