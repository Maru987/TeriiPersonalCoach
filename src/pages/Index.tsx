import React from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import About from '@/components/About';
import BookingSection from '@/components/BookingSection';
import SocialMedia from '@/components/SocialMedia';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Services />
      <BookingSection />
      <SocialMedia />
    </div>
  );
};

export default Index;
