import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../utils/SEO';
import 'animate.css';

const MentionsLegales = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4"
    >
      <SEO 
        title="Mentions Légales"
        description="Mentions légales du portfolio de Kevin C."
      />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mentions Légales</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose dark:prose-invert max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
            <p>
              Ce site est édité par CLERE Kévin<br />
              Adresse : <a href="https://www.google.com/maps/search/?api=1&query=55+impasse+des+buguets+71500+Ratte+France" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">55 impasse des buguets, 71500 Ratte</a><br />
              Email : <a href="mailto:clerelydesign@gmail.com" className="text-primary hover:text-primary-dark">clerelydesign@gmail.com</a><br />
              Téléphone : <a href="tel:+33695490525" className="text-primary hover:text-primary-dark">06 95 49 05 25</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
            <p>
              Ce site est hébergé par IONOS<br />
              IONOS SARL<br />
              7 place de la Gare<br />
              57200 Sarreguemines<br />
              Téléphone : 0970 808 911
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Protection des données personnelles</h2>
            <p>
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de modification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter par email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, vous acceptez leur utilisation. Pour plus d'informations, consultez notre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Crédits</h2>
            <p>
              Design et développement : [Votre Nom]<br />
              Technologies utilisées : React, Tailwind CSS, Framer Motion
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MentionsLegales; 