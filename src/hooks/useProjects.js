import { useState, useMemo } from 'react';

export const useProjects = (initialProjects = []) => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web' },
    { id: 'design', name: 'Design' }
  ];

  const filteredProjects = useMemo(() => {
    if (!initialProjects || !Array.isArray(initialProjects)) {
      return [];
    }
    
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