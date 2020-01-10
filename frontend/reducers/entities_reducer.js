import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import { cryptoReducer } from './crypto_errors_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    currencies: cryptoReducer
})

export default entitiesReducer;

