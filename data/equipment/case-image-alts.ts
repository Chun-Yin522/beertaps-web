import type { EquipmentCase, EquipmentCategoryPageData } from "@/types/equipment"

const CASE_IMAGE_ALTS: Record<string, string> = {
  "c-beercar": "啤酒車行動啤酒車安裝四口壁出式啤酒牆",
  "c-bluesky": "藍天飯店行動啤酒車安裝四口眼鏡蛇酒塔",
  "c-chewinggum": "A Beach 101 & Pizza 餐酒館依特殊室內設計安裝四口客製化出酒設備",
  "c-eyoyu": "魷魚啤酒吧安裝五口壁出式啤酒牆",
  "c-feelingbar": "Feeling Bar 調酒專賣店安裝二十二口壁出式啤酒牆與桌面酒塔",
  "c-fizzcar": "微風南山調酒吧餐車安裝八口客製化出酒設備",
  "c-lowfun": "löwfun裸放茶旅茶飲空間安裝客製化出酒設備",
  "c-twohouse": "貳房苑餐廳後廚安裝雙口冰箱外組裝龍頭",
  "l-1915": "國門廣場於基隆火車站餐酒館吧檯安裝六口多立克酒柱",
  "l-blursday": "Blursday Draft.Cafe 酒吧吧檯安裝十二口多立克酒柱",
  "l-dienhua": "典華幸福大樓餐廳吧檯安裝八口古銅色 Y 字型酒柱",
  "l-jinjyou": "金門酒廠快閃店酒吧吧檯安裝六口原色門型酒柱",
  "l-pingsi": "飲嚐品茶飲吧檯安裝十二口金色雅士酒塔",
  "l-submarine": "潛艇招待所吧檯安裝六口眼鏡蛇酒塔",
  "l-yuensiuon": "遠雄悅來大飯店餐廳吧檯安裝六口古銅色門型酒柱",
  "s-allgosh": "佛聚店招待所吧檯安裝單口多立克酒柱與滴酒盤",
  "s-bmw": "BMW汽車展示中心接待所吧檯安裝兩支原色雅士酒塔與滴酒盤",
  "s-greengold": "台灣綠金招待所吧檯安裝單支鉑銳酒塔",
  "s-jiuban": "久伴餐酒館吧檯安裝四口 T 型酒柱",
  "s-jixiang": "吉祥路交誼廳招待所吧檯安裝雙口眼鏡蛇酒塔",
  "s-lowcha": "Kai康普茶果昔吧茶飲吧檯安裝三口巴黎人酒塔",
  "s-meiyu": "美育音樂舞蹈教育招待所吧檯安裝四口古銅色門型酒柱與滴酒盤",
  "s-mixology": "酩 MIXology 餐酒館吧檯安裝單支原色雅士酒塔",
  "s-qiaoxin": "喬信串燒餐酒館吧檯安裝四口原色 T 型酒柱",
  "s-sitang": "H Kitchen 餐酒館吧檯安裝四口原色 T 型酒柱",
  "s-takefive": "五方食藏餐酒館吧檯安裝四口古銅色 T 型酒柱",
  "s-uncanny": "UNCANNY 招待所吧檯安裝雙口原色雅士酒塔與滴酒盤",
  "s-yzu": "元智大學招待所吧檯安裝雙口原色雅士酒塔",
  "w-16inn": "G16客棧招待所安裝六口壁出式啤酒牆",
  "w-1913": "1913生活聚場招待所安裝八口壁出式啤酒牆與滴酒盤",
  "w-binglang": "檳榔酒吧於台中安裝十口壁出式啤酒牆",
  "w-blur": "Blur Taipei 酒吧安裝六口壁出式啤酒牆",
  "w-creampuffs": "有口芙 × 有在喝茶飲空間安裝壁出式啤酒牆",
  "w-fuwang": "扶旺號餐酒館安裝單口壁出式啤酒牆",
  "w-hibana": "灼花燒肉 × 深煙酒吧餐酒館安裝六口壁出式啤酒牆",
  "w-holemountain": "阜山聚落招待所安裝五口壁出式啤酒牆",
  "w-largeegg": "Lit Lit 早午餐酒吧安裝十六口壁出式啤酒牆",
  "w-marbles": "chill 憩 bar 酒吧安裝十二口壁出式啤酒牆與金屬色澤美耐板",
  "w-meitsun": "O’DAE 烏龍茶店茶飲空間安裝六口壁出式啤酒牆",
  "w-notquit": "無心戒酒互助會酒吧安裝十五口壁出式啤酒牆",
  "w-nova": "Nova Draft 茶飲空間安裝七口壁出式啤酒牆與煙斗龍頭",
  "w-ohyaki": "Oh! Yaki 燒肉餐廳安裝八口壁出式啤酒牆",
  "w-oldbar": "老吧 Bar Aged 酒吧安裝八口壁出式啤酒牆",
  "w-ooo": "Odd One Out 茶飲空間安裝十口壁出式啤酒牆",
  "w-science": "宅後有榆輕食 café 餐廳安裝八口壁出式啤酒牆",
  "w-shunxing": "ORIGBLACK 餐酒館安裝十二口壁出式啤酒牆與球型龍頭",
  "w-sipsip": "SipSip Bar 餐酒館安裝六口壁出式啤酒牆",
  "w-sonyen": "STUCKIN OASIS 酒吧安裝九口壁出式啤酒牆與大理石紋木作牆面",
  "w-tigertown": "XPM somewhere 餐酒館安裝十口壁出式啤酒牆與球型龍頭",
  "w-tigertownb1": "虎山焱餐廳於台中老虎城木紋美耐板背景牆安裝十口壁出式啤酒牆",
  "w-xiaozhai": "曉宅山民宿餐廳安裝十二口壁出式啤酒牆",
  "w-yoga": "cocoon lab 繭招待所安裝五口壁出式啤酒牆",
}

const IMAGE_ALT_OVERRIDES: Record<string, string> = {
  "c-feelingbar-4.jpg": "Feeling Bar 調酒專賣店活動餐車安裝四口桌面酒塔",
  "c-feelingbar-5.jpg": "Feeling Bar 調酒專賣店活動餐車安裝兩支雙口桌面酒塔",
  "l-1915-1.jpg": "國門廣場於基隆火車站餐酒館吧檯安裝六口多立克酒柱與長型滴酒盤",
  "l-1915-2.jpg": "國門廣場於基隆火車站餐酒館不鏽鋼吧檯安裝六口多立克酒柱",
  "w-binglang-1.jpg": "檳榔酒吧於台中螢幕下方安裝十口壁出式啤酒牆",
  "w-binglang-2.jpg": "檳榔酒吧於台中黑色牆面安裝十口壁出式啤酒牆與長型不鏽鋼滴酒盤",
  "w-tigertownb1-1.jpg": "虎山焱餐廳於台中老虎城木紋美耐板背景牆安裝十口壁出式啤酒牆並搭配綠葉藤蔓元素",
}

function getCaseIdFromImage(src: string) {
  const filename = src.split("/").at(-1) ?? ""
  if (filename === "w-1913.jpg") return "w-1913"
  return filename.replace(/-\d+(?=\.[^.]+$)/, "").replace(/\.[^.]+$/, "")
}

export function withCaseImageAlts<T extends EquipmentCase>(cases: T[]): T[] {
  return cases.map((equipmentCase) => ({
    ...equipmentCase,
    images: equipmentCase.images.map((image) => ({
      ...image,
      alt:
        IMAGE_ALT_OVERRIDES[image.src.split("/").at(-1) ?? ""] ??
        CASE_IMAGE_ALTS[getCaseIdFromImage(image.src)] ??
        image.alt,
    })),
  }))
}

export function withEquipmentImageAlts<T extends EquipmentCategoryPageData>(data: T): T {
  return {
    ...data,
    cases: withCaseImageAlts(data.cases),
  }
}
