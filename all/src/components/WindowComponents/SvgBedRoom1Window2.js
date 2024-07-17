import * as React from "react";
import { useState } from 'react';

const SvgBedRoom1Window2 = (props) => {
    const [isBedRoom1Window2Active, setisBedRoom1Window2Active] = useState(false);

    const handleBedRoom1Window2Click = () => {
        setisBedRoom1Window2Active(true);
        console.log("BedRoom1Window2 is Open!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom1Window2Active(false);
        console.log("BedRoom1Window2 is Closed!");
    }

    return(
        <g  id="bedRoom1Window2"
            onClick={handleBedRoom1Window2Click}
            onAnimationEnd={handleAnimationEnd}   
            transform="matrix(.706599 0 0 0.6-10.4488-14)" 
            clipRule="evenodd">
        <rect className={isBedRoom1Window2Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g73" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g74" clipPath="url(#updated_floorplan_cs499_svg-u-_clip16)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g75">
            <g id="updated_floorplan_cs499_svg-s-g76" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path47" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.57" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip16">
            <rect id="updated_floorplan_cs499_svg-s-rect69" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect70" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgBedRoom1Window2;