import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Firebase } from "./contexts/firebase";
import InitFirebase from './InitFirebase';
import { Material } from './contexts/material';
const firebase = InitFirebase('index.js')

ReactDOM.render(
  // <React.StrictMode>
  <Material>
    <Firebase firebase={firebase}>
      <App />
    </Firebase>
  </Material>,
  // </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
