import React from 'react'
import { fetchCryptos } from '../../actions/crypto_actions';
import { selectCurrWallet } from '../../reducers/selectors';

class OrderForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: this.props.formType,
            amount: '',
            currency: this.props.selectedCurrency,
            currWallet: this.props.selectCurrWallet,
            method: 'USD Wallet'
        }
        this.checkValidAmt = this.checkValidAmt.bind(this);
    }

    componentDidMount() {
        const {fetchBitcoin, fetchWallets, fetchCryptos} = this.props
        if (!this.state.currency && Object.values(this.props.wallets).length === 0) {
                fetchCryptos();
                fetchBitcoin().then(() => fetchWallets());
        }
    }

    convertToUsd(amt, price) {
        return (amt*price).toFixed(2)
    }

    convertToCrypto(amt, price) {
        //to convert USD to crypto (for purchase)
        return (amt / price).toFixed(6)
    }

    handleSubmit() {
        return (e) => {
            e.preventDefault();
            this.props.setCurrentOrder(this.getCurrOrder());
            this.props.openModal('previewOrder');
        }
    }

    getCurrOrder() {
        const order = {
            wallet_id: this.props.selectCurrWallet.id,
            currency: this.props.selectedCurrency.symbol,
            amount: this.convertToCrypto(
                this.state.amount, 
                this.props.selectedCurrency.current_price
                )
        }
        return order;
    }

    updateTxn(field) {
        // console.log(this.state)
        return (e) => {
            this.updateInputSize()
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    updateInputSize() {
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
        console.log(this.props.formType)
        // if (this.state.formType === 'buy') {
        //     return null
        // } else if (this.state.formType === 'sell') {
        //     return null
        // } else if (this.state.formType === 'previewBuy') {
        //     return null
        // }

        const currSym = this.props.selectedCurrency ? this.props.selectedCurrency.symbol : null
        const currSymCapitalized = this.props.selectedCurrency ? this.props.selectedCurrency.symbol.toUpperCase() : null
        const wallBalance = Object.values(this.props.selectCurrWallet).length > 0 ? this.props.selectCurrWallet.balance : 0.0
        const currPrice = this.props.currencies[currSym] ? this.props.currencies[currSym].current_price : null
        const costUsd = this.convertToUsd(wallBalance, currPrice)

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
                                {this.props.selectedCurrency ? this.props.selectedCurrency.id : null}
                            </div>
                            <div className="pmnt-method">Method of payment to go here</div>
                        </div>
                        <input 
                            type="submit" 
                            className="txn-btn" 
                            value={this.props.formType} 
                            onClick={this.handleSubmit()}/>
                    </div>
                </div>
                <div className="order-footer">
                    <p>{currSymCapitalized} balance</p>
                    <div className="balance-conversion">
                        <p>{wallBalance} {currSymCapitalized}</p>
                        <p className="balance-usd">= ${costUsd}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderForm;