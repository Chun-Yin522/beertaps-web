"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowDownRight,
  Beer,
  Check,
  Coffee,
  Droplets,
  Gauge,
  GraduationCap,
  Hammer,
  Package,
  Ruler,
  Snowflake,
  Sparkles,
  Wrench,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"

interface EditorialArticleProps {
  isVisible: boolean
  footer: React.ReactNode
}

interface DrinkRoute {
  label: string
  name: string
  summary: string
  equipment: string
  icon: LucideIcon
}

const drinkRoutes: DrinkRoute[] = [
  {
    label: "Draft beer",
    name: "桶裝啤酒",
    summary: "依啤酒品牌確認分配器，再配置冷藏、供氣、管線與出酒龍頭。",
    equipment: "酒桶・分配器・冷藏・二氧化碳・酒柱",
    icon: Beer,
  },
  {
    label: "Cocktail",
    name: "預調式調酒",
    summary: "將預先調製的飲品裝入桶中，以穩定冷藏與供氣縮短現場製作時間。",
    equipment: "飲品桶・冷藏・供氣・相容管線與龍頭",
    icon: Sparkles,
  },
  {
    label: "Tea",
    name: "茶飲與氮氣茶",
    summary: "茶湯維持低溫保存，依飲品效果選用一般空氣或氮氣完成出茶。",
    equipment: "茶桶・冷藏・供氣・出茶龍頭",
    icon: Droplets,
  },
  {
    label: "Kombucha",
    name: "康普茶",
    summary: "依發酵狀態與氣泡需求安排冷藏、桶槽與壓力條件，維持供應穩定。",
    equipment: "耐壓桶・冷藏・供氣・飲品相容管線",
    icon: Sparkles,
  },
  {
    label: "Coffee",
    name: "咖啡與氮氣咖啡",
    summary: "冷藏咖啡可透過氮氣系統形成細緻口感，並以專用龍頭集中出杯。",
    equipment: "咖啡桶・冷藏・氮氣・咖啡龍頭",
    icon: Coffee,
  },
  {
    label: "Sparkling",
    name: "氣泡水與氣泡飲",
    summary: "使用食品級二氧化碳供氣，依水源與供應方式配置碳酸化或出杯系統。",
    equipment: "水源或飲品桶・二氧化碳・調壓設備・龍頭",
    icon: Gauge,
  },
]

const serviceSteps = [
  {
    number: "01",
    title: "確認營業需求",
    note: "飲品品項、供應數量、尖峰出杯量、吧檯尺寸與預計開業時間。",
  },
  {
    number: "02",
    title: "整理設備配置",
    note: "依現場條件安排冷藏、酒桶、供氣、管線與龍頭位置。",
  },
  {
    number: "03",
    title: "進場安裝測試",
    note: "完成設備安裝、供氣與管線連接，並確認流速、壓力與出杯狀態。",
  },
  {
    number: "04",
    title: "操作教學與維修",
    note: "說明出杯、補充與清潔方式；後續設備問題可隨時聯絡詢問。",
  },
]

const installationTimeline = [
  {
    phase: "Planning",
    number: "01",
    title: "裝潢前期先討論",
    description: "先確認飲品品項、龍頭數量、預估出杯量與安裝位置，讓吧檯、冷藏、供氣和管線有足夠空間。",
  },
  {
    phase: "Coordination",
    number: "02",
    title: "確認設備與預留條件",
    description: "依小型、大型、壁出式或客製化方向，確認電力、散熱、桶槽、氣瓶及管線路徑。",
  },
  {
    phase: "Installation",
    number: "03",
    title: "裝潢即將完成時進場",
    description: "避免酒柱、冰箱與管線在施工期間沾染粉塵或碰撞。一般標準現場多可於半天內完成，實際時間依規模與條件調整。",
  },
  {
    phase: "Handover",
    number: "04",
    title: "測試、清潔與教育訓練",
    description: "確認流速、壓力與設備運作，完成操作及清潔說明；現場簡單整理後即可開始供應飲品。",
  },
]

const systemDiagrams = [
  {
    label: "Method 01",
    name: "吧檯下安裝速冷機",
    note: "酒桶置於室溫環境，飲品經速冷機快速降溫後送至出酒龍頭，適合希望減少吧檯下設備占用的現場。",
    image: "/images/diagrams/beer-tap-system-line-diagram-with-keg-rounded-corrected-line.png",
  },
  {
    label: "Method 02",
    name: "吧檯下安裝商用冰箱",
    note: "酒桶置於商用冰箱內持續低溫保存，可依空間安排單桶或多桶配置，適用於小型與大型出酒系統。",
    image: "/images/diagrams/beer-fridge-keg-tap-system-line-diagram-double-wall-gas-line.png",
  },
  {
    label: "Method 03",
    name: "冷藏設備整合於牆後",
    note: "將商用冰箱、供氣與管線安排於牆面後方，飲品經由牆面龍頭供應，保留主要工作檯面。",
    image: "/images/diagrams/beer-wall-fridge-keg-system-cylinder-inside-corrected-option-3.png",
  },
]

const openingChecklist = [
  "預計供應的飲品類型與品項數量",
  "平日及尖峰時段的預估出杯量",
  "場地照片、吧檯尺寸與預定安裝位置",
  "酒桶、冰箱、冷卻設備與氣瓶可用空間",
  "電力、牆面結構與管線施工空間",
  "裝潢進度、設備進場日與預計開業時間",
]

const productLinks = [
  { number: "01", name: "小型啤酒機", href: "/products/small" },
  { number: "02", name: "大型出酒系統", href: "/products/large" },
  { number: "03", name: "壁出式啤酒牆", href: "/products/wall" },
  { number: "04", name: "客製化設備", href: "/products/custom" },
]

function SectionTitle({
  label,
  title,
  description,
  descriptionClassName = "",
}: {
  label: string
  title: string
  description?: string
  descriptionClassName?: string
}) {
  return (
    <div className="mb-10 max-w-4xl">
      <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">{label}</p>
      <h2 className="text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">{title}</h2>
      {description ? <p className={`mt-5 text-base leading-8 text-muted-foreground md:text-lg ${descriptionClassName}`}>{description}</p> : null}
    </div>
  )
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-8 text-base text-text-dark transition-colors duration-200 hover:text-gold">
      <span>{children}</span>
      <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
    </Link>
  )
}

export function AboutBeerTapsArticle({ isVisible, footer }: EditorialArticleProps) {
  return (
    <article className={`mx-auto max-w-6xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <section className="mb-20 border-y border-border bg-[#EFEFED] lg:mb-28">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_17rem_17rem]">
          <div className="px-6 py-8 lg:px-8 lg:py-10">
            <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">BEER TAPS / from taps to customers</p>
            <h2 className="max-w-xl text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">把飲品從桶中，穩定送到營業現場的每一個龍頭</h2>
          </div>
          {[
            ["200+", "全台服務場域"],
            ["6+", "飲品應用方向"],
          ].map(([value, label]) => (
            <div key={label} className="border-t border-border px-6 py-7 lg:border-l lg:border-t-0 lg:px-7 lg:py-10">
              <span className="font-display text-4xl text-gold md:text-5xl">{value}</span>
              <span className="mt-4 block text-sm leading-6 text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 lg:mb-28">
        <SectionTitle label="What we do / 01" title="不只啤酒，也不只是一台機器" />
        <div className="max-w-5xl space-y-6 text-base leading-9 text-muted-foreground md:text-lg">
          <p>BEER TAPS 塔普斯提供商用飲品出酒設備的評估、配置與安裝。服務從確認飲品與營業條件開始，接著安排冷藏、酒桶、供氣、管線與龍頭，直到現場測試和操作教學完成。</p>
          <p>啤酒、調酒、茶飲、康普茶、咖啡、氣泡飲與氮氣飲品，需要的冷藏方式、氣體、壓力和接頭並不相同。設備選擇必須回到實際飲品與操作流程，而不是只看外觀或龍頭數量。</p>
        </div>
      </section>

      <section className="mb-20 lg:mb-28">
        <SectionTitle
          label="Beverage routes / 02"
          title="同一個龍頭背後，是六種不同的設備條件"
          description="以下是常見應用方向。實際配置仍需依飲品配方、供應方式、現場尺度與尖峰出杯量確認。"
        />
        <div className="border-b border-border">
          {drinkRoutes.map((route, index) => {
            const Icon = route.icon
            return (
              <div key={route.name} className="grid gap-5 border-t border-border py-7 md:grid-cols-[3rem_1fr_1.4fr] md:items-start md:gap-8 lg:grid-cols-[3rem_0.85fr_1.35fr_1.1fr]">
                <span className="flex h-11 w-11 items-center justify-center border border-border text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-[11px] uppercase tracking-[0.18em] text-gold">0{index + 1} / {route.label}</p>
                  <h3 className="mt-2 text-xl font-normal text-text-dark">{route.name}</h3>
                </div>
                <p className="text-base leading-8 text-muted-foreground">{route.summary}</p>
                <p className="text-base leading-8 text-muted-foreground md:col-start-3 lg:col-start-auto">{route.equipment}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mb-20 overflow-hidden bg-bg-dark text-bg-light lg:mb-28">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border-b border-bg-light/15 px-6 py-10 lg:border-b-0 lg:border-r lg:px-10 lg:py-14">
            <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">Complete system / 03</p>
            <h2 className="text-3xl font-normal leading-[1.35] md:text-4xl">設備零件要一起運作，出杯才會穩定</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-bg-light/65">冷卻機或冰箱、酒桶、分配器、酒柱、龍頭、減壓閥、氣瓶、管線與清洗設備，會依飲品和現場條件組成一套完整系統。</p>
          </div>
          <div className="grid sm:grid-cols-2">
            {[
              [Snowflake, "冷藏與冷卻", "維持飲品適合的供應溫度"],
              [Package, "桶槽與接頭", "依飲品及品牌選擇相容零件"],
              [Gauge, "供氣與壓力", "配合管線、飲品與流速調整"],
              [Wrench, "清潔與維修", "讓設備維持可使用、可保養的狀態"],
            ].map(([Icon, title, note]) => {
              const FeatureIcon = Icon as LucideIcon
              return (
                <div key={title as string} className="border-b border-bg-light/15 p-7 odd:sm:border-r lg:p-9">
                  <FeatureIcon className="mb-8 h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="mb-3 text-lg font-normal">{title as string}</h3>
                  <p className="text-sm leading-7 text-bg-light/60">{note as string}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mb-20 lg:mb-28">
        <SectionTitle label="Service flow / 04" title="從需求談到現場完成" />
        <div className="grid border-y border-border md:grid-cols-2 lg:grid-cols-4">
          {serviceSteps.map((step) => (
            <div key={step.number} className="border-b border-border px-1 py-7 md:px-6 md:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <p className="mb-8 font-display text-xs tracking-[0.2em] text-gold">{step.number}</p>
              <h3 className="mb-4 text-xl font-normal text-text-dark">{step.title}</h3>
              <p className="text-base leading-8 text-muted-foreground">{step.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 grid gap-9 border-y border-border bg-[#EFEFED] px-6 py-9 md:px-8 lg:grid-cols-[minmax(0,1fr)_9rem] lg:items-end">
        <div className="max-w-4xl">
          <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">After service</p>
          <h2 className="text-3xl font-normal leading-[1.35] text-text-dark">安裝完成後，設備問題仍然找得到人</h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">BEER TAPS 提供後續維修與設備問題諮詢。簡單維修與諮詢不另外收取服務費，僅依地點酌收車馬費；另有收費清洗管線等服務，實際狀況請依溝通結果為主。</p>
        </div>
        <Link href="/contact" className="group flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full bg-gold text-center text-base text-bg-dark md:h-36 md:w-36">
          <ArrowUpRight className="mb-4 h-7 w-7 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
          聯絡塔普斯
        </Link>
      </section>

      {footer}
    </article>
  )
}

export function OpeningSystemGuideArticle({ isVisible, footer }: EditorialArticleProps) {
  return (
    <article className={`mx-auto max-w-6xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <section className="mb-20 grid overflow-hidden border-y border-border bg-[#EFEFED] lg:mb-28 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-border px-6 py-9 lg:border-b-0 lg:border-r lg:px-9 lg:py-12">
          <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">Opening sequence</p>
          <h2 className="text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">設備提早談，安裝接近完工再進場</h2>
        </div>
        <div className="grid grid-cols-2">
          {[
            [Ruler, "裝潢前期確認位置與空間"],
            [Hammer, "裝潢末期安排設備進場"],
            [Wrench, "一般標準現場約半日安裝"],
            [GraduationCap, "測試教學後即可準備營業"],
          ].map(([Icon, note]) => {
            const SequenceIcon = Icon as LucideIcon
            return (
            <div key={note as string} className="border-b border-r border-border p-6 lg:p-8">
              <SequenceIcon className="h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
              <p className="mt-3 text-base leading-8 text-muted-foreground">{note as string}</p>
            </div>
            )
          })}
        </div>
      </section>

      <section className="mb-20 lg:mb-28">
        <SectionTitle
          label="Project timeline / 01"
          title="從裝潢前期到第一杯飲品"
          description="正式安裝不必太早，但設備條件不能等到最後才確認。把討論與施工分開安排，能減少現場重工，也能保護剛進場的設備。"
          descriptionClassName="lg:whitespace-nowrap"
        />
        <div className="border-b border-border">
          {installationTimeline.map((item) => (
            <div key={item.number} className="grid gap-5 border-t border-border py-7 md:grid-cols-[5rem_0.8fr_1.4fr] md:items-start md:gap-8 lg:py-9">
              <span className="font-display text-3xl text-gold">{item.number}</span>
              <div>
                <p className="mb-2 font-display text-[11px] uppercase tracking-[0.2em] text-gold">{item.phase}</p>
                <h3 className="text-xl font-normal leading-8 text-text-dark">{item.title}</h3>
              </div>
              <p className="text-base leading-8 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 lg:mb-28">
        <SectionTitle
          label="System diagrams / 02"
          title="三種常見施工方式"
          description="依冷藏設備與龍頭的安裝位置，可分為吧檯下速冷機、吧檯下商用冰箱與牆後冷藏三種常見方式。實際桶槽數量、管線與供氣配置仍需依現場確認。"
        />
        <div className="space-y-12">
          {systemDiagrams.map((system, index) => (
            <div key={system.name} className="grid gap-7 border-t border-border pt-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-14">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">0{index + 1} / {system.label}</p>
                <h3 className="mb-4 text-3xl font-normal leading-[1.35] text-text-dark">{system.name}</h3>
                <p className="mb-7 text-base leading-8 text-muted-foreground">{system.note}</p>
              </div>
              <div className={`relative aspect-[16/9] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={system.image}
                  alt={`${system.name}冷藏、酒桶、供氣與出酒龍頭施工示意圖`}
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 border-y border-border py-8">
          <div>
            <p className="mb-2 font-display text-xs uppercase tracking-[0.2em] text-gold">04 / Customize equipment</p>
            <p className="text-lg text-text-dark">已有指定裝潢、活動餐車或特殊設備位置，也可依現場指示完成整合。</p>
          </div>
          <div className="mt-8 grid border-t border-border md:grid-cols-2 lg:grid-cols-4">
            {productLinks.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group flex min-h-24 items-center justify-between gap-5 border-b border-border py-5 md:px-6 md:odd:border-r lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span>
                  <span className="mb-2 block font-display text-xs tracking-[0.2em] text-gold">{product.number}</span>
                  <span className="text-base text-text-dark transition-colors duration-200 group-hover:text-gold">{product.name}</span>
                </span>
                <ArrowDownRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-gold" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-20 border-y border-border bg-[#EFEFED] lg:mb-28">
        <div className="border-b border-border px-6 py-8 md:px-8 lg:py-10">
          <div>
            <Ruler className="mb-10 h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
            <p className="mb-3 font-display text-xs uppercase tracking-[0.22em] text-gold">Before opening / 04</p>
            <h2 className="text-3xl font-normal leading-[1.35] text-text-dark md:text-4xl">開店前要準備什麼？</h2>
          </div>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3">
            {openingChecklist.map((item) => (
              <li key={item} className="grid min-h-32 grid-cols-[1.75rem_1fr] items-start gap-3 border-b border-border px-6 py-7 md:border-r lg:min-h-36">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/55 text-gold">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="pt-1 text-base leading-8 text-text-dark">{item}</span>
              </li>
            ))}
        </ul>
      </section>

      <section className="mb-20 lg:mb-28">
        <SectionTitle label="Common questions / 05" title="裝潢已經完成，也能加裝設備" />
        <div className="grid border-y border-border lg:grid-cols-2">
          <div className="border-b border-border py-8 lg:border-b-0 lg:border-r lg:pr-10">
            <Hammer className="mb-7 h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
            <h3 className="mb-4 text-xl font-normal text-text-dark">新店什麼時候確認設備？</h3>
            <p className="text-base leading-8 text-muted-foreground">裝潢前期先討論設備位置、所需空間與施工條件；等到裝潢接近完成，再安排酒柱、冰箱與管線進場，避免設備在施工途中沾染粉塵或被碰撞。</p>
          </div>
          <div className="py-8 lg:pl-10">
            <GraduationCap className="mb-7 h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
            <h3 className="mb-4 text-xl font-normal text-text-dark">已完成裝潢還能加裝嗎？</h3>
            <p className="text-base leading-8 text-muted-foreground">可以。現場會先確認可用檯面或牆面、電力、冷藏、氣瓶位置與管線路徑，再選擇改動較少的設備形式。完成測試與教育訓練後，簡單清潔即可開始使用。</p>
          </div>
        </div>
      </section>

      <section className="mb-16 grid gap-8 border-y border-border bg-[#EFEFED] px-6 py-9 md:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">Start planning</p>
          <h2 className="text-3xl font-normal leading-[1.35] text-text-dark">把現場條件交給 BEER TAPS 塔普斯</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">提供場地照片、吧檯尺寸、飲品品項、預估出杯量與開業時程，我們會協助整理初步設備方向。</p>
        </div>
        <TextLink href="/contact">前往聯絡表單</TextLink>
      </section>

      {footer}
    </article>
  )
}
