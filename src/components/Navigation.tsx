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
  { name: '3D 랜더링', href: '/rendering', highlight: true },
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
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-[100] transition-all duration-300',
        scrolled 
          ? 'bg-background/70 backdrop-blur-md border-b border-white/10 py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white/70 uppercase flex items-center hover:text-white transition-colors">
          LAOL <span className="mx-2.5 opacity-30 font-light">|</span> <span className="text-[0.85em] mt-0.5 font-medium">실내건축</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-[15px] font-medium transition-all duration-300 relative group',
                      isActive 
                        ? 'text-accent-page scale-105' 
                        : 'text-white/60 hover:text-accent-page hover:scale-110',
                      link.highlight 
                        ? 'px-5 py-2.5 border border-accent-page/50 text-accent-page rounded-full hover:bg-accent-page hover:text-white shadow-[0_0_15px_rgba(var(--accent-page-rgb),0.15)] hover:shadow-[0_0_20px_rgba(var(--accent-page-rgb),0.4)]'
                        : 'hover:opacity-100'
                    )}
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

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-dimmed"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <nav
          className="absolute top-full left-0 w-full bg-background border-b border-white/10 lg:hidden shadow-xl"
        >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-lg font-medium py-3 border-b border-white/10 last:border-0 transition-colors',
                      isActive ? 'text-accent-page font-bold' : 'text-white/60',
                      link.highlight && 'text-accent-page font-extrabold tracking-tight'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </header>
  );
}
