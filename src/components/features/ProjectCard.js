import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import clsx from 'clsx';
import OptimizedImage from '../ui/OptimizedImage.js';

const ProjectCard = ({ 
  title, 
  description, 
  tags = [],
  image, 
  link, 
  githubLink,
  externalLink,
  featured = false
}) => {
  // Empêcher la propagation des clics sur les boutons pour éviter la navigation
  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "group relative overflow-hidden rounded-xl transition-all duration-300",
        "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl",
        "border border-gray-200 dark:border-gray-700",
        "hover:border-primary-500 dark:hover:border-primary-400",
        featured && "md:col-span-2"
      )}
    >
      {link ? (
        <Link to={link} className="block">
          <div className={clsx(
            "h-48 md:h-64 overflow-hidden",
            featured && "md:h-80"
          )}>
            <OptimizedImage
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {description}
            </p>
          </div>
        </Link>
      ) : (
        <>
          <div className={clsx(
            "h-48 md:h-64 overflow-hidden",
            featured && "md:h-80"
          )}>
            <OptimizedImage
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {description}
            </p>
          </div>
        </>
      )}
      
      {tags && tags.length > 0 && (
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={clsx(
                  "px-3 py-1 text-xs font-medium rounded-full",
                  "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                  "group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30",
                  "group-hover:text-primary-600 dark:group-hover:text-primary-400",
                  "transition-colors duration-300"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="px-6 pb-6 flex items-center gap-4">
        {link && (
          <Link
            to={link}
            className={clsx(
              "inline-flex items-center text-primary-600 dark:text-primary-400",
              "hover:text-primary-700 dark:hover:text-primary-300",
              "transition-colors duration-300"
            )}
            aria-label={`Voir le projet ${title}`}
            onClick={handleButtonClick}
          >
            Voir le projet
            <svg
              className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        )}
        
        <div className="flex gap-3 ml-auto">
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "p-2 rounded-full transition-all duration-300",
                "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                "hover:bg-primary-100 dark:hover:bg-primary-900/30",
                "hover:text-primary-600 dark:hover:text-primary-400"
              )}
              aria-label={`Voir le code source de ${title} sur GitHub`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleButtonClick}
            >
              <FaGithub className="text-lg" aria-hidden="true" />
            </motion.a>
          )}
          
          {externalLink && (
            <motion.a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "p-2 rounded-full transition-all duration-300",
                "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                "hover:bg-primary-100 dark:hover:bg-primary-900/30",
                "hover:text-primary-600 dark:hover:text-primary-400"
              )}
              aria-label={`Voir la démo en ligne de ${title}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleButtonClick}
            >
              <FaExternalLinkAlt className="text-lg" aria-hidden="true" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 