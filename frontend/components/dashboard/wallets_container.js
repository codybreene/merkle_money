import { connect } from 'react-redux';
import Wallets from './wallets'
import { fetchWallets } from '../../actions/wallet_actions';

const mapStateToProps = ({entities, session}) => ({
    userId: session.id,
    wallets: entities.wallets
})

const mapDispatchToProps = (dispatch) => ({
    fetchWallets: () => dispatch(fetchWallets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Wallets)