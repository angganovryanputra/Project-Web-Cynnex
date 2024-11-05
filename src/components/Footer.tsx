import React from 'react';
import { Shield, Phone, Mail, MapPin, Linkedin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 border-t border-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-teal-500 mr-2" />
              <span className="text-white font-bold text-lg">PT.Cynnex</span>
            </div>
            <p className="text-gray-400 mb-4">
              Securing your digital assets with enterprise-grade cybersecurity solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 text-teal-500 mr-2" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 text-teal-500 mr-2" />
                <a href="mailto:contact@cynnex.co.id" className="hover:text-teal-500 transition-colors">
                  contact@cynnex.co.id
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Cyber 2 Tower, 18th Floor,
                  Jl. H. R. Rasuna Said Blok X-5,
                  Jakarta 12950
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Clock className="h-5 w-5 text-teal-500 mr-2" />
                <div>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-center text-gray-400 mt-2">
                <Shield className="h-5 w-5 text-teal-500 mr-2" />
                <p>24/7 Security Monitoring</p>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <a
              href="https://linkedin.com/company/cynnex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-teal-500 transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              Follow us on LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-500/10">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} PT.Cynnex Integrasi Solusi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;