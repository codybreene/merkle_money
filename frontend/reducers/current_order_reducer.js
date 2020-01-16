import { SET_CURRENT_ORDER } from '../actions/current_order_actions';

const initialState = {
    wallet_id: null,
    amount: '',
    type: 'buy'
}

const setCurrentOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_ORDER:
            return action.order;
        default:
            return state;
    }
}

export default setCurrentOrderReducer;