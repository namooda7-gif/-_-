'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_8o9ti89';
const TEMPLATE_ID = 'template_nsqfsq8';
const PUBLIC_KEY = 'lsWFZ0-nu58Ir7jCx';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 md:pt-48 pb-20 px-4 md:px-8 max-w-[1000px] mx-auto min-h-screen">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">문의하기</h1>
      <p className="text-xl text-white/40 mb-16 font-light">공간에 대한 고민을 들려주세요. <br className="md:hidden" />라올이 답을 찾아드립니다.</p>

      <motion.form
        ref={formRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-8 md:space-y-12 glass-pill-premium p-6 md:p-20 rounded-[2rem] md:rounded-[3rem] border-white/10 backdrop-blur-3xl bg-white/[0.02] shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label className="text-xs font-black tracking-[0.4em] text-accent-gold/60 uppercase ml-2">Your Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="성함을 입력해주세요"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-gold/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20"
            />
          </div>
          <div className="space-y-4">
            <label className="text-xs font-black tracking-[0.4em] text-accent-gold/60 uppercase ml-2">Mobile</label>
            <input
              type="tel"
              name="from_phone"
              placeholder="연락처를 입력해주세요"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-gold/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20"
            />
          </div>
        </div>
        <div className="space-y-4">
          <label className="text-xs font-black tracking-[0.4em] text-accent-gold/60 uppercase ml-2">Message</label>
          <textarea
            rows={6}
            name="message"
            placeholder="공간에 대한 생각과 궁금한 점을 자유롭게 적어주세요"
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-gold/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20 resize-none"
          />
        </div>

        {/* 상태 메시지 */}
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-accent-gold font-black tracking-widest text-sm uppercase"
          >
            ✓ 문의가 성공적으로 전송되었습니다
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-red-400 font-black tracking-widest text-sm uppercase"
          >
            ✕ 전송에 실패했습니다. 다시 시도해주세요
          </motion.p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="glass-pill-premium w-full bg-accent-gold/20 backdrop-blur-2xl text-white font-black py-6 rounded-full border border-accent-gold/50 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(197,160,89,0.3)] tracking-[0.5em] uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
        >
          <span className="relative z-10">
            {status === 'sending' ? 'Sending...' : 'Request Consultation'}
          </span>
        </button>
      </motion.form>
    </div>
  );
}
