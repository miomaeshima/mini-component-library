/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
//VisuallyHidden is not necessary as there is aria-valuenow?
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large:{
    "--height": 24+"px",
    "--borderRadius": 8+"px",
    "--barTop": 4 + "px",
    "--barLeft": 4 +"px",
    "--barHeight": 16 +"px",
    "--barMaxWidth": 362 + "px"
  },
  medium:{
    "--height": 12+"px",
    "--borderRadius": 4+"px",
    "--barTop":0,
    "--barLeft":0,
    "--barHeight":12+"px",
    "--barMaxWidth": 370 + "px"
  },
  small:{
    "--height": 8+"px",
    "--borderRadius": 4+"px",
    "--barTop":0,
    "--barLeft":0,
    "--barHeight":8+"px",
    "--barMaxWidth":370 + "px"
  }
}
const ProgressBar = ({ value, size }) => {
   const styles = SIZES[size];
   if (value <0 ){
    throw new Error("Value cannot be negative.");
  } else if (value >100){
    throw new Error("Value cannot be more than 100.")
  }
  
  return <Component style={styles} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
  <Bar style={styles} value={value}></Bar>
  </Component>
};

const Component = styled.div`
position: relative;
height: var(--height);
border-radius: var(--borderRadius);
width: 370px;
background-color: ${COLORS.transparentGray15};
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
//cut off the part of the bar overflown from the component
overflow:hidden;
`;

const Bar = styled.div`
position: absolute;
top: var(--barTop);
left: var(--barLeft);
height: var(--barHeight);
${'' /* So happy I could figure out the line below! */}
width: calc(var(--barMaxWidth)*
${(props=>{return (props.value/100)})}); 
background-color: ${COLORS.primary};
border-radius:4px 0px 0px 4px ;
 ${'' /* ${props=>(props.value===100) ? "4px" : "4px 0px 0px 4px"}; */}
`;

export default ProgressBar;
