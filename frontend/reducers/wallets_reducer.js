import { RECEIVE_WALLETS } from '../actions/wallet_actions';

const walletsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_WALLETS:
            Object.values(action.wallets).map(wallet => {
                nextState[wallet.id] = wallet
            })
            return nextState;
        default:
            return oldState
    }
}

export default walletsReducer;