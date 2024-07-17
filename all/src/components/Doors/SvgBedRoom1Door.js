import * as React from "react";
import { useState } from 'react';

const SvgBedRoom1Door = (props) => {
    const [isBedRoom1DoorActive, setisBedRoom1DoorActive] = useState(false);

    const handleBedRoom1DoorClick = () => {
        setisBedRoom1DoorActive(true);
        console.log("Front door open!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom1DoorActive(false);
        console.log("Front door closed!");
    }

    return(
        <g  id="bedRoom1Door"
            className={isBedRoom1DoorActive? 'bedRoom1Door' : ''} 
            onClick={handleBedRoom1DoorClick}
            onAnimationEnd={handleAnimationEnd} 
            transform="translate(192.824957,184.178104) rotate(0)">
        <rect id="updated_floorplan_cs499_svg-u-bedroom_1_door" width="50" height="9.176993" rx="4.59" ry="4.59" transform="scale(-1,-1) translate(0,-4.588496)" fill="#32323a" strokeWidth="0" />
        </g>
    );
}

export default SvgBedRoom1Door;