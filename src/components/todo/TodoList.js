import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../../TodoContext';

const StyledTodoList = styled.ul`
  padding: 20px;
`;

const List = () => {
  const todos = useTodoState();

  return(
    <StyledTodoList>
      {todos.map(todo =>(
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </StyledTodoList>
  )
}

export default List;