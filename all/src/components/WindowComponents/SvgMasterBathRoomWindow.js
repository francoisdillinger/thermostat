import * as React from "react";
import { useState } from 'react';

const SvgMasterBathRoomWindow = (props) => {
    const [isMasterBathRoomWindowActive, setisMasterBathRoomWindowActive] = useState(false);

    const handleMasterBathRoomWindowClick = () => {
        setisMasterBathRoomWindowActive(true);
        console.log("MasterBathRoomWindow is Open!");
    }

    const handleAnimationEnd = () => {
        setisMasterBathRoomWindowActive(false);
        console.log("MasterBathRoomWindow is Closed!");
    }

    return(
        <g  id="masterBathRoomWindow"
            onClick={handleMasterBathRoomWindowClick}
            onAnimationEnd={handleAnimationEnd}  
            transform="matrix(0-.333333 0.6 0 720.973 291.706)" 
            clipRule="evenodd">
        <rect className={isMasterBathRoomWindowActive? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g33" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g34" clipPath="url(#updated_floorplan_cs499_svg-u-_clip6)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g35">
            <g id="updated_floorplan_cs499_svg-s-g36" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path37" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.64" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip6">
            <rect id="updated_floorplan_cs499_svg-s-rect39" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect40" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.24" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgMasterBathRoomWindow;