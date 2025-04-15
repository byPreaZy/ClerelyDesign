// Configuration de l'application
export const APP_CONFIG = {
  name: 'ClerelyDesign',
  version: '1.0.0',
  description: 'Portfolio professionnel',
};

// Configuration des thèmes
export const THEME_CONFIG = {
  light: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    text: '#000000',
  },
  dark: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    background: '#000000',
    text: '#FFFFFF',
  },
};

// Configuration des routes
export const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
  contact: '/contact',
  privacy: '/privacy',
  legal: '/legal',
};

// Configuration de l'API
export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Configuration des animations
export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
};

// Configuration des breakpoints
export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Configuration de l'accessibilité
export const A11Y_CONFIG = {
  skipToContent: 'Passer au contenu principal',
  menuLabel: 'Menu principal',
  closeMenu: 'Fermer le menu',
};

// Configuration du SEO
export const SEO_CONFIG = {
  defaultTitle: 'ClerelyDesign - Portfolio Professionnel',
  defaultDescription: 'Portfolio professionnel présentant mes projets et compétences en développement web.',
  defaultKeywords: 'portfolio, développeur web, React, JavaScript, CSS',
  defaultImage: '/images/og-image.jpg',
}; 