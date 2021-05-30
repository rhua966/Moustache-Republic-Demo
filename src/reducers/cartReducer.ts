import { State, Action, CartItem } from '../models/types';

const initialState: State = {
  cart: [],
  totalPrice: 0,
  totalAmount: 0
}

export const cartReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return state;
    case "REMOVE":
      return state;
    case "CLEAR":
      return state;
    default:
      return state;
  }
}