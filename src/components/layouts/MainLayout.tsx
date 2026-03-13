import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { motion, useScroll, useSpring } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Research & Innovation', href: '/innovation' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Amazon Products', href: '/amazon-products' },
  { name: 'GeM Products', href: '/gem-products' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const categories = [
  'Urology',
  'Radiology',
  'Gastroenterology',
  'Gynecology',
  'Nephrology',
];

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              MM
            </div>
            <span className={cn(
              "font-bold text-xl tracking-tight hidden md:block",
              isScrolled ? "text-primary" : "text-primary"
            )}>
              Manish Medi <span className="text-secondary">Innovation</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.href 
                    ? "text-secondary bg-secondary/10" 
                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "text-lg font-semibold px-2 py-1",
                        location.pathname === item.href ? "text-secondary" : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <hr className="my-4" />
                  <Button onClick={() => alert('Catalog requested!')} className="bg-primary hover:bg-primary/90">Request Catalog</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Manish Medi Innovation</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Leading manufacturer of medical disposable devices for Urology, Radiology, Gastroenterology, Gynecology and Nephrology. Committed to quality and innovation since 2004.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navigation.slice(0, 5).map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-primary-foreground/70 hover:text-secondary transition-colors flex items-center">
                      <span className="mr-2">›</span> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h4 className="text-lg font-bold mb-6">Product Categories</h4>
              <ul className="space-y-3">
                {categories.map(cat => (
                  <li key={cat}>
                    <Link to={`/products?category=${cat}`} className="text-primary-foreground/70 hover:text-secondary transition-colors flex items-center">
                      <span className="mr-2">›</span> {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary shrink-0" />
                  <span>10/9, 24th Cross, Srikrishna Badavane, Hulimavu, Bannerghatta Road, Bangalore - 560076</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <span>+91 9972862757 / 8147059994</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary shrink-0" />
                  <span>info@manishmedi.com</span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-white/10 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/50">
            <p>© 2026 Manish Medi Innovation. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
        <a
          href="https://wa.me/919972862757"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
        <Link
          to="/contact"
          className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <Phone className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};
