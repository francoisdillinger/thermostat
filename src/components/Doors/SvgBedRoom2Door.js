import * as React from "react";
import { useState } from 'react';

const SvgBedRoom2Door = (props) => {
    const [isBedRoom2DoorActive, setisBedRoom2DoorActive] = useState(false);

    const handleBedRoom2DoorClick = () => {
        setisBedRoom2DoorActive(true);
        console.log("Front door open!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom2DoorActive(false);
        console.log("Front door closed!");
    }

    return(
        <g  id="bedRoom2Door"
            className={isBedRoom2DoorActive? 'bedRoom2Door' : ''} 
            onClick={handleBedRoom2DoorClick}
            onAnimationEnd={handleAnimationEnd}  
            transform="translate(192.824957,281.178104) rotate(0)">
        <rect id="updated_floorplan_cs499_svg-u-bedroom_2_door" width="50" height="9.176993" rx="4.59" ry="4.59" transform="scale(-1,-1) translate(0,-4.588496)" fill="#32323a" strokeWidth="0" />
        </g>
    );
}

export default SvgBedRoom2Door;