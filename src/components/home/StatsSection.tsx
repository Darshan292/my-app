import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Products', value: 100, suffix: '+' },
  { label: 'Countries Served', value: 45, suffix: '+' },
  { label: 'Units Monthly Production', value: 1, suffix: 'M+' },
  { label: 'Years Experience', value: 20, suffix: '+' },
];

const Counter = ({ value, duration = 2, suffix = '' }: { value: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const StatsSection = () => {
  return (
    <section className="py-16 bg-white border-y border-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
