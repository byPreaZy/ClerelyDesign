import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useTheme } from '../../components/context/ThemeContext.js';
import { socialLinks, heroContent } from '../../data/hero';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const fullText = heroContent.title;
  const [isTyping, setIsTyping] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 40);
      } else {
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [currentText, isTyping, fullText]);

  const renderColoredText = (text) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      let colorClass = 'text-gray-900/90 dark:text-white/90';
      let delay = index * 0.08;

      if (word === 'Développeur') {
        colorClass = 'text-[#2EC4B6]/90';
      } else if (word === 'FullStack') {
        colorClass = 'text-[#2EC4B6]/80';
      } else if (word === 'Graphiste') {
        colorClass = 'text-[#FF9F1C]/90';
      }

      return (
        <React.Fragment key={index}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay }}
            className={`${colorClass} inline-block`}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && (
            <span className="inline-block" style={{ width: '0.5em' }}>&nbsp;</span>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background gradient */}
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-br",
          theme === 'dark' 
            ? "from-primary/5 via-secondary/5 to-primary/5" 
            : "from-primary/10 via-secondary/10 to-primary/10"
        )}
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text-light dark:text-text-dark">
            {renderColoredText(currentText)}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {heroContent.description}
          </p>
          
          <div className="flex justify-center space-x-4 mt-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label={link.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12"
          >
            <a
              href={heroContent.ctaButton.href}
              className="inline-block px-8 py-3 bg-[#2EC4B6] text-white rounded-lg font-medium hover:bg-[#2EC4B6]/90 transition-colors duration-200"
            >
              {heroContent.ctaButton.text}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 