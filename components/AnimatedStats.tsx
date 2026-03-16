"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
};

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-gold">
      {count}
      {suffix}
    </span>
  );
}

export default function AnimatedStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((item) => (
        <div key={item.label} className="glass-card rounded-xl p-8 text-center">
          <Counter value={item.value} suffix={item.suffix} />
          <p className="text-gray-700 mt-3">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
