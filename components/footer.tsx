import { SITE } from "@/data/site"
import { SiteShareButton } from "@/components/site-share-button"

export function Footer() {
  return (
    <footer className="border-t-[6px] border-gold bg-bg-dark text-bg-light">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div className="flex items-start gap-4">
          <svg
            className="mt-1 h-6 w-6 shrink-0 fill-gold"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <div className="flex flex-col gap-1 text-sm tracking-wide text-[#cccccc]">
            <span>台灣地區服務</span>
            <span>歡迎預約討論設備需求</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <svg
            className="mt-1 h-6 w-6 shrink-0 fill-gold"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <div className="flex flex-col gap-1 text-sm tracking-wide text-[#cccccc]">
            <a
              href={SITE.phoneHref}
              className="transition-colors duration-300 hover:text-bg-light"
            >
              電話：{SITE.phone}
            </a>
            <span>LINE ID：{SITE.lineId}</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <svg
            className="mt-1 h-6 w-6 shrink-0 fill-gold"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <div className="flex flex-col gap-1 text-sm tracking-wide text-[#cccccc]">
            <a
              href={SITE.emailHref}
              className="leading-relaxed transition-colors duration-300 hover:text-bg-light"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#333] transition-colors duration-300 hover:bg-gold"
                aria-label="Beer Taps Facebook"
              >
                <svg className="h-4 w-4 fill-bg-light" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#333] transition-colors duration-300 hover:bg-gold"
                aria-label="Beer Taps Instagram"
              >
                <svg className="h-4 w-4 fill-bg-light" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={SITE.social.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#333] transition-colors duration-300 hover:bg-gold"
                aria-label="Beer Taps 部落格"
              >
                <svg className="h-4 w-4 fill-bg-light" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </a>
              <SiteShareButton variant="footer" />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8 text-center text-xs text-[#555555]">
        &copy; {new Date().getFullYear()} Beer Taps Design. All Rights Reserved.
      </div>
    </footer>
  )
}
