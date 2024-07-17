import * as React from "react";
import { useState } from 'react';
import { TiArrowSortedUp } from "react-icons/ti";

const IncreaseTempButton = (props) => {
    const [isIncreaseTempButtonActive, setIsIncreaseTempButtonActive] = useState(false);

    const handleIncreaseTempButtonClick = () => {
        setIsIncreaseTempButtonActive(true);
        props.handleIncreaseTempClick();
        console.log("IncreaseTempButton On!");
    }

    const handleTransitionEnd = () => {
        setIsIncreaseTempButtonActive(false);
        console.log("IncreaseTempButton Off!");
    }

    return(
            <div    id="outsideTemp" 
                    className={`tempButtons temps ${isIncreaseTempButtonActive ? 'clicked' : 'unclicked'}`}
                    onClick={handleIncreaseTempButtonClick}
                    onTransitionEnd={handleTransitionEnd} >
                <TiArrowSortedUp style={{width: '5em', height: '5em'}} />
            </div>
    )
}

export default IncreaseTempButton;