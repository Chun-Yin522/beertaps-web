"use client"

import {
  ProductCategoryPage,
  type CategoryData,
} from "@/components/product-category-page"

const data: CategoryData = {
  name: "壁出式啤酒牆",
  subtitle: "空間美學與功能的完美結合",
  description:
    "壁出式啤酒牆將出酒設備嵌入牆面，創造吸睛的視覺效果同時節省吧檯空間。適合追求設計感的精釀酒吧與主題餐廳，讓出酒設備本身就是店面的亮點。",
  carouselImages: [
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E7%9F%B3%E6%BD%AD%E8%B7%AF%E8%BD%89%E8%A7%92%E5%9D%90%E4%B8%80%E4%B8%8B/IMG_20220808_153131.jpg?raw=true",
      alt: "壁出式啤酒牆案例",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%B9%B3%E6%BA%AA%E8%8C%B6%E9%A3%B2%E5%BA%97/IMG_20241108_122219.jpg?raw=true",
      alt: "平溪茶飲店案例",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E6%9E%97%E6%A3%AE%E5%8C%97%E8%B7%AF%E6%BD%9B%E6%B0%B4/IMG_20230629_163029.jpg?raw=true",
      alt: "林森北路案例",
    },
  ],
  caseStudies: [
    {
      id: "jixiang",
      name: "吉祥路交誼廳",
      location: "新北林口",
      images: [
        {
          src: "/images/gallery/jixiang-1.jpg",
          alt: "吉祥路交誼廳案例照片 1",
          caption: "吉祥路交誼廳是新北林口的社區聚會空間，我們為其設計了壁出式啤酒牆，成為空間中的視覺亮點。",
        },
        {
          src: "/images/gallery/jixiang-2.jpg",
          alt: "吉祥路交誼廳案例照片 2",
          caption: "壁掛式設計節省地面空間，搭配 LED 背光效果，營造出獨特的社交氛圍，深受社區居民喜愛。",
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
          caption: "UNCANNY 是台北大直的時尚酒吧，我們為其打造了鏡面不鏽鋼壁面酒塔，搭配隱藏式管線設計，呈現俐落的視覺效果。",
        },
        {
          src: "/images/gallery/uncanny-2.jpg",
          alt: "UNCANNY案例照片 2",
          caption: "壁出式設計讓吧檯區域更加寬敞，同時成為店內的視覺焦點，完美融入極簡現代的設計風格。",
        },
      ],
    },
  ],
  galleryImages: [
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E7%9F%B3%E6%BD%AD%E8%B7%AF%E8%BD%89%E8%A7%92%E5%9D%90%E4%B8%80%E4%B8%8B/IMG_20220808_153131.jpg?raw=true",
      alt: "石潭路案例照片",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%B9%B3%E6%BA%AA%E8%8C%B6%E9%A3%B2%E5%BA%97/IMG_20241108_122219.jpg?raw=true",
      alt: "平溪茶飲店案例照片",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E6%9E%97%E6%A3%AE%E5%8C%97%E8%B7%AF%E6%BD%9B%E6%B0%B4/IMG_20230629_163029.jpg?raw=true",
      alt: "林森北路案例照片",
    },
    {
      src: "https://github.com/Chun-Yin522/beertaps/blob/main/Talos%E9%A2%A8%E5%86%B7%E5%BC%8F%E5%95%A4%E9%85%92%E6%A9%9F/%E5%85%B8%E8%8F%AFY%E5%9E%8B/IMG_20220907_165545.jpg?raw=true",
      alt: "典華Y型案例照片",
    },
  ],
  details: [
    {
      title: "適用場所",
      content:
        "精釀啤酒專賣店、主題餐廳、設計感酒吧、商場快閃空間等追求視覺質感的營業場所。",
    },
    {
      title: "產品特色",
      content:
        "嵌入式設計節省吧檯空間、多酒頭壁面排列創造視覺震撼、隱藏式管路讓牆面簡潔俐落、可搭配燈光設計提升氛圍。",
    },
    {
      title: "施工說明",
      content:
        "需預先規劃牆面管路與冷卻系統位置，我們提供完整的施工圖面與現場監工服務。",
    },
  ],
}

export function WallProductsContent() {
  return <ProductCategoryPage data={data} />
}
