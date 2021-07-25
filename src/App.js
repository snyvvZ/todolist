import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
      </TodoTemplate>
    </>
  );
};

export default App;
