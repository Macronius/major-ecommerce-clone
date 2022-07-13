//react
import React, { useContext } from 'react';
//react-router-dom
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
//react-router-bootstrap
import { LinkContainer } from 'react-router-bootstrap';
//components
import HomeScreen from './screens/HomeScreen.screen.jsx';
import ProductScreen from './screens/ProductScreen.screen.jsx';
import { Store } from './Store.jsx';

function App() {

  //NOTE: don't required dispatch because only using value, not changing anything
  const {state} = useContext(Store);
  const {cart} = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  amazama
                </Navbar.Brand>
              </LinkContainer>

              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {
                    cart.cartItems.length > 0  &&  (
                      <Badge pill bg="danger">
                        {
                          cart.cartItems.length
                        }
                      </Badge>
                    )
                  }
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>

        <footer className="text-center">
        {/* <footer> */}
          <div>All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
