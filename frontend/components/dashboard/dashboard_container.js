import { connect } from 'react-redux';
import Dashboard from './dashboard'
import { fetchWallets } from '../../actions/wallet_actions';
import { fetchTxns } from '../../actions/txn_actions';

const mapStateToProps = ({entities, session}) => ({
    userId: session.id,
    wallets: entities.wallets,
    txns: entities.recentTxns
})

const mapDispatchToProps = (dispatch) => ({
    fetchWallets: () => dispatch(fetchWallets()),
    fetchTxns: () => dispatch(fetchTxns())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)