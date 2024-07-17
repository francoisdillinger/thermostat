import * as React from "react";
import { useState } from 'react';
import { DarkModeToggle } from "react-dark-mode-toggle-2";

const DarkModeToggleButton = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const handleChange = () => {
    setIsDarkMode(prevState => !prevState);
    props.handleDarkModeToggle();
  }



  return (
        <div className="darkModeDiv">
            <DarkModeToggle 
            onChange={handleChange}
            isDarkMode={isDarkMode} 
            />
        </div>
  );
};

export default DarkModeToggleButton;