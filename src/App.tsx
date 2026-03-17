import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofStrip from './components/SocialProofStrip';
import FeaturedCollection from './components/FeaturedCollection';
import Benefits from './components/Benefits';
import HeroProduct from './components/HeroProduct';
import Stats from './components/Stats';
import UGC from './components/UGC';
import Reviews from './components/Reviews';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <SocialProofStrip />
        <FeaturedCollection />
        <Benefits />
        <HeroProduct />
        <Stats />
        <UGC />
        <Reviews />
        <TrustSection />
        
        {/* Final CTA Section */}
        <section className="py-24 bg-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-12 sm:p-20 rounded-[32px] shadow-sm border border-border">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Ready to elevate your everyday?
              </h2>
              <p className="text-lg text-secondary mb-10 max-w-xl mx-auto">
                Join 50,000+ others who have upgraded their lifestyle with Lumina. Risk-free 60-day trial on all orders.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-accent text-white font-bold text-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 flex items-center justify-center group">
                  Shop All Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
                </button>
                <p className="text-sm font-semibold text-secondary">Free shipping on orders $100+</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
