import * as React from "react";
import { useState } from 'react';

const SvgKitchenSink = (props) => {
    const [isKitchenSinkActive, setisKitchenSinkActive] = useState(false);

    const handleKitchenSinkClick = () => {
        setisKitchenSinkActive(true);
        console.log("KitchenSink On!");
    }

    const handleAnimationEnd = () => {
        setisKitchenSinkActive(false);
        console.log("KitchenSink Off!");
    }

    return(
        <g id="kitchenSink" transform="matrix(.698834 0 0 0.764742-42.5787-196.456)" clipRule="evenodd">
            <g  onClick={handleKitchenSinkClick}
                onAnimationEnd={handleAnimationEnd}
                className={isKitchenSinkActive? 'kitchenSinkScale' : ''} 
                transform="translate(520.0905,306.7565) scale(1,1)">
            <rect className={isKitchenSinkActive? 'kitchenSinkFlash' : ''} width="78.667" height="32.333" rx="0" ry="0" transform="translate(-39.3335,-16.1665)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
    )
}

export default SvgKitchenSink;