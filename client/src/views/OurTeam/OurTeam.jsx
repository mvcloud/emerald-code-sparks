import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar"
import DarkNavBar from "../../components/NavBar/DarkNavBar";

import "./OurTeam.less"

export default function OurTeam(props) {
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
        <h1 id="title">Our Team</h1>
        <div id="logos" className="flex space-between">
        </div>
        <p>
          The following team members from the University of Florida have
          contributed to the design, development, and evaluation of the CASMM
          application:
          <br />
          <br />
          Dr. Sharon Chu
          <br />
          Dr. Christina Gardner-McCune
          <br />
          Pedro Feijóo-García
          <br />
          Sarah Brown
          <br />
          Nicholas Ionata
          <br />
          Dakota Rennemann
          <br />
          Megha Nagarmunoli
          <br />
          Adam Tamargo
          <br />
          Gus Segovia
          <br />
          Lily Hinkeldey
          <br />
          Siyu Chen
          <br />
          Anna Le
          <br />
          Yerika Jimenez
          <br />
          Siyu Chen
          <br />
          Michael Pascuzzi
          <br />
          David Magda
        </p>
      </div>
      <button className={isDarkMode ? 'toggle-dark' : 'toggle-light'} onClick={toggleDarkMode}> Toggle {isDarkMode ? 'Light' : 'Dark'} Mode </button>
    </div>
  )
}