import * as CryptoAPIUtil from '../util/cryptocurrencies_api_util'

// action constants

export const RECEIVE_CRYPTO = "RECEIVE_CRYPTO";
export const RECEIVE_CRYPTOS = "RECEIVE_CRYPTOS";
export const RECEIVE_CRYPTO_ERRORS = "RECEIVE_ERRORS";

// regular action creators

export const receiveCrypto = (crypto) => ({
    type: RECEIVE_CRYPTO,
    crypto
})

export const receiveCryptos = (cryptos) => ({
    type: RECEIVE_CRYPTOS,
    cryptos
})

export const receiveCryptoErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

// thunk action creators

export const fetchCrypto = (crypto) => dispatch => (
    CryptoAPIUtil.fetchCrypto(crypto)
        .then( 
            (crypto) => dispatch(receiveCrypto(crypto)),
            (errors) => dispatch(receiveErrors(errors))
            )
)

export const fetchCryptos = () => dispatch => (
    CryptoAPIUtil.fetchCryptos()
        .then(
            (cryptos) => dispatch(receiveCryptos(cryptos)),
            (errors) => dispatch(receiveCryptoErrors(errors))
        )
)
