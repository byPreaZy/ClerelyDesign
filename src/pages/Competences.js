import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import IconWrapper from '../components/ui/IconWrapper';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Competences = () => {
  const skills = [
    { 
      name: 'Photoshop', 
      level: 80, 
      icon: <SiAdobephotoshop className="w-full h-full text-[#31A8FF]" />,
      color: 'bg-[#31A8FF]'
    },
    { 
      name: 'Illustrator', 
      level: 75, 
      icon: <SiAdobeillustrator className="w-full h-full text-[#FF9A00]" />,
      color: 'bg-[#FF9A00]'
    },
    { 
      name: 'JavaScript', 
      level: 65, 
      icon: <FaJs className="w-full h-full text-[#F7DF1E]" />,
      color: 'bg-[#F7DF1E]'
    },
    { 
      name: 'HTML', 
      level: 90, 
      icon: <FaHtml5 className="w-full h-full text-[#E34F26]" />,
      color: 'bg-[#E34F26]'
    },
    { 
      name: 'CSS', 
      level: 85, 
      icon: <FaCss3Alt className="w-full h-full text-[#1572B6]" />,
      color: 'bg-[#1572B6]'
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredSkill(index);
    clearTimeout(timer);
  };

  const handleMouseLeave = () => {
    setTimer(setTimeout(() => {
      setHoveredSkill(null);
    }, 5000));
  };

  const handleClick = (index) => {
    if (hoveredSkill === index) {
      setHoveredSkill(null);
    } else {
      setHoveredSkill(index);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timer);
  }, [timer]);

  return (
    <Section 
      id="competences" 
      title="Mes Compétences" 
      subtitle="Découvrez mes compétences techniques et créatives"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden"
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            delay={index * 0.1}
          >
            <div className="flex items-center space-x-4">
              <IconWrapper size="lg" className="transform transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </IconWrapper>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.color} transition-all duration-500 ease-out`}
                    style={{ 
                      width: hoveredSkill === index ? `${skill.level}%` : '0',
                      transition: 'width 1s ease-in-out'
                    }}
                  >
                    <span className="sr-only">{skill.level}%</span>
                  </div>
                </div>
                {hoveredSkill === index && (
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
                    {skill.level}%
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Competences;
