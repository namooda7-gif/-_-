'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Hash, Sparkles } from 'lucide-react';
import { InteriorStyle } from '@/data/styles';

interface StyleDetailClientProps {
  style: InteriorStyle;
}

export default function StyleDetailClient({ style }: StyleDetailClientProps) {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background font-outfit pb-32 text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-accent-pink text-sm tracking-[0.4em] font-bold mb-4 uppercase">
              {style.nameEn} Collection
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl">
              {style.nameKo}
            </h1>
            <div className="flex flex-wrap justify-center gap-3">
              {style.keywords.map((keyword, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                  #{keyword}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="absolute top-32 left-8 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all flex items-center gap-2 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="pr-2 text-sm font-bold uppercase tracking-wider">Back</span>
        </button>
      </section>

      {/* Content Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 -mt-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900 rounded-[3rem] p-12 md:p-20 shadow-2xl border border-white/5"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="text-white">
              <div className="flex items-center gap-3 text-accent-pink mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-black tracking-widest uppercase">Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                {style.nameKo} 스타일로 완성하는 <br />
                <span className="text-white/40">공간의 시그니처</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed mb-10">
                {style.description}
              </p>
              
              <div 
                className="p-8 rounded-3xl border border-white/5"
                style={{ backgroundColor: `${style.bgColor}08` }} // 3% - 5% opacity tint
              >
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Hash className="w-4 h-4 text-accent-pink" />
                  디자인 키워드
                </h4>
                <div className="flex flex-wrap gap-2">
                  {style.keywords.map((kw, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-4 py-2 bg-white/5 rounded-xl text-sm border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
                      {kw}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg">
                <Image 
                  src={style.previewImage} 
                  alt="Feature Area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="aspect-square rounded-2xl flex items-center justify-center p-8 text-center border border-white/5"
                  style={{ backgroundColor: `${style.bgColor}15` }} // Higher opacity tint
                >
                  <div className="text-white">
                    <div className="text-3xl font-black text-accent-pink mb-1">01</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Safety First</div>
                  </div>
                </div>
                <div 
                  className="aspect-square rounded-2xl flex items-center justify-center p-8 text-center border border-white/5"
                  style={{ backgroundColor: `${style.bgColor}15` }}
                >
                  <div className="text-white">
                    <div className="text-3xl font-black text-accent-pink mb-1">02</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Premium Detail</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section if exists */}
      {style.galleryImages.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-accent-pink text-xs tracking-[0.3em] font-bold mb-4">SHOWCASE</p>
              <h2 className="text-4xl md:text-5xl font-bold">{style.nameKo} 갤러리</h2>
            </div>
            <p className="text-slate-400 max-w-sm">
              공간별로 제안하는 {style.nameKo} 스타일의 다양한 구현 사례입니다.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {style.galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative break-inside-avoid rounded-3xl overflow-hidden shadow-xl group border border-border"
              >
                <Image 
                  src={img} 
                  alt={`${style.nameKo} Gallery ${idx}`} 
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-white text-sm font-medium">Style Concept {idx + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-[1000px] mx-auto px-4 md:px-8 mt-40">
        <div 
          className="text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5 shadow-2xl"
          style={{ backgroundColor: `${style.bgColor}05` }} // 5% tint
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-pink/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
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
              <Link href="/contact" className="px-10 py-5 bg-accent-pink text-white font-black rounded-full hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-3">
                상담 예약하기 <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all flex items-center justify-center">
                서비스 가이드 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
