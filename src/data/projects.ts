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
    mainImage: "/images/portfolio/05.png",
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
