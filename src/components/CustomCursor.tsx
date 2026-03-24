"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { cursorType } = useCursor();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 800 }; // Much snappier and responsive
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  const variants = {
    default: {
      width: 0,
      height: 0,
      opacity: 0,
      backgroundColor: "transparent",
      border: "0px solid transparent"
    },
    view: {
      width: 140,
      height: 140,
      backgroundColor: "rgba(197, 160, 89, 0.08)", 
      border: "1px solid rgba(197, 160, 89, 0.4)",
      backdropFilter: "blur(12px)",
    },
    drag: {
      width: 120,
      height: 120,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(12px)",
    },
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="flex items-center justify-center rounded-full relative"
          >
            <motion.div
              animate={cursorType}
              variants={variants}
              transition={{ type: "spring", damping: 20, stiffness: 150 }}
              className="rounded-full flex items-center justify-center overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {cursorType === "view" && (
                  <motion.span
                    key="view"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-[10px] font-black tracking-[0.2em] text-accent-page"
                  >
                    REVEAL
                  </motion.span>
                )}
                {cursorType === "drag" && (
                  <motion.span
                    key="drag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-[10px] font-black tracking-[0.2em] text-white"
                  >
                    DRAG
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
