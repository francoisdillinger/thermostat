import * as React from "react";
import { useState } from 'react';

const SvgKitchenWindow2 = (props) => {
    const [isKitchenWindow2Active, setisKitchenWindow2Active] = useState(false);

    const handleKitchenWindow2Click = () => {
        setisKitchenWindow2Active(true);
        console.log("KitchenWindow2 is Open!");
    }

    const handleAnimationEnd = () => {
        setisKitchenWindow2Active(false);
        console.log("KitchenWindow2 is Closed!");
    }

    return(
        <g  id="kitchenWindow2"
            onClick={handleKitchenWindow2Click}
            onAnimationEnd={handleAnimationEnd} 
            transform="matrix(.666667 0 0 0.6 255.032-14.6167)" 
            clipRule="evenodd">
        <rect className={isKitchenWindow2Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g53" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g54" clipPath="url(#updated_floorplan_cs499_svg-u-_clip11)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g55">
            <g id="updated_floorplan_cs499_svg-s-g56" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path42" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.23" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip11">
            <rect id="updated_floorplan_cs499_svg-s-rect54" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect55" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgKitchenWindow2;