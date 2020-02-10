import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import { cryptoReducer } from './crypto_reducer';
import { txnReducer } from './txn_reducer';
import walletsReducer from './wallets_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    currencies: cryptoReducer,
    wallets: walletsReducer,
    recentTxns: txnReducer,
})

export default entitiesReducer;

