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
    <section className="py-32 px-4 md:px-8 bg-[#0A0A0A] overflow-hidden">
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
              whileHover={{ y: -15 }}
              className="group relative h-[600px] overflow-hidden bg-neutral-900 rounded-none cursor-pointer border border-white/5"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                <div className="mb-8 overflow-hidden">
                  <span className="text-6xl font-serif text-white/10 block mb-4 group-hover:text-white/30 group-hover:-translate-y-2 transition-all duration-700">
                    {item.kanji}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-[var(--accent-pink,#FF8BA7)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-white/60 tracking-widest uppercase mb-6">
                    {item.subtitle}
                  </p>
                </div>

                <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  <p className="text-sm leading-relaxed text-white/40 mb-8 max-w-[280px]">
                    {item.desc}
                  </p>
                  <div className="w-12 h-px bg-white/20 group-hover:w-full transition-all duration-1000 origin-left" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
