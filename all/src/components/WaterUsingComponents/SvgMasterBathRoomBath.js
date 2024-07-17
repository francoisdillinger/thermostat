import * as React from "react";
import { useState } from 'react';

const SvgMasterBathRoomBath = (props) => {
    const [isMasterBathRoomBathActive, setisMasterBathRoomBathActive] = useState(false);

    const handleMasterBathRoomBathClick = () => {
        setisMasterBathRoomBathActive(true);
        console.log("MasterBathRoomBath On!");
    }

    const handleAnimationEnd = () => {
        setisMasterBathRoomBathActive(false);
        console.log("MasterBathRoomBath Off!");
    }

    return(
            <g id="masterBathRoomBath" transform="matrix(.698834 0 0 0.764742-27.1619-192.399)" clipRule="evenodd">
                <g  onClick={handleMasterBathRoomBathClick}
                    onAnimationEnd={handleAnimationEnd}  
                    transform="translate(918.187988,522.922989) scale(1,1)">
                    <rect className={isMasterBathRoomBathActive? 'bathRoomFlash' : ''} width="46" height="122" rx="0" ry="0" transform="translate(-22.999988,-60.999989)" clipRule="evenodd" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.37" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" />
                </g>
            </g>
    )
}

export default SvgMasterBathRoomBath;