"use client"

import { EquipmentCategoryPage } from "@/components/equipment-category-page"
import { customEquipmentData } from "@/data/equipment/custom"

export function CustomProductsContent() {
  return <EquipmentCategoryPage data={customEquipmentData} />
}
