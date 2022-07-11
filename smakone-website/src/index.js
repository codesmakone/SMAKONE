import React from 'react';
import ReactDOM from 'react-dom/client';
// Import BrowserRouter so that every children can use react router
import {BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-EZHENXJ8ML');
};


root.render(
  <>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
 {/* Global site tag (gtag.js) - Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-EZHENXJ8ML"></script>
  <script>{injectGA()}</script>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
