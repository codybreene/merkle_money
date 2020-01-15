import { RECEIVE_WALLETS, RECEIVE_WALLET } from '../actions/wallet_actions';


const walletsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_WALLETS:
            Object.values(action.wallets).map(wallet => {
                nextState[wallet.currency] = wallet
            })
            return nextState;
        case RECEIVE_WALLET:
            nextState[action.wallet.currency] = action.wallet
            return nextState;
        default:
            return oldState
    }
}

export default walletsReducer;
