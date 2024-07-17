import * as React from "react";
import { useState } from 'react';

const SvgBedRoom2Lamp1 = (props) => {
    const [isBedRoom2Lamp1Active, setisBedRoom2Lamp1Active] = useState(false);

    const handleBedRoom2Lamp1Click = () => {
        setisBedRoom2Lamp1Active(true);
        console.log("BedRoom2Lamp1 Light On!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom2Lamp1Active(false);
        console.log("BedRoom2Lamp1 Light Off!");
    }

    return(
        <g>
            <g id="updated_floorplan_cs499_svg-s-g15" transform="matrix(.698834 0 0 0.764742-212.598 248.58)" clipRule="evenodd">
                <g id="updated_floorplan_cs499_svg-u-bedroom2_lamp_bulb_1" clipRule="evenodd">
                <circle id="updated_floorplan_cs499_svg-s-circle9" r="4.667" transform="translate(374.72 187.257)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-s-g16" transform="matrix(.538369 0 0-.573556-182.084 459.801)" clipRule="evenodd">
                <g id="bedRoom2Lamp1" clipRule="evenodd">
                <g className={isBedRoom2Lamp1Active? 'lampScale' : ''}
                    onClick={handleBedRoom2Lamp1Click}
                    onAnimationEnd={handleAnimationEnd} 
                    transform="translate(429.729507,102.589996) scale(1,1)">
                    <path className={isBedRoom2Lamp1Active? 'lampFlash' : ''} d="M429.73,86.59l20.323,32h-40.647l20.324-32Z" transform="translate(-429.729507,-102.589996)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-s-g17" transform="matrix(.698834 0 0 0.764742-247.779 325.564)" clipRule="evenodd">
                <g id="updated_floorplan_cs499_svg-u-bedroom2_lamp_body_1" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path14" d="M425.063,110.59v26.667" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-s-g18" transform="matrix(.698834 0 0 0.764742-247.779 325.564)" clipRule="evenodd">
                <g id="updated_floorplan_cs499_svg-u-bedroom2_lamp_stand_1" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path15" d="M409.406,137.257h31.314" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
        </g>
    );
}

export default SvgBedRoom2Lamp1;