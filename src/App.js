import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CookieConsent from './components/features/CookieConsent';
import SEO from './assets/utils/SEO';
import PageTransition from './components/layout/PageTransition';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollProgress from './components/layout/ScrollProgress';
import Background from './components/layout/Background';
import AccessibilitySettings from './components/AccessibilitySettings';

// Préchargement des composants principaux
const Home = lazy(() => import(/* webpackPrefetch: true */ './pages/Home'));
const About = lazy(() => import(/* webpackPrefetch: true */ './pages/About'));
const Projects = lazy(() => import(/* webpackPrefetch: true */ './pages/Projects'));
const Contact = lazy(() => import(/* webpackPrefetch: true */ './pages/Contact'));

// Chargement à la demande des autres pages
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Préchargement intelligent des autres pages
const preloadRoute = (path) => {
  // Vérifier si la route est déjà préchargée
  if (document.querySelector(`link[href="${path}"]`)) return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  link.as = 'document';
  document.head.appendChild(link);
};

const App = () => {
  useEffect(() => {
    // Préchargement des routes principales uniquement si elles ne sont pas déjà chargées
    const currentPath = window.location.pathname;
    if (currentPath !== '/about') preloadRoute('/about');
    if (currentPath !== '/projects') preloadRoute('/projects');
    if (currentPath !== '/contact') preloadRoute('/contact');
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <title>ClerelyDesign - Portfolio Créatif</title>
          <meta name="description" content="Portfolio professionnel présentant mes projets de design et développement web" />
          <meta name="keywords" content="design, portfolio, web development, UI/UX" />
          <meta name="author" content="ClerelyDesign" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="ClerelyDesign - Portfolio Créatif" />
          <meta property="og:description" content="Portfolio professionnel présentant mes projets de design et développement web" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://clerelydesign.com" />
        </Helmet>

        <div className="min-h-screen bg-background text-text">
          <SEO />
          <Background />
          <ScrollProgress />
          
          <Navbar />
          
          <main className="relative z-10">
            <AnimatePresence mode="wait">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={
                    <PageTransition>
                      <Home />
                    </PageTransition>
                  } />
                  <Route path="/about" element={
                    <PageTransition>
                      <About />
                    </PageTransition>
                  } />
                  <Route path="/projects" element={
                    <PageTransition>
                      <Projects />
                    </PageTransition>
                  } />
                  <Route path="/contact" element={
                    <PageTransition>
                      <Contact />
                    </PageTransition>
                  } />
                  <Route path="/mentions-legales" element={
                    <PageTransition>
                      <MentionsLegales />
                    </PageTransition>
                  } />
                  <Route path="/politique-confidentialite" element={
                    <PageTransition>
                      <PolitiqueConfidentialite />
                    </PageTransition>
                  } />
                  <Route path="*" element={
                    <PageTransition>
                      <NotFound />
                    </PageTransition>
                  } />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>

          <Footer />
          <CookieConsent />
          <AccessibilitySettings />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
