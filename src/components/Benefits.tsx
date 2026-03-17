import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Leaf } from 'lucide-react';

const benefits = [
  {
    icon: <Truck className="text-accent" size={32} />,
    title: "Fast & Free Shipping",
    description: "Free express delivery on all orders over $100. Delivered in 2-3 business days."
  },
  {
    icon: <ShieldCheck className="text-accent" size={32} />,
    title: "Lifetime Guarantee",
    description: "We stand by our quality. If it breaks, we'll fix it or replace it, no questions asked."
  },
  {
    icon: <RefreshCw className="text-accent" size={32} />,
    title: "Easy 60-Day Returns",
    description: "Not quite right? Return your items within 60 days for a full refund or exchange."
  },
  {
    icon: <Leaf className="text-accent" size={32} />,
    title: "Ethically Sourced",
    description: "100% sustainable materials and fair wages for all our craftspeople."
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Why People Choose Lumina</h2>
          <p className="text-secondary text-lg">We've obsessed over every detail to ensure you get the best experience possible.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-bg rounded-2xl">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-secondary leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
