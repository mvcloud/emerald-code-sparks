import React, {useRef} from 'react';
import './NavBar.less';
import config from './NavBarConfig.json';
import Logo from '../../assets/casmm_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { BarsOutlined, CloseOutlined, DownOutlined } from '@ant-design/icons';
import { removeUserSession } from '../../Utils/AuthRequests';
import { useGlobalState } from '../../Utils/userState';

export default function NavBar() {
  const [value] = useGlobalState('currUser');
  let currentRoute = window.location.pathname;
  let navigate = useNavigate();
  let routes = config.routes;
  
  const toggleNavbar = () => {
    var x = document.getElementById("navBar");
      if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  const handleLogout = () => {
    removeUserSession();
    navigate('/');
  };

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const shouldShowRoute = (route) => {
    if (currentRoute === routes[route]) return false;
    return config.users[value.role].includes(route);
  };

  {/* this is the old code for the original dropdown menu. i kept it in case we need it again.
  
  const menu = (
    <Menu>
      {shouldShowRoute('Home') ? (
        <Menu.Item key='0' onClick={() => handleRouteChange(routes.Home)}>
          <i className='fa fa-home' />
          &nbsp; Home
        </Menu.Item>
      ) : null}
      {shouldShowRoute('Dashboard') ? (
        <Menu.Item key='1' onClick={() => handleRouteChange(routes.Dashboard)}>
          <i className='fa fa-home' />
          &nbsp; Dashboard
        </Menu.Item>
      ) : null}
      {shouldShowRoute('ContentCreatorDashboard') ? (
        <Menu.Item
          key='2'
          onClick={() => handleRouteChange(routes.ContentCreatorDashboard)}
        >
          <i className='fa fa-home' />
          &nbsp; Dashboard
        </Menu.Item>
      ) : null}
      {shouldShowRoute('ResearcherDashboard') ? (
        <Menu.Item
          key='3'
          onClick={() => handleRouteChange(routes.ResearcherDashboard)}
        >
          <i className='fa fa-home' />
          &nbsp; Dashboard
        </Menu.Item>
      ) : null}
      {shouldShowRoute('Sandbox') ? (
        <Menu.Item
          key='4'
          onClick={() => {
            localStorage.removeItem('sandbox-activity');
            handleRouteChange(routes.Sandbox);
          }}
        >
          <i className='fa fa-window-maximize' />
          &nbsp; Sandbox
        </Menu.Item>
      ) : null}
      {shouldShowRoute('TeacherLogin') ? (
        <Menu.Item
          key='5'
          onClick={() => handleRouteChange(routes.TeacherLogin)}
        >
          <i className='fa fa-sign-in-alt' />
          &nbsp; User Login
        </Menu.Item>
      ) : null}
      {shouldShowRoute('About') ? (
        <Menu.Item key='6' onClick={() => handleRouteChange(routes.About)}>
          <i className='fa fa-info-circle' />
          &nbsp; About
        </Menu.Item>
      ) : null}
      {shouldShowRoute('BugReport') ? (
        <Menu.Item key='7' onClick={() => handleRouteChange(routes.BugReport)}>
          <i className='fa fa-calendar-times' />
          &nbsp; Report a Bug
        </Menu.Item>
      ) : null}3
      {shouldShowRoute('SignOut') ? (
        <Menu.Item key='8' onClick={() => handleLogout()}>
          <i className='fa fa-sign-out-alt' />
          &nbsp; Sign Out
        </Menu.Item>
      ) : null}
    </Menu>
      );*/}

  return (
    <div id='navBar' className='topnav'>
      <Link
        id='link'
        to={
          value.role === 'ContentCreator'
            ? '/ccdashboard'
            : value.role === 'Mentor'
            ? '/dashboard'
            : value.role === 'Student'
            ? '/student'
            : value.role === 'Researcher'
            ? '/report'
            : '/'
        }
      >
        <img src={Logo} id='casmm-logo' alt='logo' />
      </Link>
      <p onClick={() => handleRouteChange(routes.Home)}>HOME</p>
      <div className="dropdown">
        <button className="dropbtn">
          ABOUT
          
        </button>
        <div className="dropdown-content">
          <p onClick={() => handleRouteChange(routes.About)}>ABOUT CASMM</p>
          <p onClick={() => handleRouteChange(routes.HowItWorks)}>HOW IT WORKS</p>
          <p onClick={() => handleRouteChange(routes.OurTeam)}>OUR TEAM</p>
          <p onClick={() => handleRouteChange(routes.FAQ)}>FAQ</p>
        </div>
      </div>
      <p onClick={() => handleRouteChange(routes.Gallery)}>GALLERY</p>
      <p onClick={() => {
            localStorage.removeItem('sandbox-activity');
            handleRouteChange(routes.Sandbox);
          }}>CREATE</p>

      <p className="icon" onClick={() => toggleNavbar()}>
        <BarsOutlined />
      </p>
    </div>
  );
}

