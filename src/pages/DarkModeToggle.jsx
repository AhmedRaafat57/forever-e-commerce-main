import { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button 
      onClick={toggleDarkMode} 
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded">
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
