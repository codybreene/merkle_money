import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BuyOrderContainer from './buy_order_container';
import SellOrderContainer from './sell_order_container';
import CurrSelectorContainer from './curr_selector_container';
import PreviewOrderContainer from './preview_order_container';

const Modal = ({modal, closeModal}) => {

    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'buy':
            component = <BuyOrderContainer />;
            break;
        case 'sell':
            component = <SellOrderContainer />;
            break;
        case 'selectCurrency':
            component = <CurrSelectorContainer />;
            break;
        case 'previewOrder':
            component = <PreviewOrderContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);