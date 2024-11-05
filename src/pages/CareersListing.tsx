import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ChevronRight } from 'lucide-react';

const positions = [
  {
    id: 'security-engineer',
    title: 'Security Engineer',
    location: 'Jakarta, Indonesia',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Design and implement security solutions for enterprise clients.',
  },
  {
    id: 'soc-analyst',
    title: 'SOC Analyst',
    location: 'Jakarta, Indonesia',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Monitor and respond to security incidents in our 24/7 SOC.',
  },
  {
    id: 'pentester',
    title: 'Penetration Tester',
    location: 'Jakarta, Indonesia',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Conduct security assessments and penetration testing for clients.',
  },
  {
    id: 'consultant',
    title: 'Security Consultant',
    location: 'Jakarta, Indonesia',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Provide expert security guidance and consulting to enterprise clients.',
  },
];

const CareersListing = () => {
  return (
    <div className="pt-16">
      <div className="bg-navy-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <Briefcase className="h-16 w-16 text-teal-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Build your career with the leading cybersecurity company in Indonesia.
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position) => (
              <Link
                key={position.id}
                to={`/careers/${position.id}`}
                className="block bg-navy-800 rounded-lg p-6 border border-teal-500/10 hover:border-teal-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-2">{position.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.experience}</span>
                    </div>
                    <p className="mt-4 text-gray-400">{position.description}</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-teal-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersListing;