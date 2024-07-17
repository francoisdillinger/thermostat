import * as React from "react";
import { useState } from 'react';

const SvgMasterBedRoomDoor = (props) => {
    const [isMasterBedRoomDoorActive, setisMasterBedRoomDoorActive] = useState(false);

    const handleMasterBedRoomDoorClick = () => {
        setisMasterBedRoomDoorActive(true);
        console.log("Front door open!");
    }

    const handleAnimationEnd = () => {
        setisMasterBedRoomDoorActive(false);
        console.log("Front door closed!");
    }

    return(
        <g id="masterBedRoomDoor"
            className={isMasterBedRoomDoorActive? 'masterBedRoomDoor' : ''} 
            onClick={handleMasterBedRoomDoorClick}
            onAnimationEnd={handleAnimationEnd} 
            transform="translate(529.824957,264.178104) rotate(0)">
        <rect id="updated_floorplan_cs499_svg-u-master_bedroom_door" width="65" height="9.176993" rx="4.59" ry="4.59" transform="scale(-1,-1) translate(-65,-4.588496)" fill="#32323a" strokeWidth="0" />
        </g>
    );
}

export default SvgMasterBedRoomDoor;