import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Firebase } from "./contexts/firebase";
import InitFirebase from './InitFirebase';
const firebase = InitFirebase('index.js')

ReactDOM.render(
  // <React.StrictMode>
    <Firebase firebase={firebase}>
      <App />
    </Firebase>,
  // </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
