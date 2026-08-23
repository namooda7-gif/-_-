export interface InteriorStyle {
  slug: string;
  nameKo: string;
  nameEn: string;
  keywords: string[];
  description: string;
  goodFor: string;
  commonMistake: string;
  comparedTo: {
    slug: string;
    nameKo: string;
    note: string;
  };
  previewImage: string;
  galleryImages: string[];
  bgColor: string;
  isDark: boolean;
}

export const interiorStyles: InteriorStyle[] = [
  {
    slug: "minimalism",
    nameKo: "미니멀리즘",
    nameEn: "Minimalism",
    keywords: ["단순함", "여백의 미", "직선"],
    description: "불필요한 장식을 배제하고 본질에 집중하여 공간의 개방감을 극대화합니다.",
    goodFor: "수납을 벽 안으로 넣을 여유가 있는 신축, 혹은 붙박이장 공사가 가능한 경우에 가장 잘 나옵니다.",
    commonMistake: "수납장을 없애고 물건만 줄이는 것. 수납이 부족하면 결국 바닥에 물건이 쌓여 미니멀리즘이 무너집니다.",
    comparedTo: {
      slug: "industrial",
      nameKo: "인더스트리얼",
      note: "미니멀리즘은 표면을 매끈하게 다듬고, 인더스트리얼은 마감을 드러냅니다. 둘 다 장식을 걷어내지만 무엇을 남기는지가 다릅니다.",
    },
    previewImage: "/styles/all-styles/Minimalist_bedroom_Korean_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Minimalist_bedroom_Korean_202603191156.jpeg",
      "/styles/all-styles/Minimalist_living_room_202603191156.jpeg",
      "/styles/all-styles/Minimalist_bathroom_202603191156.jpeg",
      "/styles/all-styles/Minimalist_kitchen_202603191156.jpeg"
    ],
    bgColor: "#0D0D0D",
    isDark: true,
  },
  {
    slug: "scandinavian",
    nameKo: "스칸디나비안",
    nameEn: "Scandinavian",
    keywords: ["자연소재", "실용성", "따뜻함"],
    description: "북유럽의 실용적 사고와 따뜻한 감성이 만나 아늑하고 편안한 공간을 연출합니다.",
    goodFor: "채광이 약한 저층이나 북향에 특히 잘 맞습니다. 밝은 톤이 부족한 빛을 보완해줍니다.",
    commonMistake: "화이트 톤만 고집하는 것. 우드와 패브릭 없이 흰색만 쓰면 삭막한 인상이 됩니다.",
    comparedTo: {
      slug: "cozy",
      nameKo: "코지",
      note: "스칸디나비안은 밝고 실용적인 낮의 톤, 코지는 어둡고 포근한 저녁의 톤입니다. 같은 북유럽 감성이지만 시간대가 다릅니다.",
    },
    previewImage: "/styles/all-styles/Scandinavian_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Scandinavian_bedroom_202603191156.jpeg",
      "/styles/all-styles/Scandinavian_living_room_202603191156.jpeg",
      "/styles/all-styles/Scandinavian_bathroom_202603191156.jpeg",
      "/styles/all-styles/Scandinavian_kitchen_202603191156.jpeg"
    ],
    bgColor: "#1D242B",
    isDark: true,
  },
  {
    slug: "industrial",
    nameKo: "인더스트리얼",
    nameEn: "Industrial",
    keywords: ["거친 질감", "노출", "빈티지"],
    description: "원자재의 거친 느낌을 그대로 살려 도시적이고 감각적인 분위기를 자아냅니다.",
    goodFor: "층고가 확보된 오래된 상가나, 구조를 드러낼 수 있는 공간에서 힘을 발휘합니다.",
    commonMistake: "노출 콘크리트를 새로 만드는 것. 실제로는 시공비가 더 들 때가 많습니다. 기존 구조를 살리는 쪽이 합리적입니다.",
    comparedTo: {
      slug: "terrazzo",
      nameKo: "테라조",
      note: "인더스트리얼은 무채색 콘크리트, 테라조는 알록달록한 조각 패턴입니다. 표면을 드러낸다는 점은 같지만 색감이 반대입니다.",
    },
    previewImage: "/styles/all-styles/Industrial_bedroom.jpeg",
    galleryImages: [
      "/styles/all-styles/Industrial_bedroom.jpeg",
      "/styles/all-styles/Industrial_living_new.jpeg",
      "/styles/all-styles/Industrial_bathroom_202603191156.jpeg",
      "/styles/all-styles/Industrial_kitchen_202603191156.jpeg"
    ],
    bgColor: "#2B2D31",
    isDark: true,
  },
  {
    slug: "japandi",
    nameKo: "재팬디",
    nameEn: "Japandi",
    keywords: ["동양적 절제", "평온함", "선"],
    description: "일본의 미니멀리즘과 스칸디나비아의 기능성이 조화를 이룬 평온한 공간입니다.",
    goodFor: "층고가 낮은 아파트에서도 무리 없이 나옵니다. 가구 높이를 낮추는 것만으로 시공 부담이 적습니다.",
    commonMistake: "우드 톤을 여러 종류 섞는 것. 프레임과 바닥, 가구의 우드 컬러를 하나로 통일해야 정돈된 인상이 유지됩니다.",
    comparedTo: {
      slug: "wabi-sabi",
      nameKo: "와비사비",
      note: "재팬디는 정돈된 균형, 와비사비는 의도된 불완전함입니다. 낮은 채도의 우드톤을 공유하지만 마감의 완성도 기준이 반대입니다.",
    },
    previewImage: "/styles/all-styles/Japandi_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Japandi_bedroom_202603191156.jpeg",
      "/styles/all-styles/Japandi_living_room_202603191156.jpeg",
      "/styles/all-styles/Japandi_bathroom_202603191156.jpeg",
      "/styles/all-styles/Japandi_kitchen_202603191156.jpeg"
    ],
    bgColor: "#2F2A26",
    isDark: true,
  },
  {
    slug: "modern-luxury",
    nameKo: "모던 럭셔리",
    nameEn: "Modern Luxury",
    keywords: ["고급스러움", "대리석", "조명"],
    description: "세련된 현대적 디자인에 고급 소재를 더해 품격 있는 공간을 완성합니다.",
    goodFor: "채광이 충분하고 시공 예산이 여유 있는 공간에 맞습니다. 어두운 톤과 대리석은 빛이 받쳐줘야 합니다.",
    commonMistake: "소재를 한 번에 다 바꾸려는 것. 대리석·조명·마감을 전부 새로 하면 예산이 기하급수로 늘어납니다.",
    comparedTo: {
      slug: "neutral-artdeco",
      nameKo: "뉴트럴 아르데코",
      note: "모던 럭셔리는 소재의 격으로 고급감을 내고, 아르데코는 대칭과 패턴으로 냅니다. 같은 고급 지향이지만 만드는 방법이 다릅니다.",
    },
    previewImage: "/styles/all-styles/Modern_luxury_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Modern_luxury_bedroom_202603191156.jpeg",
      "/styles/all-styles/Modern_luxury_living_202603191156.jpeg",
      "/styles/all-styles/Modern_luxury_bathroom_202603191156.jpeg",
      "/styles/all-styles/Modern_luxury_kitchen_202603191156.jpeg"
    ],
    bgColor: "#1F1A24",
    isDark: true,
  },
  {
    slug: "bohemian",
    nameKo: "보헤미안",
    nameEn: "Bohemian",
    keywords: ["자유로움", "다채로움", "패턴"],
    description: "다양한 색채와 패턴, 소품들이 어우러져 자유롭고 개성 넘치는 공간을 표현합니다.",
    goodFor: "기존 가구를 버리지 않고 그대로 쓰고 싶은 경우에 유리합니다. 새로 사는 것보다 섞는 것이 이 스타일의 원리입니다.",
    commonMistake: "패턴과 색을 계획 없이 늘리는 것. 색 계열을 하나로 묶지 않으면 자유로움이 아니라 산만함이 됩니다.",
    comparedTo: {
      slug: "color-accent-modern",
      nameKo: "컬러 액센트 모던",
      note: "보헤미안은 색과 패턴을 겹겹이 쌓고, 컬러 액센트는 한 가지 포인트 컬러만 씁니다. 색을 다루는 양이 정반대입니다.",
    },
    previewImage: "/styles/all-styles/Bohemian_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Bohemian_bedroom_202603191156.jpeg",
      "/styles/all-styles/Bohemian_living_room_202603191156.jpeg",
      "/styles/all-styles/Bohemian_bathroom_202603191156.jpeg",
      "/styles/all-styles/Bohemian_kitchen_202603191156.jpeg"
    ],
    bgColor: "#42523C",
    isDark: true,
  },
  {
    slug: "mid-century",
    nameKo: "미드센추리 모던",
    nameEn: "Mid-Century Modern",
    keywords: ["레트로", "기하학적", "유기적"],
    description: "20세기 중반의 디자인 철학을 현대적으로 재해석한 유기적이고 실용적인 스타일입니다.",
    goodFor: "가구가 공간의 인상을 좌우하는 스타일이라, 벽과 바닥 공사보다 가구 예산을 우선하는 편이 효율적입니다.",
    commonMistake: "복제 가구를 무분별하게 섞는 것. 다리 형태와 우드 톤이 조금만 어긋나도 전체 비례감이 흐트러집니다.",
    comparedTo: {
      slug: "retro-contemporary",
      nameKo: "레트로 컨템포러리",
      note: "미드센추리는 5,60년대 원형을 그대로 가져오고, 레트로 컨템포러리는 그 감성을 지금 가구 비례로 재해석합니다.",
    },
    previewImage: "/styles/all-styles/Mid-century_modern_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Mid-century_modern_bedroom_202603191156.jpeg",
      "/styles/all-styles/Mid-century_modern_living_202603191156.jpeg",
      "/styles/all-styles/Mid-century_modern_bathroom_202603191156.jpeg",
      "/styles/all-styles/Mid-century_modern_kitchen_202603191156.jpeg"
    ],
    bgColor: "#7A412A",
    isDark: true,
  },
  {
    slug: "biophilic",
    nameKo: "바이오필릭",
    nameEn: "Biophilic",
    keywords: ["자연 친화", "플랜테리어", "생명력"],
    description: "자연을 실내로 끌어들여 스트레스를 줄이고 삶의 활력을 불어넣는 건강한 공간입니다.",
    goodFor: "창이 크고 채광이 좋은 공간에 가장 잘 맞습니다. 식물은 빛이 있어야 유지됩니다.",
    commonMistake: "빛이 부족한 공간에 식물을 몰아넣는 것. 관리가 안 되면 스타일이 아니라 방치된 인상을 줍니다.",
    comparedTo: {
      slug: "retreat-style",
      nameKo: "리트리트 스타일",
      note: "바이오필릭은 식물과 자연광이 중심이고, 리트리트는 낮은 채도와 마감의 질감이 중심입니다. 둘 다 안정감을 지향하지만 만드는 재료가 다릅니다.",
    },
    previewImage: "/styles/all-styles/Biophilic_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Biophilic_bedroom_202603191156.jpeg",
      "/styles/all-styles/Biophilic_living_room_202603191156.jpeg",
      "/styles/all-styles/Biophilic_bathroom_202603191156.jpeg",
      "/styles/all-styles/Biophilic_kitchen_202603191156.jpeg"
    ],
    bgColor: "#142F2F",
    isDark: true,
  },
  {
    slug: "cozy",
    nameKo: "코지",
    nameEn: "Cozy (Hygge)",
    keywords: ["포근함", "아늑함", "휴식"],
    description: "부드러운 텍스처와 은은한 조명을 통해 몸과 마음이 이완되는 포근한 휴식처를 제안합니다.",
    goodFor: "겨울철 체감 온도가 낮은 공간, 특히 침실에 효과가 큽니다. 낮은 조도와 패브릭이 핵심입니다.",
    commonMistake: "천장등 하나로 조명을 끝내는 것. 이 스타일은 조명 개수와 색온도로 완성됩니다.",
    comparedTo: {
      slug: "scandinavian",
      nameKo: "스칸디나비안",
      note: "코지는 스칸디나비안의 저녁 버전에 가깝습니다. 같은 북유럽 감성에서 조도와 채도만 낮췄습니다.",
    },
    previewImage: "/styles/all-styles/Cozy_hygge_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Cozy_hygge_bedroom_202603191156.jpeg",
      "/styles/all-styles/Cozy_hygge_living_202603191156.jpeg",
      "/styles/all-styles/Cozy_hygge_bathroom_202603191156.jpeg",
      "/styles/all-styles/Cozy_hygge_kitchen_202603191156.jpeg"
    ],
    bgColor: "#24201E",
    isDark: true,
  },
  {
    slug: "neutral-artdeco",
    nameKo: "뉴트럴 아르데코",
    nameEn: "Neutral Art Deco",
    keywords: ["기하학적 패턴", "화려함", "대칭"],
    description: "대칭적 구조와 절제된 화려함이 뉴트럴 톤과 만나 현대적인 고전미를 완성합니다.",
    goodFor: "대칭 구조를 잡을 수 있는 정형화된 방 형태에서 잘 나옵니다. 비정형 구조에서는 패턴이 어긋나 보입니다.",
    commonMistake: "금색 소품을 과하게 넣는 것. 이 스타일의 무게는 대칭과 패턴에서 나오지, 금색 자체에서 나오지 않습니다.",
    comparedTo: {
      slug: "modern-luxury",
      nameKo: "모던 럭셔리",
      note: "아르데코는 대칭과 패턴으로 고급감을 내고, 모던 럭셔리는 소재의 격으로 냅니다. 같은 고급 지향이지만 만드는 방법이 다릅니다.",
    },
    previewImage: "/styles/all-styles/Neutral_Art_Deco_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Neutral_Art_Deco_202603191156.jpeg",
      "/styles/all-styles/Neutral_Art_Deco_livingroom.jpeg",
      "/styles/all-styles/Neutral_Art_Deco_bathroom.jpeg",
      "/styles/all-styles/Neutral_Art_Deco_kitchen.jpeg"
    ],
    bgColor: "#A68A46",
    isDark: true,
  },
  {
    slug: "wabi-sabi",
    nameKo: "와비사비",
    nameEn: "Wabi-Sabi",
    keywords: ["불완전함의 미", "자연스러움", "여백"],
    description: "세월의 흔적과 자연스러운 불완전함 속에서 평온함을 찾는 절제된 디자인입니다.",
    goodFor: "새 아파트보다 오래된 공간, 원래 있던 마감의 흔적을 살릴 수 있는 곳에 잘 맞습니다.",
    commonMistake: "낡은 것과 와비사비를 혼동하는 것. 의도된 절제와 방치된 노후는 다릅니다. 나머지 마감은 깨끗하게 정리돼 있어야 합니다.",
    comparedTo: {
      slug: "retreat-style",
      nameKo: "리트리트 스타일",
      note: "와비사비는 거친 흔적을 남기는 마감, 리트리트는 매끈하게 다듬은 스파 마감입니다. 채도는 비슷해도 표면의 완성도가 다릅니다.",
    },
    previewImage: "/styles/all-styles/Wabi-Sabi_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Wabi-Sabi_bedroom_202603191156.jpeg",
      "/styles/all-styles/Wabi-Sabi_living_room_202603191156.jpeg",
      "/styles/all-styles/Wabi-Sabi_bathroom_202603191156.jpeg",
      "/styles/all-styles/Wabi-Sabi_kitchen_202603191156.jpeg"
    ],
    bgColor: "#36322E",
    isDark: true,
  },
  {
    slug: "retro-contemporary",
    nameKo: "레트로 컨템포러리",
    nameEn: "Retro Contemporary",
    keywords: ["과거와 현재", "세련된 색채", "디자인"],
    description: "레트로한 컬러감과 현대적인 세련미가 어우러져 독특한 리듬감을 선사합니다.",
    goodFor: "가구와 소품으로 분위기를 크게 바꾸고 싶지만 구조 공사는 피하고 싶은 경우에 적합합니다.",
    commonMistake: "빈티지 가구만 모으는 것. 현대적인 비례의 가구와 섞이지 않으면 레트로가 아니라 그냥 옛날 집이 됩니다.",
    comparedTo: {
      slug: "mid-century",
      nameKo: "미드센추리 모던",
      note: "레트로 컨템포러리는 옛 감성을 지금 비례로 재해석하고, 미드센추리는 5,60년대 원형을 그대로 가져옵니다.",
    },
    previewImage: "/styles/all-styles/Retro_contemporary_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Retro_contemporary_bedroom_202603191156.jpeg",
      "/styles/all-styles/Retro_contemporary_living_202603191156.jpeg",
      "/styles/all-styles/Retro_contemporary_bathroom_202603191156.jpeg",
      "/styles/all-styles/Retro_contemporary_kitchen_202603191156.jpeg"
    ],
    bgColor: "#2D3E4E",
    isDark: true,
  },
  {
    slug: "terrazzo",
    nameKo: "테라조",
    nameEn: "Terrazzo",
    keywords: ["조각적 질감", "다채로움", "내구성"],
    description: "다양한 입자들이 이루는 조형적인 패턴이 공간에 활기와 에너지를 불어넣습니다.",
    goodFor: "바닥이나 욕실처럼 면적이 작고 교체 주기가 긴 부분에 포인트로 쓰기 좋습니다.",
    commonMistake: "벽까지 넓게 적용하는 것. 테라조는 면적이 넓어지면 산만해집니다. 바닥이나 카운터 한 곳으로 제한하는 편이 안전합니다.",
    comparedTo: {
      slug: "industrial",
      nameKo: "인더스트리얼",
      note: "테라조는 알록달록한 조각 패턴, 인더스트리얼은 무채색 콘크리트입니다. 표면을 드러낸다는 점은 같지만 색감이 반대입니다.",
    },
    previewImage: "/styles/all-styles/Terrazzo_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Terrazzo_bedroom_202603191156.jpeg",
      "/styles/all-styles/Terrazzo_living_room_202603191156.jpeg",
      "/styles/all-styles/Terrazzo_bathroom_202603191156.jpeg",
      "/styles/all-styles/Terrazzo_kitchen_202603191156.jpeg"
    ],
    bgColor: "#3C3A38",
    isDark: true,
  },
  {
    slug: "retreat-style",
    nameKo: "리트리트 스타일",
    nameEn: "Retreat Style",
    keywords: ["안식처", "치유", "편안함"],
    description: "외부의 소음에서 벗어나 오직 자신에게 집중할 수 있는 고요한 안식처를 지향합니다.",
    goodFor: "욕실처럼 일상에서 잠깐이라도 온전히 쉬는 공간에 우선 적용하면 체감이 큽니다.",
    commonMistake: "채도를 낮추는 데만 집중하는 것. 이 스타일은 색보다 마감의 질감(돌·플라스터)이 안정감을 만듭니다.",
    comparedTo: {
      slug: "wabi-sabi",
      nameKo: "와비사비",
      note: "리트리트는 매끈하게 다듬은 스파 마감, 와비사비는 거친 흔적을 남기는 마감입니다. 채도는 비슷해도 표면의 완성도가 다릅니다.",
    },
    previewImage: "/styles/all-styles/Retreat_style_bedroom_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Retreat_style_bedroom_202603191156.jpeg",
      "/styles/all-styles/Retreat_look_living_202603191156.jpeg",
      "/styles/all-styles/Retreat_spa_bathroom_202603191156.jpeg",
      "/styles/all-styles/Retreat_style_kitchen_202603191156.jpeg"
    ],
    bgColor: "#2C332F",
    isDark: true,
  },
  {
    slug: "color-accent-modern",
    nameKo: "컬러 액센트 모던",
    nameEn: "Color Accent Modern",
    keywords: ["포인트 컬러", "생동감", "모던"],
    description: "절제된 모던함 속에 과감한 컬러 포인트를 더해 생동감 넘치는 공간을 완성합니다.",
    goodFor: "전체 공사 없이 분위기를 바꾸고 싶을 때 가장 적은 비용으로 큰 인상을 만듭니다.",
    commonMistake: "포인트 색을 두 곳 이상에 쓰는 것. 한 벽, 혹은 가구 하나로 제한해야 '포인트'로 읽힙니다.",
    comparedTo: {
      slug: "bohemian",
      nameKo: "보헤미안",
      note: "컬러 액센트는 한 가지 포인트 컬러만 쓰고, 보헤미안은 색과 패턴을 겹겹이 쌓습니다. 색을 다루는 양이 정반대입니다.",
    },
    previewImage: "/styles/all-styles/Color_accent_modern_bedroom.jpeg",
    galleryImages: [
      "/styles/all-styles/Color_accent_modern_bedroom.jpeg",
      "/styles/all-styles/Color_accent_modern_202603191156.jpeg",
      "/styles/all-styles/Color_accent_modern_bathroom.jpeg",
      "/styles/all-styles/Color_accent_modern_kitchen.jpeg"
    ],
    bgColor: "#1A1D21",
    isDark: true,
  },
];
