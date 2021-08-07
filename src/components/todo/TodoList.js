import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const StyledTodoList = styled.ul`
  padding: 20px;
`;

const List = () => {
  return(
    <StyledTodoList>
      <TodoItem text="HTML" done={true} />
      <TodoItem text="JavaScript" done={false} />
      <TodoItem text="React JS" done={false} />
    </StyledTodoList>
  )
}

export default List;