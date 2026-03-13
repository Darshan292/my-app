import React from 'react';
import { PageHero } from '@/components/common/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  { id: 1, title: 'Catheter Manufacturing Process', excerpt: 'A deep dive into the precision steps required for sterile catheter production and clean room standards.', author: 'Dr. Ramesh Kumar', date: 'Oct 15, 2025', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8cee3650-1197-4440-9989-dc56b6607386.jpg', category: 'Manufacturing' },
  { id: 2, title: 'Importance of Sterile Medical Devices', excerpt: 'Why sterilization validation is the most critical step in medical manufacturing for patient safety.', author: 'Priya Sharma', date: 'Nov 02, 2025', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_2a062099-0910-4bd0-8dbc-7f9e365aceea.jpg', category: 'Quality Assurance' },
  { id: 3, title: 'Innovations in Urology Equipment', excerpt: 'New trends and equipment shaping the future of urological patient care and minimal invasive surgery.', author: 'Suresh Varma', date: 'Dec 12, 2025', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4a7f05f3-f7d1-4ed9-a9a2-daaed101acde.jpg', category: 'Innovation' },
  { id: 4, title: 'Medical Device Quality Standards', excerpt: 'Understanding ISO 13485 and its role in global healthcare delivery and device reliability.', author: 'Anita Gupta', date: 'Jan 20, 2026', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8cee3650-1197-4440-9989-dc56b6607386.jpg', category: 'Regulatory' },
  { id: 5, title: 'Advancements in GI Biopsy Tools', excerpt: 'How precision engineering is improving tissue sampling outcomes in gastroenterology procedures.', author: 'Dr. Arun Sethi', date: 'Feb 10, 2026', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e6f54573-9c6c-4fe3-8565-2ec70d57ed65.jpg', category: 'Innovation' },
  { id: 6, title: 'Sustainability in Medical Manufacturing', excerpt: 'Exploring eco-friendly materials and energy-efficient production in the medical device industry.', author: 'Vivek Mehta', date: 'Mar 05, 2026', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_bc8fcc45-de62-48f3-a3ad-ce01fdcb0b6f.jpg', category: 'Corporate' },
];

const BlogPage = () => {
  return (
    <div className="flex flex-col">
      <PageHero 
        title="Knowledge Hub" 
        subtitle="Insights, updates, and innovations from the world of medical device manufacturing." 
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group">
                      <div className="h-56 relative overflow-hidden bg-muted">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                        />
                      </div>
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4 mb-4 text-xs font-bold uppercase tracking-widest text-secondary">
                          <span className="bg-secondary/10 px-3 py-1 rounded-full">{post.category}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2 leading-tight">{post.title}</h3>
                        <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                        <hr className="mb-6 border-muted" />
                        <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" /> {post.date}
                          </div>
                          <div className="flex items-center">
                            <User className="mr-1 h-3 w-3" /> {post.author}
                          </div>
                        </div>
                        <Button asChild variant="link" className="p-0 h-auto mt-6 font-bold text-primary hover:text-secondary transition-colors group">
                           <a href="#">Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-12">
               <div className="bg-muted/30 p-8 rounded-3xl border border-muted">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <Search className="mr-2 h-5 w-5" /> Search Blog
                  </h3>
                  <div className="relative">
                    <Input placeholder="Search articles..." className="rounded-xl pr-12 h-12 border-muted shadow-sm focus:ring-secondary" />
                    <Button onClick={() => alert('Searching...')} variant="ghost" size="icon" className="absolute right-1 top-1 h-10 w-10 text-muted-foreground hover:text-primary">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
               </div>

               <div className="bg-muted/30 p-8 rounded-3xl border border-muted">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <Tag className="mr-2 h-5 w-5" /> Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Manufacturing', 'Quality Assurance', 'Innovation', 'Regulatory', 'Corporate', 'Healthcare'].map((tag) => (
                      <Badge key={tag} variant="outline" className="px-4 py-2 rounded-lg cursor-pointer hover:bg-primary hover:text-white transition-all">
                        {tag}
                      </Badge>
                    ))}
                  </div>
               </div>

               <div className="bg-primary text-white p-10 rounded-3xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
                    <p className="text-white/70 mb-8 text-sm leading-relaxed">Stay updated with our latest innovations and industry insights.</p>
                    <Input placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 mb-4 h-12" />
                    <Button onClick={() => alert('Subscribed!')} className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12">Subscribe Now</Button>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
