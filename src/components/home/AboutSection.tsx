import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Lightbulb, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  { title: 'Precision Manufacturing', description: 'Advanced ISO-certified facilities with 10k/100k clean room standards.', icon: CheckCircle },
  { title: 'Global Export Network', description: 'Trusted partner for medical facilities across 45+ countries worldwide.', icon: Globe },
  { title: 'Advanced R&D', description: 'Dedicated R&D team focused on innovation and clinical efficacy.', icon: Lightbulb },
  { title: 'Medical Grade Quality', description: 'Using only premium, bio-compatible materials for maximum safety.', icon: ShieldCheck },
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8cee3650-1197-4440-9989-dc56b6607386.jpg"
                alt="Manufacturing Facility"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-0" />
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-muted">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-white font-bold text-3xl">
                  20+
                </div>
                <div>
                  <p className="font-bold text-primary">Years of</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-secondary font-bold text-lg mb-2 uppercase tracking-widest">About Manish Medi Innovation</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Pioneering Precision in <span className="text-secondary">Medical Device</span> Manufacturing
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2004, Manish Medi Innovation has established itself as a premier manufacturer of high-quality medical disposable devices. We combine advanced technology with deep clinical insights to deliver solutions that improve patient outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <Card key={item.title} className="border-none shadow-sm bg-muted/30">
                  <CardContent className="p-6 space-y-3">
                    <item.icon className="h-8 w-8 text-secondary" />
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
