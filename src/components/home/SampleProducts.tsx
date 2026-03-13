import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Biopsy Punch',
    category: 'Gastroenterology',
    description: 'Precision forceps for endoscopic tissue sampling.',
    image: '/images/products/biopsy-punch.jpeg'
  },
  {
    name: 'Ellicks Evacuator',
    category: 'Urology',
    description: 'Device used for removal of bladder debris and clots.',
    image: '/images/products/elicks-evacuator.jpeg'
  },
  {
    name: 'Metal Dilator',
    category: 'Urology',
    description: 'Medical dilator used for urethral dilation procedures.',
    image: '/images/products/metal-dilator.jpeg'
  },
  {
    name: 'PCN Catheter',
    category: 'Urology',
    description: 'Percutaneous nephrostomy catheter for kidney drainage.',
    image: '/images/products/pcn-catheter.jpeg'
  },
  {
    name: 'Penile Clamp',
    category: 'Urology',
    description: 'Device used for management of urinary incontinence.',
    image: '/images/products/penile-clamp.jpeg'
  }
];
export const SampleProducts = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-primary mb-4"
            >
              Our Featured Products
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Precision-engineered medical devices trusted by healthcare professionals worldwide.
            </motion.p>
          </div>
          <Button asChild variant="ghost" className="text-secondary hover:text-secondary/80 font-bold group">
            <a href="/products">View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.2 }
              }}
              style={{ perspective: 1000 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl group">
                <div className="h-64 relative overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <Button onClick={() => alert(`Viewing details for ${product.name}`)} variant="outline" className="w-full rounded-xl hover:bg-primary hover:text-white transition-all border-primary/20">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
