import * as React from "react";
import { useState } from 'react';

const SvgBedRoom1Lamp2 = (props) => {
    const [isBedRoom1Lamp2Active, setisBedRoom1Lamp2Active] = useState(false);

    const handleBedRoom1Lamp2Click = () => {
        setisBedRoom1Lamp2Active(true);
        console.log("BedRoom1Lamp2 Light On!");
    }

    const handleAnimationEnd = () => {
        setisBedRoom1Lamp2Active(false);
        console.log("BedRoom1Lamp2 Light Off!");
    }

    return(
        <g>
            <g id="updated_floorplan_cs499_svg-u-bedroom1_lamp_bulb_2" transform="matrix(.698834 0 0 0.764742-212.839-110.503)" clipRule="evenodd">
                <circle id="updated_floorplan_cs499_svg-s-circle10" r="4.667" transform="translate(374.72 187.257)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="bedRoom1Lamp2" transform="matrix(.538369 0 0-.573556-182.325 100.718)" clipRule="evenodd">
                <g  className={isBedRoom1Lamp2Active? 'lampScale' : ''}
                    onClick={handleBedRoom1Lamp2Click}
                    onAnimationEnd={handleAnimationEnd}
                    transform="translate(429.729507,102.589996) scale(1,1)">
                <path className={isBedRoom1Lamp2Active? 'lampFlash' : ''} d="M429.73,86.59l20.323,32h-40.647l20.324-32Z" transform="translate(-429.729507,-102.589996)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-u-bedroom1_lamp_body_2" transform="matrix(.698834 0 0 0.764742-248.02-33.5195)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path20" d="M425.063,110.59v26.667" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            <g id="updated_floorplan_cs499_svg-u-bedroom1_lamp_stand_2" transform="matrix(.698834 0 0 0.764742-248.02-33.5195)" clipRule="evenodd">
                <path id="updated_floorplan_cs499_svg-s-path21" d="M409.406,137.257h31.314" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
    );
}

export default SvgBedRoom1Lamp2;