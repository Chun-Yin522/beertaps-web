import {
  createRemoteSocialImage,
  REMOTE_SOCIAL_IMAGE_SIZE,
} from "@/lib/remote-social-image"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const alt = "塔普斯 Beer Taps 專業飲品設備"
export const size = REMOTE_SOCIAL_IMAGE_SIZE
export const contentType = "image/png"

export default function OpenGraphImage() {
  return createRemoteSocialImage({
    eyebrow: "BEER TAPS beverage systems",
    title: "專業飲品設備・空間整合",
    image: "/images/gallery/s-takefive-1.jpg",
  })
}
