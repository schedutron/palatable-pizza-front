import {CartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const setOrderID = orderID => ({
  type: CartActionTypes.SET_ORDER_ID,
  payload: orderID
});

export const emptyCart = () => ({
  type: CartActionTypes.EMPTY_CART,
});
