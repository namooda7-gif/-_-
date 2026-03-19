export interface InteriorStyle {
  slug: string;
  nameKo: string;
  nameEn: string;
  keywords: string[];
  description: string;
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
    previewImage: "/styles/all-styles/Minimalist_living_room_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Minimalist_living_room_202603191156.jpeg",
      "/styles/all-styles/Minimalist_bedroom_Korean_202603191156.jpeg",
      "/styles/all-styles/Minimalist_kitchen_202603191156.jpeg",
      "/styles/all-styles/Minimalist_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Scandinavian_living_room_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Scandinavian_living_room_202603191156.jpeg",
      "/styles/all-styles/Scandinavian_bedroom_202603191156.jpeg",
      "/styles/all-styles/Scandinavian_kitchen_202603191156.jpeg",
      "/styles/all-styles/Scandinavian_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Industrial_living_room_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Industrial_living_room_202603191156.jpeg",
      "/styles/all-styles/Industrial_bedroom_Korean_202603191156.jpeg",
      "/styles/all-styles/Industrial_kitchen_202603191156.jpeg",
      "/styles/all-styles/Industrial_bathroom_202603191156.jpeg"
    ],
    bgColor: "#2B2D31",
    isDark: true,
  },
  {
    slug: "japandi",
    nameKo: "자판디",
    nameEn: "Japandi",
    keywords: ["동양적 절제", "평온함", "선"],
    description: "일본의 미니멀리즘과 스칸디나비아의 기능성이 조화를 이룬 평온한 공간입니다.",
    previewImage: "/styles/all-styles/Japandi_living_room_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Japandi_living_room_202603191156.jpeg",
      "/styles/all-styles/Japandi_bedroom_202603191156.jpeg",
      "/styles/all-styles/Japandi_kitchen_202603191156.jpeg",
      "/styles/all-styles/Japandi_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Modern_luxury_living_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Modern_luxury_living_202603191156.jpeg",
      "/styles/all-styles/Modern_luxury_bedroom_202603191156.jpeg",
      "/styles/all-styles/Modern_luxury_kitchen_202603191156.jpeg",
      "/styles/all-styles/Modern_luxury_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Bohemian_living_room_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Bohemian_living_room_202603191156.jpeg",
      "/styles/all-styles/Bohemian_bedroom_202603191156.jpeg",
      "/styles/all-styles/Bohemian_kitchen_202603191156.jpeg",
      "/styles/all-styles/Bohemian_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Mid-century_modern_living_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Mid-century_modern_living_202603191156.jpeg",
      "/styles/all-styles/Mid-century_modern_bedroom_202603191156.jpeg",
      "/styles/all-styles/Mid-century_modern_kitchen_202603191156.jpeg",
      "/styles/all-styles/Mid-century_modern_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Biophilic_living_room_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Biophilic_living_room_202603191156.jpeg",
      "/styles/all-styles/Biophilic_bedroom_202603191156.jpeg",
      "/styles/all-styles/Biophilic_kitchen_202603191156.jpeg",
      "/styles/all-styles/Biophilic_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Cozy_hygge_living_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Cozy_hygge_living_202603191156.jpeg",
      "/styles/all-styles/Cozy_hygge_bedroom_202603191156.jpeg",
      "/styles/all-styles/Cozy_hygge_kitchen_202603191156.jpeg",
      "/styles/all-styles/Cozy_hygge_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Neutral_Art_Deco_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Neutral_Art_Deco_202603191156.jpeg",
      "/styles/all-styles/Neutral_Art_Deco_202603191156.jpeg",
      "/styles/all-styles/Neutral_Art_Deco_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Wabi-Sabi_living_room_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Wabi-Sabi_living_room_202603191156.jpeg",
      "/styles/all-styles/Wabi-Sabi_bedroom_202603191156.jpeg",
      "/styles/all-styles/Wabi-Sabi_kitchen_202603191156.jpeg",
      "/styles/all-styles/Wabi-Sabi_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Retro_contemporary_living_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Retro_contemporary_living_202603191156.jpeg",
      "/styles/all-styles/Retro_contemporary_bedroom_202603191156.jpeg",
      "/styles/all-styles/Retro_contemporary_kitchen_202603191156.jpeg",
      "/styles/all-styles/Retro_contemporary_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Terrazzo_living_room_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Terrazzo_living_room_202603191156.jpeg",
      "/styles/all-styles/Terrazzo_bedroom_202603191156.jpeg",
      "/styles/all-styles/Terrazzo_kitchen_202603191156.jpeg",
      "/styles/all-styles/Terrazzo_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Retreat_look_living_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Retreat_look_living_202603191156.jpeg",
      "/styles/all-styles/Retreat_style_bedroom_202603191156.jpeg",
      "/styles/all-styles/Retreat_style_kitchen_202603191156.jpeg",
      "/styles/all-styles/Retreat_spa_bathroom_202603191156.jpeg"
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
    previewImage: "/styles/all-styles/Color_accent_modern_202603191156.jpeg",
    galleryImages: [
      "/styles/all-styles/Color_accent_modern_202603191156.jpeg",
      "/styles/all-styles/Retro_contemporary_bedroom_202603191156.jpeg", // Placeholder if specific not found
      "/styles/all-styles/Color_accent_modern_202603191156.jpeg"
    ],
    bgColor: "#1A1D21",
    isDark: true,
  },
];
