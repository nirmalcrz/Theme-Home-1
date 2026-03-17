import React from 'react';
import { ShieldCheck, Truck, Headphones, RotateCcw } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-bg rounded-xl">
              <Truck className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-bold text-primary text-sm">Free Shipping</p>
              <p className="text-secondary text-xs">On all orders over $100</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-bg rounded-xl">
              <RotateCcw className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-bold text-primary text-sm">Easy Returns</p>
              <p className="text-secondary text-xs">60-day money back guarantee</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-bg rounded-xl">
              <ShieldCheck className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-bold text-primary text-sm">Secure Payment</p>
              <p className="text-secondary text-xs">100% protected checkout</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-bg rounded-xl">
              <Headphones className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-bold text-primary text-sm">24/7 Support</p>
              <p className="text-secondary text-xs">Dedicated expert assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
