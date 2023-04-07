import * as React from "react";
import { useState } from 'react';

const SvgDryer = (props) => {
    const [isDryerActive, setisDryerActive] = useState(false);

    const handleDryerClick = () => {
        setisDryerActive(true);
        console.log("Dryer is On!");
    }

    const handleAnimationEnd = () => {
        setisDryerActive(false);
        console.log("Dryer is Off!");
    }

    return(
        <g id="dryer" transform="matrix(.698834 0 0 0.764742 24.470005-194.067997)" clipRule="evenodd">
            <g  onClick={handleDryerClick}
            onAnimationEnd={handleAnimationEnd}  
            transform="translate(903.098999,324.089996) scale(1,1)">
            <rect className={isDryerActive? 'microwaveFlash' : ''} width="79" height="69" rx="0" ry="0" transform="translate(-39.499999,-34.499996)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="updated_floorplan_cs499_svg-s-g24" transform="translate(73 111)" clipRule="evenodd">
            <rect id="updated_floorplan_cs499_svg-s-rect26" width="63" height="16" rx="0" ry="0" transform="translate(798.599 186.59)" clipRule="evenodd" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <rect id="updated_floorplan_cs499_svg-s-rect27" width="79" height="69" rx="0" ry="0" transform="translate(863.599 289.59)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgDryer;