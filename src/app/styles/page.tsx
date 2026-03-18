'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { interiorStyles } from '@/data/styles';
import { ArrowUpRight } from 'lucide-react';

export default function StylesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <main className="pt-32 pb-40 px-6 md:px-12 xl:px-24 max-w-[1800px] mx-auto min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Editorial Header */}
      <section className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-accent-pink text-xs md:text-sm tracking-[0.5em] font-black uppercase mb-6"
          >
            Curated Collections
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.9] tracking-tighter uppercase mb-10"
          >
            Editorial<br />
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Styles</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/50 max-w-xl font-light leading-relaxed"
          >
            공간은 단순한 물리적 장소를 넘어 삶의 철학을 담는 그릇입니다. <br className="hidden md:block" />
            라올실내건축이 제안하는 10가지 프리미엄 스타일 보드를 통해 당신만의 감각을 발견해 보세요.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden lg:block text-right"
        >
          <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-black mb-2">Refined by Laol</p>
          <p className="text-xl font-serif italic text-white/60">Est. 2026 / Architecture & Design</p>
        </motion.div>
      </section>

      {/* Masonry-style Staggered Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
      >
        {interiorStyles.map((style, index) => (
          <motion.div 
            key={style.slug}
            variants={itemVariants}
            className="break-inside-avoid"
          >
            <Link 
              href={`/styles/${style.slug}`}
              className="group block relative overflow-hidden rounded-[40px] bg-white/5 border border-white/10 transition-all duration-700 hover:border-white/30"
            >
              {/* Image Container with variable aspect ratios for Masonry feel */}
              <div className={`relative overflow-hidden ${
                index % 3 === 0 ? 'aspect-[3/4]' : 
                index % 3 === 1 ? 'aspect-square' : 
                'aspect-[4/3]'
              }`}>
                <Image 
                  src={style.previewImage}
                  alt={style.nameEn}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Arrow Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
                    style={{ backgroundColor: style.bgColor }}
                  />
                  <span className="text-[10px] tracking-[0.3em] font-black uppercase text-white/40">
                    {style.nameEn}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  {style.nameKo}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {style.keywords.map((kw, i) => (
                    <span key={i} className="text-[11px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 group-hover:text-white/80 transition-colors">
                      #{kw}
                    </span>
                  ))}
                </div>

                <p className="text-white/40 text-sm leading-relaxed font-light line-clamp-2 group-hover:text-white/60 transition-colors">
                  {style.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Decoration */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div className="text-center md:text-left">
          <p className="text-4xl md:text-6xl font-black uppercase text-white/10 leading-none">Perspective</p>
          <p className="text-4xl md:text-6xl font-black uppercase text-white/10 leading-none mt-2">Reimagined</p>
        </div>
        <Link 
          href="/contact"
          className="px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-sm hover:bg-accent-pink hover:text-white transition-all duration-500 hover:scale-105 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
        >
          Inquire Now
        </Link>
      </motion.div>
    </main>
  );
}
