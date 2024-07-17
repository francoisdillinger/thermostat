import * as React from "react";
import { useState, useEffect} from 'react';
import SvgNightTemp from "./SvgNightTemp";
import SvgDayTemp from "./SvgDayTemp";
const ForecastCollection = (props) => {
  const [forecast, setForecast] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=Birmingham,US&cnt=5&units=imperial&&appid=3563bf5e2d2996538b6ec9d50c045948');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const temp = await response.json();
      setForecast(temp);
      console.log(temp)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  

  if (forecast && forecast.city) {
    return (
      <div className="forecast-days">
        {forecast.list.map((day, index) => (
          <div key={index} className="forecasted-day">
            <p style={{fontFamily:"'Sans-Mateo-Medium', 'Sanchez '", fontSize:'1.5em'}}>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</p>
            <img src={`${process.env.PUBLIC_URL}/weatherIconsFill/${day.weather[0].icon}.svg`} alt="weather icon" />
            <p style={{fontFamily:"'Sans-Mateo-Regular', 'Sanchez '", fontSize:'1.5em'}}>{day.weather[0].main}</p>
            {/* <img src={`${process.env.PUBLIC_URL}/weatherIconsFill/time-morning.svg`} alt="weather icon" />
            <p>{day.temp.morn.toFixed(0)}&deg;F</p> */}
            {/* <img src={`${process.env.PUBLIC_URL}/weatherIconsFill/time-afternoon.svg`} alt="weather icon" /> */}
            {/* <p>{day.temp.day.toFixed(0)}&deg;F</p>
            <img src={`${process.env.PUBLIC_URL}/weatherIconsFill/time-evening.svg`} alt="weather icon" /> */}
            {/* <p>{day.temp.eve.toFixed(0)}&deg;F</p> */}
            {/* <img src={`${process.env.PUBLIC_URL}/weatherIconsFill/time-night-2.svg`} alt="weather icon" />
            <p>{day.temp.night.toFixed(0)}&deg;F</p> */}
            <SvgDayTemp dayTemp={day.temp.day.toFixed(0)}/>
            <SvgNightTemp nightTemp={day.temp.night.toFixed(0)}/>
            
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
  
};

export default ForecastCollection;






