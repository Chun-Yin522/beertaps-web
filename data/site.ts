export const SITE = {
  name: "Beer Taps",
  legalName: "BEER TAPS 塔普斯",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://beertaps-web.vercel.app",
  description:
    "Beer Taps 提供啤酒龍頭、飲品出酒系統、吧檯設備與客製化商用設備，協助餐飲、酒吧、咖啡與茶飲品牌打造穩定且具質感的營業空間。",
  phone: "0935-635-305",
  phoneHref: "tel:0935635305",
  lineId: "sunnylee0218",
  email: "sunnyrotary@gmail.com",
  emailHref: "mailto:sunnyrotary@gmail.com",
  social: {
    facebook: "https://www.facebook.com/beertaps",
    instagram: "https://www.instagram.com/beertaps_",
    blog: "https://sunnylee0218.pixnet.net/blog",
  },
} as const
