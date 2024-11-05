import React from 'react';
import { Shield } from 'lucide-react';

const ClientLogos = () => {
  const logos = [
    { name: 'Tech Corp', logo: Shield },
    { name: 'Secure Systems', logo: Shield },
    { name: 'Data Guard', logo: Shield },
    { name: 'Cyber Defense', logo: Shield },
    { name: 'Info Shield', logo: Shield },
    { name: 'Net Protect', logo: Shield },
  ];

  return (
    <section className="py-16 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400">Securing the digital assets of organizations worldwide</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-8 py-4"
              >
                <div className="bg-navy-900/50 rounded-lg p-6 h-24 flex items-center justify-center group hover:bg-navy-900 transition-colors">
                  <logo.logo className="h-12 w-12 text-teal-500/50 group-hover:text-teal-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-navy-800 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-navy-800 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;