import React from 'react';
import { motion } from 'framer-motion';

const Container = ({
  children,
  className = '',
  maxWidth = '7xl',
  padding = true,
  animate = true,
  delay = 0
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const maxWidthClasses = {
    'sm': 'max-w-screen-sm',
    'md': 'max-w-screen-md',
    'lg': 'max-w-screen-lg',
    'xl': 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    '7xl': 'max-w-7xl',
    'full': 'max-w-full',
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  const Component = animate ? motion.div : 'div';

  return (
    <Component
      className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses} ${className}`}
      variants={containerVariants}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </Component>
  );
};

export default Container; 