import React from 'react'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => this.fetchAssets(), 1000)
    }
    
    fetchAssets() {
        
        this.props.fetchWallets();
        this.props.fetchTxns()
    }

    render() {
        const txns = Object.values(this.props.txns).reverse()
        return(
            <div className="dashboard-container">
                <div className="wallets-container">
                    <ul>
                        {txns.map(txn => {
                        return <li>{`${txn.symbol}, ${txn.amount}, ${txn.created_at}`}</li>
                        })}
                    </ul>
                </div>
                <div className="recent-txns-container">

                </div>
            </div>
        )
    }
}

export default Dashboard;