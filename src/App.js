import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
};

export default App;
