import React from 'react';
import { useParams } from 'react-router-dom';
import { Briefcase, CheckCircle2, Send } from 'lucide-react';

const careers = {
  'security-engineer': {
    title: 'Security Engineer',
    location: 'Jakarta, Indonesia',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'We are seeking a skilled Security Engineer to join our team and help design, implement, and maintain security solutions for our enterprise clients.',
    requirements: [
      'Bachelor degree in Computer Science or related field',
      'Experience with security tools and technologies',
      'Knowledge of network security and protocols',
      'Strong problem-solving skills',
      'Excellent communication skills',
    ],
    responsibilities: [
      'Design and implement security solutions',
      'Conduct security assessments',
      'Respond to security incidents',
      'Provide technical guidance to clients',
      'Stay updated with security trends',
    ],
  },
  // Add other positions...
};

const CareerPage = () => {
  const { position } = useParams();
  const career = careers[position as keyof typeof careers];

  if (!career) {
    return <div>Position not found</div>;
  }

  return (
    <div className="pt-16">
      <div className="bg-navy-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-16">
            <Briefcase className="h-16 w-16 text-teal-500 mb-6" />
            <h1 className="text-4xl font-bold text-white mb-6">{career.title}</h1>
            <div className="flex items-center space-x-4 text-gray-400 mb-8">
              <span>{career.location}</span>
              <span>•</span>
              <span>{career.type}</span>
              <span>•</span>
              <span>{career.experience}</span>
            </div>
            <p className="text-xl text-gray-400">{career.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
              <ul className="space-y-4">
                {career.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Responsibilities</h2>
              <ul className="space-y-4">
                {career.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 transition-colors">
              <Send className="mr-2 h-5 w-5" />
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;