import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { createTxn } from '../../actions/txn_actions';
import { createWallet } from '../../actions/wallet_actions';

const mapStateToProps = ({ errors, session, entities }) => ({
    errors: errors.session,
    userId: session.id,
    wallets: entities.wallets
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  createTxn: txn => dispatch(createTxn(txn)),
  createWallet: wallet => dispatch(createWallet(wallet))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
