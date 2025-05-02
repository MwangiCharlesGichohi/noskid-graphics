import React from 'react';
import { Users, Award, Clock, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-secondary-500 font-semibold tracking-wider uppercase">Who We Are</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Creative Solutions for Every Design Challenge
            </h2>
            
            <p className="text-gray-600 mb-6">
              Noskid Graphics offers creative design, print media, corporate branding, display solutions, animation and video, web and app design to corporates, institutions, organizations and individuals.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
                <p className="text-gray-600">To offer innovative design, high-quality printing and impactful branding solutions.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vision</h3>
                <p className="text-gray-600">To be a leading creative powerhouse known for excellence, originality and customer satisfaction.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Excellence</h3>
                  <p className="text-sm text-gray-600">Commitment to quality</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Reliability</h3>
                  <p className="text-sm text-gray-600">Consistent performance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Speed</h3>
                  <p className="text-sm text-gray-600">Quick turnaround time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation</h3>
                  <p className="text-sm text-gray-600">Creative solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="stats-card bg-gradient-to-br from-primary-500 to-primary-600 text-white p-6 rounded-lg flex flex-col justify-center items-center transform hover:scale-105 transition-transform">
              <Users className="w-10 h-10 mb-3" />
              <span className="text-3xl font-bold">100+</span>
              <span className="text-sm font-medium">Happy Clients</span>
            </div>
            
            <div className="stats-card bg-gradient-to-br from-secondary-500 to-secondary-600 text-white p-6 rounded-lg flex flex-col justify-center items-center transform hover:scale-105 transition-transform">
              <Award className="w-10 h-10 mb-3" />
              <span className="text-3xl font-bold">15+</span>
              <span className="text-sm font-medium">Services</span>
            </div>
            
            <div className="stats-card bg-gradient-to-br from-primary-500 to-primary-600 text-white p-6 rounded-lg flex flex-col justify-center items-center transform hover:scale-105 transition-transform">
              <Clock className="w-10 h-10 mb-3" />
              <span className="text-3xl font-bold">8+</span>
              <span className="text-sm font-medium">Years Experience</span>
            </div>
            
            <div className="stats-card bg-gradient-to-br from-secondary-500 to-secondary-600 text-white p-6 rounded-lg flex flex-col justify-center items-center transform hover:scale-105 transition-transform">
              <CheckCircle className="w-10 h-10 mb-3" />
              <span className="text-3xl font-bold">500+</span>
              <span className="text-sm font-medium">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;