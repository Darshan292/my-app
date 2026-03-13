import React from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you for your message. We will get back to you shortly!');
    form.reset();
  };

  return (
    <div className="flex flex-col">
      <PageHero 
        title="Contact Us" 
        subtitle="We're here to help. Reach out to us for any inquiries or support." 
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Let's Connect</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Our dedicated support team is available to assist you with product details, technical specifications, and global partnership opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Office Address</h3>
                    <p className="text-muted-foreground text-sm">
                      10/9, 24th Cross, Srikrishna Badavane, Hulimavu, Bannerghatta Road, Bangalore - 560076
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Phone Numbers</h3>
                    <p className="text-muted-foreground text-sm">
                      +91 9972862757 <br /> +91 8147059994
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Email Inquiries</h3>
                    <p className="text-muted-foreground text-sm">
                      info@manishmedi.com <br /> sales@manishmedi.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Working Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Mon - Sat: 9:00 AM - 6:00 PM <br /> Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] overflow-hidden h-[400px] border border-muted shadow-2xl relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_LJOYJL-84SMuxNB7LtRGhxEQLjswvy0&q=Srikrishna+Badavane+Hulimavu+Bangalore" 
                  allowFullScreen
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 max-w-[200px]">
                   <h4 className="font-bold text-primary text-sm flex items-center">
                     <Globe className="mr-2 h-4 w-4 text-secondary" /> Visit Us
                   </h4>
                   <p className="text-xs text-muted-foreground mt-1">Our corporate office is located in the heart of Bangalore's medical manufacturing hub.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-muted/30 rounded-[3rem] p-10 lg:p-16 border border-muted relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2 group-hover:bg-secondary/10 transition-colors" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-8">Send a Message</h3>
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
                              <Input placeholder="John Doe" className="border-muted bg-white/80 rounded-xl h-12" {...field} />
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
                              <Input placeholder="john@example.com" className="border-muted bg-white/80 rounded-xl h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-bold">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 XXXXX XXXXX" className="border-muted bg-white/80 rounded-xl h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-bold">Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Inquiry about Product X" className="border-muted bg-white/80 rounded-xl h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-bold">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="How can we help you?" className="min-h-[180px] border-muted bg-white/80 rounded-xl p-4" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-xl text-lg group shadow-xl shadow-primary/20 transition-all">
                      Send Inquiry <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
