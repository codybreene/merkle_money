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
    const usdBalances = []
    Object.values(wallets).forEach(wallet => {
      usdBalances.push(
        {
          "name": wallet.currency,
          "y": currencies[wallet.currency].current_price*wallet.balance
        }
      )
      console.log(usdBalances)
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
      const options = {
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        title: {
          text: "Crypo Assets"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>${point.y:.2f}</b>"
        },
        plotOptions: {
          pie: {
            innerSize: 90,
            depth: 45,
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [
          {
            name: "Crypto Assets",
            data: this.getUsdBalances()
          }
        ]
      };
      return (
        <div>
          <div>
            <span>
              Portfolio Balance:
            </span>
            <span>
              
            </span>
          </div>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      )
    }
};

export default Chart
