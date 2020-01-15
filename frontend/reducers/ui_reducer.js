import { combineReducers } from 'redux';
import modal from './modal_reducer';
import setCurrencyReducer from './set_currency_reducer'
import setCurrentOrderReducer from './current_order_reducer';

export default combineReducers({
    modal: modal,
    selectedCurrency: setCurrencyReducer,
    currentOrder: setCurrentOrderReducer,
});
