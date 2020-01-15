import { connect } from 'react-redux'
import { createTxn } from '../../actions/txn_actions'
import PreviewOrder from './preview_order';


const mapStateToProps = ({ui, session}) => ({
    userId: session.id,
    selectedCurrency: ui.selectedCurrency
})

const mapDispatchToProps = (dispatch) => ({
    createTxn: (txn) => dispatch(createTxn(txn)),
    createWallet: (wallet) => dispatch(createWallet(wallet))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreviewOrder);

