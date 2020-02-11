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
        <div className="asset-table-cont">
          <table className="asset-table">
            <thead >
              <tr className="asset-table-header">
                <th>
                  <div>
                    <label>#</label>
                  </div>
                </th>
                <th className="asset-col-mid">
                  <div>
                    <label>
                      <span>Name</span>
                    </label>
                  </div>
                </th>
                <th className="asset-col-mid">
                  <div>
                    <label>
                      <span>Price</span> 
                    </label>
                  </div>
                </th>
                <th className="asset-col-mid">
                  <div>
                    <label>
                      <span>Change</span>
                    </label>
                  </div>
                </th>
                <th className="asset-col-mid">
                  <div>
                    <label>
                      <span>Chart</span>
                    </label>
                  </div>
                </th>
                <th>
                  <div>
                    <label>
                      <span>Trade</span>
                    </label>
                  </div>
                </th>
              </tr>
            </thead>
              <tbody>
                {cryptos.map((crypto, index) => (
                  <CryptoDetail key={index} id={index} crypto={crypto}/>
                ))}
              </tbody>
          </table >
        </div>
    )
      }
    }
  }

  export default PricesTrunc
