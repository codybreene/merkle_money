import { SET_CURRENT_ORDER } from '../actions/current_order_actions';

const setCurrentOrderReducer = (state = null, action) => {
    switch (action.type) {
        case SET_CURRENT_ORDER:
            return action.order;
        default:
            return state;
    }
}

export default setCurrentOrderReducer;