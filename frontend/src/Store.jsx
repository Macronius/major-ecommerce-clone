//NOTE: React Context needs a store
import { createContext, useReducer } from 'react';

//value contains current state in the context, and the dispatch to update the state

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
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

      //  update cartItems as needed
      const cartItems = existingItem
        ? state.cart.cartItems.map((d) =>
            d._id === existingItem._id ? newItem : d
          )
        : [...state.cart.cartItems, newItem];

      //  return new state object with updated cartItems array
      return { ...state, cart: { ...state.cart, cartItems } };

    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
