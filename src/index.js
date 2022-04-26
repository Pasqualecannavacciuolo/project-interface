import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GenerateMatrix from './components/GenerateMatrix';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="wrapper">
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Scegli una funzione</h3>
      </div>

      <ul className="list-unstyled components">

        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Matrici</a>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href='/generate-matrix'>Generate a matrix</a>
            </li>
            <li>
              <a href="#">Min</a>
            </li>
            <li>
              <a href="#">Diagonale Principale</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Array</a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Matrici</a>
            </li>
            <li>
              <a href="#">Array2</a>
            </li>
            <li>
              <a href="#">Stringhe</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Stringhe</a>
        </li>
      </ul>

    </nav>

    <div id="content">

      <nav >
        <div className="container-fluid">

          <button type="button" id="sidebarCollapse" className="btn menu-button">
            <span className="material-symbols-outlined menu-desktop">menu</span>
          </button>
          <button id="sidebarCollapseMobile" className="btn btn-dark d-inline-block d-lg-none ml-auto menu-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="material-symbols-outlined">menu</span>
          </button>

        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="generate-matrix" element={<GenerateMatrix />} />
        </Routes>
      </BrowserRouter>

    </div>
  </div>
  //<React.StrictMode>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
