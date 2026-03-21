'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { constructionProjects as projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <main className="pt-32 pb-40 px-6 md:px-12 xl:px-24 max-w-[1800px] mx-auto min-h-screen bg-[#0A0A0A] text-white">
      <div className="mb-24">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-accent-gold text-xs md:text-sm tracking-[0.5em] font-black uppercase mb-6"
        >
          Project Archive
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter"
        >
          시공 사례
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-white/50 max-w-2xl mt-8 font-light"
        >
          라올실내건축의 철학이 담긴 실제 시공 리스트입니다. <br />
          상업 공간부터 주거 공간까지, 디테일의 차이가 만드는 공간의 가치를 확인해 보세요.
        </motion.p>
      </div>
      
      <div className="space-y-32 md:space-y-64">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
          >
            {/* Image Container - Larger Scale */}
            <div className="w-full lg:w-3/5 xl:w-[65%] group relative">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden shadow-2xl shadow-black/50"
              >
                <Image 
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  priority={index < 2}
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Floating Icon */}
                <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 -rotate-45 group-hover:rotate-0">
                  <ArrowUpRight className="w-7 h-7" />
                </div>
              </motion.div>
            </div>
            
            {/* Text Content - Refined Staggered Typography */}
            <div className={`w-full lg:w-2/5 xl:w-[35%] ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} px-4 md:px-0`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <div className={`flex items-center gap-3 mb-6 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <span className="text-accent-gold/50 text-sm font-black tracking-widest">0{index + 1}</span>
                  <div className="h-[1px] w-8 bg-accent-gold/30" />
                  <p className="text-accent-gold text-[11px] font-black tracking-[0.4em] uppercase">
                    {project.category}
                  </p>
                </div>
                
                <h3 className="text-4xl md:text-5xl xl:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                  {project.title}
                </h3>
                
                <div className={`flex flex-col gap-6 ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                  <p className="text-white/60 text-lg leading-relaxed font-light max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-white/30 text-xs font-bold tracking-widest uppercase">{project.location}</span>
                    <span className="text-accent-gold/40 text-[10px] font-black tracking-widest uppercase">{project.year}</span>
                  </div>
                  
                  <motion.div 
                    whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                    className="mt-4 flex items-center gap-4 text-white/40 hover:text-white transition-colors cursor-pointer group/link"
                  >
                    <span className="text-xs font-black tracking-[0.2em] uppercase">View Project Detail</span>
                    <div className="w-12 h-[1px] bg-white/20 group-hover/link:w-24 transition-all duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
