import * as React from "react";
import { useState } from 'react';

const SvgBedRoom1Lamp1 = (props) => {
    const [isBedRoom1Lamp1Active, setisBedRoom1Lamp1Active] = useState(false);

    const handleBedRoom1Lamp1Click = () => {
        setisBedRoom1Lamp1Active(true);
        console.log("BedRoom1Lamp1 Light On!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom1Lamp1Active(false);
        console.log("BedRoom1Lamp1 Light Off!");
    }

    return(
        <g>
            <g id="updated_floorplan_cs499_svg-u-bedroom1_lamp_bulb_1" transform="matrix(.698834 0 0 0.764742-212.839-12.6165)" clipRule="evenodd">
                <circle id="updated_floorplan_cs499_svg-s-circle7" r="4.667" transform="translate(374.72 187.257)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="bedRoom1Lamp1" transform="matrix(.538369 0 0-.573556-182.325 198.605)" clipRule="evenodd">
                <g className={isBedRoom1Lamp1Active? 'lampScale' : ''}
                    onClick={handleBedRoom1Lamp1Click}
                    onAnimationEnd={handleAnimationEnd} 
                    transform="translate(429.729507,102.589996) scale(1,1)">
                <path className={isBedRoom1Lamp1Active? 'lampFlash' : ''} d="M429.73,86.59l20.323,32h-40.647l20.324-32Z" transform="translate(-429.729507,-102.589996)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-u-bedroom1_lamp_body_1" transform="matrix(.698834 0 0 0.764742-248.02 64.3675)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path17" d="M425.063,110.59v26.667" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="updated_floorplan_cs499_svg-u-bedroom1_lamp_stand_1" transform="matrix(.698834 0 0 0.764742-248.02 64.3675)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path18" d="M409.406,137.257h31.314" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>

        
    );
}

export default SvgBedRoom1Lamp1;