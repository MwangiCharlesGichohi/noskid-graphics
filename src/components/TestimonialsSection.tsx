import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director, Elevatix',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Noskid Graphics transformed our brand identity completely. Their strategic approach and creative execution exceeded our expectations and helped us connect with our audience in ways we never imagined possible.'
  },
  {
    id: 2,
    name: 'Michael Chang',
    role: 'CEO, Fusion Technologies',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Working with Noskid was a game-changer for our company. Their design work not only looks fantastic but has measurably improved our conversion rates. They truly understand how design impacts business outcomes.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, Bloom Boutique',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'As a small business owner, I needed a partner who could bring my vision to life without breaking the bank. Noskid Graphics delivered a beautiful brand identity that perfectly captures the essence of my boutique.'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(goToNext, 10000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="testimonials" className="py-20 bg-teal-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about working with Noskid Graphics.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-10 flex justify-center">
            <Quote className="w-16 h-16 text-teal-400 opacity-50 transform rotate-180" />
          </div>
          
          {/* Testimonial Content */}
          <div className="text-center">
            <div className="relative">
              <p className="text-xl md:text-2xl italic mb-8 text-teal-100 transition-all duration-500 transform">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex flex-col items-center transform transition-all duration-500">
                <div className="w-20 h-20 mb-4 rounded-full overflow-hidden ring-4 ring-teal-400/30 transform transition-all duration-500 hover:scale-110">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-teal-300">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-teal-800 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="flex space-x-3 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-4 h-4 bg-teal-400' 
                      : 'w-3 h-3 bg-teal-700 hover:bg-teal-600'
                  } rounded-full`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-teal-800 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;