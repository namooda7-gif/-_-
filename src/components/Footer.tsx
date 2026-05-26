'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const marqueeItems = Array(8).fill([
  { kanji: '羅', title: 'LAOL實內建築', desc: '공간을 아름답게 펼쳐 완성하는 실내건축' },
  { kanji: '樂', title: 'PREMIUM SPACE', desc: '공간에 즐거움과 행복을 담는 실내건축' },
  { kanji: '來', title: 'WOMEN\'S TOUCH', desc: '좋은 공간과 좋은 일이 찾아오는 실내건축' },
]).flat();

// TODO: 실제 SNS 주소로 교체해주세요
const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Blog', icon: MessageCircle, href: '#' },
];

export default function Footer() {
  const bounceVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="relative z-50 py-24 px-4 md:px-8 overflow-hidden">
      {/* Glass Backdrop */}
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl border-t border-white/[0.05] z-0" />
      
      {/* Top Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent z-10" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-dimmed uppercase flex items-center">
              LAOL<span className="text-[0.85em] ml-0.5 mt-0.5">실내건축</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              여성의 섬세함으로, 당신의 공간을 가장 안전하고 아름답게 바꿉니다. 
              라올 실내건축은 홈케어·인테리어 전문 기업입니다.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  onClick={(e) => social.href === '#' && e.preventDefault()}
                  variants={bounceVariants}
                  whileHover="hover"
                  className="p-2 bg-foreground/5 rounded-full hover:bg-accent-page hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-foreground font-bold leading-8">Menu</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Styles', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-text-secondary text-sm hover:text-accent-page transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company Info */}
          <div className="space-y-6">
            <h4 className="text-foreground font-bold leading-8">Company</h4>
            <div className="text-text-secondary text-sm space-y-3">
              <p>대표이사: 지은혜</p>
              <p>사업자등록번호: 211-33-02983</p>
              <p className="leading-relaxed">
                본점: 경기도 남양주시 별내중앙로 30, 2층 204호
              </p>
              <p className="leading-relaxed">
                지사: 경상북도 구미시 인동24길 17, 1층
              </p>
              <p>이메일: raolarch@gmail.com</p>
            </div>
          </div>

          {/* Col 4: 성진건설 (설비 시공 — 좌측 브랜드 블록과 대칭) */}
          <div className="space-y-6 flex flex-col md:items-end md:text-right">
            <span className="text-2xl font-bold tracking-tighter text-dimmed uppercase">
              성진건설
            </span>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs md:ml-auto break-keep">
              라올의 설계를 현장에서 완성하는 설비 시공 전문 회사입니다.
              아파트/빌라 등 주거, 카페/식당/미용실 등 상업시설,
              유치원·초중고등학교까지 폭넓게 시공합니다.
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="mb-10 overflow-hidden select-none" style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}>
          <div className="flex whitespace-nowrap gap-16 items-center w-max animate-[footerScroll_50s_linear_infinite]">
            {marqueeItems.map((item, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <span className="text-3xl font-serif text-white/20 group-hover:text-white/50 transition-colors duration-500">
                  {item.kanji}
                </span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-[0.5em] text-white/20 group-hover:text-accent-gold/60 uppercase leading-none mb-1.5 transition-colors duration-500">
                    {item.title}
                  </span>
                  <span className="text-[12px] font-medium tracking-widest text-white/20 group-hover:text-white/50 leading-none transition-colors duration-500">
                    {item.desc}
                  </span>
                </div>
                <div className="ml-8 w-1 h-1 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
          <style jsx global>{`
            @keyframes footerScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-tertiary text-xs">
            © 2026 Laol Interior Architecture. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-text-tertiary">
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
