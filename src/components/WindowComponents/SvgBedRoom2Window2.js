import * as React from "react";
import { useState } from 'react';

const SvgBedRoom2Window2 = (props) => {
    const [isBedRoom2Window2Active, setisBedRoom2Window2Active] = useState(false);

    const handleBedRoom2Window2Click = () => {
        setisBedRoom2Window2Active(true);
        console.log("BedRoom2Window2 is Open!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom2Window2Active(false);
        console.log("BedRoom2Window2 is Closed!");
    }

    return(
        <g  id="bedRoom2Window2"
            onClick={handleBedRoom2Window2Click}
            onAnimationEnd={handleAnimationEnd} 
            transform="matrix(0-.666446 0.6 0-5.52417 466.611)" 
            clipRule="evenodd">
        <rect className={isBedRoom2Window2Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g41" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g42" clipPath="url(#updated_floorplan_cs499_svg-u-_clip8)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g43">
            <g id="updated_floorplan_cs499_svg-s-g44" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path39" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.62" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip8">
            <rect id="updated_floorplan_cs499_svg-s-rect45" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect46" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgBedRoom2Window2;