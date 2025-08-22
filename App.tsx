
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Modules } from './components/Modules';
import { CtaBanner } from './components/CtaBanner';
import { Testimonials } from './components/Testimonials';
import { Offer } from './components/Offer';
import { Guarantee } from './components/Guarantee';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Modules />
        <CtaBanner />
        <Testimonials />
        <Offer />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
