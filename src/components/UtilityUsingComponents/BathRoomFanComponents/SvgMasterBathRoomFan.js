import * as React from "react";
import { useState } from 'react';

const SvgMasterBathRoomFan = (props) => {
    const [isMasterBathRoomFanActive, setisMasterBathRoomFanActive] = useState(false);

    const handleMasterBathRoomFanClick = () => {
        setisMasterBathRoomFanActive(true);
        console.log("Bathroom Fan On!");
    }

    const handleAnimationEnd = () => {
        setisMasterBathRoomFanActive(false);
        console.log("Bathroom Fan Off!");
    }

    return(
        <g id="masterBathRoomFan" transform="matrix(0 1-1 0 914.234-143.734)" clipRule="evenodd">
        <g  className={isMasterBathRoomFanActive? 'bathRoom1CeilingFanScale' : ''}
            onClick={handleMasterBathRoomFanClick}
            onAnimationEnd={handleAnimationEnd} 
            transform="translate(365.609009,263.625) scale(1,1)">
        <rect className={isMasterBathRoomFanActive? 'bathRoom1CeilingFanFlash' : ''} width="16.25" height="16.25" rx="0" ry="0" transform="translate(-8.125009,-8.125)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
        <g id="updated_floorplan_cs499_svg-s-g5" clipPath="url(#updated_floorplan_cs499_svg-u-_clip3)" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g6">
            <path id="updated_floorplan_cs499_svg-s-path3" d="M373.734,255.5c-.721.043-1.442.136-2.146.298-.573.132-1.136.325-1.667.578-4.834,2.308-2.899,8.823-5.805,12.495-1.598,2.018-4.173,2.692-6.632,2.879" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            <g id="updated_floorplan_cs499_svg-s-g7" transform="matrix(0-1 1 0 101.984 629.234)" clipRule="evenodd">
            <path id="updated_floorplan_cs499_svg-s-path4" d="M373.734,255.5c-2.252.493-4.869,1.53-6.245,3.516-1.491,2.153-1.532,2.715-2.36,5.155-.871,2.567-1.631,5.3-4.229,6.623-1.074.547-2.223.819-3.416.956" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
        <clipPath id="updated_floorplan_cs499_svg-u-_clip3">
            <rect id="updated_floorplan_cs499_svg-s-rect5" width="16.25" height="16.25" rx="0" ry="0" transform="translate(357.484 255.5)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </clipPath>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect6" width="16.25" height="16.25" rx="0" ry="0" transform="translate(357.484 255.5)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgMasterBathRoomFan;