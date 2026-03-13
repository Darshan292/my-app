import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LayoutGrid, ExternalLink, Download, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const gemProducts = [
  { id: 1, name: 'Foley Balloon Catheter (Bulk)', spec: 'IS 13485 Certified, Sterile 2-way', description: 'Available in sizes 6-24 Fr, 100% silicone balloon.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_a9b06a33-ba5b-40ba-9677-98021f9c9d00.jpg', url: 'https://gem.gov.in' },
  { id: 2, name: 'Urinary Drainage Bag (2000ml)', spec: 'Anti-reflux valve, Sterile packaging', description: 'T-type valve, universal connector, 100cm tube.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_9ecfd405-0d4f-4ab5-b3ef-60d154927409.jpg', url: 'https://gem.gov.in' },
  { id: 3, name: 'Biopsy Forceps - Endoscopy', spec: 'Coated/Non-coated, various lengths', description: 'Sterile single use, high quality medical steel.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e6f54573-9c6c-4fe3-8565-2ec70d57ed65.jpg', url: 'https://gem.gov.in' },
  { id: 4, name: 'Double J Stent (Pack of 10)', spec: 'Ureteral stent with multi-side holes', description: 'Polyurethane material, radiopaque, standard curve.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4a7f05f3-f7d1-4ed9-a9a2-daaed101acde.jpg', url: 'https://gem.gov.in' },
  { id: 5, name: 'IUI Catheter (Sterile)', spec: 'Insemination catheter, atraumatic', description: 'Flexible tip for easy navigation, non-toxic.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_fdfa5e5c-9534-4551-9420-a0647775aa19.jpg', url: 'https://gem.gov.in' },
  { id: 6, name: 'Guide Wire (PTFE)', spec: 'Stainless steel core, PTFE coated', description: 'Smooth passage, varied tip stiffness available.', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b8d86012-3ded-4397-9af9-671d6762293e.jpg', url: 'https://gem.gov.in' },
];

const GeMProductsPage = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-primary text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-white rounded-2xl mx-auto flex items-center justify-center mb-6 text-primary shadow-2xl shadow-black/20"
          >
            <LayoutGrid className="h-10 w-10" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            GeM Marketplace
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Institutional procurement portal for government entities with authorized medical device listings.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-[#F0F7FF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center mb-16 gap-8">
            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full border shadow-sm">
              <ShieldCheck className="h-5 w-5 text-gem" />
              <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Government Approved</span>
            </div>
            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full border shadow-sm">
              <ShieldCheck className="h-5 w-5 text-gem" />
              <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Authorized Seller</span>
            </div>
            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full border shadow-sm">
              <ShieldCheck className="h-5 w-5 text-gem" />
              <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Quality Certified</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gemProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-xl rounded-[2rem] hover:ring-4 ring-primary/10 transition-all group">
                  <div className="h-64 relative bg-white flex items-center justify-center p-12">
                    <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <CardContent className="p-10">
                    <span className="text-gem font-bold uppercase tracking-widest text-xs mb-2 block">{p.spec}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.name}</h3>
                    <p className="text-slate-600 mb-8 line-clamp-2">{p.description}</p>
                    <div className="flex gap-4">
                      <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl h-14 font-bold text-lg group shadow-lg shadow-primary/30 transition-all">
                        <a href={p.url} target="_blank" rel="noopener noreferrer">
                          View on GeM <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                        <Button onClick={() => alert('Downloading product specification...')} variant="outline" size="icon" className="h-14 w-14 rounded-xl border-primary text-primary hover:bg-primary hover:text-white transition-all">
                        <Download className="h-6 w-6" />
                      </Button>
                    </div>
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

export default GeMProductsPage;
