import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submission state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today and let's create something amazing together.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Our Location</h4>
                    <p className="text-gray-600 mt-1">Comet Mall, Monrovia street, 2nd floor close to Anniversary Towers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email Us</h4>
                    <p className="text-gray-600 mt-1">noskidinc@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Call Us</h4>
                    <p className="text-gray-600 mt-1">0769919616</p>
                    <p className="text-gray-600 mt-1">0707497950</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-medium text-green-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-green-600">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-gray-400"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-gray-400"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-gray-400"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-gray-400 resize-none"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center transform hover:-translate-y-0.5 active:translate-y-0 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-primary-500 hover:bg-primary-600 hover:shadow-lg'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;