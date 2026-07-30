import type { EquipmentCategoryPageData } from "@/types/equipment"
import { withNonSmallCaseCaptions } from "./case-captions"
import { withEquipmentImageAlts } from "./case-image-alts"

export const customEquipmentData: EquipmentCategoryPageData = withNonSmallCaseCaptions(withEquipmentImageAlts({
  eyebrow: "customize equipment",
  title: "客製化設備",
  description: "適合需要品牌識別、特殊尺寸、移動供應或整體吧檯整合的設備配置。",
  fitTitle: "客製化設備適合的使用條件",
  fitDescription: "先看品牌語彙、移動需求與現場限制，再決定外觀、尺寸、材質與設備整合方式。",
  caseEyebrow: "Custom cases",
  caseTitle: "客製化設備案例",
  contactLabel: "詢問客製化設備配置",
  cases: [
    {
      id: "c-beercar",
      name: "啤酒車",
      location: "啤酒車",
      category: "啤酒車",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/c-beercar-1.jpg",
          alt: "啤酒車 客製化設備主視覺",
        },
        {
          src: "/images/gallery/c-beercar-2.jpg",
          alt: "啤酒車 客製化設備另一角度",
        }
      ]
    },
    {
      id: "c-bluesky",
      name: "藍天飯店",
      location: "啤酒車",
      category: "啤酒車",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/c-bluesky-1.jpg",
          alt: "藍天飯店 客製化設備主視覺",
        },
        {
          src: "/images/gallery/c-bluesky-2.jpg",
          alt: "藍天飯店 客製化設備另一角度",
        }
      ]
    },
    {
      id: "c-chewinggum",
      name: "A Beach 101 & Pizza",
      location: "台北信義",
      category: "餐酒館",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/c-chewinggum-1.jpg",
          alt: "A Beach 101 & Pizza 客製化設備主視覺",
        },
        {
          src: "/images/gallery/c-chewinggum-2.jpg",
          alt: "A Beach 101 & Pizza 客製化設備另一角度",
        }
      ]
    },
    {
      id: "c-eyoyu",
      name: "魷魚啤酒吧",
      location: "基隆廟口",
      category: "酒吧",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/c-eyoyu-1.jpg",
          alt: "魷魚啤酒吧 客製化設備主視覺",
        },
        {
          src: "/images/gallery/c-eyoyu-2.jpg",
          alt: "魷魚啤酒吧 客製化設備另一角度",
        }
      ]
    },
    {
      id: "c-feelingbar",
      name: "Feeling Bar 調酒專賣店",
      location: "台北士林",
      category: "酒吧",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/c-feelingbar-1.jpg",
          alt: "Feeling Bar 調酒專賣店 客製化設備主視覺",
        },
        {
          src: "/images/gallery/c-feelingbar-2.jpg",
          alt: "Feeling Bar 調酒專賣店 客製化設備另一角度",
        },
        {
          src: "/images/gallery/c-feelingbar-3.jpg",
          alt: "Feeling Bar 調酒專賣店 客製化設備另一角度",
        },
        {
          src: "/images/gallery/c-feelingbar-4.jpg",
          alt: "Feeling Bar 調酒專賣店 客製化設備另一角度",
        },
        {
          src: "/images/gallery/c-feelingbar-5.jpg",
          alt: "Feeling Bar 調酒專賣店 客製化設備另一角度",
        }
      ]
    },
    {
      id: "c-fizzcar",
      name: "微風南山調酒吧餐車",
      location: "台北信義",
      category: "啤酒車",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/c-fizzcar-1.jpg",
          alt: "微風南山調酒吧餐車 客製化設備主視覺",
        },
        {
          src: "/images/gallery/c-fizzcar-2.jpg",
          alt: "微風南山調酒吧餐車 客製化設備另一角度",
        }
      ]
    },
    {
      id: "c-lowfun",
      name: "löwfun裸放茶旅",
      location: "全台連鎖",
      category: "茶飲",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/c-lowfun-1.jpg",
          alt: "löwfun裸放茶旅 客製化設備主視覺",
        },
        {
          src: "/images/gallery/c-lowfun-2.jpg",
          alt: "löwfun裸放茶旅 客製化設備另一角度",
        },
        {
          src: "/images/gallery/c-lowfun-3.jpg",
          alt: "löwfun裸放茶旅 客製化設備另一角度",
        },
        {
          src: "/images/gallery/c-lowfun-4.jpg",
          alt: "löwfun裸放茶旅 客製化設備另一角度",
        },
        {
          src: "/images/gallery/c-lowfun-5.jpg",
          alt: "löwfun裸放茶旅 客製化設備另一角度",
        },
        {
          src: "/images/gallery/c-lowfun-6.jpg",
          alt: "löwfun裸放茶旅 客製化設備另一角度",
        },
        {
          src: "/images/gallery/c-lowfun-7.jpg",
          alt: "löwfun裸放茶旅 客製化設備另一角度",
        },
        {
          src: "/images/gallery/c-lowfun-8.jpg",
          alt: "löwfun裸放茶旅 客製化設備另一角度",
        }
      ]
    },
    {
      id: "c-twohouse",
      name: "貳房苑",
      location: "台北大安",
      category: "餐廳",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/c-twohouse-1.jpg",
          alt: "貳房苑 客製化設備主視覺",
        },
        {
          src: "/images/gallery/c-twohouse-2.jpg",
          alt: "貳房苑 客製化設備另一角度",
        }
      ]
    }
  ],
  featuredCaseIds: [
    "c-beercar",
    "c-eyoyu",
    "c-feelingbar",
    "c-lowfun"
  ],
  features: [
    {
      label: "品牌形象",
      note: "把設備納入空間語彙",
      icon: "sparkles"
    },
    {
      label: "移動餐車",
      note: "配合活動與臨時場域",
      icon: "truck"
    },
    {
      label: "特殊裝潢",
      note: "依現場限制調整規格",
      icon: "ruler"
    },
    {
      label: "空間視覺",
      note: "形成品牌記憶點",
      icon: "grid"
    }
  ],
  infoRows: [
    {
      title: "適用場域",
      content: "品牌旗艦店、活動餐車、特殊吧檯、展示型飲品區與高識別度商業空間。"
    },
    {
      title: "規劃重點",
      content: "確認品牌視覺、尺寸限制、材質語彙、操作流程、移動性與現場施工條件。"
    },
    {
      title: "設備特色",
      content: "能依照品牌與場域條件打造專屬設備形式，而不是套用固定規格。"
    }
  ],
  integrationPath: {
    eyebrow: "Built to specification",
    title: "依指定條件完成設備整合",
    description: "配合既有空間、裝潢與品牌規範，將設備系統準確整合至營業現場。",
    steps: [
      {
        label: "場域條件",
        note: "確認既有裝潢、預設安裝位置與現場尺寸確認施工方式。",
        icon: "site"
      },
      {
        label: "品牌規範",
        note: "配合客戶指定的樣式、色彩、標誌與外觀要求。",
        icon: "brand"
      },
      {
        label: "設備安裝",
        note: "將冷藏、供氣等出酒設備安裝至指定位置。",
        icon: "equipment"
      },
      {
        label: "操作確認",
        note: "依實際出杯、補充與清潔方式完成教育訓練。",
        icon: "operation"
      }
    ]
  }
}))
