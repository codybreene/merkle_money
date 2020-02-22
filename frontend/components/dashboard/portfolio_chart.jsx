import React from 'react';
import { Wallets } from "./wallets";
import { Redirect } from 'react-router-dom';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.getUsdBalances = this.getUsdBalances.bind(this);
    this.getLogos = this.getLogos.bind(this);
  }

  componentDidMount() {
    this.props.fetchCryptos()
    this.props.fetchWallets()
  }

  getTotal() {
    const {wallets, currencies} = this.props
    let total = 0
    Object.values(wallets).forEach(wallet => {
      total += currencies[wallet.currency].current_price*wallet.balance
    })
    return total.toFixed(2)
  }

  getLogos() {
    const {currencies} = this.props
    const logos = {}
    Object.values(currencies).forEach(currency => {
      logos[currency.symbol] = {
        logo: currency.image,
        name: currency.name
      }
    })
    return logos
  }

  getUsdBalances() {
    const {wallets, currencies} = this.props
    const usdBalances = []
    Object.values(wallets).forEach(wallet => {
      usdBalances.push(
        {
          "name": wallet.currency,
          "value": currencies[wallet.currency].current_price*wallet.balance
        }
      )
    })
    return usdBalances
  }

  render() {
    //wait for async calls
    if (
      !Object.entries(this.props.wallets).length ||
      !Object.entries(this.props.currencies).length
    ) return null;

    return (
      <div>
        <div className="portfolio-balance">
          <span>Portfolio Balance:</span>
          <span className="portfolio-total">
            {`${this.getTotal().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          </span>
        </div>
        <div>
          <Wallets 
            balances={this.getUsdBalances()} 
            wallets={this.props.wallets}
            logos={this.getLogos()}
            total={this.getTotal()} />
        </div>
      </div>
    );
    }
};

export default Chart
