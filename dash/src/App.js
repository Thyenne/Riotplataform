import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Header } from './components';
import GlobalStyle from './utils/globalStyle';
import { theme } from './utils/theme';

import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';


import { AuthContextProvider, DashboardContextProvider } from './contexts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthContextProvider>
        <DashboardContextProvider>
          <Router>
            <div className="App">
              <Header menuList={[
                {label: 'Home'}
              ]} />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* <Route path="/cadastro-positivo" element={<Cadastro />}>
                  <Route path="comunicacao" element={<Comunicacao />} />
                </Route> */}
              </Routes>
            </div>
          </Router>
        </DashboardContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
