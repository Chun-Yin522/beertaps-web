"use client"

import {
  ProductCategoryPage,
  type CategoryData,
} from "@/components/product-category-page"

const data: CategoryData = {
  name: "小型啤酒機",
  subtitle: "輕巧高效，小空間也能穩定出酒",
  description:
    "小型啤酒機系列專為空間有限的營業場所設計，體積小巧卻不犧牲出酒品質。無論是小型餐酒館、茶飲店或快閃店，都能快速安裝、穩定供應新鮮啤酒。",
  carouselImages: [
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%B9%B3%E6%BA%AA%E8%8C%B6%E9%A3%B2%E5%BA%97/IMG_20241108_122219.jpg?raw=true",
      alt: "平溪茶飲店安裝案例",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E7%9F%B3%E6%BD%AD%E8%B7%AF%E8%BD%89%E8%A7%92%E5%9D%90%E4%B8%80%E4%B8%8B/IMG_20220808_153131.jpg?raw=true",
      alt: "石潭路轉角坐一下安裝案例",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%85%B8%E8%8F%AFY%E5%9E%8B/IMG_20220907_165545.jpg?raw=true",
      alt: "典華Y型安裝案例",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E6%9E%97%E6%A3%AE%E5%8C%97%E8%B7%AF%E6%BD%9B%E6%B0%B4/IMG_20230629_163029.jpg?raw=true",
      alt: "林森北路潛水安裝案例",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E9%87%91%E9%85%92%E5%BF%AB%E9%96%83%E5%BA%97/IMG_20250722_140558.jpg?raw=true",
      alt: "金酒快閃店安裝案例",
    },
  ],
  caseStudies: [
    {
      id: "qiaoxin",
      name: "喬信串燒",
      location: "金門",
      images: [
        {
          src: "/images/gallery/qiaoxin-1.jpg",
          alt: "喬信串燒案例照片 1",
          caption: "喬信串燒位於金門，是當地知名的日式串燒店。我們跨海安裝了小型啤酒機系統，在有限空間內打造高效出酒方案。",
        },
        {
          src: "/images/gallery/qiaoxin-2.jpg",
          alt: "喬信串燒案例照片 2",
          caption: "針對離島特殊環境，我們提供耐鹽害的設備材質選擇，並安排定期維護保養，確保設備長久穩定運作。",
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
          caption: "久辦餐酒館位於台南東區，以溫馨的用餐氛圍聞名。我們為其設計安裝了緊湊型吧檯出酒系統，完美融入復古工業風的店內裝潢。",
        },
        {
          src: "/images/gallery/jiuban-2.jpg",
          alt: "久辦餐酒館案例照片 2",
          caption: "採用小型風冷式啤酒機，無需額外水管接入，即插即用快速啟動，非常適合空間受限的店家使用。",
        },
      ],
    },
  ],
  galleryImages: [
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%B9%B3%E6%BA%AA%E8%8C%B6%E9%A3%B2%E5%BA%97/IMG_20241108_122219.jpg?raw=true",
      alt: "平溪茶飲店案例照片",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E7%9F%B3%E6%BD%AD%E8%B7%AF%E8%BD%89%E8%A7%92%E5%9D%90%E4%B8%80%E4%B8%8B/IMG_20220808_153131.jpg?raw=true",
      alt: "石潭路轉角坐一下案例照片",
    },
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
  ],
  details: [
    {
      title: "適用場所",
      content:
        "小型餐酒館、茶飲複合店、快閃活動、露營市集、家用派對空間等。體積小巧，不佔空間。",
    },
    {
      title: "產品特色",
      content:
        "風冷式設計免接水管、即插即用快速啟動、精準溫控維持最佳口感、不鏽鋼酒頭易清潔耐用。",
    },
    {
      title: "安裝方式",
      content:
        "提供專業到府安裝服務，無須額外管路施工，最快當天完成安裝即可營業。",
    },
  ],
}

export function SmallProductsContent() {
  return <ProductCategoryPage data={data} />
}
