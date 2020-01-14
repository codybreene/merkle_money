import React from 'react';
import { connect } from 'react-redux';
import OrderForm from './order_form';
import { createTxn } from '../../actions/txn_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { setCurrency } from '../../actions/ set_currency_actions';
import { fetchCryptos, fetchBitcoin } from '../../actions/crypto_actions';

const mapStateToProps = ({session, ui, entities}) => ({
    userId: session.id,
    selectedCurrency: ui.selectedCurrency,
    currencies: entities.currencies,
    defaultCurrency: entities.defaultCurrency,
    formType: 'buy'
})

const mapDispatchToProps = (dispatch) => ({
    createTxn: (txn) => dispatch(createTxn(txn)),
    openModal: (formType) => dispatch(openModal(formType)),
    setCurrency: (currency) => dispatch(setCurrency(currency)),
    fetchCryptos: () => dispatch(fetchCryptos()),
    fetchBitcoin: () => dispatch(fetchBitcoin())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)

