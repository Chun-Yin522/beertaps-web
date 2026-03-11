"use client"

import {
  ProductCategoryPage,
  type CategoryData,
} from "@/components/product-category-page"

const data: CategoryData = {
  name: "大型出酒系統",
  subtitle: "多路供應，滿足高出杯量需求",
  description:
    "大型出酒系統專為高翻桌率、高出杯量的營業場所設計。支援多路同時出酒，搭配專業冷卻系統，確保每一杯都維持最佳溫度與口感。",
  carouselImages: [
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%85%B8%E8%8F%AFY%E5%9E%8B/IMG_20220907_165545.jpg?raw=true",
      alt: "大型出酒系統案例",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E6%9E%97%E6%A3%AE%E5%8C%97%E8%B7%AF%E6%BD%9B%E6%B0%B4/IMG_20230629_163029.jpg?raw=true",
      alt: "林森北路案例",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E9%87%91%E9%85%92%E5%BF%AB%E9%96%83%E5%BA%97/IMG_20250722_140558.jpg?raw=true",
      alt: "金酒快閃店案例",
    },
  ],
  caseStudies: [
    {
      id: "uncanny",
      name: "UNCANNY",
      location: "台北大直",
      images: [
        {
          src: "/images/gallery/uncanny-1.jpg",
          alt: "UNCANNY案例照片 1",
          caption: "UNCANNY 是台北大直的時尚酒吧，追求極簡現代的設計風格。我們為其打造了多路大型出酒系統，搭配隱藏式管線設計。",
        },
        {
          src: "/images/gallery/uncanny-2.jpg",
          alt: "UNCANNY案例照片 2",
          caption: "全套設備採用進口零件，搭配數位溫控系統，確保每杯酒品都達到最佳風味呈現，滿足高端酒吧的需求。",
        },
      ],
    },
    {
      id: "jiuban",
      name: "久辦餐酒館",
      location: "台南東區",
      images: [
        {
          src: "/images/gallery/jiuban-1.jpg",
          alt: "久辦餐酒館案例照片 1",
          caption: "久辦餐酒館位於台南東區，以溫馨的用餐氛圍聞名。我們為其設計安裝了4孔吧檯出酒系統，搭配黃銅色酒塔，完美融入復古工業風的店內裝潢。",
        },
        {
          src: "/images/gallery/jiuban-2.jpg",
          alt: "久辦餐酒館案例照片 2",
          caption: "採用專業冷卻設備，確保每杯啤酒都能維持最佳溫度。吧檯設計兼顧美觀與實用，大幅提升出酒效率。",
        },
      ],
    },
  ],
  galleryImages: [
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%85%B8%E8%8F%AFY%E5%9E%8B/IMG_20220907_165545.jpg?raw=true",
      alt: "典華Y型案例照片",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E6%9E%97%E6%A3%AE%E5%8C%97%E8%B7%AF%E6%BD%9B%E6%B0%B4/IMG_20230629_163029.jpg?raw=true",
      alt: "林森北路潛水案例照片",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E9%87%91%E9%85%92%E5%BF%AB%E9%96%83%E5%BA%97/IMG_20250722_140558.jpg?raw=true",
      alt: "金酒快閃店案例照片",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%B9%B3%E6%BA%AA%E8%8C%B6%E9%A3%B2%E5%BA%97/IMG_20241108_122219.jpg?raw=true",
      alt: "平溪茶飲店案例照片",
    },
  ],
  details: [
    {
      title: "適用場所",
      content:
        "精釀啤酒專賣店、運動酒吧、大型餐廳、飯店宴會廳、大型活動場地等高出杯量營業場所。",
    },
    {
      title: "產品特色",
      content:
        "多路同時出酒減少等候時間、高效壓縮冷卻系統確保溫度穩定、模組化設計可彈性擴充、不鏽鋼材質耐用易保養。",
    },
    {
      title: "安裝與維護",
      content:
        "專業團隊現場評估動線規劃，完整管路施工與設備安裝，提供定期保養與緊急維修服務。",
    },
  ],
}

export function LargeProductsContent() {
  return <ProductCategoryPage data={data} />
}
