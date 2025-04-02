import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  glass = false,
  delay = 0,
  onClick,
  animate = true
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    hover: hover ? {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    } : {},
  };

  const baseStyles = `
    relative overflow-hidden rounded-xl
    ${glass ? 'backdrop-blur-md bg-white/10 dark:bg-black/10' : 'bg-white/5 dark:bg-black/5'}
    border border-white/10 dark:border-white/5
    shadow-lg shadow-black/5 dark:shadow-black/10
    transition-all duration-300
  `;

  const hoverStyles = hover ? `
    hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10
    hover:border-blue-500/20 dark:hover:border-purple-500/20
  ` : '';

  const Component = animate ? motion.div : 'div';

  return (
    <Component
      className={`${baseStyles} ${hoverStyles} ${className}`}
      variants={cardVariants}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      whileHover={hover ? "hover" : undefined}
      viewport={{ once: true, margin: "-100px" }}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Effet de brillance */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}
      
      {children}
    </Component>
  );
};

// Sous-composants pour une meilleure organisation
Card.Header = ({ children, className = '' }) => (
  <div className={`p-6 border-b border-white/10 ${className}`}>
    {children}
  </div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`p-6 border-t border-white/10 ${className}`}>
    {children}
  </div>
);

export default Card; 