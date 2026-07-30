import { EQUIPMENT_CASE_GROUPS } from "@/data/equipment"
import { SITE } from "@/data/site"

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

export function GET() {
  const entries = EQUIPMENT_CASE_GROUPS.map(({ path, cases }) => {
    const images = cases.flatMap((equipmentCase) => equipmentCase.images)
    const imageEntries = images
      .map(
        ({ src }) =>
          `    <image:image><image:loc>${escapeXml(new URL(src, SITE.url).toString())}</image:loc></image:image>`,
      )
      .join("\n")

    return `  <url>\n    <loc>${escapeXml(new URL(path, SITE.url).toString())}</loc>\n${imageEntries}\n  </url>`
  }).join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
