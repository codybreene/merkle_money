import React from 'react'
import { fetchCryptos } from '../../actions/crypto_actions';

class OrderForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            amount: '',
            currency: 'Bitcoin',
            method: 'USD Wallet'
        }
        this.checkValidAmt = this.checkValidAmt.bind(this);
    }

    componentDidMount() {
        fetchCryptos();
    }

    handleSubmit() {
        return (e) => {
            e.preventDefault();
        }
    }

    updateTxn(field) {
        console.log(this.state)
        return (e) => {
            this.updateInputSize()
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

    checkValidAmt() {
        return (e) => {
            if ($('.amt-float').val() > 9999
                && e.keyCode !== 46 // keycode for delete
                && e.keyCode !== 8 // keycode for backspace
            ) {
                console.log("testing")
                e.preventDefault();
                this.renderErrors()
                $('.amt-float').val(this.state.amount);
            }
            else if (
                !(e.keyCode >= 48 && e.keyCode <= 57) // non-numeric
                && e.keyCode !== 46 // keycode for delete
                && e.keyCode !== 8 // keycode for backspace
             ) {
                e.preventDefault()
                this.renderErrors()
            }
        }
    }

    renderErrors() {
        console.log("this should render errors when I write it...")
        return null
    }

    render() {
        return(
            <div className="order-form-container">
                <div className="tabs">
                    <div className="buy-tab" onClick={() => this.props.openModal('buy')}>Buy</div>
                    <div className="sell-tab" onClick={() => this.props.openModal('sell')}>Sell</div>
                </div>
                <div className="order-form">
                    <div className="amt-container">
                        <span className="dollar-sign">$</span>
                        <span className="amt-wrapper">
                            <input 
                                className="amt-float" 
                                placeholder="0" 
                                onKeyDown={this.checkValidAmt()}
                                onChange={this.updateTxn('amount')}
                                value={this.state.amount}
                            />
                        </span>
                    </div>
                    <div className="modal-options">
                        <div className="opt-selectors">
                            <div 
                                className="curr-selector" 
                                onClick={() => this.props.openModal('selectCurrency')}>
                                Currency selection to go here
                            </div>
                            <div className="pmnt-method">Method of payment to go here</div>
                        </div>
                        <input type="submit" className="txn-btn" value={this.props.formType}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderForm;