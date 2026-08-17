"use client"

import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  NotebookPen,
  Phone,
  type LucideIcon,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SiteShareButton } from "@/components/site-share-button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SITE } from "@/data/site"

interface ContactMethodProps {
  label: string
  value: string
  icon: LucideIcon
  href?: string
}

const socialLinks = [
  { label: "Facebook", value: "塔普斯", href: SITE.social.facebook, icon: Facebook },
  { label: "Instagram", value: "beertaps_", href: SITE.social.instagram, icon: Instagram },
  { label: "Blog", value: "Sunny 的飲品設備筆記", href: SITE.social.blog, icon: NotebookPen },
]

function ContactMethod({ label, value, icon: Icon, href }: ContactMethodProps) {
  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold bg-gold text-bg-dark transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03]">
        <Icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="mb-1 block font-display text-[11px] uppercase tracking-[0.22em] text-text-dark">
          {label}
        </span>
        <span className="block break-words font-display text-lg leading-8 text-text-dark transition-colors duration-300 group-hover:text-gold">
          {value}
        </span>
      </span>
      {href && (
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
          aria-hidden="true"
        />
      )}
    </>
  )

  const className =
    "group grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-5 border-b border-border py-6 text-left first:border-t"

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    )
  }

  return <div className={className}>{content}</div>
}

export function ContactContent() {
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation(0.08)

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section ref={contactRef} className="bg-bg-soft py-16 lg:py-24">
          <div className="mx-auto max-w-site px-6">
            <div className={`mb-16 max-w-5xl lg:mb-20 ${contactVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <p className="mb-5 font-display text-xs uppercase tracking-[0.24em] text-gold">
                Contact us
              </p>
              <h1 className="text-4xl font-normal leading-[1.3] text-text-dark md:text-5xl lg:whitespace-nowrap">
                塔普斯，幫你找到適合的設備配置
              </h1>
            </div>

            <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <div className={contactVisible ? "animate-fade-in-up" : "opacity-0"}>
                <div className="mb-10">
                  <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">
                    Direct contact / 01
                  </p>
                  <h2 className="mb-5 text-3xl font-normal leading-[1.3] text-text-dark md:text-4xl">
                    塔普斯專業飲品設備
                  </h2>
                  <p className="max-w-md text-base leading-8 text-muted-foreground">
                    可直接來電、使用 LINE 或寄送 Email，告訴我們目前的場地與設備需求。
                  </p>
                </div>

                <div>
                  <ContactMethod label="Phone" value={SITE.phone} href={SITE.phoneHref} icon={Phone} />
                  <ContactMethod label="LINE" value={SITE.lineId} href={`https://line.me/ti/p/~${SITE.lineId}`} icon={MessageCircle} />
                  <ContactMethod label="Email" value={SITE.email} href={SITE.emailHref} icon={Mail} />
                </div>

                <div className="mt-12">
                  <p className="mb-5 font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Social channels
                  </p>
                  <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-1">
                    {socialLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid min-h-[86px] min-w-0 grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-border text-text-dark sm:px-4 sm:odd:pl-0 sm:even:pr-0 lg:px-0"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/45 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-bg-dark">
                          <item.icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="mb-1 block font-display text-sm text-text-dark">{item.label}</span>
                          <span className="block truncate font-display text-sm">{item.value}</span>
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                    <SiteShareButton variant="contact" />
                  </div>
                </div>
              </div>

              <div className={contactVisible ? "animate-fade-in-up delay-200" : "opacity-0"}>
                <div className="mb-10">
                  <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-gold">
                    Project brief / 02
                  </p>
                  <h2 className="mb-5 text-3xl font-normal leading-[1.3] text-text-dark md:text-4xl">
                    洽詢表單
                  </h2>
                  <p className="max-w-xl text-base leading-8 text-muted-foreground">
                    提供現場條件、預計需求、飲品品項與預計開業時程，我們會依實際需求協助評估設備方向。
                  </p>
                </div>

                <div className="overflow-hidden border border-border bg-bg-light">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfTs_DEpT94Umgx5mft9cYF9OGz9l4pwYoUgppLr8A1UM81uA/viewform?embedded=true"
                    width="100%"
                    height="715"
                    className="block border-0 bg-bg-light"
                    title="塔普斯洽詢表單"
                  >
                    載入洽詢表單
                  </iframe>
                  <div className="border-t border-border bg-bg-light px-6 py-5 text-sm leading-7 text-muted-foreground">
                    表單若無法顯示，也可以直接透過電話、LINE 或 Email 聯絡。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
