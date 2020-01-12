import { connect } from 'react-redux';
import { fetchCryptos } from '../../actions/crypto_actions';

const mapStateToProps = ({ entities }) => ({
    currencies: selectAvailableCryptos(entities.currencies)
})

const mapDispatchToProps = (dispatch)({

})