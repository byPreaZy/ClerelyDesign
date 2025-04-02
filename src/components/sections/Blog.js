import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser } from 'react-icons/fa';
import clsx from 'clsx';

const blogPosts = [
  {
    title: 'Les meilleures pratiques React en 2024',
    excerpt: 'Découvrez les dernières tendances et meilleures pratiques pour développer des applications React modernes et performantes.',
    image: '/path-to-blog1-image.jpg',
    date: '2024-03-15',
    author: 'John Doe',
    tags: ['React', 'JavaScript', 'Web Development'],
    slug: 'meilleures-pratiques-react-2024',
  },
  {
    title: 'Optimisation des performances web',
    excerpt: 'Guide complet pour améliorer les performances de votre site web et obtenir un meilleur score Lighthouse.',
    image: '/path-to-blog2-image.jpg',
    date: '2024-03-10',
    author: 'Jane Smith',
    tags: ['Performance', 'SEO', 'Web Development'],
    slug: 'optimisation-performances-web',
  },
  // Ajoutez d'autres articles ici
];

const BlogCard = ({ post }) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className={clsx(
        'group relative overflow-hidden rounded-xl',
        'bg-white dark:bg-gray-800',
        'border border-gray-200 dark:border-gray-700',
        'shadow-lg hover:shadow-xl transition-all duration-300'
      )}
    >
      {/* Image de l'article */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>

        {/* Métadonnées */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <FaCalendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={clsx(
                'px-3 py-1 text-sm rounded-full',
                'bg-gray-100 dark:bg-gray-700',
                'text-gray-600 dark:text-gray-300'
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Blog = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes derniers articles sur le développement web, les bonnes pratiques et les nouvelles technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 