import * as React from "react";
import { useState } from 'react';

const SvgMasterBathRoomSink = (props) => {
    const [isMasterBathRoomSinkActive, setisMasterBathRoomSinkActive] = useState(false);

    const handleMasterBathRoomSinkClick = () => {
        setisMasterBathRoomSinkActive(true);
        console.log("MasterBathRoomSink On!");
    }

    const handleAnimationEnd = () => {
        setisMasterBathRoomSinkActive(false);
        console.log("MasterBathRoomSink Off!");
    }

    return(
        <g id="masterBathRoomSink" transform="matrix(.85163 0 0 0.931948 672.098-350.137)" clipRule="evenodd">
            <g onClick={handleMasterBathRoomSinkClick}
                onAnimationEnd={handleAnimationEnd}
                className={isMasterBathRoomSinkActive? 'bathRoomSinkScale' : ''} transform="translate(39.436001,563.711945) scale(1,1)">
            <ellipse className={isMasterBathRoomSinkActive? 'bathRoomFlash' : ''} rx="13.333" ry="7.788" transform="translate(-0.000001,0.000055)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.12" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
    )
}

export default SvgMasterBathRoomSink;