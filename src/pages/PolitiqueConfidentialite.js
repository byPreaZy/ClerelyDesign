import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../utils/SEO';
import 'animate.css';

const PolitiqueConfidentialite = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4"
    >
      <SEO 
        title="Politique de Confidentialité"
        description="Politique de confidentialité du portfolio de Kevin C."
      />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Politique de Confidentialité</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose dark:prose-invert max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web. Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles de manière transparente et sécurisée.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Collecte des données</h2>
            <p>
              Nous collectons les données suivantes :
            </p>
            <ul>
              <li>Informations que vous nous fournissez directement (nom, email, message)</li>
              <li>Données de navigation (adresse IP, type de navigateur, pages visitées)</li>
              <li>Cookies et technologies similaires</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Utilisation des données</h2>
            <p>
              Nous utilisons vos données pour :
            </p>
            <ul>
              <li>Répondre à vos demandes et messages</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Envoyer des communications importantes</li>
              <li>Assurer la sécurité de notre site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez contrôler l'utilisation des cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter à l'adresse suivante : [Votre Email]
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PolitiqueConfidentialite; 