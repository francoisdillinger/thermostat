import * as React from "react";
import { useState } from 'react';

const SvgWasher = (props) => {
    const [isWasherActive, setisWasherActive] = useState(false);

    const handleWasherClick = () => {
        setisWasherActive(true);
        console.log("Washer On!");
    }

    const handleAnimationEnd = () => {
        setisWasherActive(false);
        console.log("Washer Off!");
    }

    return(
        <g id="washer" transform="matrix(.698834 0 0 0.764742-40.4163-194.068)" clipRule="evenodd">
            <g onClick={handleWasherClick}
                    onAnimationEnd={handleAnimationEnd}  transform="translate(903.098999,324.089996) scale(1,1)">
            <rect className={isWasherActive? 'bathRoomFlash' : ''} width="79" height="69" rx="0" ry="0" transform="translate(-39.499999,-34.499996)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="updated_floorplan_cs499_svg-s-g22" transform="translate(31.7499 134.5)" clipRule="evenodd">
            <rect id="updated_floorplan_cs499_svg-s-rect22" width="39.5" height="31" rx="0" ry="0" transform="translate(851.599 186.59)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="updated_floorplan_cs499_svg-s-g23" transform="translate(72.9999 111)" clipRule="evenodd">
            <rect id="updated_floorplan_cs499_svg-s-rect23" width="63" height="16" rx="0" ry="0" transform="translate(798.599 186.59)" clipRule="evenodd" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <rect id="updated_floorplan_cs499_svg-s-rect24" width="79" height="69" rx="0" ry="0" transform="translate(863.599 289.59)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    )
}

export default SvgWasher;