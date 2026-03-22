export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  mainImage: string;
  galleryImages?: string[];
  description: string;
  year: string;
}

export const editorialProjects: Project[] = [
  {
    id: 201,
    title: "Neutral Art Deco Pilates",
    category: "Commercial / Pilates",
    location: "Signature Concept",
    mainImage: "/images/portfolio/뉴트럴 아르데코 (Neutral Art Deco) 필라테스.png",
    description: "뉴트럴 톤의 평온함과 아르데코의 우아함이 공존하는 필라테스 공간입니다.",
    year: "2024"
  },
  {
    id: 202,
    title: "Retreat Look Stay",
    category: "Hospitality / Stay",
    location: "Signature Concept",
    mainImage: "/images/portfolio/리트리트 룩 (Retreat Look) 프리미엄 스테이.png",
    description: "진정한 휴식을 위해 설계된 프리미엄 스테이의 리트리트 무드입니다.",
    year: "2024"
  },
  {
    id: 203,
    title: "Mid-Century Creative Office",
    category: "Office Space",
    location: "Signature Concept",
    mainImage: "/images/portfolio/미드센추리 모던 (Mid-Century Modern) 크리에이티브 오피스.png",
    description: "창의적인 영감을 자극하는 미드센추리 모던 스타일의 오피스 제안입니다.",
    year: "2024"
  },
  {
    id: 204,
    title: "Biophilic Cafe Space",
    category: "Commercial / Cafe",
    location: "Signature Concept",
    mainImage: "/images/portfolio/바이오필릭 (Biophilic) 대형 카페.png",
    description: "자연의 생명력을 실내로 들여온 압도적인 스케일의 바이오필릭 카페입니다.",
    year: "2024"
  },
  {
    id: 205,
    title: "Scandinavian Academy Lobby",
    category: "Commercial / Education",
    location: "Signature Concept",
    mainImage: "/images/portfolio/스칸디나비안 (Scandinavian) 어학원 로비.png",
    description: "밝은 톤과 따뜻한 우드가 조화를 이루는 북유럽 감성의 로비 공간입니다.",
    year: "2024"
  },
  {
    id: 206,
    title: "Wabi-Sabi Stay Bathroom",
    category: "Hospitality / Bathroom",
    location: "Signature Concept",
    mainImage: "/images/portfolio/와비사비 (Wabi-Sabi) 감성 스테이 욕실.png",
    description: "비움의 미학을 담은 와비사비 스타일의 감성적인 배스룸 제안입니다.",
    year: "2024"
  },
  {
    id: 207,
    title: "Industrial Large Office",
    category: "Office Space",
    location: "Signature Concept",
    mainImage: "/images/portfolio/Industrial_Large_Office_New.png",
    description: "구조미와 거친 질감이 돋보이는 광활한 인더스트리얼 오피스입니다.",
    year: "2024"
  },
  {
    id: 208,
    title: "Modern Fashion Showroom",
    category: "Commercial / Showroom",
    location: "Signature Concept",
    mainImage: "/images/portfolio/컬러 포인트 모던 (Color Accent Modern) 패션 쇼룸.png",
    description: "과감한 컬러 포인트로 브랜드를 돋보이게 하는 모던 쇼룸 공간입니다.",
    year: "2024"
  },
  {
    id: 209,
    title: "Cozy & Hygge Waiting Lounge",
    category: "Commercial / Lounge",
    location: "Signature Concept",
    mainImage: "/images/portfolio/코지_&_휘게_waiting lounge.png",
    description: "따스함(Hygge)이 느껴지는 아늑한 대기 공간의 인테리어 제안입니다.",
    year: "2024"
  },
  {
    id: 210,
    title: "Terrazzo Pop-up Store",
    category: "Commercial / Retail",
    location: "Signature Concept",
    mainImage: "/images/portfolio/테라조 인테리어 (Terrazzo Interior) 트렌디 팝업 매장.png",
    description: "테라조 패턴의 화려함과 트렌디한 감각이 돋보이는 팝업 스토어입니다.",
    year: "2024"
  },
  {
    id: 101,
    title: "Minimalist Sanctuary",
    category: "Living Space",
    location: "Signature Concept",
    mainImage: "/images/portfolio/01.png",
    description: "본질에 집중한 미니멀리즘의 정수를 보여주는 공간 제안입니다.",
    year: "Concept"
  },
  {
    id: 102,
    title: "Quiet Morning",
    category: "Bedroom",
    location: "Signature Concept",
    mainImage: "/images/portfolio/02.png",
    description: "아늑한 빛과 소재가 어우러진 평온한 아침의 감성을 담았습니다.",
    year: "Concept"
  },
  {
    id: 103,
    title: "Marble Essence",
    category: "Kitchen Detail",
    location: "Signature Concept",
    mainImage: "/images/portfolio/03.png",
    description: "천연 대리석의 질감을 살린 럭셔리한 주방 디테일입니다.",
    year: "Concept"
  },
  {
    id: 104,
    title: "Architectural Path",
    category: "Hallway",
    location: "Signature Concept",
    mainImage: "/images/portfolio/04.png",
    description: "건축적 선형미를 강조한 복도 공간의 재해석입니다.",
    year: "Concept"
  },
  {
    id: 105,
    title: "Sculptural Dining",
    category: "Dining Area",
    location: "Signature Concept",
    mainImage: "/styles/japandi/living.png",
    description: "조형적인 가구와 조명이 조화를 이루는 다이닝 공간입니다.",
    year: "Concept"
  },
  {
    id: 106,
    title: "Zen Retreatment",
    category: "Spa Bathroom",
    location: "Signature Concept",
    mainImage: "/images/portfolio/06.png",
    description: "지친 일상을 치유하는 젠 스타일의 배스룸 제안입니다.",
    year: "Concept"
  }
];

export const constructionProjects: Project[] = [
  {
    id: 1,
    title: "구미 강아지목욕탕",
    category: "Commercial",
    location: "구미시",
    mainImage: "/styles/시공사례/구미 강아지목욕탕 시공사례.jpg",
    description: "반려동물을 위한 세심한 배려가 돋보이는 모던한 강아지 목욕탕 시공 사례입니다.",
    year: "2024"
  },
  {
    id: 2,
    title: "반포 강아지목욕탕",
    category: "Commercial",
    location: "서울 서초구 반포동",
    mainImage: "/styles/시공사례/반포 강아지목욕탕 시공사례1.jpg",
    galleryImages: [
      "/styles/시공사례/반포 강아지목욕탕 시공사례1.jpg",
      "/styles/시공사례/반포 강아지목욕탕 시공사례2.jpg",
      "/styles/시공사례/반포 강아지목욕탕 시공사례3.jpg"
    ],
    description: "하이엔드 주거 단지에 걸맞는 프리미엄 펫 케어 공간입니다.",
    year: "2024"
  },
  {
    id: 3,
    title: "구미 무인스튜디오",
    category: "Commercial",
    location: "구미시",
    mainImage: "/styles/시공사례/구미 무인스튜디오 시공사례.jpg",
    description: "공간의 효율성과 감각적인 인테리어가 조화를 이룬 무인 사진관 시공 사례입니다.",
    year: "2024"
  },
  {
    id: 4,
    title: "암사동 강아지목욕탕",
    category: "Commercial",
    location: "서울 강동구 암사동",
    mainImage: "/styles/시공사례/암사동 강아지목욕탕 시공사례.jpg",
    description: "편안하고 위생적인 환경을 최우선으로 설계된 강아지 목욕 시설입니다.",
    year: "2023"
  }
];
