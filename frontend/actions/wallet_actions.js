import * as WalletAPIUtil from '../util/wallet_api_util';

// action constant

export const RECEIVE_WALLETS = "RECEIVE_WALLETS";
export const RECEIVE_WALLET = "RECEIVE_WALLET";

// regular action creator

const receiveWallets = (wallets) => {
    return {
        type: RECEIVE_WALLETS,
        wallets
    }
}

const receiveWallet = (wallet) => ({
    type: RECEIVE_WALLET,
    wallet
})

// thunk action creator

export const createWallet = (wallet) => (dispatch) => (
    WalletAPIUtil.createWallet(wallet)
        .then( (wallet) => dispatch(receiveWallet(wallet)))
)

export const fetchWallets = () => (dispatch) => (
    WalletAPIUtil.fetchWallets()
        .then((wallets) => dispatch(receiveWallets(wallets)))
)

export const updateWallet = (walletId) => (dispatch) => (
    WalletAPIUtil.updateWallet(walletId)
        .then( (wallet) => dispatch(receiveWallet(wallet)) )
)