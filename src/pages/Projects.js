import React from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/features/projects/ProjectGrid';
import { useProjects } from '../hooks/useProjects';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Personnel',
      description: 'Un portfolio moderne développé avec React et Tailwind CSS, mettant en valeur mes compétences et projets.',
      image: '/projects/portfolio.jpg',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/votre-username/portfolio',
      demo: 'https://votre-portfolio.com',
      category: 'web'
    },
    {
      title: 'Application E-commerce',
      description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
      image: '/projects/ecommerce.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/votre-username/ecommerce',
      demo: 'https://votre-ecommerce.com',
      category: 'web'
    },
    {
      title: 'Application Mobile Fitness',
      description: 'Une application de suivi d\'entraînement avec des fonctionnalités de suivi de progression.',
      image: '/projects/fitness.jpg',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com/votre-username/fitness-app',
      demo: 'https://votre-fitness-app.com',
      category: 'mobile'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Un tableau de bord interactif pour visualiser et analyser des données en temps réel.',
      image: '/projects/dashboard.jpg',
      tags: ['Vue.js', 'D3.js', 'Express'],
      github: 'https://github.com/votre-username/dashboard',
      demo: 'https://votre-dashboard.com',
      category: 'web'
    }
  ];

  const { filter, setFilter, categories, filteredProjects } = useProjects(projects);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mes Projets</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets les plus récents, mettant en valeur
            mes compétences en développement web et mobile.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${filter === category.id
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow'
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
};

export default Projects; 