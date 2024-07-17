import * as React from "react";

const CostsCollection = (props) => {
  
  return (
    <div id="costsCollection">
        <div id="desiredTemp" className='costs'>
        <p className='title'>Previous</p>
        <p className='title'>Monthly</p>
        <p className='title'>Cost</p>
        <p className='amounts' style={{letterSpacing: '3px'}}>{props.previousMonthlyCost}</p>
        </div>
        <div id="comfortTemp" className='costs'>
        <p className='title'>Current</p>
        <p className='title'>Monthly</p>
        <p className='title'>Cost</p>
        <p className='amounts' style={{letterSpacing: '3px'}}>{props.currentMonthlyCost}</p>
        </div>
        {/* <div id="outsideTemp" className='costs'>
        <p className='title'>Predicted</p>
        <p className='title'>Monthly</p>
        <p className='title'>Cost</p>
        <p className='amounts'>81.00</p>
        </div> */}
        {/* <div id="outsideTemp" className='costs'>
        <p className='title'>Total</p>
        <p className='title'>Monthly</p>
        <p className='title'>Cost</p>
        <p className='amounts'>81.00</p>
      </div> */}
  </div>
  );
};

export default CostsCollection;