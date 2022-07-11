import React from 'react';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen.screen.jsx';
import ProductScreen from './screens/ProductScreen.screen.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Amazona</Link>
        </header>

        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
