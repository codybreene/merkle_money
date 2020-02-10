import {
    RECEIVE_TXN,
    RECEIVE_TXNS
} from '../actions/txn_actions';

export const txnReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_TXNS:
            nextState = action.txns
            return nextState;
        case RECEIVE_TXN:
            nextState[action.txn.id] = action.txn
            return nextState;
        default:
            return oldState;
    }
}
