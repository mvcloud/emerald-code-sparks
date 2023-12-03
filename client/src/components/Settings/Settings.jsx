import React, {useEffect, useState} from 'react';
import { SettingOutlined } from '@ant-design/icons';
import "./Settings.less"


export default function Settings(props) {
  //google translate
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

    // change between light and dark mode
    const toggleMode = () => {
      props.setDarkMode(!props.isDarkMode);
    };

  const [dropdownOpen, setDropdownStatus] = useState(false);

  const toggleDropdown = () => {
    setDropdownStatus(!dropdownOpen);
  };

  return (
    <div className={props.isDarkMode ? "dark-mode" : ""}>
      <div className="dropdown">
        <button className='drop-btn-settings'>
            <SettingOutlined className='setting-icon' onClick={toggleDropdown}/>
        </button>
        <div className={dropdownOpen ? 'dropdown-content-settings show' : 'dropdown-content-settings'} >
            <button className={'toggle'} onClick={toggleMode}> Toggle {props.isDarkMode ? 'Light' : 'Dark'} Mode </button>
            <div id="google_translate_element"></div>
        </div>
    </div>
    </div>
  );
}


