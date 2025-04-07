import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-lg z-50" role="dialog" aria-labelledby="cookie-consent-title">
      <div className="max-w-7xl mx-auto">
        <h2 id="cookie-consent-title" className="text-lg font-semibold mb-2">Paramètres des cookies</h2>
        <p className="text-sm mb-4">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
          Les cookies essentiels sont nécessaires au fonctionnement du site, tandis que 
          les cookies optionnels nous aident à améliorer nos services.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={acceptAll}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Accepter tout
          </button>
          <button
            onClick={acceptEssential}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cookies essentiels uniquement
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 