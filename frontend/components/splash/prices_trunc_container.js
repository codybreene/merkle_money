import { connect } from 'react-redux';
import { fetchCryptos } from '../../actions/crypto_actions';
import PricesTrunc from './prices_trunc'

const mapStateToProps = ({ entities }) => ({
  currencies: entities.currencies,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCryptos: () => dispatch(fetchCryptos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PricesTrunc)