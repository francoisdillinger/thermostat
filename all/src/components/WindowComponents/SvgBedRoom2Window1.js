import * as React from "react";
import { useState } from 'react';

const SvgBedRoom2Window1 = (props) => {
    const [isBedRoom2Window1Active, setisBedRoom2Window1Active] = useState(false);

    const handleBedRoom2Window1Click = () => {
        setisBedRoom2Window1Active(true);
        console.log("BedRoom2Window1 is Open!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom2Window1Active(false);
        console.log("BedRoom2Window1 is Closed!");
    }

    return(
        <g  id="bedRoom2Window1"
            onClick={handleBedRoom2Window1Click}
            onAnimationEnd={handleAnimationEnd} 
            transform="matrix(.617091 0 0 0.6 0.16269 414.291)" 
            clipRule="evenodd">
        <rect className={isBedRoom2Window1Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g49" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g50" clipPath="url(#updated_floorplan_cs499_svg-u-_clip10)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g51">
            <g id="updated_floorplan_cs499_svg-s-g52" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path41" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.63" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip10">
            <rect id="updated_floorplan_cs499_svg-s-rect51" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect52" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.43" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgBedRoom2Window1;