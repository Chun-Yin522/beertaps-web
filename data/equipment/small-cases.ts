import type { SmallEquipmentCase } from "@/types/equipment"
import { withCaseImageAlts } from "./case-image-alts"

export const smallCases = withCaseImageAlts([
  {
    id: "allgosh",
    name: "佛聚店",
    location: "彰化東民街",
    category: "招待所",
    demand: "空間有限，但需要把出杯區整理得乾淨俐落。",
    setup: "單口多立克酒柱搭配滴酒盤，集中出杯與清潔位置。",
    result: "保留主要檯面，讓日常出杯與清潔維護更順手。",
    heroPosition: "center 100%",
    images: [
      {
        src: "/images/gallery/s-allgosh-1.jpg",
        alt: "佛聚店 小型啤酒機主視覺",
        caption: "佛聚店／彰化東民街｜單口多立克酒柱搭配滴酒盤，集中出杯與清潔位置，保留主要檯面。",
      },
      {
        src: "/images/gallery/s-allgosh-2.jpg",
        alt: "佛聚店 小型啤酒機另一角度",
        caption: "佛聚店／彰化東民街｜設備位置貼近實際操作動線，降低吧檯空間被切碎的問題。",
      },
    ],
  },
  {
    id: "jiuban",
    name: "久伴餐酒館",
    location: "台南東區",
    category: "餐酒館",
    demand: "需要在既有空間中增加穩定出杯能力。",
    setup: "四口 T 型酒柱貼近吧檯操作面，整合龍頭與管線距離。",
    result: "減少現場改動，讓設備快速進入日常營運節奏。",
    heroPosition: "center 100%",
    images: [
      {
        src: "/images/gallery/s-jiuban-1.jpg",
        alt: "久伴餐酒館 小型啤酒機主視覺",
        caption: "久伴餐酒館／台南東區｜四口 T 型酒柱貼近吧檯操作面，整合龍頭與管線距離。",
      },
      {
        src: "/images/gallery/s-jiuban-2.jpg",
        alt: "久伴餐酒館 小型啤酒機另一角度",
        caption: "久伴餐酒館／台南東區｜設備配置貼近服務位置，讓前場操作更直接，減少現場改動。",
      },
    ],
  },
  {
    id: "takefive",
    name: "五方食藏",
    location: "台北大安",
    category: "餐酒館",
    demand: "吧檯需兼顧備餐、出杯與視覺完整度。",
    setup: "小型出杯設備與既有檯面整合，降低視覺干擾。",
    result: "讓設備成為吧檯的一部分，而不是額外堆疊的器材。",
    heroPosition: "center center",
    heroFlip: true,
    images: [
      {
        src: "/images/gallery/s-takefive-1.jpg",
        alt: "五方食藏 小型啤酒機主視覺",
        caption: "五方食藏／台北大安｜四口古銅色 T 型酒柱與既有檯面整合，提升吧檯質感。",
      },
      {
        src: "/images/gallery/s-takefive-2.jpg",
        alt: "五方食藏 小型啤酒機第二角度",
        caption: "五方食藏／台北大安｜依照吧檯尺度安排出杯位置，保留日常作業彈性。",
      },
      {
        src: "/images/gallery/s-takefive-3.jpg",
        alt: "五方食藏 小型啤酒機第三角度",
        caption: "五方食藏／台北大安｜選用古銅色酒柱讓設備與空間風格更一致。",
      },
    ],
  },
  {
    id: "uncanny",
    name: "UNCANNY",
    location: "台北大直",
    category: "招待所",
    demand: "有限吧檯空間中，需要兼顧雙品項供應與俐落視覺。",
    setup: "採用小型雙口設備，集中龍頭、滴水盤與管線位置。",
    result: "保留主要工作檯面，降低出杯與清潔互相干擾。",
    heroPosition: "center center",
    heroFlip: true,
    images: [
      {
        src: "/images/gallery/s-uncanny-1.jpg",
        alt: "UNCANNY 小型啤酒機主視覺",
        caption: "UNCANNY／台北大直｜雙口原色雅士酒塔集中龍頭並搭配滴水盤，兼顧雙品項供應與俐落視覺。",
      },
      {
        src: "/images/gallery/s-uncanny-2.jpg",
        alt: "UNCANNY 小型啤酒機另一角度",
        caption: "UNCANNY／台北大直｜設備位置與吧檯視覺整合，保留足夠操作空間。",
      },
    ],
  },
  {
    id: "mixology",
    name: "酩 MIXology",
    location: "台北敦化南路",
    category: "餐酒館",
    demand: "需要以小型設備支援單品項供應，同時保持吧檯視覺俐落。",
    setup: "原色雅士酒塔配置於出杯位置，讓設備與吧檯陳列保持一致。",
    result: "降低設備存在感，讓出杯點自然融入既有服務動線。",
    heroPosition: "center center",
    images: [
      {
        src: "/images/gallery/s-mixology-2.jpg",
        alt: "酩 MIXology 小型啤酒機主視覺",
        caption: "酩 MIXology／台北敦化南路｜單品項供應以小型酒塔配置於出杯位置，讓設備不干擾吧檯視覺與服務動線。",
      },
      {
        src: "/images/gallery/s-mixology-1.jpg",
        alt: "酩 MIXology 小型啤酒機另一角度",
        caption: "酩 MIXology／台北敦化南路｜從另一角度確認設備、檯面與服務位置的關係。",
      },
    ],
  },
  {
    id: "bmw",
    name: "BMW汽車展示中心",
    location: "桃園",
    category: "招待所",
    demand: "招待所需要在展示空間中提供穩定出杯，並維持場域整潔。",
    setup: "雙口原色雅士酒塔搭配滴酒盤，集中出杯與清潔位置。",
    result: "讓設備融入接待情境，降低臨時供應造成的視覺雜亂。",
    images: [
      {
        src: "/images/gallery/s-bmw-1.jpg",
        alt: "BMW汽車展示中心 小型啤酒機主視覺",
        caption: "BMW汽車展示中心／桃園｜招待所使用兩支原色雅士酒塔並搭配滴酒盤，維持展示空間整潔。",
      },
      {
        src: "/images/gallery/s-bmw-2.jpg",
        alt: "BMW汽車展示中心 小型啤酒機另一角度",
        caption: "BMW汽車展示中心／桃園｜設備配置配合接待區尺度，降低現場操作干擾。",
      },
    ],
  },
  {
    id: "greengold",
    name: "台灣綠金",
    location: "台中西區",
    category: "招待所",
    demand: "招待所需在有限檯面中建立單品項出杯區。",
    setup: "單口鉑銳酒塔讓出杯點集中，保留周邊工作檯面。",
    result: "以簡潔設備滿足日常招待需求，維持空間視覺乾淨。",
    heroPosition: "center 20%",
    images: [
      {
        src: "/images/gallery/s-greengold-1.jpg",
        alt: "台灣綠金 小型啤酒機主視覺",
        caption: "台灣綠金／台中西區｜使用單支鉑銳酒塔，增加招待所檯面亮點。",
      },
      {
        src: "/images/gallery/s-greengold-2.jpg",
        alt: "台灣綠金 小型啤酒機另一角度",
        caption: "台灣綠金／台中西區｜設備以精簡配置回應有限檯面與日常供應需求。",
      },
    ],
  },
  {
    id: "jixiang",
    name: "吉祥路交誼廳",
    location: "新北林口",
    category: "招待所",
    demand: "交誼空間需要穩定雙品項供應，並避免設備佔用主要檯面。",
    setup: "雙口眼鏡蛇酒塔集中出杯位置，讓檯面維持可操作狀態。",
    result: "讓飲品供應與招待動線更順，不需要大幅改動現場。",
    images: [
      {
        src: "/images/gallery/s-jixiang-1.jpg",
        alt: "吉祥路交誼廳 小型啤酒機主視覺",
        caption: "吉祥路交誼廳／新北林口｜使用雙口眼鏡蛇酒塔支援交誼空間視覺，增加招待所檯面亮點。",
      },
      {
        src: "/images/gallery/s-jixiang-2.jpg",
        alt: "吉祥路交誼廳 小型啤酒機另一角度",
        caption: "吉祥路交誼廳／新北林口｜設備位置配合招待動線，降低現場改動幅度。",
      },
    ],
  },
  {
    id: "lowcha",
    name: "Kai康普茶果昔吧",
    location: "台北南港",
    category: "茶飲",
    demand: "茶飲吧檯需要多品項供應，同時保持前場操作效率。",
    setup: "三口巴黎人酒塔集中出杯，減少檯面分散的操作點。",
    result: "讓茶飲品項供應更有秩序，保留備料與出杯空間。",
    images: [
      {
        src: "/images/gallery/s-lowcha-1.jpg",
        alt: "Kai康普茶果昔吧 小型啤酒機主視覺",
        caption: "Kai康普茶果昔吧／台北南港｜三口巴黎人酒塔集中茶飲出杯位置，降低吧檯操作分散。",
      },
      {
        src: "/images/gallery/s-lowcha-2.jpg",
        alt: "Kai康普茶果昔吧 小型啤酒機另一角度",
        caption: "Kai康普茶果昔吧／台北南港｜配置保留前場備料與服務空間。",
      },
    ],
  },
  {
    id: "meiyu",
    name: "美育音樂舞蹈教育",
    location: "台北大安",
    category: "招待所",
    demand: "招待所希望以小型設備支援多品項出杯並保持空間整潔。",
    setup: "四口古銅色門型酒柱搭配滴酒盤，集中出杯與清潔路徑。",
    result: "讓招待需求與空間氣質維持一致，降低設備突兀感。",
    images: [
      {
        src: "/images/gallery/s-meiyu-1.jpg",
        alt: "美育音樂舞蹈教育 小型啤酒機主視覺",
        caption: "美育音樂舞蹈教育／台北大安｜四口古銅色門型酒柱搭配滴酒盤，維持招待空間整潔。",
      },
      {
        src: "/images/gallery/s-meiyu-2.jpg",
        alt: "美育音樂舞蹈教育 小型啤酒機另一角度",
        caption: "美育音樂舞蹈教育／台北大安｜古銅色酒柱讓設備與空間風格更一致。",
      },
    ],
  },
  {
    id: "qiaoxin",
    name: "喬信串燒",
    location: "金門",
    category: "餐酒館",
    demand: "餐酒館需要在服務動線中增加多品項出杯能力。",
    setup: "四口 T 型酒柱集中龍頭位置，讓前場操作更直接。",
    result: "減少出杯點分散，提高尖峰時段的服務效率。",
    images: [
      {
        src: "/images/gallery/s-qiaoxin-1.jpg",
        alt: "喬信串燒 小型啤酒機主視覺",
        caption: "喬信串燒／金門｜四口原色 T 型酒柱集中龍頭位置，支援餐酒館前場出杯。",
      },
      {
        src: "/images/gallery/s-qiaoxin-2.jpg",
        alt: "喬信串燒 小型啤酒機另一角度",
        caption: "喬信串燒／金門｜設備配置貼近服務動線，降低尖峰時段操作壓力。",
      },
    ],
  },
  {
    id: "sitang",
    name: "H Kitchen",
    location: "台北內湖",
    category: "餐酒館",
    demand: "餐酒館需在吧檯中整合多品項出杯，不影響日常備餐。",
    setup: "四口 T 型酒柱讓出杯點集中，維持吧檯操作彈性。",
    result: "讓飲品供應與餐飲作業共用同一吧檯時更有秩序。",
    images: [
      {
        src: "/images/gallery/s-sitang-1.jpg",
        alt: "H Kitchen 小型啤酒機主視覺",
        caption: "H Kitchen／台北內湖｜四口原色 T 型酒柱集中出杯位置，增加空間視覺亮點兼顧吧檯作業。",
      },
      {
        src: "/images/gallery/s-sitang-2.jpg",
        alt: "H Kitchen 小型啤酒機另一角度",
        caption: "H Kitchen／台北內湖｜吧檯配置保留備餐與服務彈性。",
      },
    ],
  },
  {
    id: "yzu",
    name: "元智大學",
    location: "招待所",
    category: "招待所",
    demand: "招待空間需要穩定供應雙品項，並維持檯面整潔。",
    setup: "雙口原色雅士酒塔集中龍頭位置，整合日常出杯操作。",
    result: "讓設備融入交誼空間，保留周邊使用彈性。",
    images: [
      {
        src: "/images/gallery/s-yzu-1.jpg",
        alt: "元智大學 小型啤酒機",
        caption: "元智大學／招待所｜雙口原色雅士酒塔集中龍頭位置，維持招待空間整潔。",
      },
      {
        src: "/images/gallery/s-yzu-2.jpg",
        alt: "元智大學 小型啤酒機",
        caption: "元智大學／招待所｜設備配置配合交誼空間使用，保留周邊操作彈性。",
      },
    ],
  },
] satisfies SmallEquipmentCase[])
