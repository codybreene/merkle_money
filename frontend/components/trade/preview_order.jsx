import React from 'react';

class PreviewOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            amount: '',
            currency: this.props.selectedCurrency,
            method: 'USD Wallet'
        }
    }
    render() {
        return (
            <h1>this is the preview order page</h1>
        )
    }
}

export default PreviewOrder;