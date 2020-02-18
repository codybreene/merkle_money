import { connect } from "react-redux";
import { fetchCryptos } from "../../actions/crypto_actions";
import { setCurrency } from '../../actions/ set_currency_actions';
import { openModal } from '../../actions/modal_actions';
import Prices from "./price_index";

const mapStateToProps = ({ entities, session }) => ({
  currencies: entities.currencies,
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchCryptos: () => dispatch(fetchCryptos()),
  openModal: () => dispatch(openModal('buy')),
  setCurrency: (currency) => dispatch(setCurrency(currency))
});

export default connect(mapStateToProps, mapDispatchToProps)(Prices);
