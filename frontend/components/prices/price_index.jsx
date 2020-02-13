import React from "react";
import CryptoDetail from "../splash/crypto_detail";

class Prices extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCryptos();
  }

  render() {
    const cryptos = Object.values(this.props.currencies);
    if (this.props === undefined) {
      return null;
    } else {
      return (
        <div className="asset-table-cont">
          <table className="asset-table">
            <thead>
              <tr className="asset-table-header">
                <th className="asset-col-left">
                  <div className="asset-col-inner">
                    <label>#</label>
                  </div>
                </th>
                <th className="asset-col-mid">
                  <div className="asset-col-inner">
                    <label>
                      <span>Name</span>
                    </label>
                  </div>
                </th>
                <th className="asset-col-mid">
                  <div className="asset-col-inner">
                    <label>
                      <span>Price</span>
                    </label>
                  </div>
                </th>
                <th className="asset-col-mid">
                  <div className="asset-col-inner">
                    <label>
                      <span>Change</span>
                    </label>
                  </div>
                </th>
                <th className="asset-col-mid">
                  <div className="asset-col-inner">
                    <label>
                      <span>Chart</span>
                    </label>
                  </div>
                </th>
                <th className="asset-col-right">
                  <div className="asset-col-inner">
                    <label>
                      <span>Trade</span>
                    </label>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {cryptos.map((crypto, index) => (
                <CryptoDetail key={index} id={index} crypto={crypto} />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Prices;
