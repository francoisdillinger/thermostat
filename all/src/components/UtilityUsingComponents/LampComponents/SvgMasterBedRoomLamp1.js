import * as React from "react";
import { useState } from 'react';

const SvgMasterBedRoomLamp1 = (props) => {
    const [isMasterBedRoomLamp1Active, setisMasterBedRoomLamp1Active] = useState(false);

    const handleMasterBedRoomLamp1Click = () => {
        setisMasterBedRoomLamp1Active(true);
        console.log("MasterBedRoomLamp1 Light On!");
    }

    const handleAnimationEnd = () => {
        setisMasterBedRoomLamp1Active(false);
        console.log("MasterBedRoomLamp1 Light Off!");
    }

    return(
            <g>
            <g id="updated_floorplan_cs499_svg-s-g14" transform="matrix(.698834 0 0 0.764742 464.801 248.58)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-u-master_lamp_bulb_1" clipRule="evenodd">
            <circle id="updated_floorplan_cs499_svg-s-circle6" r="4.667" transform="translate(374.72 187.257)" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <g id="updated_floorplan_cs499_svg-s-g19" transform="matrix(.538369 0 0-.573556 495.315 459.801)" clipRule="evenodd">
            <g id="masterBedRoomLamp1" clipRule="evenodd">
            <g  className={isMasterBedRoomLamp1Active? 'lampScale' : ''}
                onClick={handleMasterBedRoomLamp1Click}
                onAnimationEnd={handleAnimationEnd}     
                transform="translate(429.729507,102.589996) scale(1,1)">
                <path className={isMasterBedRoomLamp1Active? 'lampFlash' : ''} d="M429.73,86.59l20.323,32h-40.647l20.324-32Z" transform="translate(-429.729507,-102.589996)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            </g>
            <g id="updated_floorplan_cs499_svg-s-g20" transform="matrix(.698834 0 0 0.764742 429.619 325.564)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-u-master_lamp_body_1" clipRule="evenodd">
            <path id="updated_floorplan_cs499_svg-s-path23" d="M425.063,110.59v26.667" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            <g id="updated_floorplan_cs499_svg-s-g21" transform="matrix(.698834 0 0 0.764742 429.619 325.564)" clipRule="evenodd">
            <g id="updated_floorplan_cs499_svg-u-master_lamp_stand_1" clipRule="evenodd">
            <path id="updated_floorplan_cs499_svg-s-path24" d="M409.406,137.257h31.314" clipRule="evenodd" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
            </g>
            </g>
    );
}

export default SvgMasterBedRoomLamp1;