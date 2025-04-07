import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../assets/css/form.css';
import { contactInfo, availabilityInfo } from '../../components/data/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mjkyyega', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question.
            Je vous répondrai dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {item.content}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envoyez-moi un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#2EC4B6] dark:focus:ring-[#2EC4B6] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#2EC4B6] dark:focus:ring-[#2EC4B6] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Type de projet <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#2EC4B6] dark:focus:ring-[#2EC4B6] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  aria-required="true"
                >
                  <option value="">Sélectionnez un type de projet</option>
                  
                  <optgroup label="Développement Web">
                    <option value="Site vitrine">Site vitrine</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Application web">Application web</option>
                    <option value="Refonte de site">Refonte de site</option>
                    <option value="Landing page">Landing page</option>
                    <option value="Blog">Blog</option>
                    <option value="Portfolio">Portfolio</option>
                    <option value="Intégration web">Intégration web</option>
                    <option value="Optimisation SEO">Optimisation SEO</option>
                  </optgroup>
                  
                  <optgroup label="Graphisme Publicitaire">
                    <option value="Logo">Logo</option>
                    <option value="Identité visuelle">Identité visuelle</option>
                    <option value="Charte graphique">Charte graphique</option>
                    <option value="Affiches">Affiches</option>
                    <option value="Flyers">Flyers</option>
                    <option value="Brochures">Brochures</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Bannières publicitaires">Bannières publicitaires</option>
                    <option value="Supports print">Supports print</option>
                    <option value="Supports digitaux">Supports digitaux</option>
                  </optgroup>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#2EC4B6] dark:focus:ring-[#2EC4B6] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  aria-required="true"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md text-white font-medium transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                      : 'bg-[#2EC4B6] hover:bg-[#2EC4B6]/90 dark:bg-[#2EC4B6] dark:hover:bg-[#2EC4B6]/90'
                  }`}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
                  Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md">
                  Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.
                </div>
              )}
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Informations complémentaires
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {availabilityInfo.hours.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {availabilityInfo.hours.content.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}<br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {availabilityInfo.response.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {availabilityInfo.response.content}
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {availabilityInfo.privacy.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {availabilityInfo.privacy.content}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 