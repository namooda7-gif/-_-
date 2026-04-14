export default function WomanfixPage() {
  return (
    <div className="pt-20 md:pt-32 pb-20 px-4 md:px-8 max-w-[1200px] mx-auto min-h-screen">
      <div className="mb-12 md:mb-20 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tighter">우먼픽스</h1>
        <p className="text-xl md:text-2xl text-dimmed/80 font-light">여성을 위한 가장 안전하고 쾌적한 홈케어 서비스 앱 &apos;우먼픽스&apos;</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white">왜 우먼픽스인가요?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">여성 기술자 직접 방문</h4>
                <p className="text-dimmed/70">1인 가구, 여성분들이 안심하고 서비스를 받으실 수 있습니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">섬세한 홈케어</h4>
                <p className="text-dimmed/70">수전 교체부터 배수구 케어까지, 여성의 눈높이에서 꼼꼼하게 해결합니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-square w-full max-w-sm mx-auto lg:max-w-none bg-white/5 rounded-[40px] border border-white/10 flex flex-col items-center justify-center p-8 md:p-12 gap-6">
          <div className="text-center space-y-3">
            <div className="text-5xl">🏠</div>
            <h3 className="text-2xl font-bold text-white">AI 3D 인테리어 렌더링</h3>
            <p className="text-dimmed/70 leading-relaxed">
              내 공간 사진 한 장으로<br/>
              AI가 3D 인테리어를 완성해드립니다
            </p>
          </div>
          <a
            href="https://onroom.kr/upload"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition-colors"
          >
            3D 렌더링 체험하기 →
          </a>
        </div>
      </div>
    </div>
  );
}
