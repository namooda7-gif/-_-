'use client';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-[1000px] mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">문의하기</h1>
      <p className="text-lg text-dimmed/80 mb-12">공간에 대한 고민을 들려주세요. 라올이 답을 찾아드립니다.</p>
      
      <form className="space-y-6 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-dimmed">이름</label>
            <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-dimmed">연락처</label>
            <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-dimmed">문의 내용</label>
          <textarea rows={6} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40"></textarea>
        </div>
        <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-dimmed transition-colors">
          상담 신청하기
        </button>
      </form>
    </div>
  );
}
