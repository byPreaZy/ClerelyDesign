import React, { useState, useRef } from 'react';
import selfie from '../assets/images/selfie.jpg';
import github from '../assets/svg/github.svg';
import twitter from '../assets/svg/twitter.svg';
import linkedin from '../assets/svg/linkedin.svg';

const CV = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 animate__animated animate__fadeIn">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="mb-6">
            <img 
              src={selfie} 
              alt="Profil" 
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto object-cover shadow-lg animate__animated animate__zoomIn" 
            />
          </div>
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white animate__animated animate__fadeInDown">
              CLERE Kévin
            </h2>
            <span className="text-xl text-gray-600 dark:text-gray-300 animate__animated animate__fadeInUp">
              Développeur Web Junior
            </span>
          </div>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p className="animate__animated animate__fadeIn">55 impasse des buguets, 71500 Ratte</p>
            <p className="animate__animated animate__fadeIn">
              <a href="mailto:kevin.venidici.clere@gmail.com" className="hover:text-primary transition-colors">
                kevin.venidici.clere@gmail.com
              </a>
            </p>
            <p className="animate__animated animate__fadeIn">
              <a href="tel:+33622226353" className="hover:text-primary transition-colors">
                06.22.22.63.53
              </a>
            </p>
          </div>
        </header>

        <main className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <button 
              onClick={() => toggleSection('about')} 
              className="w-full text-left px-6 py-4 bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              À propos
            </button>
            <div
              ref={el => sectionRefs.current['about'] = el}
              className={`px-6 py-4 ${activeSection === 'about' ? 'block' : 'hidden'}`}
            >
              <p className="text-gray-600 dark:text-gray-300 animate__animated animate__fadeIn">
                Actuellement en formation Développeur Web/Web mobile, je souhaiterais trouver un poste dans ce domaine. Passionné par l'informatique depuis l'enfance, je suis convaincu d'avoir les capacités nécessaires pour rejoindre votre équipe.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <button 
              onClick={() => toggleSection('lang')} 
              className="w-full text-left px-6 py-4 bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Langues parlées
            </button>
            <div
              ref={el => sectionRefs.current['lang'] = el}
              className={`px-6 py-4 ${activeSection === 'lang' ? 'block' : 'hidden'}`}
            >
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 animate__animated animate__fadeIn space-y-2">
                <li>Français - Langue maternelle</li>
                <li>Anglais - Intermédiaire</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <button 
              onClick={() => toggleSection('interest')} 
              className="w-full text-left px-6 py-4 bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Centres d'intérêt
            </button>
            <div
              ref={el => sectionRefs.current['interest'] = el}
              className={`px-6 py-4 ${activeSection === 'interest' ? 'block' : 'hidden'}`}
            >
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 animate__animated animate__fadeIn space-y-2">
                <li>Jeux Vidéo</li>
                <li>Graphisme</li>
                <li>Développement</li>
                <li>Vice-Président Associatif</li>
                <li>Kayak</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <button 
              onClick={() => toggleSection('proexp')} 
              className="w-full text-left px-6 py-4 bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Expériences professionnelles
            </button>
            <div
              ref={el => sectionRefs.current['proexp'] = el}
              className={`px-6 py-4 ${activeSection === 'proexp' ? 'block' : 'hidden'}`}
            >
              <div className="space-y-6">
                <div className="animate__animated animate__fadeIn">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Technicien de Laboratoire chez Lycée H.Vincenot</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Septembre 2021 - Juillet 2023</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Préparation des travaux pratiques en Physique et Chimie</li>
                    <li>Gestion de l'emploi du temps professoral pour la Physique et la Chimie</li>
                    <li>Préparation de solutions chimiques à partir de produits purs</li>
                  </ul>
                </div>
                <div className="animate__animated animate__fadeIn">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Agent de Pesée chez Terre Comtoise</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Juillet 2021 - Septembre 2021</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Pesée et mise en boîte du grain après récolte</li>
                    <li>Gestion des stocks</li>
                    <li>Service d'entretien des silos</li>
                  </ul>
                </div>
                <div className="animate__animated animate__fadeIn">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Moniteur de Kayak chez Canoë-Kayak Club Louhans</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Juillet 2017 - Juillet 2018</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Gestion administrative et publicitaire du Club</li>
                    <li>Encadrement d'un groupe de jeunes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <button 
              onClick={() => toggleSection('grade')} 
              className="w-full text-left px-6 py-4 bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Diplômes/Formations
            </button>
            <div
              ref={el => sectionRefs.current['grade'] = el}
              className={`px-6 py-4 ${activeSection === 'grade' ? 'block' : 'hidden'}`}
            >
              <div className="space-y-6">
                <div className="animate__animated animate__fadeIn">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Équivalence M2 Infographie et 3D</h4>
                  <p className="text-gray-600 dark:text-gray-400">Septembre 2014 - Juillet 2017</p>
                  <p className="text-gray-600 dark:text-gray-400">MJM Graphic Design / Distanciel</p>
                </div>
                <div className="animate__animated animate__fadeIn">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">BAC Sciences Techniques de Laboratoire</h4>
                  <p className="text-gray-600 dark:text-gray-400">Septembre 2011 - Juillet 2013</p>
                  <p className="text-gray-600 dark:text-gray-400">Lycée Nicephore Niepce</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <button 
              onClick={() => toggleSection('comp')} 
              className="w-full text-left px-6 py-4 bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Compétences
            </button>
            <div
              ref={el => sectionRefs.current['comp'] = el}
              className={`px-6 py-4 ${activeSection === 'comp' ? 'block' : 'hidden'}`}
            >
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 animate__animated animate__fadeIn space-y-2">
                <li>HTML5 - Débutant</li>
                <li>CSS3 - Débutant</li>
                <li>Photoshop - Avancé</li>
                <li>Illustrator - Intermédiaire</li>
                <li>Chimie - Avancée</li>
                <li>Physique - Intermédiaire</li>
              </ul>
            </div>
          </div>
        </main>

        <footer className="mt-12 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://www.linkedin.com/in/kévin-clere-209b97206/" 
              title="Mon LinkedIn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8 animate__animated animate__pulse" />
            </a>
            <a 
              href="https://twitter.com/PreaZyFX" 
              title="Mon Twitter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={twitter} alt="Twitter" className="w-8 h-8 animate__animated animate__pulse" />
            </a>
            <a 
              href="https://github.com/byPreaZy" 
              title="Mon GitHub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={github} alt="GitHub" className="w-8 h-8 animate__animated animate__pulse" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400 animate__animated animate__fadeIn">
            Dernière mise à jour le <time datetime="2024-03-12">12 mars 2024</time>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CV;
