import * as React from "react";
import { useState } from 'react';

const TempsCollection = (props) => {
  
  return (
    <div id="tempsCollection">
    <div id="desiredTemp" className='temps'>
    <p className='title'>Outside</p>
      <p className='title'>Temperature</p>
      <p className='temperatures'>81 &deg;F</p>
      </div>
    <div id="comfortTemp" className='temps'>
    <p className='title'>Desired</p>
      <p className='title'>Temperature</p>
      <p className='temperatures'>81 &deg;F</p>
      </div>
      <div id="outsideTemp" className='temps'>
      <p className='title'>Comfort</p>
      <p className='title'>Temperature</p>
      <p className='temperatures'>81 &deg;F</p>
      </div>
  </div>
  );
};

export default TempsCollection;