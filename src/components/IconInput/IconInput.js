import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width,
  size,
  placeholder,
}) =>{
  const SIZES = {
    small:{
      iconSize:16,
      height:"24px",
      fontSize: "14px",
      paddingLeft: "24px",
      iconWrapperSize: "16px"
    },
    large:{
      iconSize:24,
      height:"36px",
      fontSize: "18px",
      paddingLeft: "36px",
      iconWrapperSize: "24px"
    }
  }
  let styles = {...SIZES[size], ...{inputWidth: width}};
  console.log(styles.inputWidth)
  
  return (
    <Wrapper style={{height:styles.height}}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Input type="search" label={label} placeholder={placeholder} style={{paddingLeft:styles.paddingLeft, fontSize:styles.fontSize, width:styles.inputWidth}}/>
    <IconWrapper style={{width:styles.iconWrapperSize, height:styles.iconWrapperSize}}><Icon id={icon} size={styles.iconSize}/></IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position:relative;
`;

const Input = styled.input`
position: absolute;
width: 100%;
height: 100%;
background: beige;
border: none;
border-bottom: 1px solid ${COLORS.black};
color: ${COLORS.gray700};


&::placeholder{
  color: ${COLORS.gray500};
  font-weight: 400;
}

&:focus{
outline-offset: 2px;
}

&:hover{
  color: ${COLORS.black};
  font-weight: 700;
}
`;

const IconWrapper = styled.div`
position: absolute;
top: 0;
bottom: 0;
margin: auto;
`;

export default IconInput;

