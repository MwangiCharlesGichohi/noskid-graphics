import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'm ${formState.name}.\n\nSubject: ${formState.subject}\n\n${formState.message}`;
    const whatsappUrl = `https://wa.me/254707497950?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
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
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-gray-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-gray-300"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-gray-300"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Creative Design">Creative Design</option>
                    <option value="Printing">Printing</option>
                    <option value="Branding">Branding</option>
                    <option value="Display Solutions">Display Solutions</option>
                    <option value="Animation">Animation & Video</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-gray-300 resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                  className="w-full py-4 px-6 rounded-xl bg-primary-500 text-white font-medium transition-all duration-300 hover:bg-primary-600 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Send via WhatsApp</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;