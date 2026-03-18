'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  { id: 1, src: '/projects/01.jpg', category: 'Luxury Kitchen' },
  { id: 2, src: '/projects/02.jpg', category: 'Master Bedroom' },
  { id: 3, src: '/projects/03.jpg', category: 'Modern Bathroom' },
  { id: 4, src: '/projects/04.jpg', category: 'Contemporary Dining' },
  { id: 5, src: '/projects/05.jpg', category: 'Home Office' },
  { id: 6, src: '/projects/06.jpg', category: 'Stylish Patio' },
];

export default function BWGallery() {
  const [coloredImages, setColoredImages] = useState<Set<number>>(new Set());

  const handleMouseEnter = (id: number) => {
    setColoredImages((prev) => new Set(prev).add(id));
  };

  const handleGridMouseLeave = () => {
    setColoredImages(new Set());
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="mb-16">
          <p className="text-accent-pink text-xs tracking-[0.3em] font-bold mb-4">PORTFOLIO</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            내가 깨우는 <br />
            <span className="text-text-secondary">아름다운 공간들</span>
          </h2>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          onMouseLeave={handleGridMouseLeave}
        >
            {GALLERY_IMAGES.map((img) => (
            <motion.div
              key={img.id}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-crosshair group bg-neutral-100"
              onMouseEnter={() => handleMouseEnter(img.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{
                  filter: coloredImages.has(img.id) ? 'grayscale(0%)' : 'grayscale(100%)',
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* V29: Standard <img> to prevent height:0 warnings in grid */}
                <Image
                  src={img.src}
                  alt={img.category}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Category Label Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-xs tracking-widest uppercase font-medium">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
