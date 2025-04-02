import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import clsx from 'clsx';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={clsx(
        "fixed top-0 left-0 right-0 h-1 z-50 origin-left",
        "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
        "opacity-0 transition-opacity duration-300",
        isVisible && "opacity-100"
      )}
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress; 