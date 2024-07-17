import * as React from "react";
import { useState } from 'react';
import IncreaseTempButton from './increaseTempButton';
import DecreaseTempButton from './decreaseTempButton';

const DesiredTemp = (props) => {
    const [desiredTemp, setDesiredTemp] = useState(80);

    const handleDecreaseTempClick = () => {
        setDesiredTemp((desiredTemp) => desiredTemp - 1);
    }

    const handleIncreaseTempClick = () => {
        setDesiredTemp((desiredTemp) => desiredTemp + 1);
    }

    return(
        <div id="tempsCollection">
            <DecreaseTempButton handleDecreaseTempClick={handleDecreaseTempClick}/>
            <div id="currentTemp" className='temps'>
            <p className='title'>Desired</p>
            <p className='title'>Temperature</p>
            <p className='temperatures' >{desiredTemp} &deg;F</p>
            </div>
            <IncreaseTempButton handleIncreaseTempClick={handleIncreaseTempClick}/>
        </div>
    )
}

export default DesiredTemp;