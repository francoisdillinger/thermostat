import * as React from "react";
import { useState } from 'react';

const SvgMasterBedRoomWindow1 = (props) => {
    const [isMasterBedRoomWindow1Active, setisMasterBedRoomWindow1Active] = useState(false);

    const handleMasterBedRoomWindow1Click = () => {
        setisMasterBedRoomWindow1Active(true);
        console.log("MasterBedRoomWindow1 is Open!");
    }

    const handleAnimationEnd = () => {
        setisMasterBedRoomWindow1Active(false);
        console.log("MasterBedRoomWindow1 is Closed!");
    }

    return(
        <g  id="masterBedRoomWindow1"
            onClick={handleMasterBedRoomWindow1Click}
            onAnimationEnd={handleAnimationEnd} 
            transform="matrix(.675115 0 0 0.6 552.034 414.055)" 
            clipRule="evenodd">
        <rect className={isMasterBedRoomWindow1Active? 'window' : ''} width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="#cde0f5" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        <g id="updated_floorplan_cs499_svg-s-g37" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g38" clipPath="url(#updated_floorplan_cs499_svg-u-_clip7)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-s-g39">
            <g id="updated_floorplan_cs499_svg-s-g40" transform="matrix(1 0 0 2 0-40)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path38" d="M100,45h120" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.59" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <clipPath id="updated_floorplan_cs499_svg-u-_clip7">
            <rect id="updated_floorplan_cs499_svg-s-rect42" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </clipPath>
        </g>
        </g>
        <rect id="updated_floorplan_cs499_svg-s-rect43" width="120" height="20" rx="0" ry="0" transform="translate(100 40)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2.31" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
    );
}

export default SvgMasterBedRoomWindow1;