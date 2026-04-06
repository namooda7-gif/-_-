'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';

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
          <div>
            <h4 className="text-foreground font-bold mb-6">Menu</h4>
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
          <div>
            <h4 className="text-foreground font-bold mb-6">Company</h4>
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

          {/* Col 4: WomanFix App */}
          <div>
            <h4 className="text-accent-page font-bold mb-6 flex items-center">
              WomanFix <ExternalLink size={14} className="ml-2" />
            </h4>
            <p className="text-text-secondary text-sm mb-6">
              여성이 만들고 여성이 사용하는 <br />
              홈케어 서비스 앱 &apos;우먼픽스&apos;
            </p>
            <div className="flex flex-col space-y-3">
              <div className="p-3 border border-white/10 rounded-lg flex items-center bg-foreground/5 cursor-pointer hover:bg-foreground/10 transition-all">
                <div className="w-8 h-8 mr-3 bg-foreground rounded-md flex items-center justify-center text-white text-[10px] font-bold">App</div>
                <div>
                  <p className="text-[10px] text-text-secondary uppercase">Download on the</p>
                  <p className="text-xs font-bold">App Store</p>
                </div>
              </div>
              <div className="p-3 border border-white/10 rounded-lg flex items-center bg-foreground/5 cursor-pointer hover:bg-foreground/10 transition-all">
                <div className="w-8 h-8 mr-3 bg-foreground rounded-md flex items-center justify-center text-white text-[10px] font-bold">Play</div>
                <div>
                  <p className="text-[10px] text-text-secondary uppercase">Get it on</p>
                  <p className="text-xs font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>
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
