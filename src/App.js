import React, { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import variables from "./styles/variables";
import mixins from "./styles/mixins";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
import Header from './components/Header';
import Contents from './components/Contents';
import Footer from './components/Footer';
import { MdWbSunny, MdStar } from 'react-icons/md';

const StyledContainer = styled.section`
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
    flex-direction: row;
    width: 54px;
    height: 28px;
    position: relative;
    color: ${variables.white};
    background-color: ${({theme})=> theme.accentColor};
    border-radius: 28px;
    cursor: pointer;

    > svg {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 2px;
      top: 2px;
      content: '';
      transition: transform cubic-bezier(.98,.11,.62,1.39) .15s;

      ${props => props.theme === 'dark' && css` // FIXME 이동 안된다.
        transform: translateX(100 - 6px);
      `}
    }

    > span {
      ${mixins.blind};
    }
  }
`

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
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
            <StyledTheme> {/* FIXME Component로 빼고 싶다 */}
              <input type="checkbox" id="themeLabel" onChange={toggleTheme} />
              <label
                htmlFor="themeLabel"
                theme={themeMode}
                aria-label={`${themeMode === 'light' ? '다크' : '기본'}모드로 변경하기`}
              >
                {themeMode === 'light' ? <MdWbSunny /> : <MdStar />}
              </label>
            </StyledTheme>
          </Contents>
          
          <Footer />
        </StyledContainer>
      </ThemeProvider>
  );
};

export default App;
