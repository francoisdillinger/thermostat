import * as React from "react";
import { useState } from 'react';

const SvgBathRoom1Bath = (props) => {
    const [isBathRoom1BathActive, setisBathRoom1BathActive] = useState(false);

    const handleBathRoom1BathClick = () => {
        setisBathRoom1BathActive(true);
        console.log("BathRoom1Bath On!");
    }

    const handleAnimationEnd = () => {
        setisBathRoom1BathActive(false);
        console.log("BathRoom1Bath Off!");
    }

    return(
        <g id="bathRoom1Bath" transform="matrix(.614109 0 0 1.10254-39.7058-394.996)" clipRule="evenodd">
            <g  onClick={handleBathRoom1BathClick}
                onAnimationEnd={handleAnimationEnd} 
                transform="translate(166.435497,591.923523) scale(1,1)">
            <rect className={isBathRoom1BathActive? 'bathRoomFlash' : ''} width="92.667" height="21.333" rx="0" ry="0" transform="translate(-46.333497,-10.666523)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.12" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
    )
}

export default SvgBathRoom1Bath;