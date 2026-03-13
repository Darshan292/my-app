import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export const PageHero = ({ title, subtitle, image = 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_bc8fcc45-de62-48f3-a3ad-ce01fdcb0b6f.jpg' }: PageHeroProps) => {
  return (
    <section className="relative h-[400px] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};
