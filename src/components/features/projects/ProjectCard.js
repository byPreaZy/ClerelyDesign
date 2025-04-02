import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import clsx from 'clsx';
import OptimizedImage from '../../ui/OptimizedImage';

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  image, 
  link, 
  githubLink,
  externalLink,
  featured = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "group relative overflow-hidden rounded-xl transition-all duration-300",
        "bg-white/5 dark:bg-gray-900/5 backdrop-blur-xl border border-white/10 dark:border-gray-800/10",
        "hover:shadow-xl hover:shadow-blue-500/10 hover:border-white/20",
        featured && "md:col-span-2"
      )}
    >
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
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/70 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={clsx(
                "px-3 py-1 text-xs font-medium rounded-full",
                "bg-white/10 text-white/90",
                "group-hover:bg-blue-500/20 group-hover:text-blue-300",
                "transition-colors duration-300"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          {link && (
            <Link
              to={link}
              className={clsx(
                "inline-flex items-center text-blue-400 hover:text-blue-300",
                "transition-colors duration-300"
              )}
              aria-label={`Voir le projet ${title}`}
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
                  "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                )}
                aria-label={`Voir le code source de ${title} sur GitHub`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
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
                  "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                )}
                aria-label={`Voir la démo en ligne de ${title}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="text-lg" aria-hidden="true" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 