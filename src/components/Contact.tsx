import React, { useState } from 'react';
import { Mail, Lock, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Mail className="h-12 w-12 text-teal-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">
              Get in touch with our security experts to discuss your organization's needs.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md bg-navy-800 border border-teal-500/20 text-white px-4 py-2 focus:border-teal-500 focus:ring focus:ring-teal-500/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md bg-navy-800 border border-teal-500/20 text-white px-4 py-2 focus:border-teal-500 focus:ring focus:ring-teal-500/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="mt-1 block w-full rounded-md bg-navy-800 border border-teal-500/20 text-white px-4 py-2 focus:border-teal-500 focus:ring focus:ring-teal-500/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md bg-navy-800 border border-teal-500/20 text-white px-4 py-2 focus:border-teal-500 focus:ring focus:ring-teal-500/20"
              ></textarea>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Lock className="h-4 w-4 text-teal-500" />
              <span>Your message is encrypted end-to-end</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;