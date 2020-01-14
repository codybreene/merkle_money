import { SET_CURRENCY } from '../actions/ set_currency_actions';

const setCurrencyReducer = (state = null, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return action.currency.name;
        default:
            return "Bitcoin";
    }
}

export default setCurrencyReducer;