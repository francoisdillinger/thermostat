import * as React from "react";
import { useState } from 'react';

const SvgMasterBedRoomTV = (props) => {
    const [isMasterBedRoomTVActive, setisMasterBedRoomTVActive] = useState(false);

    const handleMasterBedRoomTVClick = () => {
        setisMasterBedRoomTVActive(true);
        console.log("Master Bedroom TV On!");
    }

    const handleAnimationEnd = () => {
        setisMasterBedRoomTVActive(false);
        console.log("Master Bedroom TV Off!");
    }

    return(
        <g id="masterBedRoomTV">
            <g  transform="matrix(.698834 0 0 0.764742-16.6135-186.719)" clipRule="evenodd">
                <g  onClick={handleMasterBedRoomTVClick}
                    onAnimationEnd={handleAnimationEnd} 
                    transform="translate(967.387024,791.922974) scale(1,1)">
                <rect className={isMasterBedRoomTVActive? 'bathroomCeilingLightFlash' : ''} width="80" height="24" rx="0" ry="0" transform="translate(-40.000024,-11.999974)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
                </g>
                <g id="updated_floorplan_cs499_svg-u-master_right_tv_antenna" transform="matrix(.698834 0 0 0.764742-16.6135-186.719)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path25" d="M967.387,779.923L987.84,760.59" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
                <g id="updated_floorplan_cs499_svg-u-master_left_tv_antenna" transform="matrix(.698834 0 0 0.764742-16.6135-186.719)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path26" d="M967.387,779.923L942.599,760.59" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
    )
}

export default SvgMasterBedRoomTV;