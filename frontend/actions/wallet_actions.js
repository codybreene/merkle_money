import * as WalletAPIUtil from '../util/wallet_api_util';

// action constant

export const RECEIVE_WALLETS = "RECEIVE_WALLETS";

// regular action creator

export const receiveWallets = (wallets) => {
    return {
        type: RECEIVE_WALLETS,
        wallets
    }
}

// thunk action creator

export const fetchWallets = () => (dispatch) => (
    WalletAPIUtil.fetchWallets()
        .then((wallets) => dispatch(receiveWallets(wallets)))
)