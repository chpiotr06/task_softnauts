import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import React, {useEffect, useState} from "react";
import 'normalize.css';
import './App.scss';
import useDatastore from "./datastore/useDatastore";

const PUBLIC_ROUTES = [
  '/login',
  '/forgotten-password',
  '/register',
];

function App() {
  const [isLoginVerified, setIsLoginVerified] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useDatastore();

  useEffect(()=>{
    if (PUBLIC_ROUTES.indexOf(location.pathname) === -1 && !user?.email) {
      setIsLoginVerified(false);
      navigate('/login');
    } else {
      setIsLoginVerified(true);
    }
  }, [location.pathname, navigate, user])

  if (!isLoginVerified) {
    return null;
  }

  return (
    <Routes>
      <Route path={'/'} element={<DashboardPage />}/>
      <Route path={'/login'} element={<LoginPage />}/>
    </Routes>
  )
}

export default App;
