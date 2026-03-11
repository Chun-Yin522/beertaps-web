export function Footer() {
  return (
    <footer className="border-t-[6px] border-gold bg-bg-dark text-bg-light">
      <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-between gap-10 px-5 py-12 max-[800px]:flex-col max-[800px]:items-start max-[800px]:justify-center max-[800px]:gap-9 max-[800px]:pl-[10%]">
        {/* Location */}
        <div className="flex items-center gap-4 min-w-[200px]">
          <svg
            className="h-7 w-7 shrink-0 fill-gold"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <div className="flex flex-col gap-1 text-base tracking-wide text-[#cccccc]">
            <span>辦公室：新北市永和區</span>
            <span>全台接案</span>
          </div>
        </div>

        {/* Phone & LINE */}
        <div className="flex items-center gap-4 min-w-[200px]">
          <svg
            className="h-7 w-7 shrink-0 fill-gold"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <div className="flex flex-col gap-1 text-base tracking-wide text-[#cccccc]">
            <a
              href="tel:0935635305"
              className="transition-colors duration-300 hover:text-bg-light"
            >
              連絡電話：0935-635-305
            </a>
            <span className="transition-colors duration-300 hover:text-bg-light">
              LINE ID：sunnylee0218
            </span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 min-w-[200px]">
          <svg
            className="h-7 w-7 shrink-0 fill-gold"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <div className="flex flex-col gap-1 text-base tracking-wide text-[#cccccc]">
            <a
              href="mailto:sunnyrotary@gmail.com"
              className="leading-relaxed transition-colors duration-300 hover:text-bg-light"
            >
              sunnyrotary@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-0 pb-8 text-center text-xs text-[#555555]">
        &copy; {new Date().getFullYear()} Beer Taps Design. All Rights
        Reserved.
      </div>
    </footer>
  )
}
