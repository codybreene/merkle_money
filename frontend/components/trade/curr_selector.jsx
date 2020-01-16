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
        if (Object.keys(currencies).length === 0) {
            return ''
        } else {
            const availableCurrencies = selectAvailableCryptos(currencies)
            return (
                <div className="currency-list">
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