import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, LayoutGrid, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const amazonProducts = [
  { name: 'Endoscopy Biopsy Forceps', description: 'Sterile, single-use forceps for GI procedures.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e6f54573-9c6c-4fe3-8565-2ec70d57ed65.jpg', url: 'https://www.amazon.in' },
  { name: 'Nasojejunal Tube', description: 'Medical grade PVC, X-ray opaque line.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_552f3a31-dd7f-447a-a51e-b567478b707d.jpg', url: 'https://www.amazon.in' },
  { name: 'Ureteral Stent Set', description: 'Double J Stent with pusher and guide wire.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4a7f05f3-f7d1-4ed9-a9a2-daaed101acde.jpg', url: 'https://www.amazon.in' },
];

const gemProducts = [
  { name: 'Foley Catheter (Bulk)', spec: 'IS 13485 Certified, Sterile 2-way', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_a9b06a33-ba5b-40ba-9677-98021f9c9d00.jpg', url: 'https://gem.gov.in' },
  { name: 'Drainage Bag', spec: '2000ml, Anti-reflux valve, Sterile', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_9ecfd405-0d4f-4ab5-b3ef-60d154927409.jpg', url: 'https://gem.gov.in' },
];

export const AmazonGeMSection = () => {
  return (
    <div className="space-y-0">
      {/* Amazon Section */}
      <section className="py-24 bg-[#FFF9F2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#FF9900] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amazon/20">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Available on Amazon</h2>
                <p className="text-slate-600">Direct-to-consumer medical supplies with prime delivery.</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#E68A00] text-white font-bold group">
              <Link to="/amazon-products">
                View All on Amazon <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amazonProducts.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-56 relative bg-white flex items-center justify-center p-8">
                    <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{p.name}</h3>
                    <p className="text-sm text-slate-600 mb-6">{p.description}</p>
                    <Button asChild className="w-full bg-[#FF9900] hover:bg-[#E68A00] text-white">
                      <a href={p.url} target="_blank" rel="noopener noreferrer">
                        Buy on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GeM Section */}
      <section className="py-24 bg-[#F0F7FF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <LayoutGrid className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">GeM Marketplace</h2>
                <p className="text-slate-600">Government eMarketplace - Optimized for institutional procurement.</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold group">
              <Link to="/gem-products">
                View GeM Catalog <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gemProducts.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-md hover:shadow-xl transition-all">
                  <div className="w-full md:w-48 bg-white flex items-center justify-center p-6 border-b md:border-b-0 md:border-r">
                    <img src={p.image} alt={p.name} className="h-32 w-auto object-contain" />
                  </div>
                  <CardContent className="p-8 flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{p.name}</h3>
                    <p className="text-sm text-gem font-semibold mb-4">{p.spec}</p>
                    <Button asChild variant="outline" className="self-start border-primary text-primary hover:bg-primary hover:text-white">
                      <a href={p.url} target="_blank" rel="noopener noreferrer">
                        View on GeM <ExternalLink className="ml-2 h-4 w-4" />
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
