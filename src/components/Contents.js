import React from 'react';
import styled from 'styled-components';

const StyledContents = styled.main`
  grid-area: contents;
  min-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
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