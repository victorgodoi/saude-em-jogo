import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Container from './Components/Container';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Diagnosis from './Pages/Diagnosis';
import FirstTime from './Pages/FirstTime';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Routes>
          <Route element={<Login />} path="/" exact />
          <Route element={<Home />} path="/home" exact />
          <Route element={<Diagnosis />} path="/diagnosis" exact />
          <Route element={<FirstTime />} path="/firstTime" exact />
        </Routes>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
