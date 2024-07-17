import * as React from "react";
import { useState } from 'react';

const SvgStove = (props) => {
    const [isStoveActive, setisStoveActive] = useState(false);

    const handleStoveClick = () => {
        setisStoveActive(true);
        console.log("Stove is On!");
    }

    const handleAnimationEnd = () => {
        setisStoveActive(false);
        console.log("Stove is Off!");
    }

    return(
<g  id="stove"
    onClick={handleStoveClick}
    onAnimationEnd={handleAnimationEnd} 
    transform="matrix(.698834 0 0 0.764742-42.5787-194.926)" 
    clipRule="evenodd">
    <g transform="translate(372.089996,361.2565) scale(1,1)">
    <rect className={isStoveActive? 'microwaveFlash' : ''} width="46" height="45.333" rx="0" ry="0" transform="translate(-22.999996,-22.6665)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
    </g>
    <g id="updated_floorplan_cs499_svg-u-stovepanel" transform="translate(0-2.00002)" clipRule="evenodd">
    <rect id="updated_floorplan_cs499_svg-s-rect12" width="7.333" height="39.333" rx="0" ry="0" transform="translate(349.09 344.59)" clipRule="evenodd" fill="#0a0404" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
    </g>
    <g id="updated_floorplan_cs499_svg-u-stovetop4" transform="translate(-51.3334 12.9999)" clipRule="evenodd">
    <circle id="updated_floorplan_cs499_svg-s-circle1" r="6.5" transform="translate(436.924 357.757)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
    </g>
    <g id="updated_floorplan_cs499_svg-u-stovetop3" transform="translate(-51.3334-7.00001)" clipRule="evenodd">
    <circle id="updated_floorplan_cs499_svg-s-circle2" r="6.5" transform="translate(436.924 357.757)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
    </g>
    <g id="updated_floorplan_cs499_svg-u-stovetop2" transform="translate(-68.8334-6.49997)" clipRule="evenodd">
    <circle id="updated_floorplan_cs499_svg-s-circle3" r="6.5" transform="translate(436.924 357.757)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
    </g>
    <g id="updated_floorplan_cs499_svg-u-stovetop1" transform="translate(-68.8334 12.9999)" clipRule="evenodd">
    <circle id="updated_floorplan_cs499_svg-s-circle4" r="6.5" transform="translate(436.924 357.757)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
    </g>
</g>
    );
}

export default SvgStove;