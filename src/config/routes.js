import { lazy } from 'react';

// Lazy loading des pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../pages/PolitiqueConfidentialite'));
const LegalNotice = lazy(() => import('../pages/MentionsLegales'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Configuration des routes
export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    title: 'Accueil',
    description: 'Bienvenue sur mon portfolio professionnel',
  },
  {
    path: '/about',
    component: About,
    title: 'À propos',
    description: 'En savoir plus sur moi et mes compétences',
  },
  {
    path: '/projects',
    component: Projects,
    title: 'Projets',
    description: 'Découvrez mes projets et réalisations',
  },
  {
    path: '/contact',
    component: Contact,
    title: 'Contact',
    description: 'Contactez-moi pour discuter de vos projets',
  },
  {
    path: '/privacy',
    component: PrivacyPolicy,
    title: 'Politique de confidentialité',
    description: 'Politique de confidentialité et protection des données',
  },
  {
    path: '/legal',
    component: LegalNotice,
    title: 'Mentions légales',
    description: 'Informations légales et mentions obligatoires',
  },
  {
    path: '*',
    component: NotFound,
    title: 'Page non trouvée',
    description: 'La page que vous recherchez n\'existe pas',
  },
];

// Configuration du menu de navigation
export const navigationConfig = [
  {
    path: '/',
    label: 'Accueil',
    icon: 'home',
  },
  {
    path: '/about',
    label: 'À propos',
    icon: 'user',
  },
  {
    path: '/projects',
    label: 'Projets',
    icon: 'projects',
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: 'mail',
  },
];

// Configuration du footer
export const footerConfig = {
  links: [
    {
      path: '/privacy',
      label: 'Confidentialité',
    },
    {
      path: '/legal',
      label: 'Mentions légales',
    },
  ],
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/votre-username',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/votre-profil',
      icon: 'linkedin',
    },
  ],
}; 