import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import DarkNavBar from "../../components/NavBar/DarkNavBar";

import "./Gallery.less"

export default function Gallery(props) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check the initial color scheme
    const defaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(defaultMode);

    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => setDarkMode(event.matches);

    mediaQuery.addListener(handleChange);

  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'container-dark nav-padding' : 'container nav-padding'}>
    {isDarkMode && <DarkNavBar/>}
    {!isDarkMode && <NavBar/>}
        <h1>Gallery</h1>
      <button className={isDarkMode ? 'toggle-dark' : 'toggle-light'} onClick={toggleDarkMode}> Toggle {isDarkMode ? 'Light' : 'Dark'} Mode </button>
    </div>
  )
}
