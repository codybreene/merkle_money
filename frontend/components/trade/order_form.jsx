import React from 'react'

class OrderForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            amount: 0.0,
            currency: 'Bitcoin',
            method: 'USD Wallet'
        }
    }

    render() {
        return(
            <div className="order-form-container">
                <div className="tabs">
                    <button>{this.props.formType}</button>
                    {this.props.otherForm}
                <form className="order-form">
                    <button onClick={this.props.createTxn}>{this.props.formType} {this.state.currency}</button>
                </form>
            </div>
            </div>
        )
    }
}

export default OrderForm;