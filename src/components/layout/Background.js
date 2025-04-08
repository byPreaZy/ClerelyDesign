import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../components/context/ThemeContext.js';
import clsx from 'clsx';
import gridDark from '../../assets/svg/grid-dark.svg';
import gridLight from '../../assets/svg/grid-light.svg';

const Background = () => {
  const { isDark } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculer la position relative (0 à 1)
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Effet parallaxe pour les éléments décoratifs
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 20 - 10}px, ${mousePosition.y * 20 - 10}px)`,
  };

  const reverseParallaxStyle = {
    transform: `translate(${mousePosition.x * -30 + 15}px, ${mousePosition.y * -30 + 15}px)`,
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient de fond */}
      <div 
        className={clsx(
          "absolute inset-0 transition-colors duration-700",
          isDark 
            ? "bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900" 
            : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        )}
      />
      
      {/* Motif de grille */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${isDark ? gridDark : gridLight})`,
          backgroundSize: '50px 50px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cercle bleu */}
        <motion.div 
          className={clsx(
            "absolute top-20 left-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl",
            isDark ? "bg-blue-500/10" : "bg-blue-400/20"
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={parallaxStyle}
        />
        
        {/* Cercle violet */}
        <motion.div 
          className={clsx(
            "absolute bottom-20 right-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl",
            isDark ? "bg-purple-500/10" : "bg-purple-400/20"
          )}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={reverseParallaxStyle}
        />
        
        {/* Cercle rose */}
        <motion.div 
          className={clsx(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl",
            isDark ? "bg-pink-500/5" : "bg-pink-400/10"
          )}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      {/* Particules */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={clsx(
              "absolute w-1 h-1 rounded-full",
              isDark ? "bg-white/20" : "bg-gray-800/10"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background; 