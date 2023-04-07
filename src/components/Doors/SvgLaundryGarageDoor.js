import * as React from "react";
import { useState } from 'react';

const SvgLaundryGarageDoor = (props) => {
    const [isLaundryGarageDoorActive, setisLaundryGarageDoorActive] = useState(false);

    const handleLaundryGarageDoorClick = () => {
        setisLaundryGarageDoorActive(true);
        console.log("LaundryGarageDoor open!");
    }

    const handleAnimationEnd = () => {
        setisLaundryGarageDoorActive(false);
        console.log("LaundryGarageDoor closed!");
    }

    return(
        <g  id="laundryGarageDoor" 
            className={isLaundryGarageDoorActive? 'laundryGarageDoorSwing' : ''} 
            onClick={handleLaundryGarageDoorClick}
            onAnimationEnd={handleAnimationEnd}  
            transform="translate(750.619517,128.3833) rotate(90)">
            <rect className={isLaundryGarageDoorActive? 'laundryGarageDoorFlash' : ''} width="75" height="9.176993" rx="4.59" ry="4.59" transform="scale(-1,-1) translate(-5.20544,-4.3833)" fill="#32323a" strokeWidth="0" />
        </g>
    );
}

export default SvgLaundryGarageDoor;