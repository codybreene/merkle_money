import {
    RECEIVE_CRYPTOS,
} from '../actions/crypto_actions';

export const cryptoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CRYPTOS:
            Object.values(action.cryptos).map(crypto => {
                nextState[crypto.symbol] = crypto
            })
            return nextState;
        default:
            return oldState;
    }
}
