import * as React from "react";
import { useState } from 'react';

const SvgLivingRoomCeilingLight = (props) => {
    const [isLivingRoomCeilingLightActive, setisLivingRoomCeilingLightActive] = useState(false);

    const handleLivingRoomCeilingLightClick = () => {
        setisLivingRoomCeilingLightActive(true);
        console.log("Living Room Ceiling Light On!");
    }

    const handleAnimationEnd = () => {
        setisLivingRoomCeilingLightActive(false);
        console.log("Living Room Ceiling Light Off!");
    }

    return(
        <g id="livingRoomCeilingLight" transform="matrix(2.24714 0 0 2.14741-369.809-198.906)" clipRule="evenodd">
        <g  className={isLivingRoomCeilingLightActive? 'ceilingLightScale' : ''}  
            onClick={handleLivingRoomCeilingLightClick}
            onAnimationEnd={handleAnimationEnd}
            transform="translate(323.252991,253.997009) scale(1,1)">
        <path className={isLivingRoomCeilingLightActive? 'ceilingLightFlash' : ''} d="M322.59,259.931h-.762c-.731,0-1.325-.392-1.325-.875v-2.115c-1.861-.988-3.13-2.946-3.13-5.198c0-3.245,2.635-5.88,5.88-5.88s5.88,2.635,5.88,5.88c0,2.332-1.36,4.349-3.33,5.299v2.014c0,.483-.594.875-1.325.875h-.562c-.19-.126-.418-.2-.663-.2s-.473.074-.663.2Zm1.326,0c.324.215.537.583.537,1c0,.663-.538,1.2-1.2,1.2s-1.2-.537-1.2-1.2c0-.417.214-.785.537-1h1.326Z" transform="translate(-323.252991,-253.997009)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
        <g id="updated_floorplan_cs499_svg-s-g89" clipPath="url(#updated_floorplan_cs499_svg-u-_clip21)" clipRule="evenodd">
        <g id="updated_floorplan_cs499_svg-s-g90">
            <path id="updated_floorplan_cs499_svg-s-path64" d="M323.253,259.4l2.22-5.403" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="0.45" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            <g id="updated_floorplan_cs499_svg-s-g91" transform="matrix(-1 0 0 1 646.726 0)" clipRule="evenodd">
            <path id="updated_floorplan_cs499_svg-s-path65" d="M323.253,259.4l2.22-5.403" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="0.45" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
        <clipPath id="updated_floorplan_cs499_svg-u-_clip21">
            <path id="updated_floorplan_cs499_svg-s-path66" d="M322.59,259.931h-.762c-.731,0-1.325-.392-1.325-.875v-2.115c-1.861-.988-3.13-2.946-3.13-5.198c0-3.245,2.635-5.88,5.88-5.88s5.88,2.635,5.88,5.88c0,2.332-1.36,4.349-3.33,5.299v2.014c0,.483-.594.875-1.325.875h-.562c-.19-.126-.418-.2-.663-.2s-.473.074-.663.2Zm1.326,0c.324.215.537.583.537,1c0,.663-.538,1.2-1.2,1.2s-1.2-.537-1.2-1.2c0-.417.214-.785.537-1h1.326Z" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </clipPath>
        </g>
        <path id="updated_floorplan_cs499_svg-s-path67" d="M322.59,259.931h-.762c-.731,0-1.325-.392-1.325-.875v-2.115c-1.861-.988-3.13-2.946-3.13-5.198c0-3.245,2.635-5.88,5.88-5.88s5.88,2.635,5.88,5.88c0,2.332-1.36,4.349-3.33,5.299v2.014c0,.483-.594.875-1.325.875h-.562c-.19-.126-.418-.2-.663-.2s-.473.074-.663.2Zm1.326,0c.324.215.537.583.537,1c0,.663-.538,1.2-1.2,1.2s-1.2-.537-1.2-1.2c0-.417.214-.785.537-1h1.326Z" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="0.45" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
    </g>
    );
}

export default SvgLivingRoomCeilingLight;