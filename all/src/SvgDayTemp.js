import * as React from "react";

const SvgDayTemp = (props) => {
    return(
        <svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{fillRule:"evenodd", clipRule:"evenodd", strokeLinecap:"round", strokeLinejoin:"round"}}>
        <g transform="matrix(2.57801,0,0,2.57801,-68.0147,-453.02)">
            <g transform="matrix(54.1785,0,0,54.1785,182.463,369.702)">
            </g>
            <text x="69.447px" y="369.702px" style={{fontFamily:"'Sanchez-Regular', 'Sanchez '", fontSize:"54.178px"}}>{props.dayTemp}<tspan x="136.141px " y="369.702px ">°</tspan>F</text>
        </g>
        <g transform="matrix(7.24492,0,0,7.24492,24.1626,-52.5182)">
            <circle cx="32" cy="32" r="10.5" style={{fill:"url(#_Linear1)", stroke:"rgb(248,175,24)", strokeWidth:"0.5px"}}/>
        </g>
        <g transform="matrix(7.24492,0,0,7.24492,24.1626,-52.5182)">
            <path d="M32,15.71L32,9.5M32,54.5L32,48.29M43.52,20.48L47.91,16.09M16.09,47.91L20.48,43.52M20.48,20.52L16.09,16.13M47.91,47.91L43.52,43.52M15.71,32L9.5,32M54.5,32L48.29,32" style={{fill:"none", fillRule:"nonzero", stroke:"rgb(251,191,36)", strokeWidth:"3px", strokeLinecap:"round"}}>
            <animateTransform attributeName="transform" dur="45s" values="0 32 32; 360 32 32" repeatCount="indefinite" type="rotate"/>
            </path>
        </g>
        <defs>
            <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(10.5,18.18,-18.18,10.5,26.75,22.91)">
            <stop offset="0" style={{stopColor:"rgb(251,191,36)", stopOpacity:1}}/>
            <stop offset="0.45" style={{stopColor:"rgb(251,191,36)", stopOpacity:1}}/>
            <stop offset="1" style={{stopColor:"rgb(245,158,11)", stopOpacity:1}}/>
            </linearGradient>
        </defs>
        </svg>
    );
}

export default SvgDayTemp;