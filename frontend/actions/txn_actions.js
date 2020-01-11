import * as TxnAPIUtil from '../util/txn_api_util';

// action constant

export const RECEIVE_TXN = "RECEIVE_TXN";

// regular action creator

export const receiveTxn = (txn) => {
    return {
    type: RECEIVE_TXN,
    txn}
}

// thunk action creator

export const createTxn = (txn) => (dispatch) => (
    TxnAPIUtil.createTxn(txn)
        .then( (txn) => dispatch(receiveTxn(txn)))
)

