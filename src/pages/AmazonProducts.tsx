import React from 'react';
import { PageHero } from '@/components/common/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const amazonProducts = [
  { id: 1, name: 'Endoscopy Biopsy Forceps', price: '₹4,999', rating: 4.8, description: 'Sterile, single-use, 2.3mm cup diameter, 2300mm length.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e6f54573-9c6c-4fe3-8565-2ec70d57ed65.jpg', url: 'https://amazon.in' },
  { id: 2, name: 'Nasojejunal Tube', price: '₹1,250', rating: 4.5, description: 'Medical grade PVC, weighted tip, X-ray opaque line.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_552f3a31-dd7f-447a-a51e-b567478b707d.jpg', url: 'https://amazon.in' },
  { id: 3, name: 'Ureteral Stent Set', price: '₹2,800', rating: 4.9, description: 'Includes stent, pusher and PTFE guide wire.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4a7f05f3-f7d1-4ed9-a9a2-daaed101acde.jpg', url: 'https://amazon.in' },
  { id: 4, name: 'Pigtail Drainage Catheter', price: '₹1,550', rating: 4.6, description: '8.5F, 25cm length, sterile packaging.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_98390de1-baaa-44fd-93dc-543df90caf58.jpg', url: 'https://amazon.in' },
  { id: 5, name: 'Biliary Stent', price: '₹3,400', rating: 4.7, description: 'Teflon/Polyurethane, varied lengths.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b8d86012-3ded-4397-9af9-671d6762293e.jpg', url: 'https://amazon.in' },
  { id: 6, name: 'Endoscopic Cleaning Brush', price: '₹450', rating: 4.4, description: 'Double-ended, extra long for GI scope channels.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_552f3a31-dd7f-447a-a51e-b567478b707d.jpg', url: 'https://amazon.in' },
];

const AmazonProductsPage = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-[#FF9900] text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-white rounded-2xl mx-auto flex items-center justify-center mb-6 text-[#FF9900] shadow-2xl shadow-black/20"
          >
            <ShoppingCart className="h-10 w-10" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Amazon Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Shop our premium medical disposable devices directly on Amazon with Prime delivery options.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-[#FFF9F2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amazonProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-xl rounded-[2rem] hover:ring-4 ring-[#FF9900]/20 transition-all group">
                  <div className="h-64 relative bg-white flex items-center justify-center p-12">
                    <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <CardContent className="p-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-[#FF9900]">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm font-bold text-slate-900">{p.rating} Rating</span>
                      </div>
                      <span className="text-xl font-bold text-slate-900">{p.price}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.name}</h3>
                    <p className="text-slate-600 mb-8 line-clamp-2">{p.description}</p>
                    <Button asChild className="w-full bg-[#FF9900] hover:bg-[#E68A00] text-white rounded-xl h-14 font-bold text-lg group shadow-lg shadow-[#FF9900]/30 transition-all">
                      <a href={p.url} target="_blank" rel="noopener noreferrer">
                        Buy on Amazon <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
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

export default AmazonProductsPage;
