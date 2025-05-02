import React from 'react';
import { ChevronRight, } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="ml-2 text-xl font-bold">Noskid Graphics</span>
            </div>
            <p className="text-gray-400 mb-4">
              Elevating brands through strategic design and creative excellence. We turn visions into visual realities.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                  aria-label={`Visit our ${social} page`}
                >
                  <div className="w-5 h-5"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['Brand Identity', 'UI/UX Design', 'Typography', 'Illustration', 'Print Design', 'Motion Graphics'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for design tips, trends, and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Noskid Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;