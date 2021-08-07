import React, { useState } from 'react';
import styled from 'styled-components';

const StyledAddButton = styled.button`
  padding: 8px 10px;
`;

const StyledForm = styled.form`
  padding: 20px;
`;

const StyledInput = styled.input`
  border: 1px solid red;
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);

  const openToggle = () => setOpen(!open);

  return (
    <>        
      <StyledAddButton type="button" onClick={openToggle} open={open}>할일 추가하기</StyledAddButton>
      {open && (      
        <StyledForm>
          <StyledInput type="text" placeholder="할일을 입력하세요." />
        </StyledForm>
      )}
    </>
  )
}

export default TodoCreate;