import * as React from "react";
import { useState } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";

const DecreaseTempButton = (props) => {
    const [isDecreaseTempButtonActive, setIsDecreaseTempButtonActive] = useState(false);

    const handleDecreaseTempButtonClick = () => {
        setIsDecreaseTempButtonActive(true);
        props.handleDecreaseTempClick();
        console.log("DecreaseTempButton On!");
    }

    const handleTransitionEnd = () => {
        setIsDecreaseTempButtonActive(false);
        console.log("DecreaseTempButton Off!");
    }

    return(
        <div    id="outsideTemp" 
                className={`tempButtons temps ${isDecreaseTempButtonActive ? 'clicked' : 'unclicked'}`}
                onClick={handleDecreaseTempButtonClick}
                onTransitionEnd={handleTransitionEnd}>
            <TiArrowSortedDown style={{width: '5em', height: '5em'}}/>
        </div>
    )
}

export default DecreaseTempButton;