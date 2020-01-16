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
        debugger
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
        const wallBalance = this.props.selectCurrWallet.balance
        const amount = this.props.currentOrder.amount;
        const amountUsd = this.props.currentOrder.amountUsd
        const symbol = this.props.selectedCurrency.symbol.toUpperCase();
        const price = this.props.selectedCurrency.current_price
        if (this.state.type === 'preview') {
        return (
            <div className="preview-container">
                    <div className="preview-content">
                        <div className="preview-header">
                            <div className="back-btn-container" onClick={() => this.props.openModal('buy')}>
                                <div className="back-btn">Back Button</div>
                            </div>
                            <div className="preview-header-title">You are buying</div>
                        </div>
                        <div className="preview-data">
                        <h1 className="preview-crypto-amt">{amount} {symbol}</h1>
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
                                <div>${amountUsd}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <button className="txn-btn" onClick={this.handleSubmit()}>Buy now</button>
                    </div>
                <div className="order-footer">
                    <p>{symbol} balance</p>
                    <div className="balance-conversion">
                        <p>{amount} {symbol}</p>
                        <p className="balance-usd">= ${(wallBalance * price).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        )} else {
            return (
                <div>
                    <h1>You hit the confirmation page!</h1>
                    <button onClick={() => this.props.openModal('buy')}>Done</button>
                </div>
            )
        }
    }
}

export default PreviewOrder;