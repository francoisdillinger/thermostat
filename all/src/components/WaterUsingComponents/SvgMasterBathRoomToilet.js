import * as React from "react";
import { useState } from 'react';

const SvgMasterBathRoomToilet = (props) => {
    const [isMasterBathRoomToiletActive, setisMasterBathRoomToiletActive] = useState(false);

    const handleMasterBathRoomToiletClick = () => {
        setisMasterBathRoomToiletActive(true);
        console.log("MasterBathRoomToilet On!");
    }

    const handleAnimationEnd = () => {
        setisMasterBathRoomToiletActive(false);
        console.log("MasterBathRoomToilet Off!");
    }

    return(
        <g>
            <g id="masterBathRoomToilet" transform="matrix(.85163 0 0 0.931948 618.358-291.622)" clipRule="evenodd">
                <g  onClick={handleMasterBathRoomToiletClick}
                    onAnimationEnd={handleAnimationEnd}
                    transform="translate(45.102001,505.256973) scale(1,1)">
                <ellipse className={isMasterBathRoomToiletActive? 'bathRoomFlash' : ''} rx="11" ry="14" transform="translate(-0.000001,0.000027)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.12" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
            <g id="updated_floorplan_cs499_svg-u-bathroom2_toilet_tank" transform="matrix(.85163 0 0 0.931948 544.266-302.805)" clipRule="evenodd">
                <rect id="updated_floorplan_cs499_svg-s-rect30" width="23.333" height="8" rx="0" ry="0" transform="translate(120.102 499.257)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.12" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
            </g>
        </g>
    )
}

export default SvgMasterBathRoomToilet;