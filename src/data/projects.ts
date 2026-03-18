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

export const projects: Project[] = [
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
