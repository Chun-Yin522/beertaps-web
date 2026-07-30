import { readFile } from "node:fs/promises"
import { ImageResponse } from "next/og"
import { SITE } from "@/data/site"

export const REMOTE_SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 }

interface RemoteSocialImageOptions {
  title: string
  eyebrow: string
  image: string
}

const iansuiFont = readFile("assets/fonts/Iansui-Regular.ttf")

export async function createRemoteSocialImage({
  title,
  eyebrow,
  image,
}: RemoteSocialImageOptions) {
  const font = await iansuiFont
  const background = new URL(image, SITE.url).toString()
  const logo = new URL("/images/beer-taps-logo.png", SITE.url).toString()

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#171715",
          color: "#F8F7F2",
          fontFamily: "Iansui",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={background}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: "linear-gradient(90deg, rgba(13,13,12,0.86) 0%, rgba(13,13,12,0.63) 52%, rgba(13,13,12,0.24) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "58px 68px 60px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt="" width="86" height="86" style={{ objectFit: "contain" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 28, letterSpacing: 0 }}>BEER TAPS</span>
              <span style={{ marginTop: 4, fontSize: 20, color: "#D99A19" }}>塔普斯專業飲品設備</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
            <span
              style={{
                marginBottom: 18,
                fontSize: 22,
                color: "#E3A31A",
                letterSpacing: 0,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </span>
            <span style={{ fontSize: title.length > 20 ? 54 : 64, lineHeight: 1.22, letterSpacing: 0 }}>
              {title}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...REMOTE_SOCIAL_IMAGE_SIZE,
      fonts: [
        { name: "Iansui", data: font, style: "normal", weight: 400 },
      ],
    },
  )
}
