import HeroGallery from "@/components/HeroGallery";
import SolutionGrid from "@/components/SolutionGrid"; 
import ServiceCards from "@/components/ServiceCards";
import PortfolioEditorial from "@/components/PortfolioEditorial";
import AboutShort from "@/components/AboutShort";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 
        기획서 S1: Hero 섹션 
        Aristide Benoist 스타일의 10가지 스타일 갤러리
      */}
      <section className="h-screen w-full relative bg-transparent hero-section">
        <HeroGallery />
      </section>

      {/* 
        Step 1: 브랜드 철학 그리드 (羅, 樂, 來)
        수직바(Hero) 바로 아래에 배치하여 브랜드 가치 전달
      */}
      <SolutionGrid />

      {/* 
        Step 2: 실무 서비스 그리드 (디자인, 시공, 홈케어)
        철학 아래에 구체적인 솔루션 배치
      */}
      <ServiceCards />

      {/* 
        Step 3: 비대칭 에디토리얼 포트폴리오 (Eraser Effect)
        기존 3열 그리드를 탈피한 인터랙티브 갤러리
      */}
      <PortfolioEditorial />

      {/* 
        기획서 S5: 브랜드 미션 및 소개 섹션 
      */}
      <AboutShort />
      
      {/* 모든 홈페이지 콘텐츠 조립 완료 */}
    </main>
  );
}
