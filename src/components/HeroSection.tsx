import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
              Creating <span className="text-teal-400">Visual Stories</span> That Leave Lasting Impressions
            </h1>
            
            <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto lg:mx-0 animate-fade-in-delayed">
              We blend creativity with strategy to design compelling brand experiences that connect, engage, and inspire action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delayed-2">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-400 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg group"
              >
                Start Your Project
                <ChevronRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-teal-100 border-2 border-teal-400/30 rounded-lg hover:bg-teal-400/10 transition-all duration-300 group"
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Stats/Features */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-delayed-3">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '200+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Active Clients' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-teal-400/50 transition-all duration-300 group"
              >
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-teal-100 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-teal-100 hover:text-teal-400 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronRight className="w-6 h-6 transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;