import * as React from "react";
import { useState } from 'react';

const SvgLivingRoomWindow2 = (props) => {
    const [isLivingRoomWindow2Active, setisLivingRoomWindow2Active] = useState(false);

    const handleLivingRoomWindow2Click = () => {
        setisLivingRoomWindow2Active(true);
        console.log("LivingRoomWindow2 is Open!");
    }

    const handleAnimationEnd = () => {
        setisLivingRoomWindow2Active(false);
        console.log("LivingRoomWindow2 is Closed!");
    }

    return(
        <g  id="livingRoomWindow2"  
            onClick={handleLivingRoomWindow2Click}
            onAnimationEnd={handleAnimationEnd}  
            transform="matrix(.5 0 0 0.6 230.184 413.761)"  
            clipRule="evenodd">
        <rect className={isLivingRoomWindow2Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g65" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g66" clipPath="url(#updated_floorplan_cs499_svg-u-_clip14)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g67">
            <g id="updated_floorplan_cs499_svg-s-g68" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path45" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.11" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip14">
            <rect id="updated_floorplan_cs499_svg-s-rect63" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect64" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.26" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgLivingRoomWindow2;