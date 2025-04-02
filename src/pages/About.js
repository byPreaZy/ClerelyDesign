import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaServer } from 'react-icons/fa';
import 'animate.css';

const About = () => {
  const experiences = [
    {
      id: 1,
      title: "Technicien de Laboratoire",
      company: "Lycée H.Vincenot",
      period: "2021 - 2023",
      description: "Préparation des travaux pratiques en Physique et Chimie, gestion de l'emploi du temps professoral."
    },
    {
      id: 2,
      title: "Agent de Pesée",
      company: "Terre Comtoise",
      period: "2021",
      description: "Pesée et mise en boîte du grain après récolte, gestion des stocks, service d'entretien des silos."
    },
    {
      id: 3,
      title: "Moniteur de Kayak",
      company: "Canoë-Kayak Club Louhans",
      period: "2017 - 2018",
      description: "Gestion administrative et publicitaire du Club, encadrement d'un groupe de jeunes."
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Équivalence M2 Infographie et 3D",
      school: "MJM Graphic Design",
      period: "2014 - 2017",
      type: "Distanciel"
    },
    {
      id: 2,
      degree: "BAC Sciences Techniques de Laboratoire",
      school: "Lycée Nicephore Niepce",
      period: "2011 - 2013",
      type: "Présentiel"
    }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'UI/UX Design', level: 80 },
  ];

  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Développement Frontend',
      description: 'Création d\'interfaces modernes et réactives avec les dernières technologies web.'
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: 'Design UI/UX',
      description: 'Conception d\'expériences utilisateur intuitives et esthétiques.'
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: 'Applications Mobiles',
      description: 'Développement d\'applications mobiles cross-platform avec React Native.'
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Création d\'APIs RESTful et gestion de bases de données.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de moi</h1>
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
            <h2 className="text-2xl font-bold mb-6">Compétences</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-primary-500 h-2.5 rounded-full"
                    />
                  </div>
                </div>
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