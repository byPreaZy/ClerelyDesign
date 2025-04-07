import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/svg/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/projects', label: 'Projets' },
    { path: '/contact', label: 'Contact' }
  ];

  const text = "Clere'ly Design";
  const letters = text.split('');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex flex-col items-center group">
            <div className="relative flex flex-col items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-auto md:h-18 object-contain transition-transform duration-300 group-hover:scale-105 dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]"
              />
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="-mt-5 text-center"
              >
                <div className="flex">
                  {letters.map((letter, index) => (
                    <motion.span
                      key={index}
                      className={`text-sm md:text-base font-bold tracking-wider ${
                        letter === ' ' ? 'w-1' : ''
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -5, 0, 5, 0],
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + index * 0.3,
                        ease: [0.2, 0.65, 0.3, 0.9],
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.1,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <span className={letter === ' ' ? '' : letter === 'D' ? 'text-[#FF9F1C]' : 'text-[#2EC4B6]'}>
                        {letter}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#2EC4B6] dark:text-[#2EC4B6]'
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#2EC4B6] dark:hover:text-[#2EC4B6]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
            >
              {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
            >
              {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-[#2EC4B6] dark:hover:text-[#2EC4B6] focus:outline-none"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-24 left-0 right-0 bg-white dark:bg-gray-800/95 backdrop-blur-md shadow-lg z-40"
          >
            <div className="px-4 py-3 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-[#2EC4B6] dark:text-[#2EC4B6] bg-gray-100/50 dark:bg-gray-700/50'
                      : 'text-gray-600 dark:text-gray-300 hover:text-[#2EC4B6] dark:hover:text-[#2EC4B6] hover:bg-gray-100/30 dark:hover:bg-gray-700/30'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
