import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroProduct() {
  return (
    <section className="py-20 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border lg:grid lg:grid-cols-2 items-center">
          <div className="relative aspect-square lg:aspect-auto lg:h-full">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000" 
              alt="Bestseller Product"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-highlight text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Bestseller
            </div>
          </div>
          
          <div className="p-8 lg:p-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">The Hero Piece</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Sound Reimagined: The Lumina Studio Pro</h3>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Experience audio like never before. Our flagship headphones combine studio-grade sound with all-day comfort and industry-leading noise cancellation.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "40-hour battery life with fast charging",
                "Advanced active noise cancellation",
                "Sustainable vegan leather ear pads",
                "Custom-tuned 40mm drivers"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-primary font-medium">
                  <CheckCircle2 className="text-highlight mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all flex items-center justify-center group">
                Shop Studio Pro
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <div className="text-center sm:text-left">
                <p className="text-2xl font-bold text-primary">$349</p>
                <p className="text-xs text-secondary font-medium">Or 4 payments of $87.25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
