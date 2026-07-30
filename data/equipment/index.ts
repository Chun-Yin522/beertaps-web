import { customEquipmentData } from "./custom"
import { largeEquipmentData } from "./large"
import { smallCases } from "./small-cases"
import { wallEquipmentData } from "./wall"

export const EQUIPMENT_CASE_GROUPS = [
  { path: "/products/small", cases: smallCases },
  { path: "/products/large", cases: largeEquipmentData.cases },
  { path: "/products/wall", cases: wallEquipmentData.cases },
  { path: "/products/custom", cases: customEquipmentData.cases },
] as const
