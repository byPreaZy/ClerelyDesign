import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: 'Accueil', href: '/' },
      { name: 'À propos', href: '/about' },
      { name: 'Projets', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/byPreaZy',
        icon: FaGithub,
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/kévin-clere-209b97206/',
        icon: FaLinkedin,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/PreaZyFX',
        icon: FaTwitter,
      },
      {
        name: 'Email',
        href: 'mailto:clerelydesign@gmail.com',
        icon: FaEnvelope,
      },
    ],
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                to={item.href}
                className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
              aria-label={item.name}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            {navigation.legal.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link
                  to={item.href}
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {currentYear} Clere'ly Design. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
