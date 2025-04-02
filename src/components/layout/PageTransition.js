import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const PageTransition = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={clsx("min-h-screen", className)}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 