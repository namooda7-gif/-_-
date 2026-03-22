"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";

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
    isAccent: true,
    accentColor: "var(--accent-page)"
  }
];

const processSteps = [
  {
    id: "01",
    title: "전문 상담",
    subtitle: "Consultation",
    desc: "당신의 생각을 듣고, 라올의 감각을 더하는 첫 만남입니다. 라이프스타일 분석을 통해 공간의 방향성을 함께 설정합니다.",
    image: "/images/services/process_01.png"
  },
  {
    id: "02",
    title: "3D 도면 설계",
    subtitle: "3D Planning",
    desc: "실제와 똑같은 고해상도 3D 렌더링으로 완공 후의 모습을 미리 경험합니다. 가구 배치와 조명 조도까지 세밀하게 조정합니다.",
    image: "/images/services/process_02.png"
  },
  {
    id: "03",
    title: "책임 시공",
    subtitle: "Construction",
    desc: "디테일에 집착하는 라올 직영팀이 현장을 책임집니다. 보이지 않는 기초 공사부터 마감까지 철저한 공정 관리가 이루어집니다.",
    image: "/images/services/process_03.png"
  },
  {
    id: "04",
    title: "우먼픽스 사후관리",
    subtitle: "Aftercare",
    desc: "시공 후에도 여성 전문가가 찾아가는 라올만의 안심 패키지입니다. 작은 불편함도 놓치지 않는 세심한 케어를 약속합니다.",
    image: "/images/services/process_04.png",
    isSand: true
  }
];

export default function ServicesPage() {
  const [selectedTag, setSelectedTag] = useState<TagType | null>(null);

  return (
    <main className="h-screen w-full overflow-y-auto snap-y snap-proximity-container bg-transparent text-white select-none relative scroll-smooth">
      {services.map((service) => (
        <section 
          key={service.id} 
          className="relative h-screen w-full snap-start snap-always shrink-0 flex items-center overflow-hidden"
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <OptimizedImage
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
                <p className={`text-[10px] tracking-[0.4em] font-black uppercase`} style={{ color: service.accentColor || 'var(--accent-gold)' }}>{service.category}</p>
                <p className="text-5xl font-black text-white/30 font-serif mt-2">{service.id}</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 md:w-3/4 flex flex-col justify-end md:justify-center p-0 md:pl-20 relative">
                <p className={`hidden md:block text-xs font-black tracking-[0.6em] uppercase mb-8`} style={{ color: service.accentColor || 'var(--accent-gold)' }}>
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

                    {/* Inline Detail Section */}
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
                            <button 
                              onClick={() => setSelectedTag(null)}
                              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 group"
                            >
                              <svg className="w-4 h-4 text-white/50 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                            <div className="flex flex-col gap-4">
                              <span className="text-[10px] tracking-[0.4em] font-black uppercase" style={{ color: service.accentColor || 'var(--accent-gold)' }}>Service Detail</span>
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
                    className="mt-12 text-sm font-black tracking-widest uppercase flex items-center gap-4"
                    style={{ color: service.accentColor || 'var(--accent-gold)' }}
                  >
                    <span>Only at Laol</span>
                    <div className="h-[1px] w-12" style={{ backgroundColor: service.accentColor || 'var(--accent-gold)' }} />
                  </motion.div>
                )}
            </div>
          </div>
        </section>
      ))}

      {/* 4. The Narrative Process Section */}
      <section className="relative min-h-screen w-full snap-start snap-always shrink-0 flex flex-col justify-center bg-[#050505] overflow-hidden py-20 px-6 md:px-12 xl:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <span className="text-[10px] font-black tracking-[1em] text-accent-gold uppercase block mb-4">The Laol Narrative</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              정석의 <span className="text-accent-gold italic font-light lowercase">미학</span>
            </h2>
            <div className="h-[1px] w-24 bg-accent-gold opacity-50 mb-8" />
            <p className="text-white/40 text-sm md:text-lg max-w-2xl font-light leading-relaxed">
              라올실내건축은 보이지 않는 곳에서 더 치열합니다. <br className="hidden md:block" />
              첫 상담부터 평생의 파트너가 되는 사후관리까지, 모든 과정은 투명하고 정교하게 흐릅니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-8 bg-[#111]">
                  <OptimizedImage
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Step Number Badge */}
                  <div 
                    className="absolute top-6 left-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center font-black text-lg"
                    style={{ color: step.isSand ? 'var(--accent-sand)' : 'var(--accent-gold)' }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 px-2">
                  <div className="space-y-1">
                    <p 
                      className="text-[10px] font-bold tracking-widest uppercase opacity-60"
                      style={{ color: step.isSand ? 'var(--accent-sand)' : 'var(--accent-gold)' }}
                    >
                      {step.subtitle}
                    </p>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Connector (Desktop) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-[40%] -right-3 z-10">
                    <svg className="w-6 h-6 text-accent-gold opacity-20 group-hover:opacity-50 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Shortcut / CTA */}
      <section className="relative h-[60vh] w-full snap-start snap-always shrink-0 flex items-center justify-center bg-[#050505] overflow-hidden px-6">
         <div className="text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                라올과 함께 당신의 <br />
                <span className="text-accent-gold font-light italic">이야기</span>를 시작하세요
              </h2>
              <p className="text-white/30 text-xs md:text-sm tracking-widest uppercase">
                Now ready to build your dream space
              </p>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/contact"}
              className="px-12 py-5 bg-accent-gold text-black font-black text-sm uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            >
              상담 예약하기
            </motion.button>
         </div>
      </section>


    </main>
  );
}
