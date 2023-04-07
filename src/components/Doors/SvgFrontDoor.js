import * as React from "react";
import { useState } from 'react';

const SvgFrontDoor = (props) => {
    const [isFrontDoorActive, setisFrontDoorActive] = useState(false);

    const handleFrontDoorClick = () => {
        setisFrontDoorActive(true);
        console.log("Front door open!");
    }

    const handleAnimationEnd = () => {
        setisFrontDoorActive(false);
        console.log("Front door closed!");
    }

    return(
        <g  id="frontdoor"
            transform="translate(504.033094,443.761001) rotate(0)"
            className={isFrontDoorActive? 'frontDoorSwing' : ''} 
            onClick={handleFrontDoorClick}
            onAnimationEnd={handleAnimationEnd}
            >
            <rect className={isFrontDoorActive? 'frontDoorFlash' : ''}  width="72.266595" height="9.176993" rx="4.59" ry="4.59" transform="translate(-72.266593,-4.588497)" fill="#32323a" strokeWidth="0" />
        </g>
    );
}

export default SvgFrontDoor;