import * as React from "react";
import { useState } from 'react';

const SvgBathRoom1Fan = (props) => {
    const [isBathRoom1FanActive, setisBathRoom1FanActive] = useState(false);

    const handleBathRoom1FanClick = () => {
        setisBathRoom1FanActive(true);
        console.log("Bathroom Fan On!");
    }

    const handleAnimationEnd = () => {
        setisBathRoom1FanActive(false);
        console.log("Bathroom Fan Off!");
    }

    return(
        <g id="bathRoom1Fan" transform="matrix(0 1-1 0 321.234-135.609)" clipPath="evenodd">
        <g  className={isBathRoom1FanActive? 'bathRoom1CeilingFanScale' : ''}
            onClick={handleBathRoom1FanClick}
            onAnimationEnd={handleAnimationEnd} 
            transform="translate(365.609009,263.625) scale(1,1)">
        <rect className={isBathRoom1FanActive? 'bathRoom1CeilingFanFlash' : ''} width="16.25" height="16.25" rx="0" ry="0" transform="translate(-8.125009,-8.125)" clipPath="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
        <g id="updated_floorplan_cs499_svg-s-g2" clipPath="url(#updated_floorplan_cs499_svg-u-_clip2)" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g3">
            <path id="updated_floorplan_cs499_svg-s-path1" d="M373.734,255.5c-.721.043-1.442.136-2.146.298-.573.132-1.136.325-1.667.578-4.834,2.308-2.899,8.823-5.805,12.495-1.598,2.018-4.173,2.692-6.632,2.879" clipPath="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            <g id="updated_floorplan_cs499_svg-s-g4" transform="matrix(0-1 1 0 101.984 629.234)" clipPath="evenodd">
            <path id="updated_floorplan_cs499_svg-s-path2" d="M373.734,255.5c-2.252.493-4.869,1.53-6.245,3.516-1.491,2.153-1.532,2.715-2.36,5.155-.871,2.567-1.631,5.3-4.229,6.623-1.074.547-2.223.819-3.416.956" clipPath="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
        <clipPath id="updated_floorplan_cs499_svg-u-_clip2">
            <rect id="updated_floorplan_cs499_svg-s-rect2" width="16.25" height="16.25" rx="0" ry="0" transform="translate(357.484 255.5)" clipPath="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </clipPath>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect3" width="16.25" height="16.25" rx="0" ry="0" transform="translate(357.484 255.5)" clipPath="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgBathRoom1Fan;