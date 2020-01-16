import React from 'react';
import { connect } from 'react-redux';
import OrderForm from './order_form';
import { createTxn } from '../../actions/txn_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { setCurrency } from '../../actions/ set_currency_actions';
import { fetchCryptos, fetchBitcoin } from '../../actions/crypto_actions';
import { fetchWallets } from '../../actions/wallet_actions';
import { selectCurrWallet } from '../../reducers/selectors';
import { setCurrentOrder } from '../../actions/current_order_actions';

const mapStateToProps = ({session, ui, entities}) => ({
    userId: session.id,
    selectedCurrency: ui.selectedCurrency,
    currencies: entities.currencies,
    defaultCurrency: entities.defaultCurrency,
    wallets: entities.wallets,
    selectCurrWallet: selectCurrWallet(entities.wallets, ui.selectedCurrency),
    defaultOrder: ui.currentOrder,
    formType: 'buy'
})

const mapDispatchToProps = (dispatch) => ({
    createTxn: (txn) => dispatch(createTxn(txn)),
    openModal: (formType) => dispatch(openModal(formType)),
    setCurrency: (currency) => dispatch(setCurrency(currency)),
    fetchCryptos: () => dispatch(fetchCryptos()),
    fetchBitcoin: () => dispatch(fetchBitcoin()),
    fetchWallets: () => dispatch(fetchWallets()),
    setCurrentOrder: (order) => dispatch(setCurrentOrder(order))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)

