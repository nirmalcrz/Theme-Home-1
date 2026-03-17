import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-highlight">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium text-secondary">Trusted by 50,000+ happy customers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Elevate your daily <span className="text-accent">rituals</span> with Lumina.
            </h1>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Premium essentials designed for the modern lifestyle. Sustainably sourced, meticulously crafted, and delivered straight to your door.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 group">
                Shop the Collection
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary font-semibold border border-border hover:bg-gray-50 transition-all">
                Learn Our Story
              </button>
            </div>
            
            <div className="mt-10 flex items-center space-x-8 border-t border-border pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">4.9/5</p>
                <p className="text-xs text-secondary uppercase tracking-wider font-semibold">Average Rating</p>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-secondary uppercase tracking-wider font-semibold">Carbon Neutral</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000" 
                alt="Lumina Hero Product" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden sm:block max-w-[200px]">
              <p className="text-sm font-bold text-primary mb-1">New Arrival</p>
              <p className="text-xs text-secondary">The Obsidian Series is now available for early access.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
