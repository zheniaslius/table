import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }

  button {
    outline: none;
  }
`;

export const theme = {
  orange: '#ef6c00',
  blue: '#283593',
}

export default GlobalStyle;