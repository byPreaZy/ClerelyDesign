import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie, faTimes } from '@fortawesome/free-solid-svg-icons';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000); // Délai pour une meilleure expérience utilisateur
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  const bannerVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.95,
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      }
    },
    exit: { 
      y: 100, 
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      }
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 shadow-lg"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={bannerVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "linear",
                  }}
                  className="bg-accent-primary/10 p-3 rounded-full"
                >
                  <FontAwesomeIcon
                    icon={faCookie}
                    className="text-accent-primary text-2xl"
                  />
                </motion.div>
                <div>
                  <h3 className="text-text-primary font-semibold text-lg">
                    Utilisation des cookies
                  </h3>
                  <p className="text-text-secondary text-sm mt-1 max-w-xl">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                    En continuant à naviguer, vous acceptez notre politique de confidentialité.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <motion.button
                  className="px-6 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-text-primary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  onClick={handleDecline}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Refuser les cookies"
                >
                  Refuser
                </motion.button>
                <motion.button
                  className="px-6 py-2 rounded-lg bg-accent-primary text-white hover:bg-accent-primary/90 transition-colors duration-300"
                  onClick={handleAccept}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Accepter les cookies"
                >
                  Accepter
                </motion.button>
              </div>

              <motion.button
                className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={handleDecline}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Fermer la bannière de cookies"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 