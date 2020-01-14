import {
    RECEIVE_BITCOIN,
    SET_CURRENCY
} from '../actions/crypto_actions';

export const defaultCryptoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_BITCOIN:
            return action.bitcoin
        case SET_CURRENCY:
            return action.currency
        default:
            return oldState;
    }
}