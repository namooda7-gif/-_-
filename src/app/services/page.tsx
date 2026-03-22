"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type TagType = {
  name: string;
  detail: string;
};

const services = [
  {
    id: "01",
    category: "Residential Architecture",
    title: "당신의 삶이 묻어나는\n주거 공간 설계",
    desc: "아파트, 단독주택을 비롯한 주거 공간은 가장 사적이면서 무방비한 쉼터입니다. 라올실내건축은 거주자의 안식과 동선, 취향을 가장 깊숙이 담아내는 하이엔드 홈 스타일링과 리모델링을 제공합니다.",
    tags: [
      { name: "공간 컨설팅", detail: "고객의 라이프스타일과 취향, 동선을 분석하여 최적의 공간 구조와 무드를 제안하는 맞춤형 디자인 기획 서비스입니다." },
      { name: "3D 렌더링", detail: "시공 전 실제와 유사한 고화질 3D 이미지를 제공하여, 완공 후의 모습을 미리 확인하고 수정할 수 있도록 돕습니다." },
      { name: "프리미엄 시공", detail: "오랜 경력의 직영 시공팀이 하자 없는 완벽한 디테일을 위해 프리미엄 자재와 철저한 공정 관리를 바탕으로 시공합니다." },
      { name: "스타일링", detail: "공간의 완성도를 높이는 커튼, 블라인드, 맞춤 제작 가구 및 구매 동행 서비스를 통해 통합적인 인테리어를 완성합니다." }
    ],
    bgImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "02",
    category: "Commercial Spaces",
    title: "브랜드의 서사를 짓는\n상업 공간 기획",
    desc: "카페, 레스토랑, 오피스 등 상업 공간은 브랜드의 무형적 가치를 시각적으로 증명하는 첫 번째 무기입니다. 소비자의 동선부터 조도의 온도까지 계산하여 오감을 사로잡는 마케팅적 공간 경험을 구현합니다.",
    tags: [
      { name: "BI 시공", detail: "시각적인 브랜드 아이덴티티(BI)를 공간의 입체적인 요소로 변환하여, 방문객이 브랜드의 철학을 오감으로 경험할 수 있도록 합니다." },
      { name: "파사드 설계", detail: "공간의 첫인상을 결정짓는 외관(Facade)을 주변 환경과 브랜드 컨셉에 맞춰 눈길을 끄는 디자인으로 설계합니다." },
      { name: "맞춤형 집기 제작", detail: "상업 공간의 특성과 동선에 딱 맞는 계산대, 진열장테이블 등 형태와 기능을 모두 갖춘 집기를 직접 제작합니다." },
      { name: "조명 설계", detail: "공간의 분위기를 좌우하는 조도와 색온도를 계산하여, 상품이 돋보이고 방문객이 편안함을 느끼는 조명 환경을 구축합니다." }
    ],
    bgImage: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "03",
    category: "Women Fix Service",
    title: "여성 전문가가 찾아가는\n안심 홈 케어, 우먼픽스",
    desc: "작은 수리부터 타일 교체, 조명 설치까지 집안에 생기는 다양한 문제를 여성 전문가가 직접 방문하여 안전하고 섬세하게 해결합니다. 혼자 사는 여성도 안심할 수 있는 라올만의 독보적인 서비스입니다.",
    tags: [
      { name: "조명/전기", detail: "까다로운 조명 기구 교체, 콘센트 개설 및 스위치 수리 등 안전이 최우선인 전기 관련 작업을 꼼꼼하게 해결합니다." },
      { name: "수전/배관", detail: "물이 새거나 오래된 주방/욕실 수전 교체, 세면대 부속 수리 등 생활의 불편함을 즉시 해소해 드립니다." },
      { name: "타일/마루 부분 보수", detail: "깨지거나 들뜬 타일, 긁힌 마루 등 부분적인 훼손을 기존 인테리어와 이질감 없이 깔끔하게 복원합니다." },
      { name: "벽지 훼손 복구", detail: "오염되거나 찢어진 벽지의 부분 보수 및 교체를 통해 집안의 깔끔한 첫인상을 되찾아 드립니다." }
    ],
    bgImage: "/images/services/womanfix_v2.png",
    isAccent: true
  }
];

export default function ServicesPage() {
  const [selectedTag, setSelectedTag] = useState<TagType | null>(null);

  return (
    <main className="h-screen w-full overflow-y-auto snap-y snap-proximity-container bg-[#0A0A0A] text-white select-none relative">
      {services.map((service) => (
        <section 
          key={service.id} 
          className="relative h-screen w-full snap-start snap-always shrink-0 flex items-center overflow-hidden"
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <Image
              src={service.bgImage}
              alt={service.category}
              fill
              className="object-cover opacity-60 mix-blend-luminosity scale-105"
            />
            {/* Gradient Overlay for Readability */}
            <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${service.isAccent ? 'from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-[#0A0A0A]/30' : 'from-[#0A0A0A]/80 via-[#0A0A0A]/50 to-transparent'}`} />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row h-full pb-20 md:pb-0">
            
            {/* Category / Number */}
            <div className="md:w-1/4 h-full pt-32 md:pt-0 pb-10 md:pb-0 flex md:flex-col justify-between items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-200px" }}
                transition={{ duration: 0.8 }}
                className="mt-auto hidden md:block"
              >
                <p className="text-[14px] tracking-[0.5em] font-black uppercase text-white/50 mb-2">Service</p>
                <div className="text-8xl md:text-[180px] font-black leading-none text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)"}}>
                  {service.id}
                </div>
              </motion.div>

              {/* Mobile Only Header */}
              <div className="md:hidden flex flex-col justify-start w-full">
                <p className="text-[10px] tracking-[0.4em] font-black uppercase text-accent-gold">{service.category}</p>
                <p className="text-5xl font-black text-white/30 font-serif mt-2">{service.id}</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 md:w-3/4 flex flex-col justify-end md:justify-center p-0 md:pl-20 relative">
                <p className="hidden md:block text-xs font-black tracking-[0.6em] text-accent-gold uppercase mb-8">
                  {service.category}
                </p>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.2] tracking-tighter mb-8 whitespace-pre-line text-white">
                  {service.title.split('\n').map((line, i) => (
                    <span key={i} className="block overflow-hidden pb-2">
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="block"
                        >
                            {line}
                        </motion.span>
                    </span>
                  ))}
                </h2>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-white/60 text-base md:text-xl font-light leading-relaxed mb-12 max-w-2xl">
                      {service.desc}
                    </p>

                    {/* Service Tag Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8 md:mt-12">
                      {service.tags.map((tag, tagIndex) => (
                        <button
                          key={tagIndex}
                          onClick={() => setSelectedTag(selectedTag?.name === tag.name ? null : tag)}
                          className={`group relative px-6 py-3 text-xs md:text-sm font-bold tracking-widest uppercase border ${service.isAccent ? 'border-white/40' : 'border-white/20'} ${selectedTag?.name === tag.name ? 'bg-white/20 text-white border-white scale-[1.02]' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'} rounded-full backdrop-blur-md transition-all duration-300 flex items-center gap-3 overflow-hidden shadow-lg`}
                        >
                          <span className="relative z-10">{tag.name}</span>
                          <span className={`relative z-10 w-4 h-4 rounded-full ${selectedTag?.name === tag.name ? 'bg-white text-black' : 'bg-white/20 group-hover:bg-white group-hover:text-black'} flex items-center justify-center transition-colors`}>
                            <motion.svg 
                              animate={{ rotate: selectedTag?.name === tag.name ? 45 : 0 }}
                              className="w-2.5 h-2.5" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                            </motion.svg>
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Inline Detail Section - Dedicated space below tags */}
                    <AnimatePresence mode="wait">
                      {selectedTag && service.tags.some(t => t.name === selectedTag.name) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, y: 10 }}
                          animate={{ height: "auto", opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: 10 }}
                          transition={{ type: "spring", damping: 30, stiffness: 200 }}
                          className="overflow-hidden mt-8"
                        >
                          <div className={`relative p-8 md:p-10 rounded-3xl border border-white/10 ${service.isAccent ? 'bg-white/10 backdrop-blur-md' : 'bg-white/5 backdrop-blur-sm'}`}>
                            {/* Close Button */}
                            <button 
                              onClick={() => setSelectedTag(null)}
                              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 group"
                            >
                              <svg className="w-4 h-4 text-white/50 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>

                            <div className="flex flex-col gap-4">
                              <span className="text-[10px] tracking-[0.4em] font-black uppercase text-accent-gold">Service Detail</span>
                              <h4 className="text-xl md:text-2xl font-bold text-white">{selectedTag.name}</h4>
                              <div className="h-[1px] w-12 bg-white/20" />
                              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light max-w-2xl">
                                {selectedTag.detail}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </motion.div>
                
                {service.isAccent && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-accent-gold text-sm font-black tracking-widest uppercase flex items-center gap-4"
                  >
                    <span>Only at Laol</span>
                    <div className="h-[1px] w-12 bg-accent-gold" />
                  </motion.div>
                )}
            </div>

          </div>
        </section>
      ))}

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference z-0 pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
            <motion.div 
                animate={{ y: [0, 48, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-full h-1/2 bg-white"
            />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Scroll</span>
      </motion.div>

    </main>
  );
}
