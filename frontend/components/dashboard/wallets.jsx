import React from 'react'

class Wallets extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWallets();
  }

  render() {
    const wallets = Object.values(this.props.wallets)
    if(this.props === undefined) {
      return null
    }
    return (
      <div>
        <div className="wallets-container">
          <ul>
            {wallets.map(wallet => {
              return (
                <li>
                  {wallet.currency}
                  {wallet.balance}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Wallets;