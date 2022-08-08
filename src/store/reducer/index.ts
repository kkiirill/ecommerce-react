import { handleWishlist } from './handleWishlist';
import { combineReducers } from 'redux';
import { handleCart } from './handleCart';
  
export const rootReducers = combineReducers({
  handleCart,
  handleWishlist,
})