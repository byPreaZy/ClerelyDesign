import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  once = true,
  type = 'words',
  staggerChildren = 0.1
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const words = text.split(' ');

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
    >
      {type === 'words' ? (
        words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))
      ) : (
        text.split('').map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))
      )}
    </motion.div>
  );
};

export default AnimatedText; 