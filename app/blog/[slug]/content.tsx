"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Gauge,
  LayoutGrid,
  MapPin,
  Ruler,
  Snowflake,
  UtensilsCrossed,
  Wine,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ArticleShare } from "@/components/article-share"
import {
  AboutBeerTapsArticle,
  OpeningSystemGuideArticle,
} from "@/components/blog/editorial-articles"
import { DayCafeNightBarArticle } from "@/components/blog/day-cafe-night-bar-article"
import { WebsiteJourneyArticle } from "@/components/blog/website-journey-article"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { BLOG_POSTS_BY_SLUG, type BlogPost } from "@/data/blog-posts"

const dashboardItems: Array<{ label: string; value: string; note: string; icon: LucideIcon }> = [
  { label: "品項數量", value: "1-4 / 4+", note: "先決定同時供應的飲品數", icon: Gauge },
  { label: "尖峰出杯", value: "Peak first", note: "用最高負荷，不只看日平均", icon: LayoutGrid },
  { label: "空間條件", value: "Site fit", note: "確認檯面、牆面與桶槽位置", icon: Ruler },
  { label: "施工限制", value: "Access", note: "保留冷藏、供氣與維修路徑", icon: Wrench },
]

const equipmentRoutes = [
  {
    number: "01",
    name: "小型啤酒機",
    cue: "1-4 個品項・檯面空間有限",
    description: "適合品項精簡、希望保留主要備餐區，並降低現場改動幅度的場域。",
    href: "/products/small",
  },
  {
    number: "02",
    name: "大型出酒系統",
    cue: "4 個品項以上・高流量場域",
    description: "以多口龍頭、冷藏與管線配置支撐尖峰時段，並兼顧補杯和服務動線。",
    href: "/products/large",
  },
  {
    number: "03",
    name: "壁出式啤酒牆",
    cue: "保留檯面・牆面可施工",
    description: "將冷藏、供氣與管線整合至牆後，使出杯點融入立面並維持乾淨檯面。",
    href: "/products/wall",
  },
  {
    number: "04",
    name: "客製化設備",
    cue: "指定外觀・特殊場域",
    description: "配合客戶既有裝潢、品牌規範或移動餐車等條件，把設備安裝至指定位置。",
    href: "/products/custom",
  },
]

const decisionRows = [
  ["品項精簡，檯面有限", "小型啤酒機"],
  ["多品項，尖峰需要連續出杯", "大型出酒系統"],
  ["希望保留檯面，牆後具施工條件", "壁出式啤酒牆"],
  ["指定造型、移動餐車或特殊裝潢", "客製化設備"],
]

const checklist = [
  "預計供應的飲品品項與數量",
  "平日與尖峰時段的預估出杯量",
  "吧檯尺寸、場地照片與設備預設位置",
  "酒桶、冷藏、氣瓶與管線可用空間",
  "既有裝潢、電力與可施工條件",
  "預計開業或設備進場時程",
]

interface Venue {
  name: string
  location: string
  mapUrl?: string
}

interface VenueRegion {
  region: string
  venues: Venue[]
}

function ArticleFooterActions({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`flex items-center justify-between gap-6 border-t border-border pt-8 ${className}`}>
      <Link href="/blog" className="group inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-gold">
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
        回到專欄文章
      </Link>
      <ArticleShare title={title} />
    </div>
  )
}

const barRegions: VenueRegion[] = [
  {
    region: "基隆地區",
    venues: [{ name: "魷魚啤酒吧", location: "基隆廟口" }],
  },
  {
    region: "台北地區",
    venues: [
      { name: "Feeling Bar 調酒專賣店", location: "台北士林" },
      { name: "Blursday Draft.Cafe", location: "台北敦化南路" },
      { name: "Blur Taipei", location: "台北圓山花博", mapUrl: "https://maps.app.goo.gl/D7QywK3TretwaJff9" },
      { name: "chill 憩 bar", location: "台北寧夏夜市" },
      { name: "無心戒酒互助會", location: "台北西門町", mapUrl: "https://maps.app.goo.gl/Ay7Y3jAk3DaKysMD7" },
      { name: "老吧 Bar Aged", location: "台北中山區" },
      { name: "STUCKIN OASIS", location: "台北松菸", mapUrl: "https://maps.app.goo.gl/ck6DWbnH7fJiauct9" },
    ],
  },
  {
    region: "台中地區",
    venues: [{ name: "檳榔", location: "台中" }],
  },
]

const bistroRegions: VenueRegion[] = [
  {
    region: "基隆地區",
    venues: [{ name: "國門廣場", location: "基隆火車站" }],
  },
  {
    region: "台北地區",
    venues: [
      { name: "A Beach 101 & Pizza", location: "台北信義" },
      { name: "H Kitchen", location: "台北內湖", mapUrl: "https://maps.app.goo.gl/6HZCYgBpFM3C5r6A8" },
      { name: "五方食藏", location: "台北忠孝東路", mapUrl: "https://maps.app.goo.gl/L2yWGtXusTwgcckX6" },
      { name: "扶旺號", location: "台北復興南路" },
      { name: "Lit Lit 早午餐酒吧", location: "台北大巨蛋" },
      { name: "SipSip Bar", location: "台北華山文創" },
      { name: "酩 MIXology", location: "台北敦化南路", mapUrl: "https://maps.app.goo.gl/AQNGRApb6ydBbAaE9" },
    ],
  },
  {
    region: "台中地區",
    venues: [
      { name: "灼花燒肉 × 深煙酒吧", location: "台中中西區", mapUrl: "https://maps.app.goo.gl/5qG3VbyPxT16DiMYA" },
      { name: "ORIGBLACK", location: "台中北屯" },
      { name: "XPM somewhere", location: "台中老虎城" },
    ],
  },
]

function googleMapsUrl(venue: Venue) {
  if (venue.mapUrl) {
    return venue.mapUrl
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${venue.name} ${venue.location}`)}`
}

function ArticleHero({ post }: { post: BlogPost }) {
  const publishedDate = post.publishedAt.slice(0, 10).replaceAll("-", ".")
  const isLogoHero = post.image === "/images/beer-taps-logo-ui.png"

  return (
    <section className={`relative h-[40vh] min-h-[300px] overflow-hidden ${isLogoHero ? "bg-[#F3E6C5]" : "bg-bg-dark"}`}>
      <Image
        src={post.image}
        alt={`${post.title}主視覺`}
        fill
        sizes="100vw"
        className={isLogoHero ? "object-contain p-14 opacity-[0.14] md:p-20" : "object-cover opacity-30"}
        style={{ objectPosition: post.imagePosition ?? "center center" }}
        loading="eager"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-medium text-gold">
            {post.category}
          </span>
          <h1 className={`font-display text-3xl font-bold md:text-4xl lg:text-5xl ${isLogoHero ? "text-text-dark" : "text-bg-light"}`}>
            <span className="text-balance">{post.title}</span>
          </h1>
          {post.subtitle ? (
            <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 md:text-lg ${isLogoHero ? "text-text-dark/70" : "text-bg-light/80"}`}>
              {post.subtitle}
            </p>
          ) : null}
          <p className={`mt-6 font-display text-sm ${isLogoHero ? "text-text-dark/65" : "text-bg-light/75"}`}>
            {post.author}・<time dateTime={post.publishedAt}>{publishedDate}</time>
          </p>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <p className="mb-3 font-display text-xs uppercase tracking-[0.22em] text-gold">{number}</p>
      <h2 className="text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">{children}</h2>
    </div>
  )
}

function ChoosingEquipmentArticle({ isVisible, title }: { isVisible: boolean; title: string }) {
  return (
    <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
      <section className="mb-20 overflow-hidden border border-border bg-[#EFEFED] text-text-dark lg:mb-28">
        <div className="flex flex-col gap-4 border-b border-border px-6 py-6 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <p className="mb-3 font-display text-xs uppercase tracking-[0.22em] text-gold">Planning dashboard</p>
            <h2 className="text-2xl font-normal md:text-3xl">先把營業條件變成設備判斷依據</h2>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">四項資料越清楚，設備方向越準確。</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {dashboardItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="border-b border-border p-6 sm:border-r lg:border-b-0 lg:p-7">
                <div className="mb-8 flex items-start justify-between">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
                  <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground">0{index + 1}</span>
                </div>
                <p className="mb-2 text-lg text-text-dark">{item.label}</p>
                <p className="mb-3 font-display text-sm uppercase tracking-[0.12em] text-gold">{item.value}</p>
                <p className="text-sm leading-7 text-muted-foreground">{item.note}</p>
              </div>
            )
          })}
        </div>
      </section>

      <div className="grid gap-14 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-20">
        <aside className="hidden lg:block">
          <div className="sticky top-28 border-t border-border pt-5">
            <p className="mb-5 font-display text-xs uppercase tracking-[0.22em] text-gold">In this article</p>
            <nav className="grid gap-4 text-sm leading-6 text-muted-foreground">
              <a href="#conditions" className="transition-colors hover:text-gold">01 營業條件</a>
              <a href="#routes" className="transition-colors hover:text-gold">02 設備路徑</a>
              <a href="#system" className="transition-colors hover:text-gold">03 系統能力</a>
              <a href="#matrix" className="transition-colors hover:text-gold">04 快速比較</a>
              <a href="#brief" className="transition-colors hover:text-gold">05 準備資料</a>
            </nav>
          </div>
        </aside>

        <article className="min-w-0 max-w-4xl">
          <p className="mb-20 text-xl leading-10 text-text-dark md:text-2xl md:leading-[2.1]">
            設備選錯，通常不是機器本身不夠好，而是規格沒有對上營業現場。與其先問要裝哪一種酒塔，更有效的做法是先確認品項、尖峰出杯量、空間與施工條件，再讓設備形式回應這些限制。
          </p>

          <section id="conditions" className="scroll-mt-28 border-t border-border pt-10">
            <SectionHeading number="01 / Operating conditions">先定義營業條件，不從固定規格開始</SectionHeading>
            <div className="space-y-6 text-base leading-9 text-muted-foreground">
              <p>先列出實際供應的飲品品項，以及同一時段會同時使用的龍頭數。品項數會影響設備規模，但真正決定系統負荷的，是尖峰時段能否連續、穩定出杯。</p>
              <p>接著確認吧檯已經完成到什麼程度。檯面能否開孔、牆後是否可配置冷藏與管線、酒桶和氣瓶放在哪裡，都會直接改變適合的設備形式。</p>
            </div>
          </section>

          <section id="routes" className="scroll-mt-28 pt-20 lg:pt-24">
            <SectionHeading number="02 / Equipment routes">用現場條件選擇四種設備路徑</SectionHeading>
            <p className="mb-9 text-base leading-9 text-muted-foreground">四種設備沒有單純的高低之分，差別在於它們解決的空間、流量與施工問題不同。</p>
            <div className="border-b border-border">
              {equipmentRoutes.map((route) => (
                <div key={route.number} className="group grid gap-4 border-t border-border py-7 md:grid-cols-[3rem_12rem_minmax(0,1fr)_auto] md:items-start md:gap-6">
                  <span className="font-display text-xs tracking-[0.2em] text-gold">{route.number}</span>
                  <div>
                    <h3 className="mb-2 text-xl font-normal text-text-dark">{route.name}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{route.cue}</p>
                  </div>
                  <p className="text-base leading-8 text-muted-foreground">{route.description}</p>
                  <Link href={route.href} className="inline-flex h-10 w-10 items-center justify-center text-text-dark transition-colors hover:text-gold" aria-label={`查看${route.name}`}>
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section id="system" className="scroll-mt-28 pt-20 lg:pt-24">
            <SectionHeading number="03 / System performance">龍頭數之外，更要看整套系統能力</SectionHeading>
            <p className="mb-10 text-base leading-9 text-muted-foreground">出杯品質不是由單一龍頭決定。冷藏、供氣、管線距離、桶槽位置與清潔方式必須一起評估，否則設備看起來足夠，尖峰時段仍可能出現溫度、流速或泡沫不穩。</p>
            <div className="grid border-y border-border sm:grid-cols-2">
              {[
                { icon: Snowflake, title: "冷藏條件", text: "確認酒桶持溫方式與設備散熱空間。" },
                { icon: Gauge, title: "供氣與壓力", text: "依飲品、管線與操作方式完成設定。" },
                { icon: LayoutGrid, title: "管線與動線", text: "縮短不必要距離，保留清潔與更換路徑。" },
                { icon: Wrench, title: "維護空間", text: "接頭、耗材與設備本體都需要可接近。" },
              ].map((item) => (
                <div key={item.title} className="grid grid-cols-[2.75rem_1fr] gap-5 border-b border-border py-6 sm:odd:border-r sm:odd:pr-7 sm:even:pl-7">
                  <span className="flex h-11 w-11 items-center justify-center text-gold"><item.icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" /></span>
                  <div>
                    <h3 className="mb-2 text-lg font-normal text-text-dark">{item.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="matrix" className="scroll-mt-28 pt-20 lg:pt-24">
            <SectionHeading number="04 / Quick comparison">把需求放進同一張比較表</SectionHeading>
            <div className="border border-border bg-bg-soft">
              <div className="grid grid-cols-[minmax(0,1fr)_9rem] border-b border-border px-5 py-4 font-display text-xs uppercase tracking-[0.18em] text-muted-foreground md:grid-cols-[minmax(0,1fr)_13rem] md:px-7">
                <span>Site condition</span><span>Recommended</span>
              </div>
              {decisionRows.map(([condition, equipment]) => (
                <div key={condition} className="grid grid-cols-[minmax(0,1fr)_9rem] items-center border-b border-border px-5 py-5 last:border-b-0 md:grid-cols-[minmax(0,1fr)_13rem] md:px-7">
                  <span className="pr-5 text-base leading-8 text-text-dark">{condition}</span>
                  <span className="text-base leading-8 text-gold">{equipment}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="brief" className="scroll-mt-28 pt-20 lg:pt-24">
            <SectionHeading number="05 / Project brief">洽詢前準備這六項資料</SectionHeading>
            <p className="mb-8 text-base leading-9 text-muted-foreground">不需要先整理成完整工程圖。先提供能描述營業現場的基本資料，就能更快排除不適合的設備方向。</p>
            <ul className="grid border-y border-border md:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-border py-5 md:odd:border-r md:odd:pr-6 md:even:pl-6">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/55 text-gold"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>
                  <span className="text-base leading-7 text-text-dark">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <ArticleFooterActions title={title} className="mt-20 lg:mt-24" />
        </article>
      </div>
    </div>
  )
}

function VenueRegionList({ regions }: { regions: VenueRegion[] }) {
  return (
    <div className="border-b border-border">
      {regions.map((group) => (
        <div
          key={group.region}
          className="grid gap-6 border-t border-border py-8 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-10"
        >
          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-gold">Area</p>
            <h3 className="mt-3 text-xl font-normal text-text-dark">{group.region}</h3>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {group.venues.map((venue) => (
              <a
                key={`${group.region}-${venue.name}`}
                href={googleMapsUrl(venue)}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid min-h-[6.5rem] grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-5 text-text-dark"
                aria-label={`在 Google Maps 查看${venue.name}`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/45 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-bg-dark">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="mb-1 block text-lg leading-7 transition-colors duration-300 group-hover:text-gold">
                    {venue.name}
                  </span>
                  <span className="block text-sm leading-6 text-muted-foreground">{venue.location}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function VenueGuideArticle({ isVisible, title }: { isVisible: boolean; title: string }) {
  return (
    <article className={`mx-auto max-w-5xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <section className="mb-20 border border-border bg-[#EFEFED] px-6 py-8 md:px-8 lg:mb-24">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">Venue directory</p>
            <h2 className="mb-4 text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">從實際案例，認識不同城市的出杯現場</h2>
            <p className="text-base leading-8 text-muted-foreground">依案例對照表中的商鋪名稱與地理位置整理，點選店家即可開啟 Google Maps。</p>
          </div>
          <div className="grid grid-cols-3 border-y border-border md:min-w-[22rem]">
            <div className="border-r border-border py-4 pr-5">
              <span className="block font-display text-2xl text-text-dark">20</span>
              <span className="mt-1 block text-xs text-muted-foreground">間店家</span>
            </div>
            <div className="border-r border-border px-5 py-4">
              <span className="block font-display text-2xl text-text-dark">9</span>
              <span className="mt-1 block text-xs text-muted-foreground">間酒吧</span>
            </div>
            <div className="py-4 pl-5">
              <span className="block font-display text-2xl text-text-dark">11</span>
              <span className="mt-1 block text-xs text-muted-foreground">間餐酒館</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 lg:mb-24">
        <div className="mb-10 flex items-end gap-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
            <Wine className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
          </span>
          <div>
            <p className="mb-2 font-display text-xs uppercase tracking-[0.22em] text-gold">Bars / 01</p>
            <h2 className="text-3xl font-normal leading-[1.3] text-text-dark md:text-4xl">特色酒吧</h2>
          </div>
        </div>
        <VenueRegionList regions={barRegions} />
      </section>

      <section>
        <div className="mb-10 flex items-end gap-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
            <UtensilsCrossed className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
          </span>
          <div>
            <p className="mb-2 font-display text-xs uppercase tracking-[0.22em] text-gold">Bistros / 02</p>
            <h2 className="text-3xl font-normal leading-[1.3] text-text-dark md:text-4xl">餐酒館</h2>
          </div>
        </div>
        <VenueRegionList regions={bistroRegions} />
      </section>

      <ArticleFooterActions title={title} className="mt-20 lg:mt-24" />
    </article>
  )
}

function GenericArticle({ post, isVisible }: { post: BlogPost; isVisible: boolean }) {
  return (
    <article className={`mx-auto max-w-3xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <p className="mb-14 text-xl leading-10 text-text-dark">{post.excerpt}</p>
      {post.content.map((paragraph, index) => {
        if (paragraph.startsWith("### ")) {
          return <h2 key={index} className="mb-5 mt-14 text-3xl font-normal leading-[1.35] text-text-dark">{paragraph.replace("### ", "")}</h2>
        }
        return <p key={index} className="mb-7 text-base leading-9 text-muted-foreground">{paragraph}</p>
      })}
      <ArticleFooterActions title={post.title} className="mt-16" />
    </article>
  )
}

export function BlogPostContent({ slug }: { slug: string }) {
  const { ref, isVisible } = useScrollAnimation(0.01)
  const post = BLOG_POSTS_BY_SLUG[slug]
  const isChoosingGuide = slug === "choosing-beer-tap-system"
  const isVenueGuide = slug === "taiwan-bars-and-bistros"
  const isAboutBeerTaps = slug === "about-beer-taps"
  const isOpeningGuide = slug === "opening-beverage-system-guide"
  const isDayCafeNightBar = slug === "day-cafe-night-bar"
  const isWebsiteJourney = slug === "making-of-beer-taps-website"
  const articleFooter = <ArticleFooterActions title={post.title} className="mt-20 lg:mt-24" />

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <ArticleHero post={post} />
        <section ref={ref} className="bg-bg-light py-16 lg:py-24">
          <div className="mx-auto max-w-site px-6">
            {isChoosingGuide ? (
              <ChoosingEquipmentArticle isVisible={isVisible} title={post.title} />
            ) : isVenueGuide ? (
              <VenueGuideArticle isVisible={isVisible} title={post.title} />
            ) : isAboutBeerTaps ? (
              <AboutBeerTapsArticle isVisible={isVisible} footer={articleFooter} />
            ) : isOpeningGuide ? (
              <OpeningSystemGuideArticle isVisible={isVisible} footer={articleFooter} />
            ) : isDayCafeNightBar ? (
              <DayCafeNightBarArticle isVisible={isVisible} footer={articleFooter} />
            ) : isWebsiteJourney ? (
              <WebsiteJourneyArticle isVisible={isVisible} footer={articleFooter} />
            ) : (
              <GenericArticle post={post} isVisible={isVisible} />
            )}
          </div>
        </section>

        {!isDayCafeNightBar && !isWebsiteJourney ? (
        <section className="border-y border-border bg-bg-soft py-14 lg:py-16">
          <div className="mx-auto flex max-w-site flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">Next step</p>
              <h2 className="mb-4 text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">從文章判斷，走向實際配置</h2>
              <p className="text-base leading-8 text-muted-foreground">先比較設備形式，或直接提供現場條件與飲品品項。</p>
            </div>

            <Link
              href="/products"
              className="group inline-flex items-center justify-between gap-8 border-l border-border pl-6 text-sm text-text-dark transition-colors hover:text-gold"
            >
              <span>
                <span className="mb-2 block whitespace-nowrap font-display text-xs uppercase tracking-[0.22em]">
                  Explore systems
                </span>
                <span className="whitespace-nowrap">查看產品</span>
              </span>
              <ArrowDownRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
            </Link>
          </div>
        </section>
        ) : null}
      </main>
      <Footer />
    </>
  )
}
