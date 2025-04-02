import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUser } from 'react-icons/fa';
import OptimizedImage from '../components/ui/OptimizedImage';

const Blog = () => {
  const [filter, setFilter] = useState('all');

  const blogPosts = useMemo(() => [
    {
      id: 1,
      title: 'Les tendances du développement web en 2024',
      excerpt: 'Découvrez les technologies et pratiques qui façonnent l\'avenir du développement web.',
      content: 'Contenu détaillé de l\'article...',
      image: '/blog/web-dev-trends.webp',
      date: '2024-03-15',
      author: 'Kévin Clere',
      category: 'development',
      tags: ['Web Development', 'JavaScript', 'React'],
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Optimisation des performances React',
      excerpt: 'Techniques avancées pour améliorer les performances de vos applications React.',
      content: 'Contenu détaillé de l\'article...',
      image: '/blog/react-performance.webp',
      date: '2024-03-10',
      author: 'Kévin Clere',
      category: 'react',
      tags: ['React', 'Performance', 'Optimization'],
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'Introduction à Tailwind CSS',
      excerpt: 'Guide complet pour démarrer avec Tailwind CSS dans vos projets.',
      content: 'Contenu détaillé de l\'article...',
      image: '/blog/tailwind-intro.webp',
      date: '2024-03-05',
      author: 'Kévin Clere',
      category: 'css',
      tags: ['CSS', 'Tailwind', 'Frontend'],
      readTime: '6 min'
    }
  ], []); // Tableau statique, pas de dépendances

  const categories = useMemo(() => [
    { id: 'all', name: 'Tous' },
    { id: 'development', name: 'Développement' },
    { id: 'react', name: 'React' },
    { id: 'css', name: 'CSS' }
  ], []); // Tableau statique, pas de dépendances

  const filteredPosts = useMemo(() => 
    filter === 'all'
      ? blogPosts
      : blogPosts.filter(post => post.category === filter),
    [filter, blogPosts]
  );

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mes articles sur le développement web, les bonnes pratiques
            et les dernières technologies.
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
                aria-pressed={filter === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center mr-4">
                      <FaCalendar className="w-4 h-4 mr-2" aria-hidden="true" />
                      {new Date(post.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="w-4 h-4 mr-2" aria-hidden="true" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime} de lecture
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      aria-label={`Lire l'article : ${post.title}`}
                    >
                      Lire la suite
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog; 