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
    previewImage: "/styles/minimalism/01.jpg",
    galleryImages: [
      "/styles/minimalism/01.jpg",
      "/styles/Minimalist3.png",
      "/styles/Minimalist4.png",
      "/styles/minimalism/bedroom.png"
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
    previewImage: "/styles/scandinavian/01.jpg",
    galleryImages: [
      "/styles/scandinavian/01.jpg",
      "/styles/Scandinavian3.png",
      "/styles/Scandinavian4.png",
      "/styles/scandinavian/bedroom.png"
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
    previewImage: "/styles/industrial/01.jpg",
    galleryImages: [
      "/styles/industrial/01.jpg",
      "/styles/Industrial2.png",
      "/styles/industrial/bedroom.png",
      "/styles/industrial/living.png"
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
    previewImage: "/styles/japandi/01.jpg",
    galleryImages: [
      "/styles/japandi/01.jpg",
      "/styles/japandi/bedroom.png",
      "/styles/japandi/living.png"
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
    previewImage: "/styles/modern-luxury/01.jpg",
    galleryImages: [
      "/styles/modern-luxury/01.jpg",
      "/styles/modern-luxury/living.png",
      "/styles/modern-luxury/bedroom.png"
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
    previewImage: "/styles/bohemian/01.jpg",
    galleryImages: [
      "/styles/bohemian1.png",
      "/styles/bohemian2.png",
      "/styles/bohemian3.png",
      "/styles/bohemian4.png"
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
    previewImage: "/styles/mid-century/01.jpg",
    galleryImages: [
      "/styles/Mid-century modern1.png",
      "/styles/Mid-century modern2.png",
      "/styles/Mid-century modern3.png",
      "/styles/Mid-century modern4.png"
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
    previewImage: "/styles/biophilic/01.jpg",
    galleryImages: [
      "/styles/Biophilic1.png",
      "/styles/Biophilic2.png",
      "/styles/Biophilic3.png",
      "/styles/Biophilic4.png"
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
    previewImage: "/styles/cozy/01.jpg",
    galleryImages: [
      "/styles/Cozy1.png",
      "/styles/Cozy2.png",
      "/styles/Cozy3.png",
      "/styles/Cozy4.png"
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
    previewImage: "/styles/neutral-artdeco/01.jpg",
    galleryImages: [
      "/styles/neutral-artdeco/01.jpg",
      "/styles/neutral-artdeco/living.png",
      "/styles/neutral-artdeco/bedroom.png"
    ],
    bgColor: "#A68A46",
    isDark: true,
  },
];
