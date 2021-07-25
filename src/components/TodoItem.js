import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const StyledCheckbox = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const StyledText = styled.span`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const StyledRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
`;

const TodoItem = ({ id, done, text }) => {
  return (
    <StyledItem>
      <StyledCheckbox done={done}>{done && <MdDone />}</StyledCheckbox>
      <StyledText done={done}>{text}</StyledText>
      <StyledRemove>
        <MdDelete />
      </StyledRemove>
    </StyledItem>
  );
};

export default TodoItem;
