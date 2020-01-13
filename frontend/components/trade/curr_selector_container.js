import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import selectAvailableCryptos from  '../../reducers/selectors'
import CurrSelector from './curr_selector';
import { fetchCryptos } from '../../actions/crypto_actions';

const mapStateToProps = ({ entities, session }) => ({
    currencies: entities.currencies,
    userId: session.id,
    formType: 'selectCurrency'
})

const mapDispatchToProps = (dispatch) => ({
    openModal: (formType) => dispatch(openModal(formType)),
    fetchCryptos: () => dispatch(fetchCryptos())
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrSelector)