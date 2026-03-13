import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ProductCategories } from '@/components/home/ProductCategories';
import { SampleProducts } from '@/components/home/SampleProducts';
import { InnovationCertifications } from '@/components/home/InnovationCertifications';
import { AmazonGeMSection } from '@/components/home/AmazonGeMSection';
import { InfrastructureBlogContact } from '@/components/home/InfrastructureBlogContact';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProductCategories />
      <SampleProducts />
      <InnovationCertifications />
      <AmazonGeMSection />
      <InfrastructureBlogContact />
    </div>
  );
};

export default HomePage;
