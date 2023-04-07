import * as React from "react";
import { useState } from 'react';

const SvgLivingRoomLamp2 = (props) => {
    const [isLivingRoomLamp2Active, setisLivingRoomLamp2Active] = useState(false);

    const handleLivingRoomLamp2Click = () => {
        setisLivingRoomLamp2Active(true);
        console.log("LivingRoomLamp2 Light On!");
    }

    const handleAnimationEnd = () => {
        setisLivingRoomLamp2Active(false);
        console.log("LivingRoomLamp2 Light Off!");
    }

    return(
            <g>
                <g id="updated_floorplan_cs499_svg-u-livingroom_lamp_light_bulb_2" transform="matrix(.698834 0 0 0.764742-43.9929 129.884)" clipRule="evenodd">
                    <circle id="updated_floorplan_cs499_svg-s-circle12" r="4.667" transform="translate(374.72 187.257)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
                <g id="livingRoomLamp2" transform="matrix(.538369 0 0-.573556-13.4791 341.105)" clipRule="evenodd">
                    <g  className={isLivingRoomLamp2Active? 'lampScale' : ''}
                        onClick={handleLivingRoomLamp2Click}
                        onAnimationEnd={handleAnimationEnd}  
                        transform="translate(429.729507,102.589996) scale(1,1)">
                    <path className={isLivingRoomLamp2Active? 'lampFlash' : ''} d="M429.73,86.59l20.323,32h-40.647l20.324-32Z" transform="translate(-429.729507,-102.589996)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                    </g>
                </g>
                <g id="updated_floorplan_cs499_svg-u-livingroom_lamp_light_body_2" transform="matrix(.698834 0 0 0.764742-79.1744 206.868)" clipRule="evenodd">
                    <path id="updated_floorplan_cs499_svg-s-path31" d="M425.063,110.59v26.667" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
                <g id="updated_floorplan_cs499_svg-u-livingroom_lamp_light_stand_2" transform="matrix(.698834 0 0 0.764742-79.1744 206.868)" clipRule="evenodd">
                    <path id="updated_floorplan_cs499_svg-s-path32" d="M409.406,137.257h31.314" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
    );
}

export default SvgLivingRoomLamp2;