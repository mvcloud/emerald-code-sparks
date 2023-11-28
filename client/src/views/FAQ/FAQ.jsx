import React, { useState, useEffect } from 'react';
import Accordion from '../../components/Accordion/Accordion';
import NavBar from "../../components/NavBar/NavBar";
import DarkNavBar from "../../components/NavBar/DarkNavBar";


import "./FAQ.less"


export default function FAQ(props) {
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

    <div>
      <div className="accordion">
      <h1>FAQ</h1>
          <Accordion title={"Question 1"} content={"Answer to Question 1..."} />
          <p></p>
          <Accordion title={"Question 2"} content={"Answer to Question 2..."} />
          <p></p>
          <Accordion title={"Question 3"} content={"Answer to Question 3..."} />
          <p></p>
          <Accordion title={"Question 4"} content={"Answer to Question 4..."} />
          <p></p>
          <Accordion title={"Question 5"} content={"Answer to Question 5..."} />
      </div>
    </div>
    <button className={isDarkMode ? 'toggle-dark' : 'toggle-light'} onClick={toggleMode}> Toggle {isDarkMode ? 'Light' : 'Dark'} Mode </button>
   </div>
  )
}