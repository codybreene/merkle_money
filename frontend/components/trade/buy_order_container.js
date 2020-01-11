import React from 'react';
import { connect } from 'react-redux';
import OrderForm from './order_form';
import { createTxn } from '../../actions/txn_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({session}) => ({
    userId: session.id,
    formType: 'buy'
})

const mapDispatchToProps = (dispatch) => ({
    createTxn: (txn) => dispatch(createTxn(txn)),
    otherForm: (
        <button onClick={ () => dispatch(openModal('sell'))}>
            Sell
        </button>
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)