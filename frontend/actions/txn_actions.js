import * as TxnAPIUtil from '../util/txn_api_util';

// action constant

export const RECEIVE_TXN = "RECEIVE_TXN";
export const RECEIVE_TXNS = "RECEIVE_TXNS";

// regular action creator

const receiveTxn = (txn) => {
    return {
    type: RECEIVE_TXN,
    txn}
}

const receiveTxns = (txns) => {
    return {
    type: RECEIVE_TXNS,
    txns}
}

// thunk action creator

export const fetchTxns = () => (dispatch) => (
    TxnAPIUtil.fetchTxns()
        .then( (txns) => dispatch(receiveTxns(txns)))
)

export const createTxn = (txn) => (dispatch) => (
    TxnAPIUtil.createTxn(txn)
        .then( (txn) => dispatch(receiveTxn(txn)))
)

