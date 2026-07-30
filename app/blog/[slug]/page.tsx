import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPostContent } from "./content"
import { JsonLd } from "@/components/json-ld"
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG } from "@/data/blog-posts"
import { buildPageMetadata } from "@/lib/metadata"
import { SITE } from "@/data/site"
import { buildBreadcrumbJsonLd } from "@/lib/structured-data"

export function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS_BY_SLUG[slug]

  if (!post) return {}

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.image,
    type: "article",
    authors: [post.author],
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = BLOG_POSTS_BY_SLUG[slug]
  if (!post) notFound()

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: new URL(post.image, SITE.url).toString(),
    mainEntityOfPage: new URL(`/blog/${slug}`, SITE.url).toString(),
    author: { "@type": "Organization", name: post.author, url: SITE.url },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      logo: {
        "@type": "ImageObject",
        url: new URL("/images/beer-taps-logo.png", SITE.url).toString(),
      },
    },
  }

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: "首頁", path: "/" },
        { name: "知識專欄", path: "/blog" },
        { name: post.title, path: `/blog/${slug}` },
      ])} />
      <BlogPostContent slug={slug} />
    </>
  )
}
