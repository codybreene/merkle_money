import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import { cryptoReducer } from './crypto_reducer';
import { txnReducer } from './txn_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    currencies: cryptoReducer,
    recent_txns: txnReducer,
})

export default entitiesReducer;

