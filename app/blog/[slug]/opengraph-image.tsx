import { notFound } from "next/navigation"
import { BLOG_POSTS_BY_SLUG } from "@/data/blog-posts"
import { createSocialImage, SOCIAL_IMAGE_SIZE } from "@/lib/social-image"

export const runtime = "nodejs"
export const alt = "BEER TAPS 知識專欄文章"
export const size = SOCIAL_IMAGE_SIZE
export const contentType = "image/png"

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS_BY_SLUG[slug]
  if (!post) notFound()

  return createSocialImage({
    eyebrow: post.category,
    title: post.title,
    image: post.image,
  })
}
