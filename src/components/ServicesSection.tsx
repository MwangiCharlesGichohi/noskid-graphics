import React from 'react';
import { 
  PenTool, 
  Palette, 
  Monitor, 
  Printer, 
  Video, 
  Layout 
} from 'lucide-react';

const services = [
  {
    title: 'Creative Design',
    description: 'Creative design is the heart of graphic design, blending imagination with visual storytelling to produce compelling and functional artwork.',
    icon: <PenTool className="w-10 h-10 text-primary-500" />
  },
  {
    title: 'Printing',
    description: 'We offer comprehensive printing solutions including digital, offset, large format, and merchandise printing for all your business needs.',
    icon: <Printer className="w-10 h-10 text-primary-500" />
  },
  {
    title: 'Identity and Branding',
    description: 'From corporate branding to rebranding and product branding, we create strong brand identities that connect with your audience.',
    icon: <Palette className="w-10 h-10 text-primary-500" />
  },
  {
    title: 'Animation & Video',
    description: 'We create engaging corporate videos, brand videos, showreels, CEO profiles, and explainer videos that tell your story.',
    icon: <Video className="w-10 h-10 text-primary-500" />
  },
  {
    title: 'Display Solutions',
    description: 'Comprehensive display solutions including banners, frames, light boxes, and vehicle wraps to broadcast your brand effectively.',
    icon: <Layout className="w-10 h-10 text-primary-500" />
  },
  {
    title: 'Web and App Design',
    description: 'Modern, responsive web and app design solutions that enhance your digital presence and user experience.',
    icon: <Monitor className="w-10 h-10 text-primary-500" />
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive creative design, print media, corporate branding, display solutions, animation, and digital services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 hover:border-primary-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;