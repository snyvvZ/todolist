import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../../TodoContext';

const StyledTodoHead = styled.div`
  border: 1px solid blue;
`;

function TodoHead() {
  const todos = useTodoState();
  console.log(todos);

  return (
    <StyledTodoHead>
      <h1>2019년 7월 10일</h1>
      <div className="todo__day">수요일</div>
      <div className="todo__task">할 일 2개 남음</div>
    </StyledTodoHead>
  );
}

export default TodoHead;