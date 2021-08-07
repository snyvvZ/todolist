import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
`;

const Footer = () => {
  return(
    <>
      <StyledFooter>푸터 영역</StyledFooter>
    </>
  )
}

export default Footer;