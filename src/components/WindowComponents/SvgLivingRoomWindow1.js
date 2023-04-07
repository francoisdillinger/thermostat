import * as React from "react";
import { useState } from 'react';

const SvgLivingRoomWindow1 = (props) => {
    const [isLivingRoomWindow1Active, setisLivingRoomWindow1Active] = useState(false);

    const handleLivingRoomWindow1Click = () => {
        setisLivingRoomWindow1Active(true);
        console.log("LivingRoomWindow1 is Open!");
    }

    const handleAnimationEnd = () => {
        setisLivingRoomWindow1Active(false);
        console.log("LivingRoomWindow1 is Closed!");
    }

    return(
        <g  id="livingRoomWindow1"    
            onClick={handleLivingRoomWindow1Click}
            onAnimationEnd={handleAnimationEnd} 
            transform="matrix(.5 0 0 0.6 169.184 413.761)" 
            clipRule="evenodd">
        <rect className={isLivingRoomWindow1Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g69" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g70" clipPath="url(#updated_floorplan_cs499_svg-u-_clip15)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g71">
            <g id="updated_floorplan_cs499_svg-s-g72" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path46" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.11" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip15">
            <rect id="updated_floorplan_cs499_svg-s-rect66" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect67" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.26" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgLivingRoomWindow1;