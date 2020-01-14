import { SET_CURRENCY } from '../actions/ set_currency_actions';
import { RECEIVE_BITCOIN } from '../actions/crypto_actions';

const setCurrencyReducer = (state = null, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return action.currency;
        case RECEIVE_BITCOIN:
            return action.bitcoin[0];
        default:
            return state;
    }
}

export default setCurrencyReducer;
