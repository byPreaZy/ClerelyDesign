import React, { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem('highContrast') === 'true';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
      if (isDarkMode) {
        root.style.setProperty('--bg-primary', '#000000');
        root.style.setProperty('--bg-secondary', '#000000');
        root.style.setProperty('--bg-tertiary', '#000000');
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#ffffff');
        root.style.setProperty('--accent-primary', '#ffffff');
        root.style.setProperty('--accent-secondary', '#ffffff');
        root.style.setProperty('--accent-tertiary', '#ffffff');
        root.style.setProperty('--border-color', '#ffffff');
      } else {
        root.style.setProperty('--bg-primary', '#ffffff');
        root.style.setProperty('--bg-secondary', '#ffffff');
        root.style.setProperty('--bg-tertiary', '#ffffff');
        root.style.setProperty('--text-primary', '#000000');
        root.style.setProperty('--text-secondary', '#000000');
        root.style.setProperty('--accent-primary', '#000000');
        root.style.setProperty('--accent-secondary', '#000000');
        root.style.setProperty('--accent-tertiary', '#000000');
        root.style.setProperty('--border-color', '#000000');
      }
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--bg-tertiary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--accent-primary');
      root.style.removeProperty('--accent-secondary');
      root.style.removeProperty('--accent-tertiary');
      root.style.removeProperty('--border-color');
    }
    localStorage.setItem('highContrast', highContrast);
  }, [highContrast, isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, highContrast, toggleTheme, toggleHighContrast }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext; 