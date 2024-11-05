import React from 'react';
import { useParams } from 'react-router-dom';
import { Shield, Lock, Server, Eye, Clock, Terminal } from 'lucide-react';

const services = {
  'penetration-testing': {
    title: 'Penetration Testing',
    icon: Shield,
    description: 'Comprehensive security assessments to identify vulnerabilities in your systems.',
    features: [
      'Web Application Testing',
      'Network Infrastructure Testing',
      'Mobile Application Testing',
      'Cloud Security Assessment',
      'IoT Device Testing',
    ],
  },
  'red-team': {
    title: 'Red Team Operations',
    icon: Eye,
    description: 'Advanced adversary simulation to test your security controls.',
    features: [
      'Advanced Persistent Threat Simulation',
      'Social Engineering Campaigns',
      'Physical Security Testing',
      'Custom Attack Scenarios',
      'Defense Evasion Testing',
    ],
  },
  'soc': {
    title: '24/7 SOC Services',
    icon: Clock,
    description: 'Round-the-clock security monitoring and incident response.',
    features: [
      'Real-time Threat Monitoring',
      'Incident Response',
      'Threat Hunting',
      'Security Analytics',
      'Compliance Reporting',
    ],
  },
  // Add other services...
};

const ServicePage = () => {
  const { service } = useParams();
  const serviceInfo = services[service as keyof typeof services];

  if (!serviceInfo) {
    return <div>Service not found</div>;
  }

  const Icon = serviceInfo.icon;

  return (
    <div className="pt-16">
      <div className="bg-navy-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <Icon className="h-16 w-16 text-teal-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-6">{serviceInfo.title}</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {serviceInfo.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {serviceInfo.features.map((feature, index) => (
              <div
                key={index}
                className="bg-navy-800 p-6 rounded-lg border border-teal-500/10 hover:border-teal-500/30 transition-all"
              >
                <Lock className="h-6 w-6 text-teal-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                <p className="text-gray-400">
                  Comprehensive protection and advanced security measures to safeguard your assets.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;