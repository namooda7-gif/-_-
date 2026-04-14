'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: '홈', href: '/' },
  { name: '회사 소개', href: '/about' },
  { name: '서비스', href: '/services' },
  { name: '인테리어 스타일', href: '/styles' },
  { name: '시공 사례', href: '/portfolio' },
  { name: '3D 랜더링', href: 'https://onroom.kr/upload', highlight: true, external: true as const },
  { name: '우먼픽스', href: '/womanfix', highlight: true },
  { name: '문의하기', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 pointer-events-none">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
        {/* LOGO - Separated and Clear */}
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold tracking-tighter text-white/80 uppercase flex items-center hover:text-white transition-all duration-300 pointer-events-auto"
        >
          LAOL <span className="mx-2 md:mx-2.5 opacity-30 font-light">|</span> <span className="text-[0.85em] mt-0.5 font-medium">실내건축</span>
        </Link>

        {/* Desktop Nav - Dedicated Floating Glass Pill */}
        <nav 
          className={cn(
            "hidden lg:flex items-center space-x-8 px-8 py-3 rounded-full transition-all duration-500 pointer-events-auto",
            "border-t border-l border-white/30 border-r border-b border-white/5", // Enhanced specular edge
            scrolled 
              ? "bg-white/[0.1] backdrop-blur-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)]" 
              : "bg-white/[0.05] backdrop-blur-[16px] shadow-[0_15px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]"
          )}
        >
              {navLinks.map((link) => {
                const isActive = !link.external && (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)));
                const className = cn(
                  'text-[14px] md:text-[15px] font-medium transition-all duration-300 relative group',
                  isActive
                    ? 'text-accent-page scale-105'
                    : 'text-white/60 hover:text-accent-page hover:scale-110',
                  link.highlight
                    ? 'px-5 py-2 border border-white/20 bg-white/5 backdrop-blur-md text-accent-page rounded-full hover:bg-accent-page hover:text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-accent-page/40 ml-2'
                    : 'hover:opacity-100'
                );
                return link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={className}
                  >
                    {link.name}
                    {!link.highlight && (
                      <span className={cn(
                        "absolute -bottom-1 left-0 w-full h-0.5 bg-accent-page transition-all duration-300 origin-left",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )} />
                    )}
                  </Link>
                );
              })}
        </nav>

        {/* Mobile Toggle - Separate Glass Circle */}
        <div className="flex items-center lg:hidden pointer-events-auto">
          <button
            className={cn(
              "p-3 rounded-full transition-all duration-500",
              scrolled 
                ? "bg-white/[0.05] backdrop-blur-xl border border-white/20" 
                : "bg-white/[0.02] backdrop-blur-lg border border-white/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} className="text-white" /> : <Menu size={22} className="text-white/70" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Integrated Glass Style */}
      {isOpen && (
        <>
          {/* 배경 dimmer - 뒤 콘텐츠 완전 차단 */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-[150]"
            onClick={() => setIsOpen(false)}
          />
        <nav
          className="absolute top-[110%] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-xs bg-white/[0.08] backdrop-blur-[32px] border border-white/20 rounded-[1.5rem] lg:hidden shadow-[0_25px_80px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] mt-2 pointer-events-auto z-[200]"
        >
            <div className="flex flex-col px-4 py-3 space-y-0">
              {navLinks.map((link) => {
                const isActive = !link.external && (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)));
                const mobileClass = cn(
                  'text-[15px] font-medium py-2.5 border-b border-white/10 last:border-0 transition-colors',
                  isActive ? 'text-accent-page font-bold' : 'text-white/60',
                  link.highlight && 'text-accent-page font-extrabold tracking-tight'
                );
                return link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mobileClass}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={mobileClass}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </>
        )}
      </header>
  );
}
