import React from 'react';
import { ShoppingBag, Menu, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-secondary lg:hidden">
              <Menu size={24} />
            </button>
            <div className="flex-shrink-0 flex items-center ml-2 lg:ml-0">
              <span className="text-xl font-bold tracking-tight text-primary">LUMINA</span>
            </div>
            <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
              <a href="#" className="text-sm font-medium text-primary hover:text-accent transition-colors">Shop All</a>
              <a href="#" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Collections</a>
              <a href="#" className="text-sm font-medium text-secondary hover:text-primary transition-colors">About</a>
              <a href="#" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Journal</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-secondary hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-secondary hover:text-primary transition-colors hidden sm:block">
              <User size={20} />
            </button>
            <button className="p-2 text-secondary hover:text-primary transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 block h-4 w-4 rounded-full bg-accent text-[10px] font-bold text-white flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
