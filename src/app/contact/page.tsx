'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="pt-48 pb-20 px-4 md:px-8 max-w-[1000px] mx-auto min-h-screen">
      <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">문의하기</h1>
      <p className="text-xl text-white/40 mb-16 font-light">공간에 대한 고민을 들려주세요. <br className="md:hidden" />라올이 답을 찾아드립니다.</p>
      
      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-12 glass-pill-premium p-10 md:p-20 rounded-[3rem] border-white/10 backdrop-blur-3xl bg-white/[0.02] shadow-[0_50px_100px_rgba(0,0,0,0.5)]" 
        onSubmit={(e: React.FormEvent) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label className="text-xs font-black tracking-[0.4em] text-accent-gold/60 uppercase ml-2">Your Name</label>
            <input type="text" placeholder="성함을 입력해주세요" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-gold/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20" />
          </div>
          <div className="space-y-4">
            <label className="text-xs font-black tracking-[0.4em] text-accent-gold/60 uppercase ml-2">Mobile</label>
            <input type="tel" placeholder="연락처를 입력해주세요" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-gold/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20" />
          </div>
        </div>
        <div className="space-y-4">
          <label className="text-xs font-black tracking-[0.4em] text-accent-gold/60 uppercase ml-2">Message</label>
          <textarea rows={6} placeholder="공간에 대한 생각과 궁금한 점을 자유롭게 적어주세요" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-gold/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20 resize-none"></textarea>
        </div>
        <button className="glass-pill-premium w-full bg-accent-gold/20 backdrop-blur-2xl text-white font-black py-6 rounded-full border border-accent-gold/50 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(197,160,89,0.3)] tracking-[0.5em] uppercase text-sm group">
          <span className="relative z-10">Request Consultation</span>
        </button>
      </motion.form>
    </div>
  );
}
