import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import { AuthContextProvider, DashboardContextProvider } from './contexts';
import { theme } from './utils/theme';
import { AppRoutes } from './AppRoutes';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthContextProvider>
        <DashboardContextProvider>
          <AppRoutes />
        </DashboardContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
