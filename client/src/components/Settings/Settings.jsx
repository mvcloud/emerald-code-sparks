import React, {useEffect,useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import "./Settings.less"


export default function Settings(props) {
    const [originalText, setOriginalText] = useState('en'); 

  //google translate
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: originalText,
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

  return (
    <div className="dropdown">
        <button className='drop-btn' style={{backgroundColor: props.isDarkMode ? '#247BA0' : '#F4f4f5'}}>
            <SettingOutlined />
        </button>
        <div className='dropdown-content-settings'>
            <div id="google_translate_element"></div>
        </div>
    </div>
  );
}

