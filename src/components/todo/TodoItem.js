import React from 'react';
import styled from 'styled-components';
import { useTodoDispatch } from '../../TodoContext';

const StyledTodoItem = styled.li`
`

const TodoItem = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return(
    <StyledTodoItem>
      <button done={done} onClick={onToggle} type="button">완료</button>
      <strong done={done}>{text}</strong>
      <button onClick={onRemove} type="button">삭제</button>
    </StyledTodoItem>
  )
}

export default React.memo(TodoItem);