import * as React from "react";
import { useState } from 'react';

const SvgKitchenWindow1 = (props) => {
    const [isKitchenWindow1Active, setisKitchenWindow1Active] = useState(false);

    const handleKitchenWindow1Click = () => {
        setisKitchenWindow1Active(true);
        console.log("KitchenWindow1 is Open!");
    }

    const handleAnimationEnd = () => {
        setisKitchenWindow1Active(false);
        console.log("KitchenWindow1 is Closed!");
    }

    return(
        <g  id="kitchenWindow1"
            onClick={handleKitchenWindow1Click}
            onAnimationEnd={handleAnimationEnd}  
            transform="matrix(.666667 0 0 0.6 174.032-14.6167)" 
            clipRule="evenodd">
        <rect className={isKitchenWindow1Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g57" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g58" clipPath="url(#updated_floorplan_cs499_svg-u-_clip12)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g59">
            <g id="updated_floorplan_cs499_svg-s-g60" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path43" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.23" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip12">
            <rect id="updated_floorplan_cs499_svg-s-rect57" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect58" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgKitchenWindow1;