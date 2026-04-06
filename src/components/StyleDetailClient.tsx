'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ChevronRight, Hash } from 'lucide-react';
import { InteriorStyle, interiorStyles } from '@/data/styles';

interface StyleDetailClientProps {
  style: InteriorStyle;
}

export default function StyleDetailClient({ style }: StyleDetailClientProps) {
  const router = useRouter();

  // Find index for Prev/Next navigation
  const currentIndex = interiorStyles.findIndex(s => s.slug === style.slug);
  const prevStyle = interiorStyles[(currentIndex - 1 + interiorStyles.length) % interiorStyles.length];
  const nextStyle = interiorStyles[(currentIndex + 1) % interiorStyles.length];

  return (
    <main 
      className="min-h-screen font-outfit pb-32 transition-colors duration-1000 relative"
      style={{ 
        backgroundColor: style.bgColor,
        color: style.isDark ? 'white' : 'black'
      }}
    >
      {/* Dark to Transparent Reveal Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          background: `linear-gradient(to bottom, #0A0A0A 0%, #0A0A0A 60vh, transparent 110vh, transparent 100%)`,
          height: '200vh' // Extend enough to cover the transition
        }} 
      />
      
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={style.previewImage} 
            alt={style.nameEn}
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0 z-10" 
            style={{ 
              background: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)` 
            }} 
          />
        </motion.div>

        {/* Bottom Fade transition removed in favor of global overlay */}

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:justify-center md:pb-0 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-pill-premium py-10 px-8 md:py-14 md:px-24 rounded-[4rem] border-white/5 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center w-[92vw] md:max-w-4xl"
          >
            <p className="text-accent-gold text-xs md:text-sm tracking-[0.5em] font-black mb-6 uppercase">
              {style.nameEn} Collection
            </p>
            <h1
              className="font-black text-white mb-10 tracking-tighter leading-none whitespace-nowrap"
              style={{ fontSize: 'clamp(2rem, 10vw, 6rem)' }}
            >
              {style.nameKo}
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
              {style.keywords.map((keyword, idx) => (
                <span key={idx} className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-black border border-white/20 uppercase tracking-widest">
                  #{keyword}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Back Button */}
        <button 
          onClick={() => router.push('/styles')}
          className="absolute top-32 left-8 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all flex items-center gap-2 group z-30"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="pr-2 text-sm font-bold uppercase tracking-wider">Archive</span>
        </button>

        {/* Style Navigation - Left (Prev) */}
        <div className="fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 group/prev">
          <Link 
            href={`/styles/${prevStyle.slug}`}
            className="w-10 h-10 xl:w-16 xl:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-500 shadow-2xl"
          >
            <ArrowLeft className="w-4 h-4 xl:w-6 xl:h-6 group-hover/prev:-translate-x-1 transition-transform" />
          </Link>
          <div className="absolute left-16 xl:left-20 opacity-0 group-hover/prev:opacity-100 -translate-x-4 group-hover/prev:translate-x-0 transition-all duration-500 pointer-events-none whitespace-nowrap hidden xl:block">
            <p className="text-accent-gold text-[10px] font-black uppercase tracking-[0.2em] mb-1">Previous</p>
            <p className="text-white font-bold text-lg">{prevStyle.nameKo}</p>
          </div>
        </div>

        {/* Style Navigation - Right (Next) */}
        <div className="fixed right-4 xl:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-4 group/next text-right">
          <Link 
            href={`/styles/${nextStyle.slug}`}
            className="w-10 h-10 xl:w-16 xl:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-500 shadow-2xl"
          >
            <ArrowRight className="w-4 h-4 xl:w-6 xl:h-6 group-hover/next:translate-x-1 transition-transform" />
          </Link>
          <div className="absolute right-16 xl:right-20 opacity-0 group-hover/next:opacity-100 translate-x-4 group-hover/next:-translate-x-0 transition-all duration-500 pointer-events-none whitespace-nowrap hidden xl:block">
            <p className="text-accent-gold text-[10px] font-black uppercase tracking-[0.2em] mb-1">Next Style</p>
            <p className="text-white font-bold text-lg">{nextStyle.nameKo}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-8 md:-mt-60 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`glass-pill-premium rounded-[3rem] p-12 md:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-white/10 backdrop-blur-3xl transition-all duration-1000 ${
            style.isDark ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className={style.isDark ? 'text-white' : 'text-black'}>
              <div className={`flex items-center gap-3 mb-8 ${style.isDark ? 'text-accent-gold' : 'text-black/60'}`}>
                <div className="w-8 h-px bg-current" />
                <span className="text-xs font-black tracking-[0.5em] uppercase">Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight tracking-tighter break-keep">
                {style.nameKo} 스타일로 완성하는 <br />
                <span className={style.isDark ? 'text-white/40 font-light italic' : 'text-black/40 font-light italic'}>공간의 시그니처</span>
              </h2>
              <p className={`text-xl md:text-2xl leading-relaxed mb-12 font-light break-keep ${style.isDark ? 'text-white/60' : 'text-black/70'}`}>
                {style.description}
              </p>
              
              <div 
                className={`p-10 rounded-3xl border backdrop-blur-md ${
                  style.isDark ? 'bg-white/5 border-white/10 shadow-inner' : 'bg-black/5 border-black/10'
                }`}
              >
                <h4 className="font-black mb-6 flex items-center gap-3 opacity-80 uppercase tracking-widest text-[10px]">
                  <Hash className={`w-4 h-4 ${style.isDark ? 'text-accent-gold' : 'text-black/60'}`} />
                  Interior Keywords
                </h4>
                <div className="flex flex-wrap gap-3">
                  {style.keywords.map((kw, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black border uppercase tracking-widest ${
                        style.isDark ? 'bg-white/5 border-white/10 text-white/80' : 'bg-black/5 border-black/10 text-black/80'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${style.isDark ? 'bg-accent-gold' : 'bg-black/60'}`} />
                      {kw}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-1000">
                <Image 
                  src={style.previewImage} 
                  alt="Feature Area"
                  fill
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section if exists */}
      {style.galleryImages.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-4 md:px-12 xl:px-24 mt-48">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="flex-1">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-accent-gold text-xs tracking-[0.5em] font-black mb-6 uppercase"
              >
                Showcase Archive
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-5xl md:text-7xl font-black leading-none tracking-tighter ${
                  style.isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {style.nameKo} <span className={style.isDark ? 'text-white/20' : 'text-black/10'}>Gallery</span>
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`max-w-md text-lg font-light leading-relaxed ${
                style.isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              공간별로 제안하는 {style.nameKo} 스타일의 <br className="hidden lg:block"/>
              다양한 컨셉과 감도 높은 구현 사례입니다.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-0">
            {style.galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-none overflow-hidden group border-none"
              >
                <div className="aspect-[21/9] md:aspect-[24/10] relative overflow-hidden">
                  <Image 
                    src={img} 
                    alt={`${style.nameKo} Gallery ${idx}`} 
                    fill
                    className="object-cover transform transition-transform duration-[3s] group-hover:scale-105"
                  />
                  
                  {/* Premium Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 p-8 md:p-12 flex flex-col justify-end items-start">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ scale: 1.02 }}
                      className="glass-pill-premium p-6 md:p-10 rounded-[2rem] border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col items-start max-w-[90%]"
                    >
                      <p className="text-accent-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 opacity-80">Space Archetype {idx + 1}</p>
                      <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none break-keep">
                        {(['Master Bedroom', 'Living Space', 'Private Bath', 'Gourmet Kitchen', 'Dining Area', 'Home Office', 'Entrance', 'Study Room'] as const)[idx] ?? `Space ${idx + 1}`}
                      </h4>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-48">
        <div 
          className={`glass-pill-premium rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-all duration-1000 ${
            style.isDark ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
          }`}
        >
          <div className={`absolute top-0 right-0 w-96 h-96 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 ${
            style.isDark ? 'bg-accent-gold' : 'bg-black'
          }`} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {style.nameKo} 인테리어로 <br />
              나만의 공간을 완성하고 싶으신가요?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/contact" 
                className="glass-pill-premium px-12 py-6 bg-accent-gold/20 backdrop-blur-2xl border-accent-gold/50 text-white font-black rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_rgba(197,160,89,0.3)] flex items-center justify-center gap-3 overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-accent-gold opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500" />
                <span className="relative z-10 tracking-widest uppercase text-sm">상담 예약하기</span>
                <ChevronRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-1" />
              </Link>
              <Link 
                href="/services" 
                className={`glass-pill-premium px-12 py-6 backdrop-blur-2xl border font-black rounded-full transition-all flex items-center justify-center overflow-hidden group/btn-sec ${
                  style.isDark 
                    ? 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10' 
                    : 'bg-black/5 border-black/10 text-black/80 hover:bg-black/10'
                }`}
              >
                <div className="absolute inset-0 bg-current opacity-0 group-hover/btn-sec:opacity-5 transition-opacity duration-500" />
                <span className="relative z-10 tracking-widest uppercase text-sm">서비스 가이드 보기</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
