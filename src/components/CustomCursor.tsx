"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { cursorType } = useCursor();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
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
      width: 12,
      height: 12,
      backgroundColor: "var(--accent-page)",
      border: "0px solid transparent",
    },
    view: {
      width: 120,
      height: 120,
      backgroundColor: "rgba(197, 160, 89, 0.15)", // Approximate gold but themed would be better. I'll use a class in a wrapper instead. Actually I'll just change the text below.
      border: "1px solid var(--accent-page)",
      backdropFilter: "blur(4px)",
    },
    drag: {
      width: 100,
      height: 100,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(4px)",
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
                    VIEW MORE
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
