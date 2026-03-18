import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { interiorStyles } from '@/data/styles';
import { ArrowRight } from 'lucide-react';

export default function StylesPage() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto min-h-screen font-outfit">
      <div className="mb-16">
        <p className="text-accent-pink text-sm tracking-[0.3em] font-bold mb-4">COLLECTIONS</p>
        <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">인테리어 스타일</h1>
        <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
          라올실내건축이 제안하는 프리미엄 스타일을 통해 당신만의 시그니처 공간을 발견해 보세요.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interiorStyles.map((style) => (
          <Link 
            key={style.slug} 
            href={`/styles/${style.slug}`}
          >
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-900 cursor-pointer">
              <Image 
                src={style.previewImage}
                alt={style.nameEn}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <p className="text-accent-pink text-xs tracking-widest font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  {style.nameEn.toUpperCase()}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white mb-2">{style.nameKo}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-sm text-white/70 line-clamp-2 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                  {style.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
