import {CartActionTypes} from './cart.types';
import {addItemToCart, removeItemFromCart, setOrderID} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  orderID: null,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.SET_ORDER_ID:
      return {
        ...state,
        orderID: action.payload
      }
    case CartActionTypes.EMPTY_CART:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default cartReducer;
