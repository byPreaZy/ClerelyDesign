import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImage } from 'react-icons/fa';

const OptimizedImage = ({ src, alt, className = '', loading = 'lazy', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
    };

    img.onerror = () => {
      console.error(`Erreur de chargement de l'image: ${src}`);
      setError(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className="relative">
      <AnimatePresence>
        {!isLoaded && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          />
        )}
      </AnimatePresence>

      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
          <FaImage className="text-4xl text-gray-400 dark:text-gray-600 mb-2" />
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center px-2">Image non disponible</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 