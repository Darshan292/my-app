import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certs = [
  { name: 'ISO 13485', issuer: 'Quality Management for Medical Devices', badge: 'ISO' },
  { name: 'CE Certification', issuer: 'EU Standard Compliance', badge: 'CE' },
  { name: 'Indian FDA Approval', issuer: 'Regulatory Compliance (CDSCO)', badge: 'FDA' },
];

export const InnovationCertifications = () => {
  return (
    <div className="space-y-0">
      {/* Research & Innovation Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-secondary font-bold text-lg mb-4 uppercase tracking-widest">Research & Innovation</h4>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Advancing Healthcare Through Constant <span className="text-secondary">Innovation</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Medical-Grade Materials</h3>
                    <p className="text-white/70">Using bio-compatible medical grade plastics and metals to ensure maximum safety and patient comfort.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">International Testing Standards</h3>
                    <p className="text-white/70">Each product undergoes rigorous testing protocols to meet and exceed global regulatory requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Precision Engineering</h3>
                    <p className="text-white/70">Our manufacturing utilizes high-precision injection molding and automated assembly lines.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              <div className="w-full max-w-[500px] aspect-square bg-secondary/10 rounded-full border border-secondary/20 flex items-center justify-center relative p-12">
                <div className="w-full h-full bg-secondary/20 rounded-full border border-secondary/30 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 bg-secondary/30 rounded-full border border-secondary/40 flex items-center justify-center">
                    <img
                      src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_7194c492-1d19-47c5-a2a7-c3f99a7b90ae.jpg"
                      alt="Innovation Hub"
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                </div>
                {/* Floating labels */}
                <div className="absolute top-10 right-0 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">R&D Hub</div>
                <div className="absolute bottom-1/4 -left-10 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">Clean Room 10k</div>
                <div className="absolute bottom-10 right-1/4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">Prototyping</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">International Quality Standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our commitment to safety is backed by industry-leading certifications and global regulatory approvals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certs.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-none bg-muted/30 hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group">
                  <CardContent className="p-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all">
                      <Shield className="h-10 w-10 text-primary group-hover:text-white" />
                    </div>
                    <div className="text-secondary font-bold text-2xl mb-2">{cert.badge}</div>
                    <h3 className="text-xl font-bold text-primary mb-3">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.issuer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
