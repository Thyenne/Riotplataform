import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import GlobalStyle from './utils/globalStyle';
import { theme } from './utils/theme';

import { Home } from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Header menuList={[
            {label: 'Home'}
          ]} />
        </div>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/cadastro-positivo" element={<Cadastro />}>
            <Route path="comunicacao" element={<Comunicacao />} />
          </Route> */}

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
