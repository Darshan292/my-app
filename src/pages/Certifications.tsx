import React from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, FileText, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CertificationsPage = () => {
  const certifications = [
    { title: 'ISO 13485:2016', description: 'Medical devices — Quality management systems — Requirements for regulatory purposes.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_7194c492-1d19-47c5-a2a7-c3f99a7b90ae.jpg', date: 'Valid until 2027' },
    { title: 'CE Certification', description: 'Conformité Européenne - Compliance with European health, safety, and environmental protection standards.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_bc8fcc45-de62-48f3-a3ad-ce01fdcb0b6f.jpg', date: 'Valid until 2026' },
    { title: 'Indian FDA Approval', description: 'CDSCO manufacturing license for specialized medical disposable devices.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_9ecfd405-0d4f-4ab5-b3ef-60d154927409.jpg', date: 'Valid until 2028' },
    { title: 'WHO-GMP Compliance', description: 'Good Manufacturing Practices for medicinal products and medical devices.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8cee3650-1197-4440-9989-dc56b6607386.jpg', date: 'Valid until 2027' },
  ];

  return (
    <div className="flex flex-col">
      <PageHero 
        title="Our Certifications" 
        subtitle="Unwavering commitment to international quality and regulatory standards." 
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Quality Assurance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain rigorous quality management systems to ensure that every device leaving our facility meets global healthcare standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="flex flex-col md:flex-row h-full overflow-hidden border-none shadow-xl rounded-[2rem] group hover:shadow-2xl transition-all duration-500">
                  <div className="w-full md:w-1/3 bg-muted/30 p-12 flex items-center justify-center border-b md:border-b-0 md:border-r">
                    <div className="relative">
                       <Award className="h-24 w-24 text-secondary opacity-20 absolute -top-4 -left-4" />
                       <Shield className="h-16 w-16 text-primary relative z-10" />
                    </div>
                  </div>
                  <CardContent className="p-10 flex-1 flex flex-col justify-center">
                    <span className="text-secondary font-bold text-sm mb-2 uppercase tracking-widest">{cert.date}</span>
                    <h3 className="text-2xl font-bold text-primary mb-4">{cert.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">{cert.description}</p>
                    <Button onClick={() => alert('Opening certificate...')} variant="outline" className="self-start rounded-xl border-primary text-primary hover:bg-primary hover:text-white group">
                      <FileText className="mr-2 h-4 w-4" /> View Certificate <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory and Testing standards */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">In-House Quality Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
              <CheckCircle className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Biological Safety</h3>
              <p className="text-sm text-white/70 text-center">Biocompatibility testing according to ISO 10993 standards.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
              <CheckCircle className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Physical Testing</h3>
              <p className="text-sm text-white/70 text-center">Tensile strength, leak testing and dimensional verification.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
              <CheckCircle className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sterility Assurance</h3>
              <p className="text-sm text-white/70 text-center">Strict validation for ETO and Gamma sterilization processes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
