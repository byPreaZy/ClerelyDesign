import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaServer } from 'react-icons/fa';
import 'animate.css';
import { skills, experiences, education, learningGoals } from '../components/data/about';
import { getLevelColor } from '../components/data/about/skills';

const About = () => {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Développement Web Moderne',
      description: 'Création d\'applications web performantes et innovantes avec React, TypeScript et les dernières technologies frontend.'
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: 'Design UI/UX Créatif',
      description: 'Conception d\'interfaces utilisateur intuitives et esthétiques, avec une expertise en accessibilité et en responsive design.'
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: 'Solutions Cross-Platform',
      description: 'Développement d\'applications web adaptatives et progressives (PWA) pour une expérience optimale sur tous les appareils.'
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: 'Architecture Technique',
      description: 'Conception et implémentation d\'architectures web robustes, sécurisées et évolutives avec Node.js et les meilleures pratiques.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">À propos de moi</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Développeur web passionné avec une expertise en création d'applications web modernes
            et performantes. Je combine créativité et compétences techniques pour donner vie
            à vos projets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Compétences</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-primary-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-16">
          <section className="animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Expérience Professionnelle
            </h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="text-primary font-medium mb-2">
                    {exp.company}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {exp.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Formation
            </h2>
            <div className="space-y-8">
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-primary font-medium mb-2">
                    {edu.school}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {edu.period}
                  </div>
                  <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                    {edu.type}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Objectifs d'Apprentissage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learningGoals.map((goal) => (
                <div 
                  key={goal.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-primary-500 mr-3">
                      {goal.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {goal.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {goal.description}
                  </p>
                  <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                    {goal.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="animate__animated animate__fadeInUp text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Centres d'intérêt
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Jeux Vidéo', 'Graphisme', 'Développement', 'Vice-Président Associatif', 'Kayak'].map((interest, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-md"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default About;