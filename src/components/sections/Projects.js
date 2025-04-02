import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import clsx from 'clsx';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
    image: '/path-to-project1-image.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/username/project1',
    liveUrl: 'https://project1.com',
  },
  {
    title: 'Task Management App',
    description: 'Application de gestion de tâches avec authentification et partage d\'équipe.',
    image: '/path-to-project2-image.jpg',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/project2',
    liveUrl: 'https://project2.com',
  },
  // Ajoutez d'autres projets ici
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={clsx(
        'group relative overflow-hidden rounded-xl',
        'bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl',
        'border border-white/20 dark:border-gray-700/20',
        'shadow-lg hover:shadow-xl transition-all duration-300'
      )}
    >
      {/* Image du projet */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={clsx(
                'px-3 py-1 text-sm rounded-full',
                'bg-primary/10 text-primary dark:bg-primary/20',
                'border border-primary/20'
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'flex items-center gap-2 text-gray-600 dark:text-gray-300',
              'hover:text-primary dark:hover:text-primary transition-colors duration-300'
            )}
          >
            <FaGithub className="w-5 h-5" />
            <span>Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'flex items-center gap-2 text-gray-600 dark:text-gray-300',
              'hover:text-primary dark:hover:text-primary transition-colors duration-300'
            )}
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes derniers projets et réalisations en tant que développeur full-stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 