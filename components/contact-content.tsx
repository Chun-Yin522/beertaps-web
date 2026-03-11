"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactContent() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Page Header - Simplified, no dark background */}
        <section className="bg-bg-light py-16 lg:py-20">
          <div className="mx-auto max-w-site px-6 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              CONTACT US
            </p>
            <h1 className="mb-4 font-display text-3xl font-bold text-text-dark md:text-4xl">
              <span className="text-balance">聯絡我們</span>
            </h1>
            <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground">
              無論您有任何關於啤酒機、出酒設備的問題，歡迎隨時與我們聯繫
            </p>
          </div>
        </section>

        {/* Contact Section - Two columns: info on left, Google Form on right */}
        <section ref={ref} className="bg-bg-soft py-16 lg:py-24">
          <div className="mx-auto max-w-site px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left side - Contact info */}
              <div
                className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              >
                <h2 className="mb-8 font-display text-2xl font-bold text-text-dark">
                  聯絡資訊
                </h2>

                <div className="flex flex-col gap-6">
                  {/* Phone */}
                  <a
                    href="tel:0935635305"
                    className="group flex items-center gap-5 rounded-xl border border-border bg-bg-light p-5 transition-all hover:border-gold/30 hover:shadow-md"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 transition-colors group-hover:bg-gold/20">
                      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        電話
                      </p>
                      <p className="text-lg font-medium text-text-dark transition-colors group-hover:text-gold">
                        0935-635-305
                      </p>
                    </div>
                  </a>

                  {/* LINE */}
                  <div className="flex items-center gap-5 rounded-xl border border-border bg-bg-light p-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        LINE
                      </p>
                      <p className="text-lg font-medium text-text-dark">
                        sunnylee0218
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <a
                    href="mailto:sunnyrotary@gmail.com"
                    className="group flex items-center gap-5 rounded-xl border border-border bg-bg-light p-5 transition-all hover:border-gold/30 hover:shadow-md"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 transition-colors group-hover:bg-gold/20">
                      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Email
                      </p>
                      <p className="text-lg font-medium text-text-dark transition-colors group-hover:text-gold">
                        sunnyrotary@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-center gap-5 rounded-xl border border-border bg-bg-light p-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        地址
                      </p>
                      <p className="text-lg font-medium text-text-dark">
                        新北市永和區（全台接案）
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Google Form embed */}
              <div
                className={`${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
              >
                <h2 className="mb-8 font-display text-2xl font-bold text-text-dark">
                  諮詢報價
                </h2>
                <div className="overflow-hidden rounded-xl border border-border bg-bg-light">
                  {/* Google Form placeholder - user should replace this URL with their actual form */}
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdYourFormIdHere/viewform?embedded=true"
                    width="100%"
                    height="600"
                    className="border-0"
                    title="諮詢報價表單"
                  >
                    載入中…
                  </iframe>
                  <div className="bg-bg-soft px-6 py-4 text-center text-sm text-muted-foreground">
                    <p>填寫表單後，我們將盡快與您聯繫</p>
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
