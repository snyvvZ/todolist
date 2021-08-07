import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import variables from "./styles/variables";
import mixins from "./styles/mixins";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
import Header from './components/Header';
import Contents from './components/Contents';
import Footer from './components/Footer';

const StyledContainer = styled.section`
  display: grid;
  grid-template-areas: 
    'header header header'
    '. contents .'
    'footer footer footer'
  ;
  min-width: 1280px;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.fontColor};
  transition: background-color ease-in .25s;
`;

const StyledTheme = styled.div`
  > input[type=checkbox] {
    ${mixins.blind};
  }

  > label {
    display: flex;
    width: 60px;
    height: 36px;
    position: relative;
    color: ${({theme})=> theme.fontColor};
    background-color: ${({theme})=> theme.accentColor};
    border-radius: 36px;
    cursor: pointer;

    &::before {
      display: block;
      width: 30px;
      height: 30px;
      position: absolute;
      left: 3px;
      top: 3px;
      border-radius: 26px;
      background-color: ${variables.white};
      box-shadow: 0 2px 6px rgba(0,0,0,.3);
      content: '';
      transition: transform cubic-bezier(.98,.11,.62,1.39) .15s;
    }

    > span {
      ${mixins.blind};
    }
  }
`

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const changeTheme = () => {
    themeMode === "light" 
      ? setThemeMode("dark") 
      : setThemeMode("light")
  }

  return (
    <ThemeProvider
        theme={
          themeMode === "light"
            ? lightTheme
            : darkTheme
        }
      >
      <GlobalStyle />
        <StyledContainer>
          <Header />

          <Contents>
            하이 Hi~
            <StyledTheme>
              <input type="checkbox" id="themeLabel" onChange={changeTheme} />
              <label 
                htmlFor="themeLabel"
                theme={themeMode}
                aria-label={`${themeMode === 'light' ? '다크' : '기본'}모드로 변경하기`}
              >
                <span>모드 변경</span>
              </label>
            </StyledTheme>
          </Contents>
          
          <Footer />
        </StyledContainer>
      </ThemeProvider>
  );
};

export default App;
