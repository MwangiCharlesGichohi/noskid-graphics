import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const EmailPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(() => {
    return localStorage.getItem('emailPopupDismissed') === 'true';
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show popup when user scrolls 30% down the page
      const scrollTrigger = window.innerHeight * 0.3;
      if (window.scrollY > scrollTrigger && !hasSubscribed && !hasDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasSubscribed, hasDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setHasDismissed(true);
    localStorage.setItem('emailPopupDismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscription email:', email);
    setHasSubscribed(true);
    setIsVisible(false);
    localStorage.setItem('emailPopupDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative animate-fade-in-up">
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated!</h3>
        <p className="text-gray-600 mb-4">
          Subscribe to our newsletter for offers and company updates.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailPopup;