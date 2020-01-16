import React from 'react';
import CurrSelectorItem from './curr_selector_item';
// import { fetchCryptos } from '../../actions/crypto_actions';
import {selectAvailableCryptos} from '../../reducers/selectors';

class CurrSelector extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCryptos()
    }

    render() {
        const {currencies, openModal, setCurrency} = this.props
        const formType = this.props.formType
        if (Object.keys(currencies).length === 0) {
            return ''
        } else {
            const availableCurrencies = selectAvailableCryptos(currencies)
            return (
                <div className="currency-list">
                    <div className="curr-selector-header">
                        <div className="back-btn-container" onClick={() => this.props.openModal(this.props.formType)}>
                            <div>B</div>
                        </div>
                        <span>Select Currency</span>
                    </div>
                    <ul>
                        {Object.values(availableCurrencies).map((currency, i) => {
                            return <CurrSelectorItem 
                                        key={i} 
                                        openModal={openModal} 
                                        currency={currency}
                                        setCurrency={setCurrency}
                                    />
                        })}
                    </ul>
                </div>
                )
        }
    }
}

export default CurrSelector