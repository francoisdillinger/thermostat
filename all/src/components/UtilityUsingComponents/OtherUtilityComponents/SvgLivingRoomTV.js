import * as React from "react";
import { useState } from 'react';

const SvgLivingRoomTV = (props) => {
    const [isLivingRoomTVActive, setisLivingRoomTVActive] = useState(false);

    const handleLivingRoomTVClick = () => {
        setisLivingRoomTVActive(true);
        console.log("Livingroom TV On!");
    }

    const handleAnimationEnd = () => {
        setisLivingRoomTVActive(false);
        console.log("Livingroom TV Off!");
    }

    return(
        <g id="livingRoomTV">
            <g id="" transform="matrix(.698834 0 0 0.764742-37.7102-186.719)" clipRule="evenodd">
                <g  onClick={handleLivingRoomTVClick}
                    onAnimationEnd={handleAnimationEnd}  
                    transform="translate(365.729996,701.257019) scale(1,1)">
                <rect className={isLivingRoomTVActive? 'bathroomCeilingLightFlash' : ''} width="31.314" height="80" rx="0" ry="0" transform="translate(-15.656996,-40.000019)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-u-livingroom_tv_antenna_left" transform="matrix(.698834 0 0 0.764742-37.7102-186.719)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path33" d="M381.387,701.257l18.212-22.667-18.212,22.667Z" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="updated_floorplan_cs499_svg-u-livingroom_tv_antenna_right" transform="matrix(.698834 0 0 0.764742-37.7102-186.719)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path34" d="M381.387,701.257l18.212,18.333" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
    )
}

export default SvgLivingRoomTV;