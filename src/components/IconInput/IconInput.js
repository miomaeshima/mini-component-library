import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES ={
  small: {
  fontSize:16,
  height:24,
  bottom:1
} ,
  large: {
  fontSize:18,
  height:32,
  bottom:4
}
}

const IconInput = ({
  label,
  icon,
  width,
  size,
  placeholder,
 
}) => {
  let styles = SIZES[size];
  console.log(width);

  return (
    <Wrapper style={{width: width, height:styles.height}}>
    <IconWrapper><Icon id={icon} strokeWidth={1} size={18}/></IconWrapper>
    <NativeInput label={label} icon={icon} type="search" placeholder={placeholder} style={{fontSize: styles.fontSize, bottom:styles.bottom}}/>
    </Wrapper>
  )
};

const Wrapper = styled.div`
position:relative;
height: 21px;
border-bottom: 2px solid black;
`;

const NativeInput=styled.input`
position:absolute;
left: 28px;
font-color: ${COLORS.gray500};
border: none transparent;
outline: none;
`;

const IconWrapper = styled.div`
 position:absolute; 
 top:0;
 left:0;
 bottom:0;
 margin: auto;
 width: 21px;
 height: 21px; 
`;



export default IconInput;
