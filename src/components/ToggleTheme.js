import { FaMoon, FaSun } from 'react-icons/fa';
import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ToggleTheme;
