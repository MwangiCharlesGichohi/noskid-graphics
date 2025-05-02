import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Import client logos
import optexLogo from '../assets/clients/optex_opticians.png';
import asterLogo from '../assets/clients/aster_healthcare.png';
import organicsLogo from '../assets/clients/organics_cropcare.png';
import trinetraLogo from '../assets/clients/trinetra_eyecare.png';
import kkOpticsLogo from '../assets/clients/kk_optics.png';
import sugunaLogo from '../assets/clients/Suguna_Feeds.png';

const clients = [
  {
    name: 'Optek Opticians',
    logo: optexLogo,
    alt: 'Optek Opticians Logo'
  },
  {
    name: 'Aster Health Care',
    logo: asterLogo,
    alt: 'Aster Health Care Logo'
  },
  {
    name: 'Organics Crop Care',
    logo: organicsLogo,
    alt: 'Organics Crop Care Logo'
  },
  {
    name: 'Trinetra Eye Care',
    logo: trinetraLogo,
    alt: 'Trinetra Eye Care Logo'
  },
  {
    name: 'KK Optics',
    logo: kkOpticsLogo,
    alt: 'KK Optics Logo'
  },
  {
    name: 'Suguna Feeds',
    logo: sugunaLogo,
    alt: 'Suguna Feeds Logo'
  }
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Valued Clients
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to work with leading businesses and organizations across various industries
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="py-8"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center h-48 group">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="max-w-[80%] max-h-[80%] object-contain transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;