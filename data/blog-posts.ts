export interface BlogPost {
  slug: string
  title: string
  content: string[]
  category: string
  image: string
  excerpt: string
  subtitle?: string
  imagePosition?: string
  author: "塔普斯"
  publishedAt: string
  updatedAt: string
}

const INITIAL_PUBLICATION = {
  author: "塔普斯" as const,
  publishedAt: "2026-07-31T09:00:00+08:00",
  updatedAt: "2026-07-31T09:00:00+08:00",
}

export const BLOG_POSTS: BlogPost[] = [
  {
    ...INITIAL_PUBLICATION,
    slug: "about-beer-taps",
    title: "塔普斯 Beer Taps 公司介紹",
    content: [],
    category: "品牌精選",
    image: "/images/beer-taps-logo-ui.png",
    excerpt: "從啤酒、調酒到茶飲與氮氣飲品，認識塔普斯如何完成商用飲品設備評估、安裝與後續維修。",
    subtitle: "塔普斯已在全台服務超過 200 家商用場域，提供飲品出酒設備評估、配置、安裝與後續維修。",
    imagePosition: "center center",
  },
  {
    ...INITIAL_PUBLICATION,
    slug: "choosing-beer-tap-system",
    title: "如何選擇適合店面的出酒設備",
    content: [],
    category: "設備規劃",
    image: "/images/gallery/s-takefive-1.jpg",
    excerpt: "先理解品項、尖峰出杯量、空間條件與施工限制，再決定設備形式。",
    imagePosition: "center center",
  },
  {
    ...INITIAL_PUBLICATION,
    slug: "taiwan-bars-and-bistros",
    title: "全台各地特色酒吧、餐酒館",
    content: [],
    category: "品牌精選",
    image: "/images/gallery/c-feelingbar-1.jpg",
    excerpt: "從塔普斯實際案例出發，依地區整理值得造訪的酒吧與餐酒館。",
    imagePosition: "center center",
  },
  {
    ...INITIAL_PUBLICATION,
    slug: "opening-beverage-system-guide",
    title: "開店前的規劃與準備",
    content: [],
    category: "設備規劃",
    image: "/images/gallery/l-dienhua-1.jpg",
    excerpt: "從飲品品項、吧檯空間到安裝時機，整理開店前需要確認的設備條件與施工順序。",
    subtitle: "前期先確認位置、設備與預留空間，待裝潢接近完成再進場安裝，降低污染與現場重工。",
    imagePosition: "center center",
  },
  {
    ...INITIAL_PUBLICATION,
    slug: "day-cafe-night-bar",
    title: "日咖夜酒",
    content: [],
    category: "時尚趨勢",
    image: "/images/blog/day-cafe-night-bar-daytime.png",
    excerpt: "白天供應咖啡，夜晚切換調酒與啤酒；從飲品、設備到吧檯動線，整理同一空間如何支援兩種營業節奏。",
    subtitle: "從早 C 晚 A 的消費節奏出發，整理咖啡與酒飲共用一個營業空間時，需要先確認的設備與吧檯條件。",
    imagePosition: "center center",
  },
  {
    ...INITIAL_PUBLICATION,
    slug: "making-of-beer-taps-website",
    title: "一個人 × AI：塔普斯官網製作",
    content: [],
    category: "時尚趨勢",
    image: "/images/blog/beertaps-website-journey.png",
    excerpt: "沒有設計團隊，塔普斯如何透過現場判斷與 AI 協作，把工程模板反覆修成真正能用的品牌官網。",
    subtitle: "沒有完整設計團隊、沒有工程師，只有現場經驗，以及不斷被推翻重做的 AI 協作。",
    imagePosition: "center center",
  },
]

export const BLOG_POSTS_BY_SLUG = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.slug, post]),
) as Record<string, BlogPost>
