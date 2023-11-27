import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar"
import DarkNavBar from "../../components/NavBar/DarkNavBar";
import "./HowItWorks.less"

export default function HowItWorks(props) {
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
      <div id="about-content-container">
        <h1 id="title">How It Works</h1>
        <div id="logos" className="flex space-between">
        </div>
        <p>
        CASMM makes use of Google's Blockly JavaScript library to build a block based 
        visual programming editor within our user interface. Programs created through 
        the visual programming editor can be compiled into Arduino executable code and 
        uploaded directly onto a students Arduino. These programs, once uploaded to the student's 
        Arduino, provide support in performing a corresponding science project in the classroom. 
        </p>
      </div>
      <button className={isDarkMode ? 'toggle-dark' : 'toggle-light'} onClick={toggleDarkMode}> Toggle {isDarkMode ? 'Light' : 'Dark'} Mode </button>
    </div>
  )
}
