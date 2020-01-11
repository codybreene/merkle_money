import {
    RECEIVE_TXN,
} from '../actions/txn_actions';

export const txnReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_TXN:
            nextState[action.txn.id] = action.txn
            return nextState;
        default:
            return oldState;
    }
}
