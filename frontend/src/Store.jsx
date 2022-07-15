//NOTE: React Context needs a store
import { createContext, useReducer } from 'react';

//value contains current state in the context, and the dispatch to update the state

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'),)
      : []
  },
};

const reducer = (state, action) => {
  switch (action.type) {

    case 'CART_ADD_ITEM':
      //  obtain one of each possible instance of data for comparison (payload = single clothing item)
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (d) => d._id === newItem._id
      );
      //update cartItems as needed
      const cartItems = existingItem
        ? state.cart.cartItems.map( cartItem => (
              existingItem._id === cartItem._id 
                ? newItem
                : cartItem
            )
          )
        : [...state.cart.cartItems, newItem];
      //save cart data to client localstorage for UX
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      //return new state object with updated cartItems array
      return { ...state, cart: { ...state.cart, cartItems } };

    case 'CART_REMOVE_ITEM': {
      //return array with all cart items minus removed item
      const cartItems = state.cart.cartItems.filter( 
        cartItem => cartItem._id !== action.payload._id
      );
      //save cart data to client localstorage for UX
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return {
        ...state,
        cart: {...state.cart, cartItems}
      }
    }

    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
