import { useState, useEffect } from 'react';
import inicialState from '../initialState';

const useInicialState = () => {
  const [state, setState] = useState(inicialState);

  const addToCart = (payload) => {
    setState({ ...state, cart: [...state.cart, payload] });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return { addToCart, removeFromCart, addToBuyer, addNewOrder, state };
};

export default useInicialState;
