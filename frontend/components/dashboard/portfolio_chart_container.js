import { connect } from "react-redux";
import Chart from "./portfolio_chart";
import { fetchWallets } from "../../actions/wallet_actions";
import { fetchCryptos } from '../../actions/crypto_actions';

const mapStateToProps = ({ entities, session }) => ({
  userId: session.id,
  wallets: entities.wallets,
  currencies: entities.currencies
});

const mapDispatchToProps = dispatch => ({
  fetchWallets: () => dispatch(fetchWallets()),
  fetchCryptos: () => dispatch(fetchCryptos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
