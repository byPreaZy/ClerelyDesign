import { useState, useMemo } from 'react';

export const useProjects = (initialProjects) => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' }
  ];

  const filteredProjects = useMemo(() => {
    return filter === 'all'
      ? initialProjects
      : initialProjects.filter(project => project.category === filter);
  }, [filter, initialProjects]);

  return {
    filter,
    setFilter,
    categories,
    filteredProjects
  };
}; 