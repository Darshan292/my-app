import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const words = ["Precision Medical Devices", "Quality Healthcare Solutions", "Innovation in Surgery"];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_2a062099-0910-4bd0-8dbc-7f9e365aceea.jpg"
          alt="Medical Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {words[index].substring(0, subIndex)}
            <span className="animate-pulse">|</span>
            <br />
            <span className="text-secondary">Built for Global Healthcare</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl"
          >
            Leading manufacturer of medical disposable devices for Urology, Radiology, Gastroenterology, Gynecology and Nephrology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white bg-white/5 border-white hover:bg-white/10 px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle floating shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-1" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-1" />
    </section>
  );
};
