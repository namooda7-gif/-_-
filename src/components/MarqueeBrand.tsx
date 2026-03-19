"use client";

import React from "react";

export default function MarqueeBrand() {
  const brandMeanings = [
    { kanji: "羅", title: "羅ALL", desc: "공간을 아름답게 펼쳐 완성하는 실내건축" },
    { kanji: "樂", title: "樂ALL", desc: "공간에 즐거움과 행복을 담는 실내건축" },
    { kanji: "來", title: "來ALL", desc: "좋은 공간과 좋은 일이 찾아오는 실내건축" },
  ];

  // 무한 루프를 위해 충분히 복제
  const marqueeItems = [...brandMeanings, ...brandMeanings, ...brandMeanings, ...brandMeanings, ...brandMeanings, ...brandMeanings];

  return (
    <div className="marquee-container w-full overflow-hidden py-4 select-none cursor-default pointer-events-auto group/marquee">
      <div className="marquee-content flex whitespace-nowrap gap-20 items-center animate-[scroll_60s_linear_infinite] w-max group-hover/marquee:[animation-play-state:running]">
        {marqueeItems.map((item, i) => (
          <div 
            key={i} 
            className="marquee-item flex items-center gap-6 group relative transition-all duration-500 hover:scale-110 px-6 origin-left"
          >
            {/* 한자 효과 - 항상 어느정도 선명하게 */}
            <span className="text-4xl font-serif text-white/50 group-hover:text-white transition-all duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {item.kanji}
            </span>
            
            <div className="flex flex-col">
              <span className="text-[10px] font-black tracking-[0.5em] text-white/30 group-hover:text-white/80 uppercase leading-none mb-2 transition-colors">
                {item.title}
              </span>
              <span className="text-[14px] font-medium tracking-widest text-white/30 group-hover:text-white/90 whitespace-nowrap leading-none transition-all duration-500 group-hover:translate-x-1">
                {item.desc}
              </span>
            </div>
            
            <div className="ml-12 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white/30 transition-all duration-700" />
            
            {/* Subtle Glow Background on Hover */}
            <div className="absolute -inset-x-4 -inset-y-2 bg-white/0 group-hover:bg-white/[0.03] rounded-xl -z-10 transition-all duration-500 blur-md font-sans" />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <style jsx>{`
        .marquee-container {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
}
