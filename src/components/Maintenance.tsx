'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Maintenance() {
  return (
    <div className="fixed inset-0 bg-[#0b0b0b] text-[#ffffff] flex items-center justify-center p-4 overflow-y-auto z-[9999]">
      {/* 프리미엄 라이팅 글로우 효과 */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#d4af37]/[0.05] to-transparent rounded-full pointer-events-none filter blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-[640px] w-full bg-white/[0.01] border border-white/[0.05] backdrop-blur-2xl rounded-[2rem] p-8 md:p-16 text-center shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-10"
      >
        {/* 로고 */}
        <div className="text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#d4af37] mb-2 uppercase font-serif">
          LAOL
        </div>
        <div className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-8">
          Interior Architecture
        </div>

        {/* 디바이더 */}
        <div className="relative w-10 h-[1px] bg-[#d4af37] mx-auto mb-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
        </div>

        {/* 메시지 */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 text-white break-keep">
          임시 시스템 점검 안내
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-white/60 mb-8 font-light break-keep">
          라올실내건축 홈페이지를 찾아주셔서 감사드립니다.<br />
          현재 홈페이지의 보다 안정적이고 향상된 서비스를 제공하기 위해<br />
          일시적으로 시스템 개선 및 서버 점검 작업을 진행 중입니다.
        </p>

        {/* 점검 일정 */}
        <div className="inline-block bg-[#d4af37]/[0.03] border border-[#d4af37]/0.2 rounded-xl px-6 py-4 mb-10">
          <div className="text-[11px] font-bold text-[#d4af37] tracking-[0.1em] uppercase mb-1.5">
            Maintenance Period
          </div>
          <div className="text-sm sm:text-base font-medium text-white/90">
            2026. 08. 08 (토) ~ 2026. 08. 15 (토) 예정
          </div>
        </div>

        {/* 문의 안내 */}
        <div className="border-t border-white/5 pt-8">
          <div className="text-[11px] font-bold text-white/20 tracking-[0.2em] uppercase mb-6">
            Contact Us
          </div>

          {/* 카카오톡 상담 버튼 */}
          <a
            href="http://pf.kakao.com/_xhFQxlX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#1e1e1e] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full mb-6 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(254,229,0,0.1)] hover:shadow-[0_15px_30px_rgba(254,229,0,0.2)]"
          >
            <svg viewBox="0 0 24 24" className="w-4 sm:w-5 h-4 sm:h-5 fill-current">
              <path d="M12 3C6.477 3 2 6.59 2 11.02c0 2.86 1.92 5.37 4.81 6.78-.21.74-.77 2.7-.88 3.12-.14.52.19.51.4.37.16-.11 2.6-1.77 3.66-2.49.65.09 1.32.14 2.01.14 5.523 0 10-3.59 10-8.02C22 6.59 17.523 3 12 3z" />
            </svg>
            카카오톡 1:1 실시간 문의
          </a>

          {/* 연락처 텍스트 */}
          <div className="flex flex-col gap-2.5 items-center text-xs sm:text-sm text-white/50">
            <div className="flex items-center gap-2">
              <span className="text-white/30">T.</span>
              <a href="tel:01059140508" className="text-white/80 hover:text-[#d4af37] transition-colors hover:underline">010-5914-0508</a>
              <span className="text-white/20">|</span>
              <a href="tel:01047828934" className="text-white/80 hover:text-[#d4af37] transition-colors hover:underline">010-4782-8934</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/30">E.</span>
              <a href="mailto:laolarch@gmail.com" className="text-white/80 hover:text-[#d4af37] transition-colors hover:underline">laolarch@gmail.com</a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
