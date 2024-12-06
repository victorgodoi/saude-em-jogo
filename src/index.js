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
import SecondTime from './Pages/SecondTime';
import ThirdTime from './Pages/ThirdTime';
import FourthTime from './Pages/FourthTime';
import FifthTime from './Pages/FifthTime';
import Game from './Pages/Game';

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
          <Route element={<SecondTime />} path="/secondTime" exact />
          <Route element={<ThirdTime />} path="/thirdTime" exact />
          <Route element={<FourthTime />} path="/fourthTime" exact />
          <Route element={<FifthTime />} path="/fifthTime" exact />
          <Route element={<Game />} path="/game" exact />

        </Routes>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
