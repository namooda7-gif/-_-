'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutShort() {
  return (
    <section className="py-32 bg-[#0F0E0D] relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D] via-transparent to-[#0F0E0D] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E0D] via-transparent to-[#0F0E0D] z-10" />
        <Image 
          src="/images/portfolio/06.png" 
          alt="Background Texture" 
          fill
          className="object-cover blur-[2px]"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-20 text-center">
        <div
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-black tracking-[0.8em] text-white/40 uppercase block mb-8">
            Start Your Project
          </span>
          
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-tight mb-8">
            당신의 일상에 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30">
              가장 안전한 아름다움을
            </span><br className="hidden md:block" />
            설계합니다
          </h2>
          
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-16 max-w-2xl font-light">
            여성 대표의 섬세한 안목과 15년 이상의 정밀한 시공 철학.<br />
            라올 실내건축과 함께 변치 않는 가치를 가진 공간을 완성해 보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm overflow-hidden w-full sm:w-auto border border-white"
            >
              <div className="absolute inset-0 w-0 bg-black group-hover:w-full transition-all duration-[0.6s] ease-out-expo z-0" />
              {/* 수정: mix-blend-difference 제거, 텍스트 색상 직접 제어 */}
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 pointer-events-none">
                프로젝트 문의하기
              </span>
            </Link>
            
            <Link 
              href="/services" 
              className="group px-10 py-5 bg-transparent text-white font-black uppercase tracking-widest text-sm border border-white/20 hover:border-white transition-colors w-full sm:w-auto"
            >
              서비스 안내 보기
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
