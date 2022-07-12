import React from 'react';
import ReactDOM_client from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM_client.createRoot(
  document.getElementById('root')
);

root.render(
    <App />
);

reportWebVitals();
