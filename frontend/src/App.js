//react
import React, { useContext } from 'react';
//react-router-dom
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//react-bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropDown';
import Badge from 'react-bootstrap/Badge';
//react-router-bootstrap
import { LinkContainer } from 'react-router-bootstrap';
//screens
import HomeScreen from './screens/HomeScreen.screen.jsx';
import ProductScreen from './screens/ProductScreen.screen.jsx';
import CartScreen from './screens/CartScreen.screen.jsx';
import SignInScreen from './screens/SignInScreen.screen.jsx';
//context
import { Store } from './Store.jsx';



function App() {

  //NOTE: doesn't required dispatch, as in {state, dispatch}, because only using value, not changing anything, and therefore do not need to dispatch change
  const storeResult = useContext(Store);
  console.log("storeResult: ", storeResult)
  const { state, dispatch: dispatchContext } = useContext(Store);
  // const { cart, userInfo } = state;

  const signoutHandler = () => {
    //update context state
    dispatchContext({type: 'USER_SIGNOUT'});
    //remove from localStorage
    localStorage.removeItem('userInfo')
  }


  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazama</Navbar.Brand>
              </LinkContainer>

              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {state.cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {state.cart.cartItems.reduce( (a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>

                {
                  state.userInfo ? (
                    //show userInfo
                    <NavDropdown
                      title={state.userInfo.name}
                      id="basic-nav-dropdown"
                    >
                        <LinkContainer to="/profile">
                          <NavDropdown.Item>User Profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/orderhistory">
                          <NavDropdown.Item>Order History</NavDropdown.Item>
                        </LinkContainer>

                        <NavDropdown.Divider />

                        <Link
                          to="#signout"
                          className="dropdown-item"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link>
                    </NavDropdown>
                  ) : (
                    //show signin button
                    <Link
                      className="nav-link"
                      to="/signin"
                    >
                      Sign In
                    </Link>
                  )
                }
              </Nav>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SignInScreen />} />
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
