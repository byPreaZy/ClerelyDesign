import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTools, FaSpinner, FaCode, FaPaintBrush, FaLock, FaUnlock } from 'react-icons/fa';

const UnderConstructionWithAccess = ({ 
  children,
  title = "Page en cours de développement",
  description = "Cette section est actuellement en cours de développement. Nous travaillons sur l'implémentation pour vous offrir une expérience optimale.",
  icon = FaTools,
  showFeatures = true,
  password = "Moi11/11/94!Teddy", // Mot de passe par défaut
  accessTitle = "Accès développeur",
  accessDescription = "Cette page est en cours de développement. Entrez le mot de passe pour accéder à la version en cours de développement."
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showAccessForm, setShowAccessForm] = useState(false);
  const maxAttempts = 3;

  // Vérifier si l'authentification est déjà enregistrée
  useEffect(() => {
    const auth = localStorage.getItem('devAuth');
    if (auth === password) {
      setIsAuthenticated(true);
    }
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsAuthenticated(true);
      localStorage.setItem('devAuth', password);
      setError('');
      setShowAccessForm(false);
    } else {
      setAttempts(prev => prev + 1);
      setError(`Mot de passe incorrect. Il vous reste ${maxAttempts - attempts - 1} essai${maxAttempts - attempts - 1 > 1 ? 's' : ''}.`);
      setInputPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('devAuth');
  };

  const toggleAccessForm = () => {
    setShowAccessForm(!showAccessForm);
    setError('');
    setInputPassword('');
  };

  if (isAuthenticated) {
    return (
      <div className="relative">
        <button
          onClick={handleLogout}
          className="fixed top-20 right-4 z-[100] bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
        >
          <FaUnlock />
          <span>Quitter le mode développeur</span>
        </button>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Icône animée */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <FaSpinner className="text-6xl text-[#2EC4B6] animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              {React.createElement(icon, { className: "text-3xl text-white" })}
            </div>
          </div>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Bouton d'accès développeur */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <button
            onClick={toggleAccessForm}
            className="bg-[#2EC4B6] hover:bg-[#2EC4B6]/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors duration-200"
          >
            <FaLock />
            <span>Accès développeur</span>
          </button>
        </motion.div>

        {/* Formulaire d'accès */}
        <AnimatePresence>
          {showAccessForm && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-12"
            >
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-[#2EC4B6]/10 dark:bg-[#2EC4B6]/20 rounded-full mb-4">
                  <FaLock className="text-3xl text-[#2EC4B6]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {accessTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {accessDescription}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent transition-colors duration-200"
                    placeholder="Entrez le mot de passe"
                    required
                  />
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm text-center"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={toggleAccessForm}
                    className="flex-1 py-2 px-4 rounded-lg text-gray-700 dark:text-gray-300 font-medium bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={attempts >= maxAttempts}
                    className={`flex-1 py-2 px-4 rounded-lg text-white font-medium transition-colors duration-200
                      ${attempts >= maxAttempts 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#2EC4B6] hover:bg-[#2EC4B6]/90'
                      }`}
                  >
                    Accéder
                  </button>
                </div>

                {attempts >= maxAttempts && (
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Nombre maximum de tentatives atteint. Veuillez réessayer plus tard.
                  </p>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {showFeatures && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <FaCode className="text-3xl text-[#2EC4B6]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Développement Web</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Création d'applications web modernes et performantes
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <FaPaintBrush className="text-3xl text-[#2EC4B6]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Design Graphique</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Conception d'interfaces utilisateur et d'identités visuelles
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <FaTools className="text-3xl text-[#2EC4B6]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Outils & Technologies</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Utilisation des dernières technologies et outils de développement
              </p>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#2EC4B6]/10 dark:bg-[#2EC4B6]/20 p-6 rounded-xl border border-[#2EC4B6]/20"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Revenez bientôt !</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Nous sommes en train de finaliser cette section pour vous présenter nos projets de manière interactive et attrayante.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UnderConstructionWithAccess; 