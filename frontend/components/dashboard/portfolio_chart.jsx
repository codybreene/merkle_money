import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.getUsdBalances = this.getUsdBalances.bind(this)
  }

  componentDidMount() {
    console.log("component did mount")
    this.props.fetchCryptos()
    this.props.fetchWallets()
  }

  getUsdBalances() {
    console.log("get usd balances");
    const {wallets, currencies} = this.props
    const usdBalances = {}
    Object.values(wallets).forEach(wallet => {
      usdBalances[wallet.currency] = currencies[wallet.currency].current_price * wallet.balance
    })
    return usdBalances
  }

  render() {
    if (
      !Object.entries(this.props.wallets).length ||
      !Object.entries(this.props.currencies).length
    )
      return null;
    // if(this.props.wallets == null || this.props.currencies == null) return null
    console.log(this.getUsdBalances())
      const options = {
        series: [
          {
            name: "Profit",
            data: [10, 20, 33, 27, 37, 66, 78]
          }
        ]
      };
      return (
        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      )
    }
};

export default Chart
