import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import DarkNavBar from "../../components/NavBar/DarkNavBar";

import "./Gallery.less"

export default function Gallery(props) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check the device's system preferences
    const defaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(defaultMode);

    // Listen for changes in mode preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
        setDarkMode(event.matches);
    }

    mediaQuery.addEventListener("change", () => {
        handleChange(event);
    })

  }, []);

    // change between light and dark mode
  const toggleMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    // change between light and dark css/less depending on state
    <div className={isDarkMode ? 'container-dark nav-padding' : 'container nav-padding'}>
    {isDarkMode && <DarkNavBar/>}
    {!isDarkMode && <NavBar/>}
        <h1>Gallery</h1>
      <button className={isDarkMode ? 'toggle-dark' : 'toggle-light'} onClick={toggleMode}> Toggle {isDarkMode ? 'Light' : 'Dark'} Mode </button>
    </div>
  )
}
