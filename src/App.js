import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
      </TodoTemplate>
    </>
  );
};

export default App;
