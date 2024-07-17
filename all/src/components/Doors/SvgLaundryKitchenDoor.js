import * as React from "react";
import { useState } from 'react';

const SvgLaundryKitchenDoor = (props) => {
    const [isLaundryKitchenDoorActive, setisLaundryKitchenDoorActive] = useState(false);

    const handleLaundryKitchenDoorClick = () => {
        setisLaundryKitchenDoorActive(true);
        console.log("Front door open!");
    }

    const handleAnimationEnd = () => {
        setisLaundryKitchenDoorActive(false);
        console.log("Front door closed!");
    }

    return(
        <g  id="laundryKitchenDoor" 
            transform="translate(501.619517,129.3833) rotate(90)"
            className={isLaundryKitchenDoorActive? 'laundryKitchenDoor' : ''} 
            onClick={handleLaundryKitchenDoorClick}
            onAnimationEnd={handleAnimationEnd}
            >
            <rect width="75" height="9.176993" rx="4.59" ry="4.59" transform="scale(-1,-1) translate(-5.20544,-4.3833)" fill="#32323a" strokeWidth="0" />
        </g>
    );
}

export default SvgLaundryKitchenDoor;