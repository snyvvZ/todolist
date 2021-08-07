import React from 'react';
import styled from 'styled-components';

const StyledTodoItem = styled.li`
`

const TodoItem = ({ id, done, text }) => {
  return(
    <StyledTodoItem>
      <button type="button">완료</button>
      <strong>{text}</strong>
      <button type="button">삭제</button>
    </StyledTodoItem>
  )
}

export default TodoItem;