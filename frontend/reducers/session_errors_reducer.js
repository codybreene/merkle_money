import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS,
    CLEAR_ERRORS
} from '../actions/session_actions'

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState.session = [];
            return nextState;
        case RECEIVE_ERRORS:
            nextState = action.errors;
            return nextState;
        case CLEAR_ERRORS:
            // debugger;
            nextState = [];
            return nextState;
            // debugger;
        default:
            return state;
    }
}

export default sessionErrorsReducer;