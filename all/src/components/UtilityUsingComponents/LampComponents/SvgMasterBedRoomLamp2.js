import * as React from "react";
import { useState } from 'react';

const SvgMasterBedRoomLamp2 = (props) => {
    const [isMasterBedRoomLamp2Active, setisMasterBedRoomLamp2Active] = useState(false);

    const handleMasterBedRoomLamp2Click = () => {
        setisMasterBedRoomLamp2Active(true);
        console.log("Bathroom Ceiling Light On!");
    }

    const handleAnimationEnd = () => {
        setisMasterBedRoomLamp2Active(false);
        console.log("Bathroom Ceiling Light Off!");
    }

    return(
        <g>
            <g   id="updated_floorplan_cs499_svg-s-g10" transform="matrix(.698834 0 0 0.764742 335.412 248.58)" clipRule="evenodd">
                <g id="updated_floorplan_cs499_svg-u-master_lamp_bulb_2" clipRule="evenodd">
                <circle id="updated_floorplan_cs499_svg-s-circle5" r="4.667" transform="translate(374.72 187.257)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-s-g11" transform="matrix(.538369 0 0-.573556 365.926 459.801)" clipRule="evenodd">
                <g id="masterBedRoomLamp2" clipRule="evenodd">
                    <g  className={isMasterBedRoomLamp2Active? 'lampScale' : ''}
                        onClick={handleMasterBedRoomLamp2Click}
                        onAnimationEnd={handleAnimationEnd} 
                        transform="translate(429.729507,102.589996)">
                        <path className={isMasterBedRoomLamp2Active? 'lampFlash' : ''} d="M429.73,86.59l20.323,32h-40.647l20.324-32Z" transform="translate(-429.729507,-102.589996)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                    </g>
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-s-g12" transform="matrix(.698834 0 0 0.764742 300.231 325.564)" clipRule="evenodd">
                <g id="updated_floorplan_cs499_svg-u-master_lamp_body_2" clipRule="evenodd">
                    <path id="updated_floorplan_cs499_svg-s-path8" d="M425.063,110.59v26.667" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-s-g13" transform="matrix(.698834 0 0 0.764742 300.231 325.564)" clipRule="evenodd">
                <g id="updated_floorplan_cs499_svg-u-master_lamp_stand_2" clipRule="evenodd">
                    <path id="updated_floorplan_cs499_svg-s-path9" d="M409.406,137.257h31.314" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
        </g>
    );
}

export default SvgMasterBedRoomLamp2;