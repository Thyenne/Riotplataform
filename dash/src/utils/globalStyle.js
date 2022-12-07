import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Siegel";
    margin: 0 !important;
    padding: 0 !important;
    {theme => theme && color: theme.palette.primary.main}

    [disabled] {
      opacity: 0.55;
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyle;