import React from 'react';
import { CryptoDetail } from './crypto_detail';

class PricesTrunc extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCryptos()
  }

  render() {
    const cryptos = Object.values(this.props.currencies).slice(0, 4);
    if(this.props === undefined) {
      return null
    } else {
      return (
      <div>
        # Name Price Change Chart Trade
        <ul>
          {cryptos.map((crypto, index) => (
             <CryptoDetail key={index} id={index} crypto={crypto}/>
          ))}
        </ul>
      </div >
    )
      }
    }
  }

  export default PricesTrunc
