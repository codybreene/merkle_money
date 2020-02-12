import { RECEIVE_CRYPTO } from "../actions/crypto_actions";

export const priceDataReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CRYPTO:
      nextState = action.prices;
      return nextState;
    default:
      return oldState;
  }
};
