import * as React from "react";
import { useState } from 'react';

const SvgGarageDoor2 = (props) => {
    const [isGarageDoor2Active, setisGarageDoor2Active] = useState(false);

    const handleGarageDoor2Click = () => {
        setisGarageDoor2Active(true);
        console.log("Garage Door 2 Open!");
    }

    const handleAnimationEnd = () => {
        setisGarageDoor2Active(false);
        console.log("Garage Door 2 Closed!");
    }

    return(
        <g onClick={handleGarageDoor2Click} id="garageDoor2" transform="matrix(.833048 0 0 0.462678 242.252 81.241)" clipRule="evenodd">
            <g  className={isGarageDoor2Active? 'garageDoorScale' : ''}
                onAnimationEnd={handleAnimationEnd}
                transform="translate(835.666992,274.5) scale(1,1)">
            <rect className={isGarageDoor2Active? 'garageDoorFlash' : ''} width="99" height="27" rx="0" ry="0" transform="translate(-49.499992,-13.5)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="updated_floorplan_cs499_svg-s-g103" clipPath="url(#updated_floorplan_cs499_svg-u-_clip26)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g104">
                <path id="updated_floorplan_cs499_svg-s-path85" d="M786.167,288l99-27" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.97" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                <path id="updated_floorplan_cs499_svg-s-path86" d="M885.167,288l-99-27" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.97" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip26">
                <rect id="updated_floorplan_cs499_svg-s-rect79" width="99" height="27" rx="0" ry="0" transform="translate(786.167 261)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
            </g>
            <rect id="updated_floorplan_cs499_svg-s-rect80" width="99" height="27" rx="0" ry="0" transform="translate(786.167 261)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.97" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    )
}

export default SvgGarageDoor2;