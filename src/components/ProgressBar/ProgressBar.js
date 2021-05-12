/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
//VisuallyHidden is not necessary as there is aria-valuenow?
import VisuallyHidden from '../VisuallyHidden';

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
  
return <Wrapper style={{"--padding": styles.padding+"px", "--border-radius": styles.borderRadius + "px"}} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
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