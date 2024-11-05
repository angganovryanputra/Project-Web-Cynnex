import React from 'react';
import { Shield, Award } from 'lucide-react';

const TeamMember = ({ name, role, certifications, image }: {
  name: string;
  role: string;
  certifications: string[];
  image: string;
}) => (
  <div className="bg-navy-800 rounded-lg p-6 border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300">
    <div className="relative mb-6">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-navy-800 to-transparent"></div>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
    <p className="text-teal-500 mb-4">{role}</p>
    <div className="space-y-2">
      {certifications.map((cert, index) => (
        <div key={index} className="flex items-center text-gray-400">
          <Award className="h-4 w-4 mr-2 text-teal-500" />
          <span className="text-sm">{cert}</span>
        </div>
      ))}
    </div>
  </div>
);

const Team = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Security Officer",
      certifications: ["CISSP", "OSCP", "CISM"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Penetration Tester",
      certifications: ["CEH", "OSCP", "GPEN"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Aisha Patel",
      role: "SOC Team Lead",
      certifications: ["GCIH", "GCIA", "Security+"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "David Kim",
      role: "Security Architect",
      certifications: ["CCSP", "AWS Security", "Azure Security"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="team" className="py-24 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-teal-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Expert Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our team of certified security professionals dedicated to protecting
            your digital assets.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;