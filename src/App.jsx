import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import React from "react";
import 'normalize.css';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<DashboardPage />}/>
        <Route path={'/login'} element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
