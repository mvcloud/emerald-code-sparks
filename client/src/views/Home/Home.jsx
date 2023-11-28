import React, { useRef, useEffect } from 'react';
import Logo from "../../assets/casmm_logo11_duck.png";
import NavBar from "../../components/NavBar/NavBar";
import TeacherLogin from '../TeacherLogin/TeacherLogin';
import './Home.less';
import HomeJoin from "../StudentLogin/HomeJoin";

const Home = () => {

    return (
    <div className='container nav-padding'>
        <NavBar/>

        {/* logo and logins */}
        <div id='join-wrapper' alt="Log in Section" tabIndex="-1">
                <img src={Logo} alt='logo' id='home-logo' tabIndex="0"/>
            <HomeJoin />
            <TeacherLogin />
        </div>

        {/* featured projects */}
        <div className='projects-container' alt="Featured Projects Section" tabIndex="-1">
            <h1>FEATURED PROJECTS</h1>
            <div className='projects-row'>
                <div className='project-box'  tabIndex="0">
                    <div className='credits-overlay'>
                        <h1>Name 1</h1>
                    </div>
                </div>
                <div className='project-box' tabIndex="0">
                <div className='credits-overlay'>
                        <h1>Name 2</h1>
                    </div>
                </div>
                <div className='project-box' tabIndex="0">
                <div className='credits-overlay'>
                        <h1>Name 3</h1>
                    </div>
                </div>
                <div className='project-box' tabIndex="0">
                <div className='credits-overlay'>
                        <h1>Name 4</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Home;