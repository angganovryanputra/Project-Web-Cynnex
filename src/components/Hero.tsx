import React from 'react';
import { Shield, Lock, AlertCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8 animate-pulse">
            <Shield className="h-16 w-16 text-teal-500" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Securing Your Digital Future
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            PT.Cynnex Integrasi Solusi provides enterprise-grade cybersecurity solutions
            to protect your organization against evolving digital threats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 transition-colors"
            >
              <Lock className="mr-2 h-5 w-5" />
              Get Protected Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3 border border-teal-500 text-base font-medium rounded-md text-teal-500 hover:bg-teal-500/10 transition-colors"
            >
              <AlertCircle className="mr-2 h-5 w-5" />
              Explore Services
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent"></div>
    </div>
  );
};

export default Hero;