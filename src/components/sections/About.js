import React from 'react';
import { motion } from 'framer-motion';
import { skills, experiences, learningGoals } from '../../data/about';
import { getLevelColor } from '../../data/about/skills';

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Photo centrée avec un plus grand rayon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <div className="relative z-10 rounded-full overflow-hidden shadow-xl w-64 h-64 mx-auto">
              <img
                src="/assets/images/selfie.jpg"
                alt="Kévin Clere"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2EC4B6]/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF9F1C]/20 rounded-full blur-xl" />
          </div>
        </motion.div>

        {/* Présentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Développeur web passionné et designer graphique expérimenté, je combine créativité et expertise technique pour créer des expériences numériques uniques. Spécialisé dans le développement frontend avec React, je développe activement mes compétences en backend et en développement mobile. Mon approche est centrée sur la qualité, l'innovation et la satisfaction client, avec un engagement fort pour l'apprentissage continu et l'amélioration de mes compétences.
          </p>
        </motion.div>

        {/* Contenu organisé en grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Expérience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Expérience</h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                  <h4 className="text-xl font-medium text-[#2EC4B6] mb-2">{exp.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Objectifs d'apprentissage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">En cours d'apprentissage</h3>
            <div className="space-y-6">
              {learningGoals.map((goal) => (
                <div key={goal.id} className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="text-[#2EC4B6] mr-3">{goal.icon}</div>
                      <h4 className="text-xl font-medium text-[#2EC4B6]">{goal.title}</h4>
                    </div>
                    <span className="px-3 py-1 text-sm bg-[#2EC4B6]/10 text-[#2EC4B6] rounded-full">
                      {goal.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{goal.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Compétences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Compétences</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-[#2EC4B6] mb-2">{skill.icon}</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{skill.name}</div>
                <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(skill.levelText)}`}>
                  {skill.levelText}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;