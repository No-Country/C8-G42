import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Admin from './pages/Admin';
// import PrivateLayout from './layouts/PrivateLayout';
import PrivateRoute from './components/PrivateRoute';
import { Auth0Provider } from "@auth0/auth0-react";
import User from './pages/User';


function App() {
  return (
    <Auth0Provider
      domain="huellitas-auth.us.auth0.com"
      clientId="8JQNSVZD8ZdTMi9dNN9C5D66xES2gDrH"
      audience="api-autenticacion-huellitas"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detail" element={<Detail />} />
            <Route
              path='/admin'
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }>
            </Route>
            <Route
              path='/users'
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
