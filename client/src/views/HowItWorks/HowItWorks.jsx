import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar"
import DarkNavBar from "../../components/NavBar/DarkNavBar";
import "./HowItWorks.less"

export default function HowItWorks(props) {
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

      <div id="about-content-container">
        <h1 id="title" tabIndex="0">How It Works</h1>
        <div id="logos" className="flex space-between">
        </div>
        <p tabIndex="0">
        CASMM makes use of Google's Blockly JavaScript library to build a block based 
        visual programming editor within our user interface. Programs created through 
        the visual programming editor can be compiled into Arduino executable code and 
        uploaded directly onto a students Arduino. These programs, once uploaded to the student's 
        Arduino, provide support in performing a corresponding science project in the classroom. 
        </p>
      </div>
      <button className={isDarkMode ? 'toggle-dark' : 'toggle-light'} onClick={toggleMode}> Toggle {isDarkMode ? 'Light' : 'Dark'} Mode </button>
    </div>
  )
}
