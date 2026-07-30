export interface EquipmentImage {
  src: string
  alt: string
  caption?: string
  equipmentType?: string
  shopName?: string
  description?: string
}

export interface EquipmentCase {
  id: string
  name: string
  location: string
  category: string
  heroPosition?: string
  heroFlip?: boolean
  heroFlipY?: boolean
  images: EquipmentImage[]
}

export interface SmallEquipmentCase extends EquipmentCase {
  demand: string
  setup: string
  result: string
}

export interface EquipmentFeature {
  label: string
  note: string
  icon: "beer" | "cup" | "gauge" | "grid" | "package" | "ruler" | "sparkles" | "truck"
}

export interface EquipmentInfoRow {
  title: string
  content: string
}

export interface ConstructionMethod {
  label: string
  title: string
  note: string
  description: string
  image: string
  alt: string
}

export interface IntegrationPathStep {
  label: string
  note: string
  icon: "site" | "brand" | "equipment" | "operation"
}

export interface IntegrationPathSection {
  eyebrow: string
  title: string
  description: string
  steps: IntegrationPathStep[]
}

export interface EquipmentCategoryPageData {
  eyebrow: string
  title: string
  description: string
  fitTitle: string
  fitDescription: string
  caseEyebrow: string
  caseTitle: string
  contactLabel: string
  constructionTitle?: string
  constructionDescription?: string
  cases: EquipmentCase[]
  featuredCaseIds: string[]
  features: EquipmentFeature[]
  infoRows: EquipmentInfoRow[]
  constructionMethods?: ConstructionMethod[]
  integrationPath?: IntegrationPathSection
}
