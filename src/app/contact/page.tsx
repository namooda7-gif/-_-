'use client';

import React from 'react';
import { motion } from 'framer-motion';

// onroom.kr과 동일한 카카오톡 채널 (1:1 상담)
const KAKAO_CHANNEL_URL = 'http://pf.kakao.com/_xhFQxlX';

export default function ContactPage() {
  const openKakao = () => window.open(KAKAO_CHANNEL_URL, '_blank');

  return (
    <div className="pt-24 md:pt-48 pb-20 px-4 md:px-8 max-w-[1000px] mx-auto min-h-screen">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">문의하기</h1>
      <p className="text-xl text-white/40 mb-16 font-light">공간에 대한 고민을 들려주세요. <br className="md:hidden" />라올이 답을 찾아드립니다.</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-pill-premium p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] border-accent-sand/20 backdrop-blur-3xl bg-accent-sand/[0.05] shadow-[0_30px_70px_rgba(0,0,0,0.4)] text-left mb-8 md:mb-10"
      >
        <p className="text-xl md:text-3xl font-black tracking-tight mb-8 text-white">
          미팅 전, 이것만 준비해주세요
        </p>
        <ul className="space-y-6">
          <li className="flex gap-4 items-start">
            <span className="shrink-0 w-8 h-8 rounded-full bg-accent-sand/20 border border-accent-sand/40 text-accent-sand text-sm font-black flex items-center justify-center">1</span>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
              <span className="text-white font-medium">원하는 방향 이미지 2~3장</span>
              <span className="ml-2 inline-block align-middle px-2.5 py-0.5 rounded-full bg-accent-sand/15 border border-accent-sand/30 text-accent-sand text-[10px] font-black tracking-wide whitespace-nowrap">
                말보다 이미지가 정확합니다
              </span>
              {' '}— 많을수록 좋은 게 아니라 오히려 방향이 흐려집니다.
            </p>
          </li>
          <li className="flex gap-4 items-start">
            <span className="shrink-0 w-8 h-8 rounded-full bg-accent-sand/20 border border-accent-sand/40 text-accent-sand text-sm font-black flex items-center justify-center">2</span>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
              <span className="text-white font-medium">절대 하기 싫은 것</span> — 원하는 것보다 싫은 걸 말하는 게 오차를 더 빨리 줄입니다.
            </p>
          </li>
          <li className="flex gap-4 items-start">
            <span className="shrink-0 w-8 h-8 rounded-full bg-accent-sand/20 border border-accent-sand/40 text-accent-sand text-sm font-black flex items-center justify-center">3</span>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
              <span className="text-white font-medium">예산 우선순위</span> — 부족할 때 무엇부터 포기할지 미리 정해두면 현장 결정이 줄어듭니다.
            </p>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-pill-premium p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] border-white/10 backdrop-blur-3xl bg-white/[0.02] shadow-[0_50px_100px_rgba(0,0,0,0.5)] text-center"
      >
        <p className="text-2xl md:text-4xl font-black tracking-tight mb-4">
          카카오톡으로 빠르게 상담하세요
        </p>
        <p className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-12">
          시공·견적·리스타일 무엇이든 편하게 물어보세요. <br className="hidden md:block" />
          상담사와 1:1로 빠르게 진행됩니다.
        </p>

        {/* 카카오톡 상담 버튼 */}
        <button
          type="button"
          onClick={openKakao}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-6 rounded-full font-black text-base md:text-lg tracking-wide bg-[#FEE500] text-[#3C1E1E] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(254,229,0,0.25)]"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
            <path d="M12 3C6.477 3 2 6.59 2 11.02c0 2.86 1.92 5.37 4.81 6.78-.21.74-.77 2.7-.88 3.12-.14.52.19.51.4.37.16-.11 2.6-1.77 3.66-2.49.65.09 1.32.14 2.01.14 5.523 0 10-3.59 10-8.02C22 6.59 17.523 3 12 3z" />
          </svg>
          카카오톡으로 문의하기
        </button>

        {/* 전화 상담 (대체 연락처) */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <p className="text-xs font-black tracking-[0.4em] text-accent-gold/60 uppercase mb-5">전화 상담</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-accent-gold font-bold tracking-wider">
            <a href="tel:01059140508" className="hover:underline">010-5914-0508</a>
            <a href="tel:01047828934" className="hover:underline">010-4782-8934</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
