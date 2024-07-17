import * as React from "react";
import { useState } from 'react';

const SvgLivingRoomWindow3 = (props) => {
    const [isLivingRoomWindow3Active, setisLivingRoomWindow3Active] = useState(false);

    const handleLivingRoomWindow3Click = () => {
        setisLivingRoomWindow3Active(true);
        console.log("LivingRoomWindow3 is Open!");
    }

    const handleAnimationEnd = () => {
        setisLivingRoomWindow3Active(false);
        console.log("LivingRoomWindow3 is Closed!");
    }

    return(
        <g  id="livingRoomWindow3"  
            onClick={handleLivingRoomWindow3Click}
            onAnimationEnd={handleAnimationEnd}     
            transform="matrix(.5 0 0 0.6 291.184 413.761)" 
            clipRule="evenodd">
        <rect className={isLivingRoomWindow3Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g61" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g62" clipPath="url(#updated_floorplan_cs499_svg-u-_clip13)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g63">
            <g id="updated_floorplan_cs499_svg-s-g64" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path44" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.11" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip13">
            <rect id="updated_floorplan_cs499_svg-s-rect60" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect61" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.26" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgLivingRoomWindow3;