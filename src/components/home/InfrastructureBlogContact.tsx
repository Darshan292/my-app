import React from 'react';
import { motion } from 'framer-motion';
import { Factory, FlaskConical, ShieldAlert, Thermometer, MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const infraItems = [
  { title: 'Manufacturing Units', description: 'Equipped with state-of-the-art injection molding machines and automated production lines.', icon: Factory },
  { title: 'Quality Control Labs', description: 'In-house testing facility for mechanical, chemical and biological parameter verification.', icon: ShieldAlert },
  { title: 'R&D Facilities', description: 'Advanced prototyping and research center for new medical device development.', icon: FlaskConical },
  { title: 'Sterile Environment', description: 'ISO 7 (Class 10k) and ISO 8 (Class 100k) certified clean room assembly areas.', icon: Thermometer },
];

const blogPosts = [
  { title: 'Catheter Manufacturing Process', excerpt: 'A deep dive into the precision steps required for sterile catheter production.', date: 'Oct 15, 2025', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8cee3650-1197-4440-9989-dc56b6607386.jpg' },
  { title: 'Importance of Sterile Devices', excerpt: 'Why sterilization validation is the most critical step in medical manufacturing.', date: 'Nov 02, 2025', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_2a062099-0910-4bd0-8dbc-7f9e365aceea.jpg' },
  { title: 'Innovations in Urology', excerpt: 'New trends and equipment shaping the future of urological patient care.', date: 'Dec 12, 2025', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4a7f05f3-f7d1-4ed9-a9a2-daaed101acde.jpg' },
];

export const InfrastructureBlogContact = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you for your inquiry. We will get back to you soon!');
    form.reset();
  };

  return (
    <div className="space-y-0">
      {/* Infrastructure Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">World-Class Infrastructure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Built on cutting-edge technology and uncompromising quality standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infraItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Latest Insights</h2>
              <p className="text-lg text-muted-foreground">Expert perspectives on medical device manufacturing and healthcare trends.</p>
            </div>
            <Button asChild variant="ghost" className="text-secondary font-bold group">
              <a href="/blog">View All Articles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 rounded-3xl group">
                  <div className="h-56 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <CardContent className="p-8">
                    <div className="text-sm text-secondary font-bold mb-3">{post.date}</div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{post.excerpt}</p>
                    <Button onClick={() => alert(`Reading article: ${post.title}`)} variant="outline" className="rounded-xl border-primary/20 hover:bg-primary hover:text-white transition-all">Read More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary text-white overflow-hidden" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-secondary font-bold text-lg mb-2 uppercase tracking-widest">Contact Us</h4>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Get in Touch with Our Experts</h2>
                <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                  Whether you have a product inquiry, need technical support, or want to discuss a partnership, our team is here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Corporate Office</h3>
                    <p className="text-white/70">10/9, 24th Cross, Srikrishna Badavane, Hulimavu, Bannerghatta Road, Bangalore - 560076</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us</h3>
                    <p className="text-white/70">+91 9972862757 / 8147059994</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email Us</h3>
                    <p className="text-white/70">info@manishmedi.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden h-[300px] border border-white/20">
                {/* Google Map Iframe Placeholder */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_LJOYJL-84SMuxNB7LtRGhxEQLjswvy0&q=Srikrishna+Badavane+Hulimavu+Bangalore" 
                  allowFullScreen
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-10 lg:p-16 text-primary shadow-2xl"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-bold">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="border-muted bg-muted/50 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-bold">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="border-muted bg-muted/50 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Inquiry about Product X" className="border-muted bg-muted/50 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[150px] border-muted bg-muted/50 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-14 rounded-xl text-lg group">
                    Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
