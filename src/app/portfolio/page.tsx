'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <main className="pt-32 pb-40 px-6 md:px-12 xl:px-24 max-w-[1800px] mx-auto min-h-screen bg-[#0A0A0A] text-white">
      <div className="mb-24">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-accent-pink text-xs md:text-sm tracking-[0.5em] font-black uppercase mb-6"
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 relative">
              <Image 
                src={project.mainImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowUpRight className="w-6 h-6" />
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-accent-pink text-xs font-black tracking-widest uppercase mb-2">
                  {project.category} | {project.year}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm font-light">
                  {project.location}
                </p>
              </div>
            </div>
            
            <div className="mt-6 px-4">
              <p className="text-white/40 leading-relaxed text-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
