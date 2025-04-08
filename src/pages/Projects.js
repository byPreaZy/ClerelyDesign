import React from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/features/ProjectGrid';
import { useProjects } from '../assets/hooks/useProjects';
import { projects } from '../data/projects';
import UnderConstructionWithAccess from '../components/ui/UnderConstructionWithAccess';
import { FaCode } from 'react-icons/fa';

const Projects = () => {
  const { filter, setFilter, categories, filteredProjects } = useProjects(projects);

  const ProjectsContent = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets en développement web et en design graphique,
            reflétant mon expertise dans ces deux domaines.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${filter === category.id
                    ? 'bg-[#2EC4B6] text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <ProjectGrid projects={filteredProjects} />
      </div>
    </motion.div>
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