import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components';

import { useContext, useEffect } from 'react';
import { AuthContext } from './contexts';

import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';


const AppRoutes = () => {
  const { loginData, checkAuthentication } = useContext(AuthContext)

  useEffect(() => {
    Object.keys(loginData) < 1 && checkAuthentication(window.localStorage.getItem('loginData'))
  }, [loginData])
  return (
    <Router>
          <div className="App">
            <Header menuList={[
              {label: 'Home'}
            ]} />
          </div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
           
            
            
            {/* <Route path="/cadastro-positivo" element={<Cadastro />}>
              <Route path="comunicacao" element={<Comunicacao />} />
            </Route> */}

          </Routes>
        </Router>
  )
}

export { AppRoutes };

