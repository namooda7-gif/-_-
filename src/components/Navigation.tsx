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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-[15px] font-medium transition-all hover:text-white',
                pathname === link.href ? 'text-white/90 border-b border-white/50' : 'text-white/40',
                link.highlight && 'px-4 py-2 bg-white/90 text-black rounded-full hover:bg-white hover:opacity-100'
              )}
            >
              {link.name}
            </Link>
          ))}
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-lg font-medium py-2 border-b border-white/5 last:border-0',
                    pathname === link.href ? 'text-white/90' : 'text-white/40',
                    link.highlight && 'text-white/90 font-bold'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
  );
}
