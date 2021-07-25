import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const StyledList = styled.ul`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <StyledList>
      <TodoItem text="HTML" done={false} />
      <TodoItem text="CSS" done={true} />
      <TodoItem text="JavaScript" done={false} />
      <TodoItem text="TypeScript" done={false} />
    </StyledList>
  );
};

export default TodoList;
