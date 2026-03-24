"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    id: "planning",
    kanji: "羅",
    title: "Creative Planning",
    subtitle: "모든 가능성을 펼치다",
    desc: "공간의 본질을 분석하여 최적화된 레이아웃과 동선을 설계합니다. 거주자의 라이프스타일을 반영한 맞춤형 공간 솔루션을 제안합니다.",
    image: "/images/solutions/planning.png",
  },
  {
    id: "styling",
    kanji: "樂",
    title: "Emotional Styling",
    subtitle: "모든 즐거움을 채우다",
    desc: "컬러, 자재, 조명의 완벽한 조화를 통해 공간에 감성을 불어넣습니다. 라올만의 감각적인 큐레이션으로 일상의 즐거움을 완성합니다.",
    image: "/images/solutions/styling.png",
  },
  {
    id: "craft",
    kanji: "來",
    title: "Professional Craft",
    subtitle: "모든 가치를 완성하다",
    desc: "숙련된 전문가들의 정밀한 시공과 엄격한 품질 관리를 통해 시간이 흘러도 변치 않는 가치를 직접 실현합니다.",
    image: "/images/solutions/craft.png",
  },
];

export default function SolutionGrid() {
  return (
    <section className="py-48 px-4 md:px-8 bg-[#0F0E0D] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black tracking-[0.8em] text-white/30 uppercase block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white uppercase leading-tight"
          >
            가치가 실현되는<br />공간 솔루션
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -20 }}
              className="group relative h-[650px] overflow-hidden glass-pill-premium rounded-[2.5rem] cursor-pointer border-white/5 shadow-2xl transition-all duration-700"
            >
              {/* Background Image - Parallax and Opacity control */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-30 md:group-hover:opacity-50 md:group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D] via-transparent to-transparent opacity-90" />
              </div>

              {/* Kanji Watermark - Refined transparency */}
              <div className="absolute top-12 right-[-5%] z-0 pointer-events-none select-none overflow-hidden">
                <span className="text-[14rem] md:text-[18rem] font-serif text-white/[0.08] leading-none block transform rotate-12">
                  {item.kanji}
                </span>
              </div>

              {/* Content Overlay - ULTRACLEAR GLASS PLATE */}
              <div className="relative z-10 h-full p-4 flex flex-col justify-end">
                <div className="glass-pill-premium p-8 md:p-10 rounded-[2rem] border-white/10 h-[320px] flex flex-col justify-center backdrop-blur-2xl m-2 bg-white/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <div className="mb-0 relative py-4">
                    <div className="relative z-10">
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tighter md:group-hover:text-accent-gold transition-colors drop-shadow-md uppercase break-keep leading-[1.1]">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-black text-accent-gold/60 tracking-[0.4em] uppercase mb-0">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    <p className="text-base leading-relaxed text-white/60 mb-8 max-w-[320px] font-light break-keep">
                      {item.desc}
                    </p>
                    <div className="w-0 group-hover:w-full h-[1px] bg-accent-gold/30 transition-all duration-1000 origin-left" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
