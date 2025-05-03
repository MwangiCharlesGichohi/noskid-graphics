import React from 'react';
import showcase from '../assets/clients/showcase.jpg';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Creative Solutions for Every Design Challenge
            </h2>
            <p className="text-gray-600 mb-6">
              Noskid Graphics offers creative design, print media, corporate branding, display solutions, animation and video, web and app design to corporates, institutions, organizations and individuals.
            </p>
            
            {/* Mission & Vision Block */}
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
                <p className="text-gray-600">To offer innovative design, high-quality printing and impactful branding solutions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vision</h3>
                <p className="text-gray-600">To be a leading creative powerhouse known for excellence, originality and customer satisfaction.</p>
              </div>
            </div>

            {/* Core Values with enhanced styling */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group p-4 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary-600 group-hover:text-primary-700 mb-1">Excellence</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700">Commitment to quality</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-4 rounded-lg bg-gradient-to-br from-secondary-50 to-secondary-100 hover:from-secondary-100 hover:to-secondary-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-secondary-600 group-hover:text-secondary-700 mb-1">Reliability</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700">Consistent performance</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-4 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary-600 group-hover:text-primary-700 mb-1">Speed</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700">Quick turnaround time</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-4 rounded-lg bg-gradient-to-br from-secondary-50 to-secondary-100 hover:from-secondary-100 hover:to-secondary-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-secondary-600 group-hover:text-secondary-700 mb-1">Innovation</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700">Creative solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={showcase} 
                alt="Noskid Graphics Showcase" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;