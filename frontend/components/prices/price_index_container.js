import { connect } from "react-redux";
import { fetchCryptos } from "../../actions/crypto_actions";
import Prices from "./price_index";

const mapStateToProps = ({ entities }) => ({
  currencies: entities.currencies
});

const mapDispatchToProps = dispatch => ({
  fetchCryptos: () => dispatch(fetchCryptos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Prices);
