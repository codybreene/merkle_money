import { connect } from "react-redux";
import Txns from './txns'
import { fetchTxns } from "../../actions/txn_actions";
import { fetchCryptos } from "../../actions/crypto_actions";

const mSTP = ({entities}) => ({
  txns: entities.recentTxns,
  currencies: entities.currencies
})

const mDTP = (dispatch) => ({
  fetchTxns: () => dispatch(fetchTxns()),
  fetchCryptos: () => dispatch(fetchCryptos())
})

export default connect(mSTP, mDTP)(Txns)
