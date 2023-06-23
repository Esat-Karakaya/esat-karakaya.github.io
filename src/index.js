import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Nav} from "./nav";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <div id="content"></div>
  </React.StrictMode>
);

reportWebVitals();
