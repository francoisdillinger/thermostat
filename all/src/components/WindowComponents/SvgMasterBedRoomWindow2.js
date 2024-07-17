import * as React from "react";
import { useState } from 'react';

const SvgMasterBedRoomWindow2 = (props) => {
    const [isMasterBedRoomWindow2Active, setisMasterBedRoomWindow2Active] = useState(false);

    const handleMasterBedRoomWindow2Click = () => {
        setisMasterBedRoomWindow2Active(true);
        console.log("MasterBedRoomWindow2 is Open!");
    }

    const handleAnimationEnd = () => {
        setisMasterBedRoomWindow2Active(false);
        console.log("MasterBedRoomWindow2 is Closed!");
    }

    return(
        <g  id="masterBedRoomWindow2"
            onClick={handleMasterBedRoomWindow2Click}
            onAnimationEnd={handleAnimationEnd} 
            transform="matrix(0-.637453 0.6 0 721.973 437.118)" 
            clipRule="evenodd">
        <rect className={isMasterBedRoomWindow2Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g25" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g26" clipPath="url(#updated_floorplan_cs499_svg-u-_clip4)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g27">
            <g id="updated_floorplan_cs499_svg-s-g28" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path35" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.64" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip4">
            <rect id="updated_floorplan_cs499_svg-s-rect33" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect34" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.24" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgMasterBedRoomWindow2;