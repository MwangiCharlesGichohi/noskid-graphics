import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import heroPhoto1 from '../assets/clients/herophoto1.jpg';
import heroPhoto2 from '../assets/clients/herophoto2.jpg';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [heroPhoto1, heroPhoto2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-secondary-900/30 z-10"></div>
      
      {/* Slideshow */}
      <div className="absolute inset-0 overflow-hidden bg-primary-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Hero ${index + 1}`}
              className="w-full h-auto max-h-screen object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-white w-4'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            DESIGN | PRINT | BRANDING | <span className="text-secondary-400">SIGNAGES</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            We have a great passion for creativity and are committed to offering excellent products and services to our clients. From creative design to printing, branding, and display solutions, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center bg-secondary-500 hover:bg-secondary-600 
              text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-transparent border-2 
              border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg 
              transition-colors duration-300"
            >
              Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;