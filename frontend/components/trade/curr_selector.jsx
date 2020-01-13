import React from 'react';
import CurrSelectorItem from './curr_selector_item';
// import { fetchCryptos } from '../../actions/crypto_actions';
import selectAvailableCryptos from '../../reducers/selectors';

class CurrSelector extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCryptos()
    }

    render() {
        const {currencies} = this.props
        if (Object.keys(currencies).length === 0) {
            console.log("no currencies")
            return <h1>no currencies to speak of...</h1>;
        } else {
                return (
                    <ul>
                        {Object.values(currencies).map((currency, i) => {
                            return <CurrSelectorItem key={i} currency={currency}/>
                        })}
                    </ul>
                    )
        }
    }
}

export default CurrSelector