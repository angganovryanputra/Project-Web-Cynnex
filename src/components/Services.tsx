import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Clock, 
  Lock, 
  Server, 
  Terminal, 
  Users, 
  Database,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  price,
  link 
}: { 
  icon: any, 
  title: string, 
  description: string,
  features: string[],
  price?: { amount: string, period: string },
  link: string
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-navy-800 p-6 rounded-lg border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <Icon className="h-8 w-8 text-teal-500 group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm">
            <CheckCircle2 className="h-4 w-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>

      {price && (
        <div className="mb-6">
          <span className="text-2xl font-bold text-white">{price.amount}</span>
          <span className="text-gray-400 text-sm">/{price.period}</span>
        </div>
      )}

      <Link
        to={link}
        className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors"
      >
        Learn More
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>

      <div 
        className={`absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify and exploit vulnerabilities in your systems.",
      features: [
        "Web Application Testing",
        "Network Infrastructure Assessment",
        "Mobile App Security Testing",
        "API Security Analysis",
        "Cloud Security Assessment"
      ],
      price: { amount: "Contact Us", period: "project" },
      link: "/services/penetration-testing"
    },
    {
      icon: Eye,
      title: "Red Team Operations",
      description: "Advanced adversary simulation to test your organization's detection and response capabilities.",
      features: [
        "Advanced Persistent Threat Simulation",
        "Social Engineering Campaigns",
        "Physical Security Testing",
        "Custom Attack Scenarios",
        "Defense Evasion Testing"
      ],
      price: { amount: "Contact Us", period: "engagement" },
      link: "/services/red-team"
    },
    {
      icon: Clock,
      title: "24/7 SOC Services",
      description: "Round-the-clock monitoring and incident response to protect your assets.",
      features: [
        "Real-time Threat Monitoring",
        "Incident Response",
        "Threat Hunting",
        "Security Analytics",
        "Compliance Reporting"
      ],
      price: { amount: "From $5,000", period: "month" },
      link: "/services/soc"
    },
    {
      icon: Lock,
      title: "Security Consulting",
      description: "Expert guidance on security strategy, compliance, and best practices.",
      features: [
        "Security Strategy Development",
        "Compliance Assessment",
        "Risk Management",
        "Security Architecture Review",
        "Policy Development"
      ],
      price: { amount: "From $2,500", period: "day" },
      link: "/services/consulting"
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Hardening and securing your critical infrastructure against threats.",
      features: [
        "Network Security",
        "Cloud Security",
        "Endpoint Protection",
        "Access Control",
        "Security Monitoring"
      ],
      price: { amount: "From $3,500", period: "month" },
      link: "/services/infrastructure"
    },
    {
      icon: Terminal,
      title: "Application Security",
      description: "Securing your applications from development to deployment.",
      features: [
        "SAST & DAST Testing",
        "Code Review",
        "DevSecOps Integration",
        "Security Training",
        "Vulnerability Management"
      ],
      price: { amount: "From $4,000", period: "month" },
      link: "/services/application"
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Comprehensive security awareness training for your team.",
      features: [
        "Security Awareness Programs",
        "Phishing Simulations",
        "Compliance Training",
        "Technical Training",
        "Custom Workshops"
      ],
      price: { amount: "From $150", period: "user/year" },
      link: "/services/training"
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Advanced solutions for securing sensitive data and ensuring compliance.",
      features: [
        "Data Classification",
        "Encryption Solutions",
        "DLP Implementation",
        "Privacy Compliance",
        "Access Control"
      ],
      price: { amount: "From $3,000", period: "month" },
      link: "/services/data-protection"
    }
  ];

  return (
    <section id="services" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your organization
            against evolving digital threats.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;