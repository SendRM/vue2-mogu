import { addCounter, addToCart } from './mutation-types';

export default {
  [addCounter](state, payload) {
    payload.counter++;
  },
  [addToCart](state, payload) {
    payload.checked = true;
    payload.counter = 1;
    state.cartList.push(payload);
  }
}