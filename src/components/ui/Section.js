import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../features/AnimatedText';

const Section = ({ 
  children, 
  id,
  title,
  subtitle,
  className = '',
  containerClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  delay = 0,
  animate = true,
  background = false,
  backgroundOpacity = 0.1,
  backgroundBlur = false,
  backgroundGradient = false
}) => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const backgroundStyles = background ? `
    relative
    ${backgroundBlur ? 'backdrop-blur-sm' : ''}
    ${backgroundGradient 
      ? 'bg-gradient-to-br from-white/5 to-transparent dark:from-black/5 dark:to-transparent' 
      : `bg-white/[${backgroundOpacity}] dark:bg-black/[${backgroundOpacity}]`
    }
  ` : '';

  return (
    <motion.section
      id={id}
      className={`py-16 sm:py-24 ${backgroundStyles} ${className}`}
      variants={sectionVariants}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
    >
      {(title || subtitle) && (
        <div className="text-center mb-16">
          {title && (
            <AnimatedText
              text={title}
              className={`text-4xl sm:text-5xl font-bold mb-4 ${titleClassName}`}
              delay={delay}
            />
          )}
          {subtitle && (
            <AnimatedText
              text={subtitle}
              className={`text-xl text-gray-300 ${subtitleClassName}`}
              delay={delay + 0.2}
            />
          )}
        </div>
      )}
      <div className={containerClassName}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section; 