import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  grid-area: header;
`;

const Header = () => {
  return(
    <>
      <StyledHeader>
        <h1>snyvv</h1>
      </StyledHeader>
    </>
  )
}

export default Header;