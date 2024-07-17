import * as React from "react";
import { useState } from 'react';

const SvgBedRoom1Window1 = (props) => {
    const [isBedRoom1Window1Active, setisBedRoom1Window1Active] = useState(false);

    const handleBedRoom1Window1Click = () => {
        setisBedRoom1Window1Active(true);
        console.log("BedRoom1Window1 is Open!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom1Window1Active(false);
        console.log("BedRoom1Window1 is Closed!");
    }

    return(
        <g  id="bedRoom1Window1"
            onClick={handleBedRoom1Window1Click}
            onAnimationEnd={handleAnimationEnd}  
            transform="matrix(0-.630205 0.6 0-5.52417 201.033)" 
            clipRule="evenodd">
        <rect className={isBedRoom1Window1Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g45" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g46" clipPath="url(#updated_floorplan_cs499_svg-u-_clip9)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g47">
            <g id="updated_floorplan_cs499_svg-s-g48" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path40" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip9">
            <rect id="updated_floorplan_cs499_svg-s-rect48" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect49" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.26" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgBedRoom1Window1;