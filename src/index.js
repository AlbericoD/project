import React from 'react';
import ReactDOM from 'react-dom';
import './libs/fontawesome/fontawesome-all.min';
import './styles/base.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
