import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ 
  projects, 
  className = '',
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 6,
  delay = 0,
  animate = true
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const gridCols = {
    sm: `grid-cols-${columns.sm}`,
    md: `md:grid-cols-${columns.md}`,
    lg: `lg:grid-cols-${columns.lg}`,
  };

  const Component = animate ? motion.div : 'div';

  return (
    <Component
      className={`grid ${gridCols.sm} ${gridCols.md} ${gridCols.lg} gap-${gap} ${className}`}
      variants={containerVariants}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id || index}
          {...project}
          delay={delay + index * 0.1}
        />
      ))}
    </Component>
  );
};

export default ProjectGrid; 