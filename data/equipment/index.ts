import { customEquipmentData } from "./custom"
import { largeEquipmentData } from "./large"
import { smallEquipmentData } from "./small"
import { wallEquipmentData } from "./wall"

export const EQUIPMENT_CASE_GROUPS = [
  { path: "/products/small", cases: smallEquipmentData.cases },
  { path: "/products/large", cases: largeEquipmentData.cases },
  { path: "/products/wall", cases: wallEquipmentData.cases },
  { path: "/products/custom", cases: customEquipmentData.cases },
] as const
