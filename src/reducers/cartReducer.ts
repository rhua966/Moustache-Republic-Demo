import { State, Action, CartItem } from '../models/types';

const initialState: State = {
  cart: [],
  totalPrice: 0,
  totalAmount: 0
}

export const cartReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "ADD":
      // console.log(state)
      // console.log(action)
      let alreadyInCart = state.cart.some(
        (cartItem: CartItem) => cartItem.key === action.item.key
      );
      if (alreadyInCart) {
        return {
          cart: state.cart.map((cartItem: CartItem) =>
            cartItem.key === action.item.key
              ? { ...cartItem, amount: cartItem.amount + action.item.amount }
              : cartItem
          ),
          totalAmount: state.totalAmount + action.item.amount,
          totalPrice: state.totalPrice + action.item.price,
        };
      }
      return {
        cart: [...state.cart, action.item],
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + action.item.price,
      };
    
    case "REMOVE":
      return {
        cart: state.cart.filter((item) => item.key !== action.item.key),
        totalAmount: state.totalAmount - 1,
        totalPrice: state.totalPrice - action.item.price,
      };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}