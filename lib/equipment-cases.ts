import type { EquipmentCase, EquipmentImage } from "@/types/equipment"

export function buildLightboxImages(
  cases: EquipmentCase[],
  equipmentType: string,
): EquipmentImage[] {
  return cases.flatMap((item) =>
    item.images.map((image) => ({
      ...image,
      equipmentType,
      shopName: item.name,
      description: image.caption
        ?.replace(new RegExp(`^${escapeRegExp(item.name)}／`), "")
        .replace(/^第\s*\d+\s*個角度，/, ""),
    })),
  )
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
