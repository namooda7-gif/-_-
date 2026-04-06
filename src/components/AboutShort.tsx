'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutShort() {
  return (
    <section className="py-20 md:py-48 bg-[#0F0E0D] relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D] via-transparent to-[#0F0E0D] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E0D] via-transparent to-[#0F0E0D] z-10" />
        <Image 
          src="/images/portfolio/06.png" 
          alt="Background Texture" 
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-20 text-center">
        <div
          className="flex flex-col items-center glass-pill-premium px-5 py-10 sm:px-8 sm:py-16 md:px-20 md:py-24 rounded-[2rem] md:rounded-[3rem] border-white/10 backdrop-blur-xl"
        >
          <span className="text-[10px] font-black tracking-[0.8em] text-accent-page uppercase block mb-8">
            Start Your Project
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-7xl font-black text-white uppercase leading-tight mb-6 md:mb-8 break-keep">
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
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center w-full sm:w-auto mt-4">
            <Link 
              href="/contact" 
              className="glass-pill-premium relative px-8 py-4 md:px-14 md:py-6 bg-accent-gold/20 backdrop-blur-3xl text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm overflow-hidden w-full sm:w-auto border border-accent-gold/50 hover:scale-105 transition-all rounded-full shadow-[0_20px_50px_rgba(197,160,89,0.3)] group/btn"
            >
              <div className="absolute inset-0 bg-accent-gold opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500" />
              <span className="relative z-10">프로젝트 문의하기</span>
            </Link>
            
            <Link 
              href="/services" 
              className="glass-pill-premium px-8 py-4 md:px-14 md:py-6 bg-white/5 text-white/70 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm border border-white/10 hover:bg-white/10 hover:border-white/30 hover:text-white backdrop-blur-3xl transition-all w-full sm:w-auto rounded-full group/btn-sec"
            >
              <span className="relative z-10">서비스 안내 보기</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
