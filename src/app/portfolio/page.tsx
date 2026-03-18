export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">시공 사례</h1>
      <p className="text-dimmed/70 mb-12">라올실내건축의 섬세한 손길이 닿은 프로젝트들을 소개합니다.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="group relative aspect-video bg-white/5 rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold">Project Name {i}</h3>
              <p className="text-sm text-dimmed">Residential | Seoul</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
