import React from 'react';
import 'animate.css';

const PortfolioDev = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 animate__animated animate__fadeInDown">
            Mon Portfolio Développeur
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 animate__animated animate__fadeInUp">
            Découvrez mes projets et compétences en développement web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInLeft">
            <div className="h-48 bg-gray-200 dark:bg-gray-700">
              {/* Image placeholder */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Projet 1</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Description du projet 1. Utilisation de React et Node.js.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <div className="h-48 bg-gray-200 dark:bg-gray-700">
              {/* Image placeholder */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Projet 2</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Description du projet 2. Application mobile avec React Native.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInRight">
            <div className="h-48 bg-gray-200 dark:bg-gray-700">
              {/* Image placeholder */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Projet 3</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Description du projet 3. Site web avec WordPress.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center animate__animated animate__bounceIn">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Compétences</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                <span className="text-gray-600 dark:text-gray-400">80%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-500"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">React</span>
                <span className="text-gray-600 dark:text-gray-400">75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-500"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDev;
