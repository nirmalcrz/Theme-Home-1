import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold tracking-tight text-primary mb-6 block">LUMINA</span>
            <p className="text-secondary mb-6 leading-relaxed">
              Elevating daily rituals through premium essentials and sustainable craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-secondary hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-secondary hover:text-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-secondary hover:text-accent transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Shop</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">All Products</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Bestsellers</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Collections</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-secondary mb-4 text-sm">Join our community for early access and exclusive offers.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm"
              />
              <button className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all text-sm">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-secondary">
          <p>© 2026 Lumina Essentials. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
