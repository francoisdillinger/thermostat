import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SvgComponent from './SvgComponent';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import DesiredTemp from './DesiredTemp';
import DarkModeToggleButton from './darkModeToggleButton';
import ChartComponent from './chartComponent';
import CostsCollection from './costsCollection';
import TempsCollection from './tempsCollection';
import ForecastCollection from './forecastCollection';


function App() {
  const rotateRef = useRef(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [theme, setTheme] = useState(false);
  const [rotateValues, setRotateValues] = useState({ rotateX: 0, rotateY: 0 });

  const [previousMonthlyCost, setPreviousMonthlyCost] = useState(0);
  const [currentMonthlyCost, setCurrentMonthlyCost] = useState(0);

  const handleDarkModeToggle = () => {
    setTheme(prevState => !prevState)
  }

  const rotateElement = (event, element) => {
    //get mouse position
    const x = event.clientX;
    const y = event.clientY;

    //find middle of screen
    const middleX = windowSize.current[0]/2;
    const middleY = windowSize.current[1]/2;
    
    //get offset from middle of screen
    const offsetX = ((x - middleX) / middleX) * 10;
    const offsetY = ((y - middleY) / middleY) * 10;
    
    setRotateValues({ rotateX: offsetX, rotateY: offsetY })

  }

  useEffect(() => {
    const handleMouseMove = (event) => {
      rotateElement(event, rotateRef);
    };
    document.body.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);





  // import { useState, useEffect } from 'react';

  // function MyComponent() {
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCount(count => count + 1);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }, []); // run only once when component mounts

  //   return <div>{count}</div>;
  // }


  return (
    <div className="app" data-theme={theme? 'dark' : 'light'}>
      <DarkModeToggleButton handleDarkModeToggle={handleDarkModeToggle}/>
      <div id="main" ref={rotateRef} style={{transform: `rotateY(${rotateValues.rotateX}deg) rotateX(${-1 * rotateValues.rotateY}deg)`}}>
      <ReactTooltip id="tooltip" place="top" effect="solid" />
      <ReactTooltip id="comfortTemp" place="top" effect="solid" style={{ textAlign: 'center'}}/>
        <CarouselProvider
          isIntrinsicHeight={true}
          totalSlides={3}
          style={{display: 'flex', borderRadius: '10px'}}>
          <ButtonBack id="button1" style={{width: '10%', background: 'none', border: 'none'}}>
            <TfiArrowCircleLeft style={{width: '5em', height: '5em', color: 'rgba(0, 0, 0, 0.35)'}}/>
          </ButtonBack>
          
          <Slider style={{width: '80%',}}>
            <Slide index={0}>
              <TempsCollection />
              <div  data-tooltip-id="tooltip" 
                    data-tooltip-offset={160} 
                    data-tooltip-place="top" 
                    data-tooltip-content="Click on doors, lights, windows and appliances to animate!">
                <SvgComponent />
              </div>
              <DesiredTemp />
            </Slide>
            <Slide index={1}>
              <ChartComponent setPreviousMonthlyCost={setPreviousMonthlyCost} setCurrentMonthlyCost={setCurrentMonthlyCost} />
              <CostsCollection previousMonthlyCost={previousMonthlyCost} currentMonthlyCost={currentMonthlyCost} />
            </Slide>
            <Slide index={2}>
              <ForecastCollection />
            </Slide>
          </Slider>
          <ButtonNext id="button2" style={{width: '10%', background: 'none', border: 'none'}}>
            <TfiArrowCircleRight style={{width: '5em', height: '5em', color: 'rgba(0, 0, 0, 0.35)'}} />
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default App;
