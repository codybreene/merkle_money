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
            <div className="preview-container">
                <div className="preview-wrapper">
                    <div className="preview-content">
                        <div className="preview-header">
                            <div className="preview-back-btn">
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

                    </div>
                </div>
                <div className="preview-footer">

                </div>
            </div>
        )
    }
}

export default PreviewOrder;