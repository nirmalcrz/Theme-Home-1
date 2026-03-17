import React from 'react';

const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "1.2M+", label: "Products Delivered" },
  { value: "24/7", label: "Expert Support" },
  { value: "0", label: "Hidden Fees" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
