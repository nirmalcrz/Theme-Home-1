import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins",
    rating: 5,
    text: "The quality is absolutely unmatched. I've tried many DTC brands, but Lumina is in a league of its own. The attention to detail is incredible.",
    date: "2 weeks ago"
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "Fast shipping and even better customer service. I had a small issue with my order and they resolved it within an hour. Highly recommend!",
    date: "1 month ago"
  },
  {
    name: "Emma Wilson",
    rating: 5,
    text: "Beautifully packaged and the product itself exceeded my expectations. It's rare to find a brand that actually delivers on its promises.",
    date: "3 days ago"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">What Our Community Says</h2>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex text-highlight">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="font-bold text-primary">4.9/5 Based on 12,400+ reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-border relative">
              <Quote className="absolute top-6 right-6 text-bg" size={40} />
              <div className="flex text-highlight mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-primary font-medium mb-6 leading-relaxed italic">"{review.text}"</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary">{review.name}</span>
                <span className="text-xs text-secondary font-semibold uppercase tracking-wider">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
