import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

// Fonction pour déterminer le niveau textuel en fonction du niveau numérique
export const getSkillLevel = (level) => {
  if (level < 40) return 'Débutant';
  if (level < 70) return 'Intermédiaire';
  return 'Avancé';
};

// Fonction pour déterminer la couleur du badge en fonction du niveau
export const getLevelColor = (levelText) => {
  switch(levelText) {
    case 'Débutant': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'Avancé': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
};

export const skills = [
  { name: 'React', icon: <FaReact size={32} />, level: 85, levelText: getSkillLevel(85) },
  { name: 'Node.js', icon: <FaNodeJs size={32} />, level: 30, levelText: getSkillLevel(30) },
  { name: 'TypeScript', icon: <SiTypescript size={32} />, level: 40, levelText: getSkillLevel(40) },
  { name: 'HTML5', icon: <FaHtml5 size={32} />, level: 90, levelText: getSkillLevel(90) },
  { name: 'CSS3', icon: <FaCss3Alt size={32} />, level: 90, levelText: getSkillLevel(90) },
  { name: 'Tailwind', icon: <SiTailwindcss size={32} />, level: 90, levelText: getSkillLevel(90) },
  { name: 'MongoDB', icon: <SiMongodb size={32} />, level: 20, levelText: getSkillLevel(20) },
  { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, level: 45, levelText: getSkillLevel(45) },
  { name: 'Git', icon: <FaGitAlt size={32} />, level: 80, levelText: getSkillLevel(80) },
  { name: 'Photoshop', icon: <SiAdobephotoshop size={32} />, level: 90, levelText: getSkillLevel(90) },
  { name: 'Illustrator', icon: <SiAdobeillustrator size={32} />, level: 70, levelText: getSkillLevel(70) },
  { name: 'Figma', icon: <FaFigma size={32} />, level: 50, levelText: getSkillLevel(50) }
]; 