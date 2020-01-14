import React from 'react';
import { connect } from 'react-redux';
import OrderForm from './order_form';
import { createTxn } from '../../actions/txn_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchBitcoin } from '../../actions/crypto_actions';

const mapStateToProps = ({session, ui}) => ({
    userId: session.id,
    selectedCurrency: ui.selectedCurrency,
    formType: 'sell'
})

const mapDispatchToProps = (dispatch) => ({
    createTxn: (txn) => dispatch(createTxn(txn)),
    openModal: (formType) => dispatch(openModal(formType)),
    setCurrency: (currency) => dispatch(setCurrency(currency)),
    fetchCryptos: () => dispatch(fetchCryptos()),
    fetchBitcoin: () => dispatch(fetchBitcoin())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)