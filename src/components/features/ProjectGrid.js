import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects = [] }) => {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={project.title || index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                githubLink={project.githubLink}
                externalLink={project.externalLink}
                featured={project.featured}
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
            Aucun projet à afficher
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectGrid; 