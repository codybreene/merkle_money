import React from 'react'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="dashboard-container">
                <div className="wallets-container">

                </div>
                <div className="recent-txns-container">

                </div>
            </div>
        )
    }
}

export default Dashboard;