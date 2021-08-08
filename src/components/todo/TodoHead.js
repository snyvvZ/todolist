import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../../TodoContext';

const StyledTodoHead = styled.div`
  border: 1px solid blue;
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <StyledTodoHead>
      <h1>{dateString}</h1>
      <div className="todo__day">{dayName}</div>
      <div className="todo__task">할 일 {undoneTasks.length}개 남음</div>
    </StyledTodoHead>
  );
}

export default TodoHead;