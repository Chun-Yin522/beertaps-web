import type { EquipmentCategoryPageData } from "@/types/equipment"
import { withNonSmallCaseCaptions } from "./case-captions"
import { withEquipmentImageAlts } from "./case-image-alts"

export const largeEquipmentData: EquipmentCategoryPageData = withNonSmallCaseCaptions(withEquipmentImageAlts({
  eyebrow: "large system",
  title: "大型出酒系統",
  description: "適合多品項、高出杯量與營業尖峰明確的場域，讓設備、管線與服務動線一起支撐穩定供應。",
  fitTitle: "大型出酒系統適合的使用條件",
  fitDescription: "先看品項數、尖峰流量與服務距離，再決定龍頭數、酒柱形式與管線規劃。",
  caseEyebrow: "Large system cases",
  caseTitle: "大型出酒系統案例",
  contactLabel: "詢問大型出酒系統配置",
  constructionTitle: "大型出酒系統施工方式",
  constructionDescription: "依照冷藏位置、管線距離與多龍頭出杯需求，規劃穩定的供應系統。",
  cases: [
    {
      id: "l-blursday",
      name: "Blursday Draft.Cafe",
      location: "台北敦化南路",
      category: "酒吧",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/l-blursday-1.jpg",
          alt: "Blursday Draft.Cafe 大型出酒系統主視覺",
        },
        {
          src: "/images/gallery/l-blursday-2.jpg",
          alt: "Blursday Draft.Cafe 大型出酒系統另一角度",
        }
      ]
    },
    {
      id: "l-dienhua",
      name: "典華幸福大樓",
      location: "台北大直",
      category: "餐廳",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/l-dienhua-1.jpg",
          alt: "典華幸福大樓 大型出酒系統主視覺",
        },
        {
          src: "/images/gallery/l-dienhua-2.jpg",
          alt: "典華幸福大樓 大型出酒系統另一角度",
        },
        {
          src: "/images/gallery/l-dienhua-3.jpg",
          alt: "典華幸福大樓 大型出酒系統另一角度",
        },
        {
          src: "/images/gallery/l-dienhua-4.jpg",
          alt: "典華幸福大樓 大型出酒系統另一角度",
        }
      ]
    },
    {
      id: "l-jinjyou",
      name: "金門酒廠快閃店",
      location: "台北華山文創",
      category: "酒吧",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/l-jinjyou-1.jpg",
          alt: "金門酒廠快閃店 大型出酒系統主視覺",
        },
        {
          src: "/images/gallery/l-jinjyou-2.jpg",
          alt: "金門酒廠快閃店 大型出酒系統另一角度",
        }
      ]
    },
    {
      id: "l-pingsi",
      name: "飲嚐品",
      location: "新北平溪",
      category: "茶飲",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/l-pingsi-1.jpg",
          alt: "飲嚐品 大型出酒系統主視覺",
        },
        {
          src: "/images/gallery/l-pingsi-2.jpg",
          alt: "飲嚐品 大型出酒系統另一角度",
        }
      ]
    },
    {
      id: "l-submarine",
      name: "潛艇",
      location: "台北中山區",
      category: "招待所",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/l-submarine-2.jpg",
          alt: "潛艇 大型出酒系統主視覺",
        },
        {
          src: "/images/gallery/l-submarine-1.jpg",
          alt: "潛艇 大型出酒系統另一角度",
        }
      ]
    },
    {
      id: "l-yuensiuon",
      name: "遠雄悅來大飯店",
      location: "花蓮壽豐",
      category: "餐廳",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/l-yuensiuon-1.jpg",
          alt: "遠雄悅來大飯店 大型出酒系統主視覺",
        },
        {
          src: "/images/gallery/l-yuensiuon-2.jpg",
          alt: "遠雄悅來大飯店 大型出酒系統另一角度",
        },
        {
          src: "/images/gallery/l-yuensiuon-3.jpg",
          alt: "遠雄悅來大飯店 大型出酒系統另一角度",
        }
      ]
    }
  ],
  featuredCaseIds: [
    "l-dienhua",
    "l-jinjyou",
    "l-submarine",
    "l-yuensiuon"
  ],
  features: [
    {
      label: "4 個品項以上",
      note: "多品項集中供應",
      icon: "gauge"
    },
    {
      label: "高流量場域",
      note: "尖峰時段穩定出杯",
      icon: "cup"
    },
    {
      label: "服務動線",
      note: "前後場距離清楚",
      icon: "grid"
    },
    {
      label: "空間視覺",
      note: "設備形成吧檯焦點",
      icon: "sparkles"
    }
  ],
  infoRows: [
    {
      title: "適用場域",
      content: "大型酒吧、餐廳、飯店、品牌活動與高出杯量的複合式飲品空間。"
    },
    {
      title: "規劃重點",
      content: "確認品項數、尖峰出杯量、管線距離、冷卻效率、清潔維護與人員服務動線。"
    },
    {
      title: "設備特色",
      content: "可支援多龍頭與多品項配置，並依現場條件整合吧檯、後場與展示面。"
    }
  ],
  constructionMethods: [
    {
      label: "Method",
      title: "吧檯下安裝商用冰箱",
      note: "酒桶持續冷藏，也增加店內可用的冷藏收納空間。",
      description: "酒桶放置於商用冰箱中維持低溫，搭配氣瓶提供爽口氣泡，讓出杯端保持穩定，也讓前場吧檯維持乾淨秩序。",
      image: "/images/diagrams/beer-fridge-keg-y6-tap-system-line-diagram-inner-wall-gas-line.png",
      alt: "大型出酒系統商用冰箱施工示意圖"
    }
  ]
}))
