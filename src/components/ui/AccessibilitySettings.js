import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaUniversalAccess, FaMoon, FaSun, FaAdjust, FaTextHeight, FaExpandAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const AccessibilitySettings = () => {
  const { isDarkMode, highContrast, toggleTheme, toggleHighContrast } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState(1);
  const [textSpacing, setTextSpacing] = useState(1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Gestion de la taille du texte
  const handleTextSizeChange = (value) => {
    const size = parseFloat(value);
    document.documentElement.style.setProperty('--text-scale', size.toString());
    setTextSize(size);
    localStorage.setItem('preferred-text-size', size.toString());
  };

  // Gestion de l'espacement du texte
  const handleTextSpacingChange = (value) => {
    const spacing = parseFloat(value);
    document.documentElement.style.setProperty('--text-spacing', spacing.toString());
    setTextSpacing(spacing);
    localStorage.setItem('preferred-text-spacing', spacing.toString());
  };

  // Charger les préférences au montage du composant
  useEffect(() => {
    const savedTextSize = parseFloat(localStorage.getItem('preferred-text-size')) || 1;
    const savedTextSpacing = parseFloat(localStorage.getItem('preferred-text-spacing')) || 1;
    
    handleTextSizeChange(savedTextSize);
    handleTextSpacingChange(savedTextSpacing);
  }, []);

  return (
    <div className="fixed bottom-24 right-4 z-50" role="region" aria-label="Paramètres d'accessibilité">
      {/* Bouton principal */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-primary text-bg-primary shadow-lg flex items-center justify-center hover:bg-accent-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary border-2 border-border-color"
        aria-expanded={isOpen}
        aria-label="Ouvrir les paramètres d'accessibilité"
      >
        <FaUniversalAccess className="w-6 h-6 md:w-7 md:h-7" />
      </motion.button>

      {/* Menu déroulant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-2 bg-bg-secondary text-text-primary rounded-lg shadow-xl p-4 md:p-5 w-72 md:w-80 border-2 border-border-color"
          >
            <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">
              Accessibilité
            </h2>
            
            <div className="space-y-4 md:space-y-5">
              {/* Mode sombre */}
              <div className="flex items-center justify-between">
                <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
                  <span className="mr-2 flex items-center text-text-primary text-base md:text-lg">
                    {isDarkMode ? <FaMoon className="mr-2 w-5 h-5 md:w-6 md:h-6" /> : <FaSun className="mr-2 w-5 h-5 md:w-6 md:h-6" />}
                    Mode sombre
                  </span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="theme-toggle"
                      className="sr-only"
                      checked={isDarkMode}
                      onChange={toggleTheme}
                    />
                    <div className={`block w-14 h-8 md:w-16 md:h-9 rounded-full transition-colors duration-200 ease-in-out ${isDarkMode ? 'bg-accent-primary' : 'bg-bg-tertiary'}`}></div>
                    <div className={`dot absolute left-1 top-1 bg-bg-primary w-6 h-6 md:w-7 md:h-7 rounded-full transition-transform duration-200 ease-in-out ${isDarkMode ? 'transform translate-x-6 md:translate-x-7' : ''}`}></div>
                  </div>
                </label>
              </div>

              {/* Contraste élevé */}
              <div className="flex items-center justify-between">
                <label htmlFor="contrast-toggle" className="flex items-center cursor-pointer">
                  <span className="mr-2 flex items-center text-text-primary text-base md:text-lg">
                    <FaAdjust className="mr-2 w-5 h-5 md:w-6 md:h-6" />
                    Contraste élevé
                  </span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="contrast-toggle"
                      className="sr-only"
                      checked={highContrast}
                      onChange={toggleHighContrast}
                    />
                    <div className={`block w-14 h-8 md:w-16 md:h-9 rounded-full transition-colors duration-200 ease-in-out ${highContrast ? 'bg-accent-primary' : 'bg-bg-tertiary'}`}></div>
                    <div className={`dot absolute left-1 top-1 bg-bg-primary w-6 h-6 md:w-7 md:h-7 rounded-full transition-transform duration-200 ease-in-out ${highContrast ? 'transform translate-x-6 md:translate-x-7' : ''}`}></div>
                  </div>
                </label>
              </div>

              {/* Taille du texte */}
              <div className="space-y-2">
                <label htmlFor="text-size" className="flex items-center text-text-primary text-base md:text-lg mb-2">
                  <FaTextHeight className="mr-2 w-5 h-5 md:w-6 md:h-6" />
                  Taille du texte
                </label>
                <div className="flex items-center space-x-4">
                  <span className="text-sm">A</span>
                  <input
                    type="range"
                    id="text-size"
                    min="0.8"
                    max="2"
                    step="0.1"
                    value={textSize}
                    onChange={(e) => handleTextSizeChange(e.target.value)}
                    className="w-full h-2 bg-bg-tertiary rounded-lg appearance-none cursor-pointer accent-accent-primary"
                    aria-label="Ajuster la taille du texte"
                  />
                  <span className="text-2xl">A</span>
                </div>
                <div className="text-xs text-text-secondary text-center mt-1">
                  {Math.round((textSize - 1) * 100)}% {textSize > 1 ? 'plus grand' : textSize < 1 ? 'plus petit' : 'normal'}
                </div>
              </div>

              {/* Espacement du texte */}
              <div className="space-y-2">
                <label htmlFor="text-spacing" className="flex items-center text-text-primary text-base md:text-lg mb-2">
                  <FaExpandAlt className="mr-2 w-5 h-5 md:w-6 md:h-6 transform rotate-90" />
                  Hauteur des lignes
                </label>
                <div className="flex items-center space-x-4">
                  <span className="text-sm leading-tight">
                    abc<br/>def
                  </span>
                  <input
                    type="range"
                    id="text-spacing"
                    min="1"
                    max="2"
                    step="0.1"
                    value={textSpacing}
                    onChange={(e) => handleTextSpacingChange(e.target.value)}
                    className="w-full h-2 bg-bg-tertiary rounded-lg appearance-none cursor-pointer accent-accent-primary"
                    aria-label="Ajuster la hauteur des lignes"
                  />
                  <span className="text-sm leading-loose">
                    abc<br/>def
                  </span>
                </div>
                <div className="text-xs text-text-secondary text-center mt-1">
                  {Math.round((textSpacing - 1) * 100)}% {textSpacing > 1 ? 'plus espacé' : textSpacing < 1 ? 'plus serré' : 'normal'}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccessibilitySettings; 