import type { EquipmentCategoryPageData } from "@/types/equipment"
import { withNonSmallCaseCaptions } from "./case-captions"
import { withEquipmentImageAlts } from "./case-image-alts"

export const wallEquipmentData: EquipmentCategoryPageData = withNonSmallCaseCaptions(withEquipmentImageAlts({
  eyebrow: "wall type system",
  title: "壁出式啤酒牆",
  description: "適合希望保留檯面、整理牆面視覺，並讓出杯設備成為空間風格一部分的吧檯。",
  fitTitle: "壁出式啤酒牆適合的使用條件",
  fitDescription: "先看牆面結構、出杯高度與服務距離，再決定龍頭數、管線隱藏與維修路徑。",
  caseEyebrow: "Wall type cases",
  caseTitle: "壁出式啤酒牆案例",
  contactLabel: "詢問壁出式啤酒牆配置",
  constructionTitle: "壁出式啤酒牆施工方式",
  constructionDescription: "依照牆面結構、管線配置與維修條件，規劃最合適的啤酒牆安裝方式。",
  cases: [
    {
      id: "w-16inn",
      name: "G16客棧",
      location: "宜蘭",
      category: "招待所",
      heroPosition: "center 90%",
      images: [
        {
          src: "/images/gallery/w-16inn-1.jpg",
          alt: "G16客棧 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-16inn-2.jpg",
          alt: "G16客棧 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-1913",
      name: "1913生活聚場",
      location: "台中篤行",
      category: "招待所",
      heroPosition: "center 90%",
      images: [
        {
          src: "/images/gallery/w-1913.jpg",
          alt: "1913生活聚場 壁出式啤酒牆主視覺",
        }
      ]
    },
    {
      id: "w-binglang",
      name: "檳榔",
      location: "台中",
      category: "酒吧",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-binglang-2.jpg",
          alt: "檳榔酒吧於台中黑色牆面安裝十口壁出式啤酒牆與長型不鏽鋼滴酒盤",
        },
        {
          src: "/images/gallery/w-binglang-1.jpg",
          alt: "檳榔酒吧於台中螢幕下方安裝十口壁出式啤酒牆",
        }
      ]
    },
    {
      id: "w-blur",
      name: "Blur Taipei",
      location: "台北圓山花博",
      category: "酒吧",
      heroPosition: "center 90%",
      images: [
        {
          src: "/images/gallery/w-blur-1.jpg",
          alt: "Blur Taipei 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-blur-2.jpg",
          alt: "Blur Taipei 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-creampuffs",
      name: "有口芙 × 有在喝",
      location: "全台連鎖",
      category: "茶飲",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-creampuffs-1.jpg",
          alt: "有口芙 × 有在喝 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-creampuffs-2.jpg",
          alt: "有口芙 × 有在喝 壁出式啤酒牆另一角度",
        },
        {
          src: "/images/gallery/w-creampuffs-3.jpg",
          alt: "有口芙 × 有在喝 壁出式啤酒牆另一角度",
        },
        {
          src: "/images/gallery/w-creampuffs-4.jpg",
          alt: "有口芙 × 有在喝 壁出式啤酒牆另一角度",
        },
        {
          src: "/images/gallery/w-creampuffs-5.jpg",
          alt: "有口芙 × 有在喝 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-fuwang",
      name: "扶旺號",
      location: "台北大安",
      category: "餐酒館",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-fuwang-1.jpg",
          alt: "扶旺號 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-fuwang-2.jpg",
          alt: "扶旺號 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-hibana",
      name: "灼花燒肉 × 深煙酒吧",
      location: "台中中西區",
      category: "餐酒館",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-hibana-1.jpg",
          alt: "灼花燒肉 × 深煙酒吧 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-hibana-2.jpg",
          alt: "灼花燒肉 × 深煙酒吧 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-holemountain",
      name: "阜山聚落",
      location: "桃園水岸",
      category: "招待所",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-holemountain-1.jpg",
          alt: "阜山聚落 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-holemountain-2.jpg",
          alt: "阜山聚落 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-largeegg",
      name: "Lit Lit 早午餐酒吧",
      location: "台北大巨蛋",
      category: "餐酒館",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-largeegg-1.jpg",
          alt: "Lit Lit 早午餐酒吧 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-largeegg-2.jpg",
          alt: "Lit Lit 早午餐酒吧 壁出式啤酒牆另一角度",
        },
        {
          src: "/images/gallery/w-largeegg-3.jpg",
          alt: "Lit Lit 早午餐酒吧 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-marbles",
      name: "chill 憩 bar",
      location: "台北寧夏夜市",
      category: "酒吧",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-marbles-1.jpg",
          alt: "chill 憩 bar 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-marbles-2.jpg",
          alt: "chill 憩 bar 壁出式啤酒牆另一角度",
        },
        {
          src: "/images/gallery/w-marbles-3.jpg",
          alt: "chill 憩 bar 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-meitsun",
      name: "O’DAE 烏龍茶店",
      location: "台中美村路",
      category: "茶飲",
      heroPosition: "center 90%",
      images: [
        {
          src: "/images/gallery/w-meitsun-1.jpg",
          alt: "O’DAE 烏龍茶店 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-meitsun-2.jpg",
          alt: "O’DAE 烏龍茶店 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-notquit",
      name: "無心戒酒互助會",
      location: "台北西門町",
      category: "酒吧",
      heroPosition: "center 90%",
      images: [
        {
          src: "/images/gallery/w-notquit-1.jpg",
          alt: "無心戒酒互助會 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-notquit-2.jpg",
          alt: "無心戒酒互助會 壁出式啤酒牆另一角度",
        },
        {
          src: "/images/gallery/w-notquit-3.jpg",
          alt: "無心戒酒互助會 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-nova",
      name: "Nova Draft",
      location: "台北大安",
      category: "茶飲",
      heroPosition: "center 80%",
      images: [
        {
          src: "/images/gallery/w-nova-1.jpg",
          alt: "Nova Draft 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-nova-2.jpg",
          alt: "Nova Draft 壁出式啤酒牆另一角度",
        },
        {
          src: "/images/gallery/w-nova-3.jpg",
          alt: "Nova Draft 壁出式啤酒牆另一角度",
        },
        {
          src: "/images/gallery/w-nova-4.jpg",
          alt: "Nova Draft 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-ohyaki",
      name: "Oh! Yaki 燒肉",
      location: "桃園中壢",
      category: "餐廳",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-ohyaki-1.jpg",
          alt: "Oh! Yaki 燒肉 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-ohyaki-2.jpg",
          alt: "Oh! Yaki 燒肉 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-oldbar",
      name: "老吧 Bar Aged",
      location: "台北中山區",
      category: "酒吧",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-oldbar-1.jpg",
          alt: "老吧 Bar Aged 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-oldbar-2.jpg",
          alt: "老吧 Bar Aged 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-ooo",
      name: "Odd One Out",
      location: "台北敦化南路",
      category: "茶飲",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-ooo-1.jpg",
          alt: "Odd One Out 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-ooo-2.jpg",
          alt: "Odd One Out 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-science",
      name: "宅後有榆輕食café",
      location: "台中科博館",
      category: "餐廳",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-science-1.jpg",
          alt: "宅後有榆輕食café 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-science-2.jpg",
          alt: "宅後有榆輕食café 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-shunxing",
      name: "ORIGBLACK",
      location: "台中北屯",
      category: "餐酒館",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-shunxing-1.jpg",
          alt: "ORIGBLACK 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-shunxing-2.jpg",
          alt: "ORIGBLACK 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-sipsip",
      name: "SipSip Bar",
      location: "台北華山文創",
      category: "餐酒館",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-sipsip-1.jpg",
          alt: "SipSip Bar 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-sipsip-2.jpg",
          alt: "SipSip Bar 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-tigertown",
      name: "XPM somewhere",
      location: "台中老虎城",
      category: "餐酒館",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-tigertown-1.jpg",
          alt: "XPM somewhere 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-tigertown-2.jpg",
          alt: "XPM somewhere 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-tigertownb1",
      name: "虎山焱",
      location: "台中老虎城",
      category: "餐廳",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-tigertownb1-1.jpg",
          alt: "虎山焱餐廳於台中老虎城木紋美耐板背景牆安裝十口壁出式啤酒牆並搭配綠葉藤蔓元素",
        }
      ]
    },
    {
      id: "w-xiaozhai",
      name: "曉宅山民宿",
      location: "新北九份",
      category: "餐廳",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-xiaozhai-1.jpg",
          alt: "曉宅山民宿 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-xiaozhai-2.jpg",
          alt: "曉宅山民宿 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-yoga",
      name: "cocoon lab 繭",
      location: "台北大安",
      category: "招待所",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-yoga-1.jpg",
          alt: "cocoon lab 繭 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-yoga-2.jpg",
          alt: "cocoon lab 繭 壁出式啤酒牆另一角度",
        },
        {
          src: "/images/gallery/w-yoga-3.jpg",
          alt: "cocoon lab 繭 壁出式啤酒牆另一角度",
        }
      ]
    },
    {
      id: "w-sonyen",
      name: "STUCKIN OASIS",
      location: "台北松菸",
      category: "酒吧",
      heroPosition: "center center",
      images: [
        {
          src: "/images/gallery/w-sonyen-1.jpg",
          alt: "STUCKIN OASIS 壁出式啤酒牆主視覺",
        },
        {
          src: "/images/gallery/w-sonyen-2.jpg",
          alt: "STUCKIN OASIS 壁出式啤酒牆另一角度",
        },
        {
          src: "/images/gallery/w-sonyen-3.jpg",
          alt: "STUCKIN OASIS 壁出式啤酒牆另一角度",
        }
      ]
    },
  ],
  featuredCaseIds: [
    "w-fuwang",
    "w-marbles",
    "w-meitsun",
    "w-sipsip",
    "w-tigertown",
    "w-yoga",
  ],
  features: [
    {
      label: "保留工作檯面",
      note: "讓吧檯更乾淨俐落",
      icon: "ruler"
    },
    {
      label: "牆面結構",
      note: "確認固定與管線條件",
      icon: "package"
    },
    {
      label: "服務動線",
      note: "出杯點貼近操作位置",
      icon: "grid"
    },
    {
      label: "空間視覺",
      note: "龍頭成為牆面焦點",
      icon: "sparkles"
    }
  ],
  infoRows: [
    {
      title: "適用場域",
      content: "檯面有限的吧檯、重視牆面整合的餐飲空間、茶飲吧與展示型飲品區。"
    },
    {
      title: "規劃重點",
      content: "確認牆面承重、固定方式、管線隱藏、操作高度、滴水盤與後續維修路徑。"
    },
    {
      title: "設備特色",
      content: "能釋放主要工作檯面，並讓龍頭、牆面與品牌視覺形成一致的空間表情。"
    }
  ],
  constructionMethods: [
    {
      label: "Method",
      title: "商用冰箱隱藏於牆面後方",
      note: "冷藏與收納空間整合於背景牆後方，有如出米洞傳奇，酒水自牆面源源流出，為貴客帶來完美的視覺體驗。",
      description: "透過不鏽鋼板或木作牆面結構整合冷藏、供氣與管線系統，適合重視整體視覺與乾淨檯面的場域。",
      image: "/images/diagrams/beer-wall-fridge-keg-system-cylinder-inside-corrected-option-3.png",
      alt: "壁出式啤酒牆壁內藏式施工示意圖"
    }
  ]
}))
