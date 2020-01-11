import React from 'react'

class OrderForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            amount: '',
            currency: 'Bitcoin',
            method: 'USD Wallet'
        }
    }

    updateTxn(field) {
        return (e) => {
            this.updateInputSize()
            this.checkAmt()
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    updateInputSize() {
        // debugger;
        if ($('.amt-float').val().length === 0) {
            $('.amt-float').css('width', 40)
        } else {
            const newWidth = ($('.amt-float').val().length)
            $('.amt-float').css('width', 40*newWidth)
        }
    }

    checkAmt() {
        return (e) => {
            debugger;
            if ($('.amt-float').val() > 9999
                && e.keyCode !== 46 // keycode for delete
                && e.keyCode !== 8 // keycode for backspace
            ) {
                console.log("testing")
                e.preventDefault();
                this.renderErrors()
                $('.amt-float').val(this.state.amount);
            }
        }
    }

    renderErrors() {
        //to render errors
    }

    render() {
        return(
            <div className="order-form-container">
                <div className="tabs">
                    <div className="buy-tab" onClick={() => this.props.openModal('buy')}>Buy</div>
                    <div className="sell-tab" onClick={() => this.props.openModal('sell')}>Sell</div>
                </div>
                <form className="order-form">
                    <div className="amt-container">
                        <span className="dollar-sign">$</span>
                        <span className="amt-wrapper">
                            <input 
                                className="amt-float" 
                                type="numeric" 
                                placeholder="0" 
                                onChange={this.updateTxn('amount')}
                                onKeyDown={this.checkAmt()}
                                value={this.state.amount}
                            />
                        </span>
                    </div>
                    <div className="modal-options">
                        <div className="curr-selector">Currency selection to go here</div>
                        <div className="pmnt-method">Method of payment to go here</div>
                        <button className="txn-btn" onClick={this.props.createTxn}>{this.props.formType} {this.state.currency}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default OrderForm;