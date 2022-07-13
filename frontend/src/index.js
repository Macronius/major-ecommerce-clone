import React from 'react';
import ReactDOM_client from 'react-dom/client';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//react-helmet-async
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import App from './App';
import { StoreProvider } from './Store';
//investigate purpose
import reportWebVitals from './reportWebVitals';

const root = ReactDOM_client.createRoot(
  document.getElementById('root')
);

root.render(
  <StoreProvider>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StoreProvider>
);

reportWebVitals();
