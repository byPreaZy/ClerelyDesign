import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CookieConsent from './components/features/CookieConsent';
import SEO from './utils/SEO';
import PageTransition from './components/layout/PageTransition';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollProgress from './components/layout/ScrollProgress';
import Background from './components/layout/Background';

// Préchargement des composants principaux
const Home = lazy(() => import(/* webpackPrefetch: true */ './pages/Home'));
const About = lazy(() => import(/* webpackPrefetch: true */ './pages/About'));
const Projects = lazy(() => import(/* webpackPrefetch: true */ './pages/Projects'));
const Contact = lazy(() => import(/* webpackPrefetch: true */ './pages/Contact'));

// Chargement à la demande des autres pages
const CV = lazy(() => import('./pages/CV'));
const Competences = lazy(() => import('./pages/Competences'));
const PortfolioDev = lazy(() => import('./pages/PortfolioDev'));
const PortfolioGraphiste = lazy(() => import('./pages/PortfolioGraphiste'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
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
                  <Route path="/cv" element={
                    <PageTransition>
                      <CV />
                    </PageTransition>
                  } />
                  <Route path="/competences" element={
                    <PageTransition>
                      <Competences />
                    </PageTransition>
                  } />
                  <Route path="/portfolio-dev" element={
                    <PageTransition>
                      <PortfolioDev />
                    </PageTransition>
                  } />
                  <Route path="/portfolio-graphiste" element={
                    <PageTransition>
                      <PortfolioGraphiste />
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
                  <Route path="/blog" element={
                    <PageTransition>
                      <Blog />
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
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
