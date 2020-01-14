import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import { cryptoReducer } from './crypto_reducer';
import { txnReducer } from './txn_reducer';
import { defaultCryptoReducer } from './default_crypto_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    currencies: cryptoReducer,
    recent_txns: txnReducer,
    defaultCurrency: defaultCryptoReducer
})

export default entitiesReducer;

