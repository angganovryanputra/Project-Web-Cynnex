import React, { useState } from 'react';
import { Menu, X, Globe, Shield, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'id'>('en');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'id' : 'en');

  const services = [
    { name: 'Penetration Testing', path: '/services/penetration-testing' },
    { name: 'Red Team Operations', path: '/services/red-team' },
    { name: 'SOC Services', path: '/services/soc' },
    { name: 'Security Consulting', path: '/services/consulting' },
    { name: 'Infrastructure Security', path: '/services/infrastructure' },
    { name: 'Application Security', path: '/services/application' },
  ];

  const careers = [
    { name: 'Security Engineer', path: '/careers/security-engineer' },
    { name: 'SOC Analyst', path: '/careers/soc-analyst' },
    { name: 'Penetration Tester', path: '/careers/pentester' },
    { name: 'Security Consultant', path: '/careers/consultant' },
    { name: 'All Positions', path: '/careers' },
  ];

  return (
    <nav className="fixed w-full bg-navy-900/95 backdrop-blur-sm z-50 border-b border-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Shield className="h-8 w-8 text-teal-500" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </Link>
                
                {/* Services Dropdown */}
                <div className="relative"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="absolute left-0 mt-1 w-64 rounded-md shadow-lg bg-navy-800 ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-navy-900 hover:text-teal-500 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link to="/team" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Team
                </Link>

                {/* Careers Dropdown */}
                <div className="relative"
                  onMouseEnter={() => setActiveDropdown('careers')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Careers
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'careers' && (
                    <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-navy-800 ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu">
                        {careers.map((career) => (
                          <Link
                            key={career.path}
                            to={career.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-navy-900 hover:text-teal-500 transition-colors"
                          >
                            {career.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link to="/contact" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-300 hover:text-teal-500 transition-colors"
            >
              <Globe className="h-5 w-5 mr-1" />
              {language.toUpperCase()}
            </button>
            <Link
              to="/contact"
              className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            
            {/* Mobile Services */}
            <div className="space-y-1">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
              >
                Services
                <ChevronDown className={`h-4 w-4 transform transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-teal-500"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/team" className="text-gray-300 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">
              Team
            </Link>

            {/* Mobile Careers */}
            <div className="space-y-1">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'careers' ? null : 'careers')}
                className="w-full flex items-center justify-between text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
              >
                Careers
                <ChevronDown className={`h-4 w-4 transform transition-transform ${activeDropdown === 'careers' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'careers' && (
                <div className="pl-4 space-y-1">
                  {careers.map((career) => (
                    <Link
                      key={career.path}
                      to={career.path}
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-teal-500"
                    >
                      {career.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;