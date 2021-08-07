import React, { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
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
    border-radius: 36px;
    background: blue;
    cursor: pointer;

    &::before {
      display: block;
      width: 26px;
      height: 26px;
      position: absolute;
      left: 5px;
      top: 5px;
      border-radius: 26px;
      background-color: ${variables.white};
      box-shadow: 0 0 5px rgba(0,0,.5);
      content: '';
    }

    ${props => props.mode === 'dark' && // FIXME 적용 안된다 ing
    css`
      background-color: red;

      &::before {
        transform: translateX(100%);
      }
    `}
  }
`

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const changeTheme = () => {
    themeMode === "light" 
      ? setThemeMode("dark") 
      : setThemeMode("light")
  }

  console.log(themeMode);

  return (
    <>
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
                mode={themeMode}
                huge="true"
                aria-label={`Change ${themeMode === 'light' ? 'Dark' : 'Light'} Mode`}
              >
                
              </label>
            </StyledTheme>
          </Contents>
          
          <Footer />
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
