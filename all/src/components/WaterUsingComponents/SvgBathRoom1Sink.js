import * as React from "react";
import { useState } from 'react';

const SvgBathRoom1Sink = (props) => {
    const [isBathRoom1SinkActive, setisBathRoom1SinkActive] = useState(false);

    const handleBathRoom1SinkClick = () => {
        setisBathRoom1SinkActive(true);
        console.log("BathRoom1Sink On!");
    }

    const handleAnimationEnd = () => {
        setisBathRoom1SinkActive(false);
        console.log("BathRoom1Sink Off!");
    }

    return(
        <g id="bathRoom1Sink" transform="matrix(.698834 0 0 0.764742 53.7506-230.026)" clipRule="evenodd">
            <g  onClick={handleBathRoom1SinkClick}
                onAnimationEnd={handleAnimationEnd}
                className={isBathRoom1SinkActive? 'bathRoomSinkScale' : ''}
                transform="translate(39.436001,563.711945) scale(1,1)">
            <ellipse className={isBathRoom1SinkActive? 'bathRoomFlash' : ''} rx="13.333" ry="7.788" transform="translate(-0.000001,0.000055)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
          </g>
        </g>
    )
}

export default SvgBathRoom1Sink;