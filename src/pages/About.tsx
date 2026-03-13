import React from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Lightbulb, ShieldCheck, Factory, Users, Target, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <PageHero 
        title="About Us" 
        subtitle="Dedicated to excellence in medical device manufacturing since 2004." 
      />

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-8"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Manish Medi Innovation was founded with a singular purpose: to provide high-quality, reliable, and innovative medical disposable devices that improve patient care and support medical professionals in their critical work.
            </p>
            <p>
              Over the past two decades, we have grown from a small manufacturing unit to a global player, exporting to over 45 countries and maintaining the highest standards of quality and regulatory compliance. Our state-of-the-art facility in Bangalore is at the heart of everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality First', icon: ShieldCheck, desc: 'Uncompromising standards in every product we manufacture.' },
              { title: 'Innovation', icon: Lightbulb, desc: 'Constant R&D to bring the latest technology to surgical theaters.' },
              { title: 'Global Reach', icon: Globe, desc: 'Serving diverse healthcare needs across the globe.' },
              { title: 'Customer Centric', icon: Users, desc: 'Building long-term partnerships through reliability and trust.' },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all rounded-3xl">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                      <value.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership/Team Placeholder */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide our growth and innovation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
             <div className="text-center p-8 bg-muted/20 rounded-3xl">
                <Rocket className="h-12 w-12 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Integrity</h3>
                <p className="text-muted-foreground">Operating with complete transparency and ethical standards in all our business dealings.</p>
             </div>
             <div className="text-center p-8 bg-muted/20 rounded-3xl">
                <Target className="h-12 w-12 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Focus</h3>
                <p className="text-muted-foreground">Concentrating on specialized medical domains to provide the most effective solutions.</p>
             </div>
             <div className="text-center p-8 bg-muted/20 rounded-3xl">
                <Factory className="h-12 w-12 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Excellence</h3>
                <p className="text-muted-foreground">Striving for perfection in manufacturing and quality control protocols.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
