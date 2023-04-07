import * as React from "react";
import { useState } from 'react';

const SvgBedRoom2CeilingLight = (props) => {
    const [isBedRoom2CeilingLightActive, setisBedRoom2CeilingLightActive] = useState(false);

    const handleBedRoom2CeilingLightClick = () => {
        setisBedRoom2CeilingLightActive(true);
        console.log("Bedroom 2 Ceiling Light On!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom2CeilingLightActive(false);
        console.log("Bedroom 2 Ceiling Light Off!");
    }

    return(
        <g id="bedRoom2CeilingLight" transform="matrix(2.24714 0 0 2.14741-624.475-181.438)" clipRule="evenodd">
        <g 
            className={isBedRoom2CeilingLightActive? 'ceilingLightScale' : ''}  
            onClick={handleBedRoom2CeilingLightClick}
            onAnimationEnd={handleAnimationEnd}
            transform="translate(323.252991,253.997009) scale(1,1)">
          <path className={isBedRoom2CeilingLightActive? 'ceilingLightFlash' : ''}  d="M322.59,259.931h-.762c-.731,0-1.325-.392-1.325-.875v-2.115c-1.861-.988-3.13-2.946-3.13-5.198c0-3.245,2.635-5.88,5.88-5.88s5.88,2.635,5.88,5.88c0,2.332-1.36,4.349-3.33,5.299v2.014c0,.483-.594.875-1.325.875h-.562c-.19-.126-.418-.2-.663-.2s-.473.074-.663.2Zm1.326,0c.324.215.537.583.537,1c0,.663-.538,1.2-1.2,1.2s-1.2-.537-1.2-1.2c0-.417.214-.785.537-1h1.326Z" transform="translate(-323.252991,-253.997009)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
        <g id="svgfinal-s-g98" clipPath="url(#svgfinal-u-_clip24)" clipRule="evenodd">
          <g id="svgfinal-s-g99">
            <path id="svgfinal-s-path79" d="M323.253,259.4l2.22-5.403" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="0.45" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            <g id="svgfinal-s-g100" transform="matrix(-1 0 0 1 646.726 0)" clipRule="evenodd">
              <path id="svgfinal-s-path80" d="M323.253,259.4l2.22-5.403" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="0.45" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
          </g>
          <clipPath id="svgfinal-u-_clip24">
            <path id="svgfinal-s-path81" d="M322.59,259.931h-.762c-.731,0-1.325-.392-1.325-.875v-2.115c-1.861-.988-3.13-2.946-3.13-5.198c0-3.245,2.635-5.88,5.88-5.88s5.88,2.635,5.88,5.88c0,2.332-1.36,4.349-3.33,5.299v2.014c0,.483-.594.875-1.325.875h-.562c-.19-.126-.418-.2-.663-.2s-.473.074-.663.2Zm1.326,0c.324.215.537.583.537,1c0,.663-.538,1.2-1.2,1.2s-1.2-.537-1.2-1.2c0-.417.214-.785.537-1h1.326Z" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
          </clipPath>
        </g>
        <path id="svgfinal-s-path82" d="M322.59,259.931h-.762c-.731,0-1.325-.392-1.325-.875v-2.115c-1.861-.988-3.13-2.946-3.13-5.198c0-3.245,2.635-5.88,5.88-5.88s5.88,2.635,5.88,5.88c0,2.332-1.36,4.349-3.33,5.299v2.014c0,.483-.594.875-1.325.875h-.562c-.19-.126-.418-.2-.663-.2s-.473.074-.663.2Zm1.326,0c.324.215.537.583.537,1c0,.663-.538,1.2-1.2,1.2s-1.2-.537-1.2-1.2c0-.417.214-.785.537-1h1.326Z" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="0.45" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
      </g>
    );
}

export default SvgBedRoom2CeilingLight;