import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Microscope, Zap, Thermometer, Activity, FlaskConical } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  { name: 'Urology', icon: Microscope, color: 'bg-blue-500', description: 'Solutions for urinary tract and reproductive health.' },
  { name: 'Radiology', icon: Zap, color: 'bg-purple-500', description: 'Interventional radiology and diagnostic equipment.' },
  { name: 'Gastroenterology', icon: Activity, color: 'bg-green-500', description: 'Advanced tools for digestive system procedures.' },
  { name: 'Gynecology', icon: Thermometer, color: 'bg-pink-500', description: 'Comprehensive female reproductive healthcare products.' },
  { name: 'Nephrology', icon: FlaskConical, color: 'bg-cyan-500', description: 'Specialized equipment for kidney-related therapies.' },
];

export const ProductCategories = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-4"
          >
            Product Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We manufacture a wide range of specialized medical disposables across five major clinical domains.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              className="cursor-pointer group"
            >
              <Link to={`/products?category=${cat.name}`}>
                <Card className="h-full border-none shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:ring-2 ring-secondary/50">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                      <cat.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
