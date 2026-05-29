'use client';

import React from 'react';
import { motion } from 'framer-motion';

// onroom.kr과 동일한 카카오톡 채널 (1:1 상담)
const KAKAO_CHANNEL_URL = 'http://pf.kakao.com/_xhFQxlX';

export default function KakaoFloatingButton() {
  return (
    <motion.button
      type="button"
      onClick={() => window.open(KAKAO_CHANNEL_URL, '_blank')}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      aria-label="카카오톡으로 문의하기"
      className="group fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50 flex items-center gap-2.5 rounded-full bg-[#FEE500] text-[#3C1E1E] pl-4 pr-5 py-3.5 md:pl-5 md:pr-6 md:py-4 shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_40px_rgba(254,229,0,0.4)] transition-shadow"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 md:w-7 md:h-7 fill-current shrink-0">
        <path d="M12 3C6.477 3 2 6.59 2 11.02c0 2.86 1.92 5.37 4.81 6.78-.21.74-.77 2.7-.88 3.12-.14.52.19.51.4.37.16-.11 2.6-1.77 3.66-2.49.65.09 1.32.14 2.01.14 5.523 0 10-3.59 10-8.02C22 6.59 17.523 3 12 3z" />
      </svg>
      <span className="text-sm md:text-base font-black tracking-tight whitespace-nowrap">카톡 문의</span>
    </motion.button>
  );
}
