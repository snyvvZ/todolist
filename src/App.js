import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>하이하이</TodoTemplate>
    </>
  );
};

export default App;
