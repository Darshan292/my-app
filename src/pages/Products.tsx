import React, { useState, useMemo } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Urology', 'Radiology', 'Gastroenterology', 'Gynecology', 'Nephrology'];

const products = [
  { 
    id: 1,
    name: 'Biopsy Punch',
    category: 'Gastroenterology',
    description: 'Precision forceps for endoscopic tissue sampling. Available in various sizes and cup types.',
    image: '/images/products/biopsy punch.jpeg'
  },
  { 
    id: 2,
    name: 'Ellicks Evacuator',
    category: 'Urology',
    description: 'Device used for removal of bladder debris and clots.',
    image: '/images/products/elicks evacuator.jpeg'
  },
  { 
    id: 3,
    name: 'Metal Dilator',
    category: 'Urology',
    description: 'Medical dilator used for urethral dilation procedures.',
    image: '/images/products/metal dilator.jpeg'
  },
  { 
    id: 4,
    name: 'PCN Catheter',
    category: 'Urology',
    description: 'Percutaneous nephrostomy catheter with needle and guide wire.',
    image: '/images/products/pcn catheter.jpeg'
  },
  { 
    id: 5,
    name: 'Penile Clamp',
    category: 'Urology',
    description: 'Device used for management of urinary incontinence.',
    image: '/images/products/penile clamp.jpeg'
  }
];
const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col">
      <PageHero 
        title="Product Catalog" 
        subtitle="Exploring our extensive range of high-precision medical disposable devices." 
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Search and Filters */}
            <div className="w-full lg:w-1/4 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary flex items-center">
                  <Search className="mr-2 h-5 w-5" /> Search
                </h3>
                <Input 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-xl border-muted shadow-sm focus:ring-secondary"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary flex items-center">
                  <Filter className="mr-2 h-5 w-5" /> Categories
                </h3>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={activeCategory === cat ? 'default' : 'outline'}
                      className={activeCategory === cat ? 'bg-secondary text-white' : 'justify-start rounded-xl'}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-muted/30 rounded-2xl border border-muted-foreground/10">
                <h4 className="font-bold text-primary mb-2">Need a custom solution?</h4>
                <p className="text-sm text-muted-foreground mb-4">Contact our experts for specialized manufacturing requirements.</p>
                <Button className="w-full bg-primary" asChild>
                  <a href="/contact">Inquire Now</a>
                </Button>
              </div>

              <Button onClick={() => alert('Downloading Catalog...')} variant="outline" className="w-full rounded-xl border-secondary text-secondary hover:bg-secondary hover:text-white group">
                <Download className="mr-2 h-4 w-4" /> Download Catalog (PDF)
              </Button>
            </div>

            {/* Products Grid */}
            <div className="w-full lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">Showing {filteredProducts.length} products</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Sort by:</span>
                  <select className="bg-transparent border-none focus:ring-0 text-sm font-bold text-primary cursor-pointer">
                    <option>Newest First</option>
                    <option>Name A-Z</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((p) => (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full border-none shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
                        <div className="h-48 relative overflow-hidden bg-muted">
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                          />
                        </div>
                        <CardContent className="p-6">
                          <Badge variant="secondary" className="mb-3">{p.category}</Badge>
                          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{p.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.description}</p>
                          <Button onClick={() => alert(`Viewing details for ${p.name}`)} variant="link" className="p-0 h-auto font-bold text-secondary">
                            View Details →
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-24">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-primary">No products found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
