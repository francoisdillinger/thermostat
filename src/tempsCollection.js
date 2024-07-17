import * as React from "react";
// import { Tooltip as ReactTooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';
import { useState, useEffect} from 'react';

const TempsCollection = (props) => {
  const [outdoorTemp, setOutdoorTemp] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://api.weatherapi.com/v1/current.json?key=6cfca6888bde479cb6b63543231504&q=35235&aqi=no');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const temp = await response.json();
      setOutdoorTemp(temp.current.temp_f);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  


  return (
    <div id="tempsCollection">
    <div id="outsideTemp" className='temps'>
    <p className='title'>Outside</p>
      <p className='title'>Temperature</p>
      <p className='temperatures'>{outdoorTemp != null ? outdoorTemp.toFixed(0) + " \u00b0F" : "Loading..."}</p>
      </div>
    <div id="currentTemp" className='temps'>
    <p className='title'>Current</p>
      <p className='title'>Temperature</p>
      <p className='temperatures'>70 &deg;F</p>
      </div>
      <div  id="comfortTemp" 
            className='temps'  
            data-tooltip-id="comfortTemp" 
            data-tooltip-offset={30} 
            data-tooltip-place="top" 
            data-tooltip-html="Temperature can affect our state of mind. Based on our research, setting<br /> the temperature between 68 and 72 is optimal for sleep and comfort while<br /> working along side the patterns of our core body temperature.">
          <p className='title'>Comfort</p>
          <p className='title'>Temperature</p>
          <p className='temperatures'>70 &deg;F</p>
      </div>
  </div>
  );
};

export default TempsCollection;