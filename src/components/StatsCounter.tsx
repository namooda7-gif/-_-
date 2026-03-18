'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
}

const StatItem = ({ label, value, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-sm lg:text-base text-text-secondary tracking-widest uppercase font-medium">
        {label}
      </div>
    </div>
  );
};

export default function StatsCounter() {
  const stats = [
    { label: "시공 완료 건수", value: 1250, suffix: "+" },
    { label: "고객 만족도", value: 98, suffix: "%" },
    { label: "전문가 팀", value: 45, suffix: "인" },
    { label: "업계 경력", value: 15, suffix: "년" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
