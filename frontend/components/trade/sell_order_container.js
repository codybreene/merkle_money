import React from 'react';
import { connect } from 'react-redux';
import OrderForm from './order_form';
import { createTxn } from '../../actions/txn_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({session}) => ({
    userId: session.id,
    formType: 'sell'
})

const mapDispatchToProps = (dispatch) => ({
    createTxn: (txn) => dispatch(createTxn(txn)),
    openModal: (formType) => dispatch(openModal(formType))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)