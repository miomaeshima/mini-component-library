/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large:{
  },
  medium:{
  },
  small:{
  }
}  
const ProgressBar = ({ value, size }) => {
  if (size==="large"){
    let Component = LargeProgressBar;
    let Bar = LargeBar;
  }

  return <Component role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
  <Bar value={value}></Bar>
  </Component>
};

const Component = styled.div`
position: relative;
height: 24px;
width: 370px;
border-radius: 8px;
background-color: ${COLORS.transparentGray15};
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const LargeProgressBar = styled(Component)`
`;

const Bar = styled.div`
position: absolute;
top:4px;
left:4px;
height: 16px;
width: ${(props=>{return (props.value/100*362 + "px")})};
background-color: ${COLORS.primary};
border-radius: ${props=>(props.value===100) ? "4px" : "4px 0px 0px 4px"};
`;

const LargeBar = styled(Bar)`
`;

export default ProgressBar;
