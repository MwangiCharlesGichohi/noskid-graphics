import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import project images
import optexBranding from '../assets/clients/optex_optician_branding.png';
import kkOpticsBranding from '../assets/clients/kk_optics_branding.jpg';
import asterBranding from '../assets/clients/aster_branding.jpg';
import trinetraCalendar from '../assets/clients/trinetra_calendar.png';
import brandImage from '../assets/clients/brand.png';

const projects = [
  {
    id: 1,
    title: 'Optex Opticians Branding',
    category: 'Brand Identity',
    image: optexBranding,
    description: 'Complete brand identity design for Optex Opticians, establishing a strong visual presence in the optical industry.'
  },
  {
    id: 2,
    title: 'KK Optics Brand Design',
    category: 'Brand Identity',
    image: kkOpticsBranding,
    description: 'Brand transformation project for KK Optics, creating a modern and professional visual identity.'
  },
  {
    id: 3,
    title: 'Aster Healthcare Branding',
    category: 'Brand Identity',
    image: asterBranding,
    description: 'Comprehensive branding solution for Aster Healthcare, reflecting their commitment to quality healthcare.'
  },
  {
    id: 4,
    title: 'Trinetra Calendar Design',
    category: 'Print Design',
    image: trinetraCalendar,
    description: 'Custom calendar design for Trinetra Eyecare, combining functionality with brand aesthetics.'
  },
  {
    id: 5,
    title: 'Corporate Brand Identity',
    category: 'Brand Identity',
    image: brandImage,
    description: 'Corporate brand identity development focusing on modern and scalable design solutions.'
  }
];

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our creativity and expertise.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="portfolio-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-500 text-white rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;