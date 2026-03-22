"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  containerClassName?: string;
  blur?: boolean;
}

/**
 * 하이엔드 웹사이트를 위한 로딩 최적화 이미지 컴포넌트
 * - 이미지가 로딩되는 동안 Skeleton Shimmer 효과와 Blur 효과를 순차적으로 보여줍니다.
 * - 이미지가 로드되면 부드럽게 Fade-in 됩니다.
 */
export default function OptimizedImage({
  containerClassName = "",
  blur = true,
  alt = "",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName} h-full w-full`}>
      {/* 1. Skeleton Shimmer Layer */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-10 bg-[#111111]"
          >
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Image Layer with Blur Transition */}
      <Image
        alt={alt}
        {...props}
        className={`${props.className || ""} lg:transition-all lg:duration-[1.2s] ${
          blur && !isLoaded ? "opacity-0 blur-xl scale-110" : "opacity-100 blur-0 scale-100"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
