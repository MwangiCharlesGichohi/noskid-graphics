import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Let's <span className="text-primary-500">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Ready to transform your ideas into reality? Get in touch with us today and let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Our Location</h4>
                    <p className="text-gray-600 mt-1">Comet Mall, Monrovia street, 2nd floor close to Anniversary Towers</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Email Us</h4>
                    <a href="mailto:noskidinc@gmail.com" className="text-gray-600 hover:text-primary-500 transition-colors duration-300">noskidinc@gmail.com</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Call Us</h4>
                    <a href="tel:+254769919616" className="text-gray-600 hover:text-primary-500 block transition-colors duration-300">0769919616</a>
                    <a href="tel:+254707497950" className="text-gray-600 hover:text-primary-500 block transition-colors duration-300">0707497950</a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;