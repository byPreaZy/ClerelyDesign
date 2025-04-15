import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import clsx from 'clsx';
import { projects } from '../../data/projects';
import UnderConstructionWithAccess from '../ui/UnderConstructionWithAccess';
import ProjectGrid from '../features/ProjectGrid';
import { useProjects } from '../../assets/hooks/useProjects';
import { Link } from 'react-router-dom';

const Projects = ({ isHomePage = false, displayMode = 'recent', maxProjects = 3 }) => {
  const { filter, setFilter, categories, filteredProjects } = useProjects(projects);

  // Filtrer les projets pour la page d'accueil
  const homeProjects = useMemo(() => {
    if (!isHomePage) return filteredProjects;
    
    let result = [...projects];
    
    // Appliquer le filtre de catégorie
    if (filter !== 'all') {
      result = result.filter(project => project.category === filter);
    }
    
    // Appliquer le mode d'affichage
    switch (displayMode) {
      case 'recent':
        // Trier par date (du plus récent au plus ancien)
        result.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
        break;
      case 'featured':
        // Filtrer les projets en vedette
        result = result.filter(project => project.featured);
        break;
      case 'popular':
        // Trier par popularité (basé sur le champ featured pour l'instant)
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }
    
    // Limiter le nombre de projets affichés
    return result.slice(0, maxProjects);
  }, [isHomePage, displayMode, maxProjects, filter, filteredProjects]);

  const ProjectsContent = () => (
    <section className={`py-20 ${isHomePage ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`${isHomePage ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold text-gray-900 dark:text-white mb-4`}>
            Mes Projets
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes derniers projets et réalisations en tant que développeur full-stack.
          </p>
        </motion.div>

        {/* Filtres et catégories - uniquement sur la page Projets */}
        {!isHomePage && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={clsx(
                    'px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                    filter === category.id
                      ? 'bg-[#2EC4B6] text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  )}
                  aria-label={category.ariaLabel}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grille de projets */}
        <ProjectGrid projects={isHomePage ? homeProjects : filteredProjects} />
        
        {/* Bouton "Voir tous les projets" sur la page d'accueil */}
        {isHomePage && (
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#2EC4B6] hover:bg-[#25a99d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2EC4B6] transition-colors duration-300"
            >
              Voir tous mes projets
            </Link>
          </div>
        )}
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