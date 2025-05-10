import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Palette, 
  Monitor, 
  Printer, 
  Video, 
  Layout,
} from 'lucide-react';

const services = [
  {
    title: 'Creative Design',
    description: 'Creative design is the heart of graphic design, blending imagination with visual storytelling to produce compelling and functional artwork.',
    icon: <PenTool />,
    gradient: 'from-blue-500/10 to-purple-500/10'
  },
  {
    title: 'Printing',
    description: 'We offer comprehensive printing solutions including digital, offset, large format and merchandise printing for all your business needs.',
    icon: <Printer />,
    gradient: 'from-purple-500/10 to-red-500/10'
  },
  {
    title: 'Identity and Branding',
    description: 'From corporate branding to rebranding and product branding, we create strong brand identities that connect with your audience.',
    icon: <Palette />,
    gradient: 'from-green-500/10 to-yellow-500/10'
  },
  {
    title: 'Animation & Video',
    description: 'We create engaging corporate videos, brand videos, showreels and explainer videos that tell your story.',
    icon: <Video />,
    gradient: 'from-yellow-500/10 to-orange-500/10'
  },
  {
    title: 'Display Solutions',
    description: 'Comprehensive display solutions including banners, frames and light boxes to broadcast your brand effectively.',
    icon: <Layout />,
    gradient: 'from-orange-500/10 to-pink-500/10'
  },
  {
    title: 'Web and App Design',
    description: 'Modern, responsive web and app design solutions that enhance your digital presence and user experience.',
    icon: <Monitor />,
    gradient: 'from-pink-500/10 to-blue-500/10'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.4
    }
  }
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-medium mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do Best</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3563E9] via-[#8C6FE9] to-[#f04438] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver innovative solutions through our comprehensive creative design, print media and digital services.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-primary-100 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <motion.div 
                  variants={iconVariants}
                  whileHover="hover"
                  className="mb-4 w-14 h-14 rounded-lg bg-primary-50 flex items-center justify-center"
                >
                  <div className="text-[#3563E9]">
                    {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;