import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import clsx from 'clsx';
import { projects, categories, filters } from '../../components/data/projects';
import UnderConstructionWithAccess from '../ui/UnderConstructionWithAccess';

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
          {project.tags.map((tech) => (
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
            aria-label={`Voir le code source de ${project.title} sur GitHub`}
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
            aria-label={`Voir la démo en ligne de ${project.title}`}
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('recent');

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Filtrer par catégorie
    if (selectedCategory !== 'all') {
      result = result.filter(project => project.category === selectedCategory);
    }

    // Appliquer le filtre
    switch (selectedFilter) {
      case 'recent':
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'featured':
        result = result.filter(project => project.featured);
        break;
      case 'popular':
        // Ici, vous pourriez ajouter une logique basée sur des vues ou des likes
        result.sort((a, b) => b.featured - a.featured);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedFilter]);

  const ProjectsContent = () => (
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

        {/* Filtres et catégories */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300',
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                )}
                aria-label={category.ariaLabel}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300',
                  selectedFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                )}
                aria-label={filter.ariaLabel}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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

  return (
    <UnderConstructionWithAccess
      title="Projets en cours de développement"
      description="Nous sommes en train de finaliser la présentation de nos projets. Cette section sera bientôt disponible avec une sélection de nos réalisations en développement web et design graphique."
      icon={FaCode}
      password="Moi11/11/94!Teddy"
      accessTitle="Accès aux projets en développement"
      accessDescription="Entrez le mot de passe pour accéder à la version en cours de développement des projets."
    >
      <ProjectsContent />
    </UnderConstructionWithAccess>
  );
};

export default Projects; 