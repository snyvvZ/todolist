import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../../TodoContext';

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
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>        
      <StyledAddButton type="button" onClick={onToggle} open={open}>할일 추가하기</StyledAddButton>
      {open && (      
        <StyledForm onSubmit={onSubmit}>
          <StyledInput 
            type="text" 
            placeholder="할일을 입력하세요."
            autoFocus
            placeholder="할 일을 입력 후, Enter 를 누르세요"
            onChange={onChange}
            value={value}
          />
        </StyledForm>
      )}
    </>
  )
}

export default React.memo(TodoCreate);