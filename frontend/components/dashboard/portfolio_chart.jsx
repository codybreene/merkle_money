import React from 'react';
import { Portfolio } from './pie_chart';
import { Wallets } from "./wallets";

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
    if (
      !Object.entries(this.props.wallets).length ||
      !Object.entries(this.props.currencies).length
    )
      return null;
      const data = this.getUsdBalances()
      return (
        <div>
          <div className="portfolio-balance">
            <span>Portfolio Balance:</span>
            <span>${this.getTotal()}</span>
            <span></span>
          </div>
          <div className="pie-chart">
            <Portfolio data={data} />
          </div>
          <div>
            <Wallets 
              balances={this.getUsdBalances()} 
              wallets={this.props.wallets}
              logos={this.getLogos()} />
          </div>
        </div>
      );
    }
};

export default Chart
