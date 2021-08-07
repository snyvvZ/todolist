import React from 'react';
import styled from 'styled-components';

const StyledContents = styled.main`
  grid-area: contents;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Contents = ({children}) => {
  return(
    <>
      <StyledContents>{children}</StyledContents>
    </>
  )
}

export default Contents;