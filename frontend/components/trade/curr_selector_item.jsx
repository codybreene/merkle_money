import React from 'react';

class CurrSelectorItem extends React.Component { 
    constructor(props) {
        super(props)
    }

    currSelectorHandler() {
        return () => {
            this.props.openModal('buy');
            this.props.setCurrency(this.props.currency)
        }
    }

    render() {
        const {currency} = this.props
        const capSymbol = currency.symbol.toUpperCase()
        return (
            <li className="curr-item" onClick={this.currSelectorHandler()}>
                <img className="curr-logo" src={`${currency.image}`} alt=""/>
                <div className="curr-details">
                    <div>{currency.name}</div>
                    <div>{capSymbol}</div>
                </div>
            </li>
        )
    }
}

export default CurrSelectorItem
