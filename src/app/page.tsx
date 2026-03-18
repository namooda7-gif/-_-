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

      <PortfolioEditorial />

      <SolutionGrid />
      <ServiceCards />

      {/* 
        기획서 S5: 브랜드 미션 및 소개 섹션 
      */}
      <AboutShort />
      
      {/* 모든 홈페이지 콘텐츠 조립 완료 */}
    </main>
  );
}
