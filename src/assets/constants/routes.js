/**
 * Constantes liées aux routes de l'application
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  CONTACT: '/contact',
  BLOG: '/blog',
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/projects/:id',
  BLOG_POST: '/blog/:slug',
};

export const NAVIGATION_ITEMS = [
  { name: 'Accueil', path: ROUTES.HOME },
  { name: 'À propos', path: ROUTES.ABOUT },
  { name: 'Services', path: ROUTES.SERVICES },
  { name: 'Portfolio', path: ROUTES.PORTFOLIO },
  { name: 'Blog', path: ROUTES.BLOG },
  { name: 'Contact', path: ROUTES.CONTACT },
]; 