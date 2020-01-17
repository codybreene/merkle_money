import React from 'react';

class PreviewOrder extends React.Component {
    constructor(props) {
        super(props)
        //revisit whether you need local state here
        this.state = {
            type: 'preview',
            amount: '',
            currency: this.props.selectedCurrency,
            method: 'USD Wallet'
        }
    }

    handleSubmit() {
        // exec
        return(e) => {
            this.handleWallet()
            this.toggleConfirmation();
        }
    }

    executeTxn() {
        const {currentOrder, createTxn, selectCurrWallet} = this.props;
        const txn = {
            wallet_id: selectCurrWallet.id,
            amount: currentOrder.amount
        }
        createTxn(txn)
    }

    handleWallet() {
        const {currentOrder, selectedCurrency, userId, createWallet} = this.props;
        if(currentOrder.wallet_id === undefined) {
            const wallet = {
                user_id: userId,
                currency: selectedCurrency.symbol,
                balance: currentOrder.amount
            }
            createWallet(wallet)
                .then(() => this.executeTxn())
        } else {
            this.updateWallet()
                
        }
    }

    updateWallet() {
        const {
            currentOrder, 
            selectedCurrency, 
            userId, 
            updateWallet,
            selectCurrWallet
        } = this.props;
        const wallet = {
            id: selectCurrWallet.id,
            user_id: userId,
            currency: selectedCurrency.symbol,
            balance: (
                parseFloat(selectCurrWallet.balance) + parseFloat(currentOrder.amount)
            ).toFixed(6)
        };
        updateWallet(wallet)
            .then(() => this.executeTxn())
    }

    toggleConfirmation() {
        if (this.state.type === 'preview') {
            this.setState({
                type: 'confirmation'
            })
        }
    }

    render() {
        const wallBalance = this.props.selectCurrWallet ?  this.props.selectCurrWallet.balance : 0.00
        const amount = this.props.currentOrder.amount;
        const amountUsd = this.props.currentOrder.amountUsd
        const symbol = this.props.selectedCurrency.symbol.toUpperCase();
        const price = this.props.selectedCurrency.current_price
        const type = this.props.currentOrder.type
        const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1)
        const gerund = this.props.currentOrder.type + "ing"

        if (this.state.type === 'preview') {
        return (
            <div className="preview-container">
                    <div className="preview-content">
                        <div className="preview-header">
                            <div className="back-btn-container" onClick={() => this.props.openModal('buy')}>
                            <div className="back-btn">{String.fromCharCode(8592)}</div>
                            </div>
                            <div className="preview-header-title">You are {gerund}</div>
                        </div>
                        <div className="preview-data">
                        <h1 className="preview-crypto-amt">{Math.abs(amount)} {symbol}</h1>
                            <div>
                                <div>Pay with</div> 
                                <div>{this.state.method}</div> 
                            </div>
                            <div>
                                <div>Price</div>
                                <div>${price} / {symbol}</div>
                            </div>
                            <div>
                                <div>Total</div>
                                <div>${amountUsd*1.00}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <button className="txn-btn" onClick={this.handleSubmit()}>{typeCapitalized} now</button>
                    </div>
                <div className="order-footer">
                    <p>{symbol} balance</p>
                    <div className="balance-conversion">
                        <p>{wallBalance} {symbol}</p>
                        <p className="balance-usd">= ${(wallBalance * price).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        )} else {
            return (
                    <div className="confirmation-container">
                        <div className="checkmark-container">{}</div>
                    <h3>Your order was submitted</h3>
                    <p>We will send you an email when your order status updates.</p>
                    <button className="order-done-btn" onClick={() => this.props.openModal('buy')}>Done</button>
                    <div className="order-footer">
                        <p>{symbol} balance</p>
                        <div className="balance-conversion">
                            <p>{wallBalance} {symbol}</p>
                            <p className="balance-usd">= ${(wallBalance * price).toFixed(2)}</p>
                        </div>
                    </div>
                    </div>
            )
        }
    }
}

export default PreviewOrder;