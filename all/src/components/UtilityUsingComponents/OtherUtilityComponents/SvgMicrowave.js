import * as React from "react";
import { useState } from 'react';

const SvgMicrowave = (props) => {
    const [isMicrowaveActive, setisMicrowaveActive] = useState(false);

    const handleMicrowaveClick = () => {
        setisMicrowaveActive(true);
        console.log("Microwave is On!");
    }

    const handleAnimationEnd = () => {
        setisMicrowaveActive(false);
        console.log("Microwave is Off!");
    }

    return(
  <g id="microwave" transform="matrix(0 0.822987 0.822987 0 11.7882-278.572)" clipRule="evenodd">
    <g  className={isMicrowaveActive? 'microwaveScale' : ''}
        onClick={handleMicrowaveClick}
        onAnimationEnd={handleAnimationEnd} 
        transform="translate(386.484009,261.560989) scale(1,1)">
      <rect className={isMicrowaveActive? 'microwaveFlash' : ''} width="27" height="43.796" rx="0" ry="0" transform="translate(-13.500009,-21.897989)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
    </g>
    <g id="updated_floorplan_cs499_svg-s-g77" clipPath="url(#updated_floorplan_cs499_svg-u-_clip17)" clipRule="evenodd">
      <g id="updated_floorplan_cs499_svg-s-g78">
        <g id="updated_floorplan_cs499_svg-s-g79" transform="matrix(1.21509 0 0 1.76362-71.4498-202.783)" clipRule="evenodd">
          <rect id="updated_floorplan_cs499_svg-s-rect72" width="3.89" height="21.044" rx="0" ry="0" transform="translate(384.095 254.663)" clipRule="evenodd" fill="#ebebeb" fillRule="evenodd" stroke="#000" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
        </g>
      </g>
      <clipPath id="updated_floorplan_cs499_svg-u-_clip17">
        <rect id="updated_floorplan_cs499_svg-s-rect73" width="27" height="43.796" rx="0" ry="0" transform="translate(372.984 239.663)" clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
      </clipPath>
    </g>
    <rect id="updated_floorplan_cs499_svg-s-rect74" width="27" height="43.796" rx="0" ry="0" transform="translate(372.984 239.663)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.22" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
  </g>
    );
}

export default SvgMicrowave;