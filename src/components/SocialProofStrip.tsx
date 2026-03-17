import React from 'react';

const logos = [
  "VOGUE", "Forbes", "GQ", "WIRED", "Esquire"
];

export default function SocialProofStrip() {
  return (
    <div className="bg-white border-y border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Customer"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-primary">Loved by 50,000+</p>
              <p className="text-secondary">Verified customers worldwide</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 grayscale">
            {logos.map((logo) => (
              <span key={logo} className="text-xl font-black tracking-tighter text-primary italic">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
