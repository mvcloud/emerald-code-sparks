import React from 'react';
import './NavBar.less';
import config from './NavBarConfig.json';
import Logo from '../../assets/casmm_logo11.png';
import { Link, useNavigate } from 'react-router-dom';
import { BarsOutlined } from '@ant-design/icons';
import { removeUserSession } from '../../Utils/AuthRequests';
import { useGlobalState } from '../../Utils/userState';

export default function NavBar() {
  const [value] = useGlobalState('currUser');
  let navigate = useNavigate();
  let routes = config.routes;
  
  //toggle for responsive navbar dropdown
  const toggleNavbar = () => {
    var x = document.getElementById("navBar");
      if (x.className === "top-nav") {
      x.className += " responsive";
    } else {
      x.className = "top-nav";
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
    return config.users[value.role].includes(route);
  };

  return (
    <div id='navBar' className='top-nav'>
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

      {shouldShowRoute('Home') ? (
        <p onClick={() => handleRouteChange(routes.Home)}>HOME</p>
      ) : null}

      {shouldShowRoute('About') ? (
        <div className="dropdown">
        <button className="drop-btn">
          ABOUT   
        </button>
        <div className="dropdown-content">
          <p onClick={() => handleRouteChange(routes.About)}>ABOUT CASMM</p>
          <p onClick={() => handleRouteChange(routes.HowItWorks)}>HOW IT WORKS</p>
          <p onClick={() => handleRouteChange(routes.OurTeam)}>OUR TEAM</p>
          <p onClick={() => handleRouteChange(routes.FAQ)}>FAQ</p>
        </div>
      </div>
      ) : null}

      {shouldShowRoute('Dashboard') ? (
        <p onClick={() => handleRouteChange(routes.Dashboard)}>DASHBOARD</p>
      ) : null}

      {shouldShowRoute('ContentCreatorDashboard') ? (
        <p onClick={() => handleRouteChange(routes.ContentCreatorDashboard)}>DASHBOARD</p>
      ) : null}

      {shouldShowRoute('ResearcherDashboard') ? (
        <p onClick={() => handleRouteChange(routes.ResearcherDashboard)}>DASHBOARD</p>
      ) : null}

      {shouldShowRoute('Sandbox') ? (
              <p onClick={() => {
                localStorage.removeItem('sandbox-activity');
                handleRouteChange(routes.Sandbox);
              }}>CREATE</p>
      ) : null}

      <p onClick={() => handleRouteChange(routes.Gallery)}>GALLERY</p>
      {shouldShowRoute('BugReport') ? (
        <p onClick={() => handleRouteChange(routes.BugReport)}>REPORT A BUG</p>
      ) : null}

      {shouldShowRoute('SignOut') ? (
        <p onClick={() => handleLogout()}>SIGN OUT</p>
      ) : null}

      <p className="icon" onClick={() => toggleNavbar()}>
        <BarsOutlined />
      </p>
    </div>
  );
}

