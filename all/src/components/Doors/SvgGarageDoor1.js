import * as React from "react";
import { useState } from 'react';

const SvgGarageDoor1 = (props) => {
    const [isGarageDoor1Active, setisGarageDoor1Active] = useState(false);

    const handleGarageDoor1Click = () => {
        setisGarageDoor1Active(true);
        console.log("Garage Door 1 Open!");
    }

    const handleAnimationEnd = () => {
        setisGarageDoor1Active(false);
        console.log("Garage Door 1 Closed!");
    }

    return(
        <g onClick={handleGarageDoor1Click} id="garageDoor1" transform="matrix(.833048 0 0 0.462678 123.252 81.241)" clipRule="evenodd">
            <g  className={isGarageDoor1Active? 'garageDoorScale' : ''}
                onAnimationEnd={handleAnimationEnd} 
                transform="translate(835.666992,274.5) scale(1,1)">
            <rect className={isGarageDoor1Active? 'garageDoorFlash' : ''} width="99" height="27" rx="0" ry="0" transform="translate(-49.499992,-13.5)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="updated_floorplan_cs499_svg-s-g101" clipPath="url(#updated_floorplan_cs499_svg-u-_clip25)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g102">
                <path id="updated_floorplan_cs499_svg-s-path83" d="M786.167,288l99-27" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.97" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                <path id="updated_floorplan_cs499_svg-s-path84" d="M885.167,288l-99-27" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.97" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip25">
                <rect id="updated_floorplan_cs499_svg-s-rect76" width="99" height="27" rx="0" ry="0" transform="translate(786.167 261)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
            </g>
            <rect id="updated_floorplan_cs499_svg-s-rect77" width="99" height="27" rx="0" ry="0" transform="translate(786.167 261)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.97" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>



    )
}

export default SvgGarageDoor1;