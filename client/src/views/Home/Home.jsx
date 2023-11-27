import React, { useState, useEffect } from 'react';
import Logo from "../../assets/casmm_logo11_duck.png";
import NavBar from "../../components/NavBar/NavBar";
import DarkNavBar from "../../components/NavBar/DarkNavBar";
import TeacherLogin from '../TeacherLogin/TeacherLogin';

import './Home.less';
import HomeJoin from "../StudentLogin/HomeJoin";

const Home = () => {
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
    <div className={isDarkMode ? 'container-dark nav-padding' : 'container nav-padding'} >
        {/* Display Light or Dark Mode Nav Bar depending on state */}
        {isDarkMode && <DarkNavBar/>}
        {!isDarkMode && <NavBar/>}


        {/* logo and logins */}
        <div id='join-wrapper'>
            <div>
                <img src={Logo} alt='logo' id='home-logo'/>
            </div>
            <HomeJoin />
            <TeacherLogin />
        </div>

        {/* featured projects / display the dark or light mode depending on state */}
        <div className={isDarkMode ? 'projects-container-dark' : 'projects-container'}>
            <h1>FEATURED PROJECTS</h1>
            <div className='projects-row'>
                <div className={isDarkMode ? "project-box-dark" : "project-box"}>
                    <div className='credits-overlay'>
                        <h1>Name 1</h1>
                    </div>
                </div>
                <div className={isDarkMode ? "project-box-dark" : "project-box"}>
                <div className='credits-overlay'>
                        <h1>Name 2</h1>
                    </div>
                </div>
                <div className={isDarkMode ? "project-box-dark" : "project-box"}>
                <div className='credits-overlay'>
                        <h1>Name 3</h1>
                    </div>
                </div>
                <div className={isDarkMode ? "project-box-dark" : "project-box"}>
                <div className='credits-overlay'>
                        <h1>Name 4</h1>
                    </div>
                </div>
            </div>
        </div>
        <button className={isDarkMode ? 'toggle-dark' : 'toggle-light'} onClick={toggleMode}> Toggle {isDarkMode ? 'Light' : 'Dark'} Mode </button>
    </div>
)}

export default Home;