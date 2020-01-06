import * as AuthAPIUtil from '../util/session_api_util'

// action type constants 

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

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

// thunk action creators

export const signup = (user) => (dispatch) => (
    AuthAPIUtil.signup(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
)

export const login = (user) => (dispatch) => (
    AuthAPIUtil.login(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
)

export const logout = () => (dispatch) => (
    AuthAPIUtil.logout()
        .then( () => dispatch(logoutCurrentUser()))
)