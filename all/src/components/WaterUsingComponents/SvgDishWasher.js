import * as React from "react";
import { useState } from 'react';

const SvgDishWasher = (props) => {
    const [isDishWasherActive, setisDishWasherActive] = useState(false);

    const handleDishWasherClick = () => {
        setisDishWasherActive(true);
        console.log("Dishwasher On!");
    }

    const handleAnimationEnd = () => {
        setisDishWasherActive(false);
        console.log("Dishwasher Off!");
    }

    return(
        <g>
            <g id="dishWasher"
            onClick={handleDishWasherClick}
            onAnimationEnd={handleAnimationEnd} 
            transform="matrix(.698834 0 0 0.764742-42.5787-196.456)" 
            clipRule="evenodd">
            <g className={isDishWasherActive? 'dishWasherScale' : ''} transform="translate(602.424011,337.589508) scale(1,1)">
            <rect className={isDishWasherActive? 'dishWasherFlash' : ''} width="52" height="3.333" rx="0" ry="0" transform="translate(-26.000011,-1.666508)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <g id="updated_floorplan_cs499_svg-u-dishwasher_handle" transform="matrix(.698834 0 0 0.764742-42.5787-196.456)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path6" d="M582.424,339.257c0,0,22.592,9.333,35.629,0" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
    )
}

export default SvgDishWasher;