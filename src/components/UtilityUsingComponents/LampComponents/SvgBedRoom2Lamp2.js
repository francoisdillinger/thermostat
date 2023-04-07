import * as React from "react";
import { useState } from 'react';

const SvgBedRoom2Lamp2 = (props) => {
    const [isBedRoom2Lamp2Active, setisBedRoom2Lamp2Active] = useState(false);

    const handleBedRoom2Lamp2Click = () => {
        setisBedRoom2Lamp2Active(true);
        console.log("BedRoom2Lamp2 Light On!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom2Lamp2Active(false);
        console.log("BedRoom2Lamp2 Light Off!");
    }

    return(
        <g>
            <g id="updated_floorplan_cs499_svg-u-bedroom2_lamp_bulb_2" transform="matrix(.698834 0 0 0.764742-211.802 153.752)" clipRule="evenodd">
                <circle id="updated_floorplan_cs499_svg-s-circle8" r="4.667" transform="translate(374.72 187.257)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="bedRoom2Lamp2" transform="matrix(.538369 0 0-.573556-181.288 364.973)" clipRule="evenodd">
                <g  className={isBedRoom2Lamp2Active? 'lampScale' : ''}
                    onClick={handleBedRoom2Lamp2Click}
                    onAnimationEnd={handleAnimationEnd} transform="translate(429.729507,102.589996) scale(1,1)">
                <path className={isBedRoom2Lamp2Active? 'lampFlash' : ''} d="M429.73,86.59l20.323,32h-40.647l20.324-32Z" transform="translate(-429.729507,-102.589996)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-u-bedroom2_lamp_body_2" transform="matrix(.698834 0 0 0.764742-246.984 230.736)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path11" d="M425.063,110.59v26.667" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="updated_floorplan_cs499_svg-u-bedroom2_lamp_stand_2" transform="matrix(.698834 0 0 0.764742-246.984 230.736)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path12" d="M409.406,137.257h31.314" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
    );
}

export default SvgBedRoom2Lamp2;