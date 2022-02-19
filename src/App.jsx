import { useState } from 'react'
import './App.css'
import Switch from "@mui/material/Switch";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './theme';
import {HiMoon} from 'react-icons/hi'
import {BsSun} from 'react-icons/bs'

function App() {
  const [theme, setTheme] = useState("light")

  const toggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <div className="App">
      <Text>Yo what's Up</Text>
        <Switch onClick={toggle} />
        <Toggle onClick={toggle}>
          {theme === 'light' ? <BsSun/> : <HiMoon/>}
        </Toggle>
    </div>
    </ThemeProvider>
    
  );
}

const Text = styled.h2`
  color: ${(props) => props.theme.fontColor};
  transition: ${(props) => props.theme.transit};
`;
const Toggle = styled.div`
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.bg2};
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  border-radius: 50px;
  transition: ${(props) => props.theme.transit};
`;



export default App
