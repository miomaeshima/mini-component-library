import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";


const Select = ({ label, value, onChange, children }) => {
  
  const displayedValue = getDisplayedValue(value, children)



  return (
      <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <DesignedSelect>{displayedValue}
      <IconWrapper style={{"--size": 24 + "px"}}>
      <Icon id="chevron-down" strokeWidth={2} size={24}  />
      </IconWrapper>
      </DesignedSelect>
      </Wrapper>  
  );
};

const Wrapper = styled.div`
position: relative;
${'' /* limit the width here to limit the width of NativeSelect */}
width: max-content;
`;

const NativeSelect = styled.select`  
position: absolute;
top:0;
left:0;
height: 100%;
opacity: 0;
`;

const DesignedSelect = styled.div`
background-color: ${COLORS.transparentGray15};
color: ${COLORS.gray700};
font-size: font-family: Roboto;
font-size: ${16/16}rem;
font-style: normal;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
padding: 12px 16px;
padding-right: 52px;
border-radius: 8px;

${'' /* & is a place holder for current element (i.e. DesignedSelect in this case)
a + b means element b that follows immediately after a */}
${NativeSelect}:focus + & {
  outline: 1px dotted #212121;
  outline: 5px auto -webkit-focus-ring-color;
}
${NativeSelect}:hover + &{
  color: ${COLORS.black};
}
`;

const IconWrapper=styled.div`
${'' /* take icon out of flow instead of inline-block for precise placement */}
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  ${'' /* svg size(width and height) is the canvas where icon is drawn so bigger than svg. */} */}
  width: var(--size);
  height: var(--size);
  pointer-events: none;
 
`;

export default Select;


