import * as React from "react";
import { useState } from 'react';

const SvgBathRoom1Toilet = (props) => {
    const [isBathRoom1ToiletActive, setisBathRoom1ToiletActive] = useState(false);

    const handleBathRoom1ToiletClick = () => {
        setisBathRoom1ToiletActive(true);
        console.log("BathRoom1Toilet On!");
    }

    const handleAnimationEnd = () => {
        setisBathRoom1ToiletActive(false);
        console.log("BathRoom1Toilet Off!");
    }

    return(
        <g>
            <g id="bathRoom1Toilet" transform="matrix(.698834 0 0 0.764742 9.51944-182.009)" clipRule="evenodd">
                <g  onClick={handleBathRoom1ToiletClick}
                    onAnimationEnd={handleAnimationEnd} 
                    transform="translate(45.102001,505.256973) scale(1,1)">
                <ellipse className={isBathRoom1ToiletActive? 'bathRoomFlash' : ''} rx="11" ry="14" transform="translate(-0.000001,0.000027)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-u-bathroom1_toilet_tank" transform="matrix(.698834 0 0 0.764742-51.2791-191.186)" clipRule="evenodd">
                <rect id="updated_floorplan_cs499_svg-s-rect17" width="23.333" height="8" rx="0" ry="0" transform="translate(120.102 499.257)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
    )
}

export default SvgBathRoom1Toilet;