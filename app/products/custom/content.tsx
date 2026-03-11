"use client"

import {
  ProductCategoryPage,
  type CategoryData,
} from "@/components/product-category-page"

const data: CategoryData = {
  name: "特殊造型設計",
  subtitle: "品牌識別度的極致展現",
  description:
    "特殊造型設計服務讓您的出酒設備成為品牌的延伸。我們可依據品牌形象、店面風格或活動主題，打造獨一無二的造型酒塔與出酒裝置，讓每位客人留下深刻印象。",
  carouselImages: [
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E9%87%91%E9%85%92%E5%BF%AB%E9%96%83%E5%BA%97/IMG_20250722_140558.jpg?raw=true",
      alt: "金酒快閃店特殊設計案例",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%85%B8%E8%8F%AFY%E5%9E%8B/IMG_20220907_165545.jpg?raw=true",
      alt: "典華Y型特殊造型",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E7%9F%B3%E6%BD%AD%E8%B7%AF%E8%BD%89%E8%A7%92%E5%9D%90%E4%B8%80%E4%B8%8B/IMG_20220808_153131.jpg?raw=true",
      alt: "特殊造型案例",
    },
  ],
  caseStudies: [
    {
      id: "bmw",
      name: "BMW汽車展示中心",
      location: "桃園",
      images: [
        {
          src: "/images/gallery/bmw-1.jpg",
          alt: "BMW汽車展示中心案例照片 1",
          caption: "桃園 BMW 展示中心的貴賓休息區，我們打造了頂級的客製化出酒系統，與品牌的高端形象完美呼應。",
        },
        {
          src: "/images/gallery/bmw-2.jpg",
          alt: "BMW汽車展示中心案例照片 2",
          caption: "採用與 BMW 品牌色相呼應的深灰色金屬材質，搭配鏡面拋光處理，為貴賓提供尊榮的用酒體驗。",
        },
      ],
    },
    {
      id: "uncanny",
      name: "UNCANNY",
      location: "台北大直",
      images: [
        {
          src: "/images/gallery/uncanny-1.jpg",
          alt: "UNCANNY案例照片 1",
          caption: "UNCANNY 是台北大直的時尚酒吧，追求極簡現代的設計風格。我們為其打造了鏡面不鏽鋼酒塔，搭配隱藏式管線設計。",
        },
        {
          src: "/images/gallery/uncanny-2.jpg",
          alt: "UNCANNY案例照片 2",
          caption: "全套設備採用進口零件，搭配數位溫控系統，確保每杯酒品都達到最佳風味呈現。",
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
          caption: "久辦餐酒館位於台南東區，以溫馨的用餐氛圍聞名。我們為其設計安裝了黃銅色酒塔，完美融入復古工業風的店內裝潢。",
        },
        {
          src: "/images/gallery/jiuban-2.jpg",
          alt: "久辦餐酒館案例照片 2",
          caption: "特殊造型的酒塔設計讓出酒設備成為店面的視覺焦點，展現品牌獨特個性。",
        },
      ],
    },
  ],
  galleryImages: [
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E9%87%91%E9%85%92%E5%BF%AB%E9%96%83%E5%BA%97/IMG_20250722_140558.jpg?raw=true",
      alt: "金酒快閃店案例照片",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%85%B8%E8%8F%AFY%E5%9E%8B/IMG_20220907_165545.jpg?raw=true",
      alt: "典華Y型案例照片",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E7%9F%B3%E6%BD%AD%E8%B7%AF%E8%BD%89%E8%A7%92%E5%9D%90%E4%B8%80%E4%B8%8B/IMG_20220808_153131.jpg?raw=true",
      alt: "石潭路案例照片",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E6%9E%97%E6%A3%AE%E5%8C%97%E8%B7%AF%E6%BD%9B%E6%B0%B4/IMG_20230629_163029.jpg?raw=true",
      alt: "林森北路案例照片",
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
        "品牌旗艦店、主題酒吧、大型活動、展覽會場、企業招待所等需要獨特視覺識別的場所。",
    },
    {
      title: "設計流程",
      content:
        "從概念發想、3D 建模、材質選定到成品製作，全程與您溝通確認，確保成品完全符合期待。",
    },
    {
      title: "客製化範圍",
      content:
        "造型、材質、尺寸、酒頭數量、燈光配置皆可客製。支援金屬、木材、壓克力等多種材質組合。",
    },
  ],
}

export function CustomProductsContent() {
  return <ProductCategoryPage data={data} />
}
