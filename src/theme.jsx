import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
    bg: '#fff',
    bg2: 'rgba(148, 147, 147, 0.296)',
    fontColor: '#000',
    transit: '.5s'
}

export const darkTheme = {
  bg: "#000",
  bg2: "rgba(148, 147, 147, 0.296)",
  fontColor: "#fff",
  transit: ".5s",
};

export const GlobalStyles = createGlobalStyle`
body {
    background: ${props => props.theme.bg};
    transition: ${props => props.theme.transit};
}
`;