import { createSocialImage, SOCIAL_IMAGE_SIZE } from "@/lib/social-image"

export const runtime = "nodejs"
export const alt = "BEER TAPS 塔普斯專業飲品設備"
export const size = SOCIAL_IMAGE_SIZE
export const contentType = "image/png"

export default function OpenGraphImage() {
  return createSocialImage({
    eyebrow: "BEER TAPS beverage systems",
    title: "專業飲品設備・空間整合",
    image: "/images/gallery/s-takefive-1.jpg",
  })
}
