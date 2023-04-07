import * as React from "react";
import { useState } from 'react';

const SvgBathRoom1Door = (props) => {
    const [isBathRoom1DoorActive, setisBathRoom1DoorActive] = useState(false);

    const handleBathRoom1DoorClick = () => {
        setisBathRoom1DoorActive(true);
        console.log("Bathroom 1 door open!");
    }

    const handleAnimationEnd = () => {
        setisBathRoom1DoorActive(false);
        console.log("Bathroom 1 door closed!");
    }

    return(
        <g  id="bathRoom1Door"
            className={isBathRoom1DoorActive? 'bathRoom1Door' : ''} 
            onClick={handleBathRoom1DoorClick}
            onAnimationEnd={handleAnimationEnd} 
            transform="translate(141.824957,257.178104) rotate(90)">
        <rect id="updated_floorplan_cs499_svg-u-bathroom_1_door" width="35" height="9.176993" rx="4.59" ry="4.59" transform="scale(-1,-1) translate(0,-4.588496)" fill="#32323a" strokeWidth="0" />
        </g>
    );
}

export default SvgBathRoom1Door;