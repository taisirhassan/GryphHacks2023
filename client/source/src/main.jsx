import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/js/bootstrap.min.js';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <App />
  </React.StrictMode>,
)
