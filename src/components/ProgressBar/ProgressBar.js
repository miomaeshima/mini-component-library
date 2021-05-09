/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
//VisuallyHidden is not necessary as there is aria-valuenow?
import VisuallyHidden from '../VisuallyHidden';

// const SIZES = {
//   large:{
//     "--height": 24+"px",
//     "--borderRadius": 8+"px",
//     "--barTop": 4 + "px",
//     "--barLeft": 4 +"px",
//     "--barHeight": 16 +"px",
//     "--barMaxWidth": 362 + "px"
//   },
//   medium:{
//     "--height": 12+"px",
//     "--borderRadius": 4+"px",
//     "--barTop":0,
//     "--barLeft":0,
//     "--barHeight":12+"px",
    
//     "--barMaxWidth": 370 + "px"
//   },
//   small:{
//     "--height": 8+"px",
//     "--borderRadius": 4+"px",
//     "--barTop":0,
//     "--barLeft":0,
//     "--barHeight":8+"px",
//     // Oops I cannot use value here so I need to use it in the fucntion ProgresBar
//     // "--barwidth": value +"%",
//     "--barMaxWidth":370 + "px"
//   }
// }
// const ProgressBar = ({ value, size }) => {
//    const styles = SIZES[size];
//    if (value <0 ){
//     throw new Error("Value cannot be negative.");
//   } else if (value >100){
//     throw new Error("Value cannot be more than 100.")
//   }
  
//   let width = {"--barWidth": value +"%"};

//   return <Component style={styles} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
//   <Bar style={{...styles, ...width}} value={value}><VisuallyHidden>{value}%</VisuallyHidden></Bar>
//   </Component>
// };

// const Component = styled.div`
// position: relative;
// height: var(--height);
// border-radius: var(--borderRadius);
// width: 370px;
// background-color: ${COLORS.transparentGray15};
// box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
// //cut off the part of the bar overflown from the component
// overflow:hidden;
// `;

// const Bar = styled.div`
// position: absolute;
// top: var(--barTop);
// left: var(--barLeft);
// height: var(--barHeight);
// witdth: var(--width);
// background-color: ${COLORS.primary};
// border-radius:4px 0px 0px 4px ;
// ${'' /* Initially I made a mistake that it gets rounded only when it is 100%. I learned how to use ternary expression though. */}
//  ${'' /* ${props=>(props.value===100) ? "4px" : "4px 0px 0px 4px"}; */}
// `;

// export default ProgressBar;

let SIZES = {
  small:{
    height: 8,
    padding: 0,
    borderRadius: 4
  },
  medium:{
    height: 12,
    padding: 0,
    borderRadius: 4
  },
  large:{
    height: 16,
    padding: 4,
    borderRadius: 8
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];   
  
return <Wrapper style={{"--padding": styles.padding + "px", "--border-radius": styles.borderRadius + "px"}} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
   <VisuallyHidden>{value}%</VisuallyHidden>
   <BarWrapper><Bar style={{"--width": value + "%", "--height": styles.height + "px"}} /></BarWrapper>
   </Wrapper>
 };

 const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 6px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
  `;

 const BarWrapper = styled.div`
 border-radius: 4px;
 /* overflow:hidden to make the edge of the bar rounded towards 100% */
 overflow: hidden;
 `;

 const Bar = styled.div`
   background-color: ${COLORS.primary};
   height: 8px;
   width: var(--width);
   border-radius: 4px 0px 0px 4px;
 `;


export default ProgressBar;