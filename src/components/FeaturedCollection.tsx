import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "The Essential Watch",
    price: "$189",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600",
    benefit: "Timeless design for every occasion"
  },
  {
    id: 2,
    name: "Leather Carryall",
    price: "$245",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=600",
    benefit: "Italian leather, lifetime durability"
  },
  {
    id: 3,
    name: "Minimalist Wallet",
    price: "$65",
    category: "Essentials",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600",
    benefit: "RFID protection, slim profile"
  },
  {
    id: 4,
    name: "Premium Sunglasses",
    price: "$120",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600",
    benefit: "Polarized lenses, lightweight frame"
  }
];

export default function FeaturedCollection() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Featured Collection</h2>
            <p className="text-secondary">Our most-loved pieces, curated for you.</p>
          </div>
          <a href="#" className="text-accent font-semibold hover:underline hidden sm:block">View All Products</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={18} />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg">
                    <ShoppingCart size={18} />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="text-lg font-bold text-primary mb-1">{product.name}</h3>
                <p className="text-sm text-secondary mb-3">{product.benefit}</p>
                <p className="text-xl font-bold text-primary">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 sm:hidden">
          <button className="w-full py-4 rounded-xl border border-border text-primary font-semibold">View All Products</button>
        </div>
      </div>
    </section>
  );
}
