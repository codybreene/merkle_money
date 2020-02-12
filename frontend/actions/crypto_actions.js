import * as CryptoAPIUtil from '../util/cryptocurrencies_api_util'

// action constants

export const RECEIVE_CRYPTO = "RECEIVE_CRYPTO";
export const RECEIVE_BITCOIN = "RECEIVE_BITCOIN";
export const RECEIVE_CRYPTOS = "RECEIVE_CRYPTOS";
export const RECEIVE_CRYPTO_ERRORS = "RECEIVE_ERRORS";

// regular action creators

export const receiveCrypto = (prices) => {
  return {
    type: RECEIVE_CRYPTO,
    prices
}}

export const receiveBitcoin = (bitcoin) => ({
    type: RECEIVE_BITCOIN,
    bitcoin
})

export const receiveCryptos = (cryptos) => {
  return{ 
    type: RECEIVE_CRYPTOS,
    cryptos
  }
}

export const receiveCryptoErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

// thunk action creators

export const fetchCrypto = (crypto) => dispatch => (
  CryptoAPIUtil.fetchCrypto(crypto)
    .then( 
      (prices) => dispatch(receiveCrypto(prices)),
      (errors) => dispatch(receiveErrors(errors))
    )
)

export const fetchBitcoin = () => dispatch => (
  CryptoAPIUtil.fetchBitcoin()
    .then(
        (bitcoin) => dispatch(receiveBitcoin(bitcoin)),
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
