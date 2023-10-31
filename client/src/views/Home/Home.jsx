import React from 'react';
import Logo from "../../assets/casmm_logo.png";
import NavBar from "../../components/NavBar/NavBar";
import './Home.less';
import HomeJoin from "./HomeJoin";
import TeacherLogin from '../TeacherLogin/TeacherLogin';

const Home = () => (
    <div className='container nav-padding'>
        <NavBar />
        <div id='join-wrapper'>
            <img src={Logo} id='casmm-logo' alt='logo'/>
            <HomeJoin />
        </div>
        <TeacherLogin />
    </div>
)

export default Home;