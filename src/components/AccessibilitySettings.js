import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const AccessibilitySettings = () => {
  const { isDarkMode, highContrast, toggleTheme, toggleHighContrast } = useContext(ThemeContext);

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg" role="region" aria-label="Paramètres d'accessibilité">
      <h2 className="text-lg font-semibold mb-4">Paramètres d'accessibilité</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
            <span className="mr-2">Mode sombre</span>
            <div className="relative">
              <input
                type="checkbox"
                id="theme-toggle"
                className="sr-only"
                checked={isDarkMode}
                onChange={toggleTheme}
              />
              <div className={`block w-14 h-8 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isDarkMode ? 'transform translate-x-6' : ''}`}></div>
            </div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="contrast-toggle" className="flex items-center cursor-pointer">
            <span className="mr-2">Contraste élevé</span>
            <div className="relative">
              <input
                type="checkbox"
                id="contrast-toggle"
                className="sr-only"
                checked={highContrast}
                onChange={toggleHighContrast}
              />
              <div className={`block w-14 h-8 rounded-full ${highContrast ? 'bg-yellow-600' : 'bg-gray-300'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${highContrast ? 'transform translate-x-6' : ''}`}></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySettings; 