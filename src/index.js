import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './assets/styles/index.css';
import './assets/styles/custom.css';
import App from './App';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './components/context/ThemeContext.js';

// Initialisation de AOS avec des options optimisées
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

