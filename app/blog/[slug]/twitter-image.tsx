import { notFound } from "next/navigation"
import { BLOG_POSTS_BY_SLUG } from "@/data/blog-posts"
import {
  createRemoteSocialImage,
  REMOTE_SOCIAL_IMAGE_SIZE,
} from "@/lib/remote-social-image"

export const runtime = "nodejs"
export const alt = "BEER TAPS 知識專欄文章"
export const size = REMOTE_SOCIAL_IMAGE_SIZE
export const contentType = "image/png"

export default async function TwitterImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS_BY_SLUG[slug]
  if (!post) notFound()

  return createRemoteSocialImage({
    eyebrow: post.category,
    title: post.title,
    image: post.image,
  })
}
