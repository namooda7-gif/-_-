'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Focus, Heart, Sparkles } from 'lucide-react';

const pillars = [
  {
    id: "01",
    title: "보이지 않는 안전",
    subtitle: "Invisible Safety",
    description: "공간의 아름다움보다 중요한 것은 그 공간의 견고함입니다. 여성 특유의 꼼꼼함으로 보이지 않는 구조적 완벽함까지 책임집니다.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", // Modern architectural structure
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "02",
    title: "감성적 디테일",
    subtitle: "Emotional Detail",
    description: "1mm의 마감 차이가 공간의 호흡을 결정합니다. 손끝에서 전해지는 질감과 빛의 흐름까지 세밀하게 설계하여 감동을 전합니다.",
    icon: Focus,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", // Detailed texture/interior
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "03",
    title: "공감의 디자인",
    subtitle: "Empathetic Design",
    description: "우리는 공간이 아닌 사람의 이야기를 먼저 듣습니다. 당신의 일상과 동선, 마음의 무게까지 고려한 사용자 중심의 디자인을 지향합니다.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800", // Warm living space
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    id: "04",
    title: "본질의 지속성",
    subtitle: "Sustainable Essence",
    description: "유행은 변해도 본질은 남습니다. 유행을 좇기보다 시간이 흐를수록 깊이를 더하는 공간의 본질적인 미학을 추구합니다.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800", // Modern architectural lines
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export default function ValuePillars() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-accent-pink text-xs tracking-[0.3em] font-bold mb-4 uppercase text-center md:text-left">The Value of Laol</p>
            <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 leading-tight text-center md:text-left">
              공간은 숫자로 증명되지 않습니다. <br />
              <span className="text-text-secondary">머무는 이의 평온함으로 증명됩니다.</span>
            </h2>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-default"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={pillar.image} 
                  alt={pillar.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>

              {/* Content Integration */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-white/30 text-4xl font-black tracking-tighter group-hover:text-white/100 transition-colors duration-500">
                      {pillar.id}
                    </span>
                    <pillar.icon className="text-white/60 group-hover:text-white transition-colors duration-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-4">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="w-12 h-1 bg-white/30 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action or Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-text-secondary/60 text-sm font-medium italic">
            &quot;We don&apos;t just build spaces; we nurture the life within them.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
