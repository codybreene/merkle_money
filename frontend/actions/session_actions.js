import * as AuthAPIUtil from '../util/session_api_util'
import { createWallet } from '../actions/wallet_actions';
import { createTxn } from '../actions/txn_actions';

// action type constants 

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"

// regular action creators

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

// thunk action creators

export const signup = (user) => (dispatch) => (
    AuthAPIUtil.signup(user)
      .then(
        (user) => dispatch(receiveCurrentUser(user)),
        (error) => dispatch(receiveErrors(error.responseJSON))
      )
)

export const login = (user) => (dispatch) => (
    AuthAPIUtil.login(user)
        .then(
            (user) => dispatch(receiveCurrentUser(user)),
            (error) => dispatch(receiveErrors(error.responseJSON))
        )
)

export const logout = () => (dispatch) => (
    AuthAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
)