import type { EquipmentCategoryPageData } from "@/types/equipment"
import { smallCases } from "./small-cases"

export const smallEquipmentData: EquipmentCategoryPageData = {
  eyebrow: "small equipment",
  title: "小型啤酒機",
  description: "適合空間有限、品項精簡，並希望保留吧檯作業區的穩定出杯配置。",
  fitTitle: "小型啤酒機適合哪些現場",
  fitDescription: "先看品項、檯面與動線，再決定設備如何進入現場。",
  caseEyebrow: "Small equipment cases",
  caseTitle: "小型啤酒機案例",
  contactLabel: "詢問小型啤酒機配置",
  constructionTitle: "兩種常見的小型啤酒機施工方式",
  constructionDescription: "依照桶槽位置、冷藏條件與吧檯動線，選擇最適合現場的管線配置。",
  cases: smallCases,
  featuredCaseIds: ["allgosh", "jiuban", "takefive", "uncanny", "greengold"],
  features: [
    {
      label: "1-4 個品項",
      note: "少量品項穩定供應",
      icon: "gauge",
    },
    {
      label: "檯面空間小",
      note: "保留主要備餐區",
      icon: "ruler",
    },
    {
      label: "快速安裝",
      note: "降低現場改動幅度",
      icon: "package",
    },
    {
      label: "廚房作業動線",
      note: "靠近既有操作流程",
      icon: "grid",
    },
  ],
  infoRows: [
    {
      title: "適用場域",
      content: "小型酒吧、餐酒館、招待所、茶飲吧檯與空間有限的餐飲現場。",
    },
    {
      title: "規劃重點",
      content: "先確認吧檯深度、出杯位置、清潔路徑與既有管線，再決定龍頭數與設備位置。",
    },
    {
      title: "設備特色",
      content: "以小尺寸設備集中出杯點，保留主要檯面，讓日常操作、清潔與維護更直接。",
    },
  ],
  constructionMethods: [
    {
      label: "Method 01",
      title: "吧檯下安裝速冷機",
      note: "最小限度壓縮吧檯下空間，留給需要省空間的現場。",
      description:
        "酒桶置於室溫環境，透過速冷機即時降溫，搭配氣瓶維持細緻氣泡，讓清涼啤酒穩定送到客人手中。",
      image: "/images/diagrams/beer-tap-system-line-diagram-with-keg-rounded-corrected-line.png",
      alt: "吧檯下安裝速冷機施工示意圖",
    },
    {
      label: "Method 02",
      title: "吧檯下安裝商用冰箱",
      note: "酒桶持續冷藏，也增加店內可用的冷藏收納空間。",
      description:
        "酒桶放置於商用冰箱中維持低溫，搭配氣瓶提供爽口氣泡，讓出杯端保持穩定，也讓前場吧檯維持乾淨秩序。",
      image: "/images/diagrams/beer-fridge-keg-tap-system-line-diagram-double-wall-gas-line.png",
      alt: "吧檯下安裝商用冰箱施工示意圖",
    },
  ],
}
