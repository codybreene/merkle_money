import { connect } from 'react-redux'
import { createTxn } from '../../actions/txn_actions'
import PreviewOrder from './preview_order';
import { selectCurrWallet } from '../../reducers/selectors';
import { createWallet, updateWallet } from '../../actions/wallet_actions';

const mapStateToProps = ({ui, session, entities}) => ({
    currentOrder: ui.currentOrder,
    userId: session.id,
    selectedCurrency: ui.selectedCurrency,
    currencies: entities.currencies,
    defaultCurrency: entities.defaultCurrency,
    wallets: entities.wallets,
    selectCurrWallet: selectCurrWallet(entities.wallets, ui.selectedCurrency),
    formType: 'previewOrder'
})

const mapDispatchToProps = (dispatch) => ({
    createTxn: (txn) => dispatch(createTxn(txn)),
    createWallet: (wallet) => dispatch(createWallet(wallet)),
    updateWallet: (wallet) => dispatch(updateWallet(wallet))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreviewOrder);

