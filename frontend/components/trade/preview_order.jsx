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
        if (this.state.type === 'preview') {
        return (
            <div className="preview-container">
                <div className="preview-wrapper">
                    <div className="preview-content">
                        <div className="preview-header">
                            <div className="preview-back-btn" onClick={() => this.props.openModal('buy')}>
                                Back Button
                            </div>
                            <div className="preview-header-title">You are buying</div>
                        </div>
                        <div className="preview-data">
                            <h1 className="preview-cypto-amt">Crypto Amount</h1>
                            <div>
                                <div>Pay with</div> 
                                <div>{this.state.method}</div> 
                            </div>
                            <div>
                                <div>Price</div>
                                <div>{}</div>
                            </div>
                            <div>
                                Purchase
                            </div>
                            <div>
                                Coinbase fee
                            </div>
                            <div>
                                Total
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit()}>Buy now</button>
                    </div>
                </div>
                <div className="preview-footer">

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