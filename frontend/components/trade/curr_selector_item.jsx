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
        return (
            <li onClick={this.currSelectorHandler()}>{currency.name}</li>
        )
    }
}

export default CurrSelectorItem
