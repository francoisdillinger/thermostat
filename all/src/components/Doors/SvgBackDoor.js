import * as React from "react";
import { useState } from 'react';

const SvgBackDoor = (props) => {
    const [isBackDoorActive, setisBackDoorActive] = useState(false);

    const handleBackDoorClick = () => {
        setisBackDoorActive(true);
        console.log("BackDoor open!");
    }

    const handleAnimationEnd = () => {
        setisBackDoorActive(false);
        console.log("BackDoor closed!");
    }

    return(
        <g  id="backdoor" 
            className={isBackDoorActive? 'backDoorSwing' : ''} 
            onClick={handleBackDoorClick}
            onAnimationEnd={handleAnimationEnd} 
            transform="translate(442.619517,15.3833) rotate(0)">
            <rect className={isBackDoorActive? 'backDoorFlash' : ''} width="60" height="9.176993" rx="4.59" ry="4.59" transform="translate(-5.20544,-4.3833)" fill="#32323a" strokeWidth="0" />
        </g>
    );
}

export default SvgBackDoor;