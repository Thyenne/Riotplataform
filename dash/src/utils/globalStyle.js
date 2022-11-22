import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto";
    margin: 0 !important;
    padding: 0 !important;
    background: #010A13;

    [disabled] {
      opacity: 0.55;
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyle;