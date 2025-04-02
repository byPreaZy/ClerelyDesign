import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaFigma, 
  FaDocker, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiTypescript,
  SiAdobephotoshop,
  SiAdobeillustrator
} from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact size={32} />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs size={32} />, level: 80 },
    { name: 'TypeScript', icon: <SiTypescript size={32} />, level: 75 },
    { name: 'HTML5', icon: <FaHtml5 size={32} />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt size={32} />, level: 85 },
    { name: 'Tailwind', icon: <SiTailwindcss size={32} />, level: 90 },
    { name: 'MongoDB', icon: <SiMongodb size={32} />, level: 75 },
    { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, level: 70 },
    { name: 'Git', icon: <FaGitAlt size={32} />, level: 80 },
    { name: 'Docker', icon: <FaDocker size={32} />, level: 65 },
    { name: 'AWS', icon: <FaAws size={32} />, level: 60 },
    { name: 'Photoshop', icon: <SiAdobephotoshop size={32} />, level: 90 },
    { name: 'Illustrator', icon: <SiAdobeillustrator size={32} />, level: 85 },
    { name: 'Figma', icon: <FaFigma size={32} />, level: 80 }
  ];

  const experiences = [
    {
      id: 1,
      title: "Développement Web",
      period: "2023 - Présent",
      description: "Développement de projets web personnels et professionnels, notamment ce portfolio. Création d'applications web modernes avec React, Node.js et TypeScript."
    },
    {
      id: 2,
      title: "Design Graphique",
      period: "2012 - Présent",
      description: "Designer graphique autodidacte depuis 2012, spécialisé dans la création d'identités visuelles, logos, chartes graphiques et supports de communication. Formation complémentaire en Master Design Graphique."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo et présentation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/images/selfie.jpg"
                alt="Kévin Clere"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2EC4B6]/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF9F1C]/20 rounded-full blur-xl" />
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Passionné par le développement web et le design graphique, je combine créativité et expertise technique pour créer des expériences numériques uniques. Mon approche est centrée sur la qualité, l'innovation et la satisfaction client.
              </p>
            </div>

            {/* Expérience */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expérience</h3>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-xl font-medium text-[#2EC4B6] mb-2">{exp.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Compétences */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Compétences</h3>
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
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.name}</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-[#2EC4B6] h-1.5 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;