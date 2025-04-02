import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import clsx from 'clsx';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const fullText = "Développeur Full Stack & Graphiste";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 5000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [currentText, isTyping]);

  const renderColoredText = (text) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      let colorClass = 'text-gray-900/90 dark:text-white/90';
      let delay = index * 0.1;

      if (word === 'Développeur') {
        colorClass = 'text-[#2EC4B6]/90';
      } else if (word === 'Full') {
        colorClass = 'text-[#2EC4B6]/80';
      } else if (word === 'Stack') {
        colorClass = 'text-[#2EC4B6]/70';
      } else if (word === 'Graphiste') {
        colorClass = 'text-[#FF9F1C]/90';
      }

      return (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay }}
          className={`${colorClass} inline-block`}
        >
          {word}
          {index < words.length - 1 && ' '}
        </motion.span>
      );
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: 'https://github.com/votre-username',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/votre-username',
      label: 'LinkedIn',
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      href: 'https://twitter.com/votre-username',
      label: 'Twitter',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
        >
          <span className="relative inline-block">
            {renderColoredText(currentText)}
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2EC4B6]/80 via-[#FF9F1C]/80 to-[#2EC4B6]/80"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12"
        >
          <span className="text-[#2EC4B6]/80">Création d'applications web</span>
          <span className="mx-2 text-[#2EC4B6]/60">modernes</span>
          <span className="mx-2">&</span>
          <span className="text-[#FF9F1C]/80">d'identités visuelles</span>
          <span className="mx-1 text-[#FF9F1C]/60">uniques</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'text-gray-600/80 dark:text-gray-300/80 hover:text-[#2EC4B6]/90 dark:hover:text-[#2EC4B6]/90',
                'transition-colors duration-300 transform hover:scale-110'
              )}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 