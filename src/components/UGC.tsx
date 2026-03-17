import React from 'react';
import { Instagram } from 'lucide-react';

const ugcImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1529139513065-07b3b1263d61?auto=format&fit=crop&q=80&w=400"
];

export default function UGC() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Lumina in the Wild</h2>
            <p className="text-secondary">Tag us @lumina_essentials to be featured.</p>
          </div>
          <button className="mt-6 sm:mt-0 flex items-center space-x-2 text-primary font-bold hover:text-accent transition-colors">
            <Instagram size={20} />
            <span>Follow us on Instagram</span>
          </button>
        </div>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-8">
        {ugcImages.map((img, idx) => (
          <div key={idx} className="flex-none w-64 sm:w-80 aspect-[3/4] rounded-2xl overflow-hidden relative group">
            <img 
              src={img} 
              alt="User Generated Content" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white" size={32} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
