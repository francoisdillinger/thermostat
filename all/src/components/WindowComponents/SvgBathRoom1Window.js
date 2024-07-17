import * as React from "react";
import { useState } from 'react';

const SvgBathRoom1Window = (props) => {
    const [isBathRoom1WindowActive, setisBathRoom1WindowActive] = useState(false);

    const handleBathRoom1WindowClick = () => {
        setisBathRoom1WindowActive(true);
        console.log("BathRoom1Window is Open!");
    }

    const handleAnimationEnd = () => {
        setisBathRoom1WindowActive(false);
        console.log("BathRoom1Window is Closed!");
    }

    return(
        <g  id="bathRoom1Window"
            onClick={handleBathRoom1WindowClick}
            onAnimationEnd={handleAnimationEnd} 
            transform="matrix(0-.333333 0.6 0-5.52321 280.333)" 
            clipRule="evenodd">
        <rect className={isBathRoom1WindowActive? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g29" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g30" clipPath="url(#updated_floorplan_cs499_svg-u-_clip5)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g31">
            <g id="updated_floorplan_cs499_svg-s-g32" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path36" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.64" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip5">
            <rect id="updated_floorplan_cs499_svg-s-rect36" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect37" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.24" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgBathRoom1Window;