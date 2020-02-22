import React from 'react';
import { TxnItem } from '../dashboard/txn_item';

class Txns extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTxns()
    this.props.fetchCryptos()
  }

  formatDate(createdAt) {
    const dateTime = new Date(createdAt)
    const month = dateTime.toLocaleString('default', { month: 'long' })
    const day = dateTime.getDate()
    return [month, day]
  }

  formatTxns() {
    const { txns, currencies } = this.props
    const formattedTxns = []
    Object.values(txns).forEach(txn => {
      formattedTxns.push(
        {
          "date": this.formatDate(txn.created_at),
          "symbol": txn.symbol,
          "name": currencies[txn.symbol].name,
          "amtCrypto": txn.amount,
          "amtUsd": currencies[txn.symbol].current_price * txn.amount,
          "logo": currencies[txn.symbol].image
        }
      )
    })
    return formattedTxns
  }

  render() {
    if (
      !Object.entries(this.props.txns).length ||
      !Object.entries(this.props.currencies).length
    )
      return null;
    return (
      <div className="wallet-content-container">
        <div>
          <h2 className="portfolio-header">Recent Transactions</h2>
        </div>
        <div>
          <div className="wallet-table-container">
            <table className="wallet-table">
              <tbody>
                {this.formatTxns().map((txn, index) => (
                  <TxnItem
                    key={index}
                    id={index}
                    month={txn.date[0]}
                    day={txn.date[1]}
                    symbol={txn.symbol}
                    name={txn.name}
                    action={txn.amtCrypto > 0 ? "Bought" : "Sold"}
                    amtCrypto={txn.amtCrypto}
                    amtDollar={txn.amtUsd}
                    logo={txn.logo}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Txns
