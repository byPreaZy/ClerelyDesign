import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import clsx from 'clsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implémentez ici la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      content: 'clerelydesign@gmail.com',
      href: 'mailto:clerelydesign@gmail.com?subject=Contact%20depuis%20le%20portfolio',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Téléphone',
      content: '06 95 49 05 25',
      href: 'tel:+33695490525',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Localisation',
      content: '55 impasse des buguets, 71500 Ratte',
      href: 'https://www.google.com/maps/search/?api=1&query=55+impasse+des+buguets+71500+Ratte+France',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute autre question.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                target={info.icon.type === FaMapMarkerAlt ? "_blank" : "_self"}
                rel={info.icon.type === FaMapMarkerAlt ? "noopener noreferrer" : ""}
                className={clsx(
                  'flex items-start space-x-4 p-6 rounded-xl',
                  'bg-white dark:bg-gray-700',
                  'border border-gray-200 dark:border-gray-600',
                  'hover:border-primary dark:hover:border-primary',
                  'transition-all duration-300'
                )}
              >
                <div className="text-primary dark:text-primary-light">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {info.content}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={clsx(
                    'w-full px-4 py-2 rounded-lg',
                    'bg-white dark:bg-gray-700',
                    'border border-gray-300 dark:border-gray-600',
                    'focus:ring-2 focus:ring-primary focus:border-transparent',
                    'transition-all duration-300'
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={clsx(
                    'w-full px-4 py-2 rounded-lg',
                    'bg-white dark:bg-gray-700',
                    'border border-gray-300 dark:border-gray-600',
                    'focus:ring-2 focus:ring-primary focus:border-transparent',
                    'transition-all duration-300'
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={clsx(
                    'w-full px-4 py-2 rounded-lg',
                    'bg-white dark:bg-gray-700',
                    'border border-gray-300 dark:border-gray-600',
                    'focus:ring-2 focus:ring-primary focus:border-transparent',
                    'transition-all duration-300'
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={clsx(
                    'w-full px-4 py-2 rounded-lg',
                    'bg-white dark:bg-gray-700',
                    'border border-gray-300 dark:border-gray-600',
                    'focus:ring-2 focus:ring-primary focus:border-transparent',
                    'transition-all duration-300'
                  )}
                />
              </div>

              <button
                type="submit"
                className={clsx(
                  'w-full px-6 py-3 rounded-lg',
                  'bg-primary hover:bg-primary-dark',
                  'text-white font-medium',
                  'transition-all duration-300',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                )}
              >
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 