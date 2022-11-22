import { render } from '@testing-library/react';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import GlobalStyle from './globalStyle';



const renderWithTheme = (
    ui,
    renderOptions,
) => {
  const { themeObj = theme, ...options } = renderOptions;
  const ThemeWrapper = ({ children }) => {
    return (
      <ThemeProvider theme={themeObj}>
        <GlobalStyle />
        <Router>{children}</Router>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: ThemeWrapper, ...options });
};
export { renderWithTheme };
