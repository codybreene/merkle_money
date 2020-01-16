import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {selectAvailableCryptos} from  '../../reducers/selectors'
import CurrSelector from './curr_selector';
import { fetchCryptos } from '../../actions/crypto_actions';
import { setCurrency } from '../../actions/ set_currency_actions';
import setCurrentOrderReducer from '../../reducers/current_order_reducer';

const mapStateToProps = ({ entities, session, ui }) => ({
    currencies: entities.currencies,
    userId: session.id,
    formType: ui.currentOrder.type
})

const mapDispatchToProps = (dispatch) => ({
    openModal: (formType) => dispatch(openModal(formType)),
    fetchCryptos: () => dispatch(fetchCryptos()),
    setCurrency: (currency) => dispatch(setCurrency(currency))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrSelector)